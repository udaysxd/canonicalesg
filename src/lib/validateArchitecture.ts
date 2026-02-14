import { ArchitectureDatasetSchema } from "@/lib/schemas/architectureSchema"
import { CdiIntentRegistrySchema } from "@/lib/schemas/cdiSchema"
import { CmpPackSchema } from "@/lib/schemas/cmpSchema"
import type { ArchitectureDataset } from "@/lib/types/architecture"
import type { CdiIntentRegistry } from "@/lib/types/cdi"
import type { CmpPack } from "@/lib/types/cmp"

// ============================================================
// VALIDATION ERROR
// ============================================================

class ArchitectureValidationError extends Error {
  constructor(message: string) {
    super(`[ArchitectureValidationError] ${message}`)
    this.name = "ArchitectureValidationError"
  }
}

// ============================================================
// CROSS-REFERENCE VALIDATION
// ============================================================

export function validateArchitecture(dataset: ArchitectureDataset): void {
  // Step 1: Validate schema using Zod
  const parseResult = ArchitectureDatasetSchema.safeParse(dataset)
  
  if (!parseResult.success) {
    const issues = parseResult.error.issues.map(
      issue => `${issue.path.join('.')}: ${issue.message}`
    )
    throw new ArchitectureValidationError(
      `Schema validation failed:\n${issues.join('\n')}`
    )
  }

  // Step 2: Extract all element IDs from CERM
  const elementIds = new Set<string>()
  for (const element of dataset.cerm) {
    if (elementIds.has(element.id)) {
      throw new ArchitectureValidationError(
        `Duplicate element ID found: ${element.id}`
      )
    }
    elementIds.add(element.id)
  }

  // Step 3: Validate all relationship targetElements exist
  for (const element of dataset.cerm) {
    for (const relationship of element.permittedRelationships) {
      if (!elementIds.has(relationship.targetElement)) {
        throw new ArchitectureValidationError(
          `Dangling reference: Element ${element.id} has relationship to non-existent element ${relationship.targetElement}`
        )
      }
    }
  }

  // Step 4: Validate no duplicate layer IDs
  const layerIds = new Set<string>()
  for (const layer of dataset.layers) {
    if (layerIds.has(layer.id)) {
      throw new ArchitectureValidationError(
        `Duplicate layer ID found: ${layer.id}`
      )
    }
    layerIds.add(layer.id)
  }

  // Step 5: Validate no duplicate principle IDs
  const principleIds = new Set<string>()
  for (const principle of dataset.principles) {
    if (principleIds.has(principle.id)) {
      throw new ArchitectureValidationError(
        `Duplicate principle ID found: ${principle.id}`
      )
    }
    principleIds.add(principle.id)
  }

  // Step 6: Validate non-empty arrays where required
  for (const element of dataset.cerm) {
    if (element.characteristics.length === 0) {
      throw new ArchitectureValidationError(
        `Element ${element.id} has empty characteristics array`
      )
    }
  }

  for (const layer of dataset.layers) {
    if (layer.responsibilities.length === 0) {
      throw new ArchitectureValidationError(
        `Layer ${layer.id} has empty responsibilities array`
      )
    }
  }

  for (const principle of dataset.principles) {
    if (principle.constraints.length === 0) {
      throw new ArchitectureValidationError(
        `Principle ${principle.id} has empty constraints array`
      )
    }
  }

  // Step 7: Validate version format consistency
  const versionRegex = /^\d+\.\d+(\.\d+)?$/
  
  if (!versionRegex.test(dataset.version)) {
    throw new ArchitectureValidationError(
      `Invalid dataset version format: ${dataset.version}`
    )
  }

  for (const element of dataset.cerm) {
    if (!versionRegex.test(element.version)) {
      throw new ArchitectureValidationError(
        `Invalid version format for element ${element.id}: ${element.version}`
      )
    }
  }

  for (const layer of dataset.layers) {
    if (!versionRegex.test(layer.version)) {
      throw new ArchitectureValidationError(
        `Invalid version format for layer ${layer.id}: ${layer.version}`
      )
    }
  }

  for (const principle of dataset.principles) {
    if (!versionRegex.test(principle.version)) {
      throw new ArchitectureValidationError(
        `Invalid version format for principle ${principle.id}: ${principle.version}`
      )
    }
  }

  // Validation successful
}

// ============================================================
// CDI CROSS-REFERENCE VALIDATION
// ============================================================

export function validateCdiRegistry(
  cdiRegistry: CdiIntentRegistry,
  architectureDataset: ArchitectureDataset
): void {
  // Step 1: Validate schema using Zod
  const parseResult = CdiIntentRegistrySchema.safeParse(cdiRegistry)

  if (!parseResult.success) {
    const issues = parseResult.error.issues.map(
      issue => `${issue.path.join('.')}: ${issue.message}`
    )
    throw new ArchitectureValidationError(
      `CDI Registry schema validation failed:\n${issues.join('\n')}`
    )
  }

  // Step 2: Extract all valid element IDs from CERM
  const validElementIds = new Set<string>()
  for (const element of architectureDataset.cerm) {
    validElementIds.add(element.id)
  }

  // Step 3: Validate all CDI IDs are unique across all domains
  const cdiIds = new Set<string>()
  for (const [domainKey, domain] of Object.entries(cdiRegistry.domains)) {
    for (const intent of domain.intents) {
      if (cdiIds.has(intent.id)) {
        throw new ArchitectureValidationError(
          `Duplicate CDI ID found: ${intent.id}`
        )
      }
      cdiIds.add(intent.id)
    }
  }

  // Step 4: Validate all referenced elements exist in CERM
  for (const [domainKey, domain] of Object.entries(cdiRegistry.domains)) {
    for (const intent of domain.intents) {
      for (const elementId of intent.referencedElements) {
        if (!validElementIds.has(elementId)) {
          throw new ArchitectureValidationError(
            `Invalid CERM reference in CDI ${intent.id}: ${elementId} does not exist in CERM dataset`
          )
        }
      }
    }
  }

  // Step 5: Validate version format
  const versionRegex = /^\d+\.\d+(\.\d+)?$/
  if (!versionRegex.test(cdiRegistry.version)) {
    throw new ArchitectureValidationError(
      `Invalid CDI registry version format: ${cdiRegistry.version}`
    )
  }

  for (const [domainKey, domain] of Object.entries(cdiRegistry.domains)) {
    for (const intent of domain.intents) {
      if (!versionRegex.test(intent.version)) {
        throw new ArchitectureValidationError(
          `Invalid version format for CDI intent ${intent.id}: ${intent.version}`
        )
      }
    }
  }

  // Validation successful
}

// ============================================================
// SSS PRESENTATION LAYER VALIDATION
// ============================================================

import { SssRegistrySchema } from "@/lib/schemas/presentationSchema"
import type { SssRegistry, StructuredStatement } from "@/lib/types/presentation"

export function validateSssRegistry(
  sssRegistry: SssRegistry,
  cdiRegistry: CdiIntentRegistry
): void {
  // Step 1: Validate schema using Zod
  const parseResult = SssRegistrySchema.safeParse(sssRegistry)

  if (!parseResult.success) {
    const issues = parseResult.error.issues.map(
      issue => `${issue.path.join('.')}: ${issue.message}`
    )
    throw new ArchitectureValidationError(
      `SSS Registry schema validation failed:\n${issues.join('\n')}`
    )
  }

  // Step 2: Extract all valid CDI IDs
  const validCdiIds = new Set<string>()
  for (const [domainKey, domain] of Object.entries(cdiRegistry.domains)) {
    for (const intent of domain.intents) {
      validCdiIds.add(intent.id)
    }
  }

  // Step 3: Validate all SSS statement IDs are unique
  const sssIds = new Set<string>()
  for (const statement of sssRegistry.statements) {
    if (sssIds.has(statement.id)) {
      throw new ArchitectureValidationError(
        `Duplicate SSS statement ID found: ${statement.id}`
      )
    }
    sssIds.add(statement.id)
  }

  // Step 4: Validate all field IDs are unique across all statements
  const fieldIds = new Set<string>()
  for (const statement of sssRegistry.statements) {
    for (const field of statement.fields) {
      if (fieldIds.has(field.id)) {
        throw new ArchitectureValidationError(
          `Duplicate SSS field ID found: ${field.id}`
        )
      }
      fieldIds.add(field.id)
    }
  }

  // Step 5: Validate all mapped CDIs exist in registry
  for (const statement of sssRegistry.statements) {
    for (const field of statement.fields) {
      if (!validCdiIds.has(field.mappedCdi)) {
        throw new ArchitectureValidationError(
          `Invalid CDI reference in SSS ${statement.id} field ${field.id}: ${field.mappedCdi} does not exist in CDI registry`
        )
      }
    }
  }

  // Validation successful
}

// ============================================================
// CMP PACK VALIDATION
// ============================================================

export function validateCmpPack(
  cmpPack: CmpPack,
  cdiRegistry: CdiIntentRegistry
): void {
  // Step 1: Validate schema using Zod
  const parseResult = CmpPackSchema.safeParse(cmpPack)

  if (!parseResult.success) {
    const issues = parseResult.error.issues.map(
      issue => `${issue.path.join('.')}: ${issue.message}`
    )
    throw new ArchitectureValidationError(
      `CMP Pack schema validation failed:\n${issues.join('\n')}`
    )
  }

  // Step 2: Extract all valid CDI IDs
  const validCdiIds = new Set<string>()
  for (const [domainKey, domain] of Object.entries(cdiRegistry.domains)) {
    for (const intent of domain.intents) {
      validCdiIds.add(intent.id)
    }
  }

  // Step 3: Validate all CMP mapping IDs are unique
  const mappingIds = new Set<string>()
  for (const mapping of cmpPack.mappings) {
    if (mappingIds.has(mapping.id)) {
      throw new ArchitectureValidationError(
        `Duplicate CMP mapping ID found: ${mapping.id}`
      )
    }
    mappingIds.add(mapping.id)
  }

  // Step 4: Validate all mapped CDIs exist in registry
  for (const mapping of cmpPack.mappings) {
    if (!validCdiIds.has(mapping.mappedCdi)) {
      throw new ArchitectureValidationError(
        `Invalid CDI reference in CMP mapping ${mapping.id}: ${mapping.mappedCdi} does not exist in CDI registry`
      )
    }
  }

  // Step 5: Validate version format
  const versionRegex = /^\d+\.\d+(\.\d+)?$/
  if (!versionRegex.test(cmpPack.version)) {
    throw new ArchitectureValidationError(
      `Invalid CMP pack version format: ${cmpPack.version}`
    )
  }

  for (const mapping of cmpPack.mappings) {
    if (!versionRegex.test(mapping.version)) {
      throw new ArchitectureValidationError(
        `Invalid version format for CMP mapping ${mapping.id}: ${mapping.version}`
      )
    }
  }

  // Validation successful
}
