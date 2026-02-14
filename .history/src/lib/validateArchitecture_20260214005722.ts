import { ArchitectureDatasetSchema } from "@/lib/schemas/architectureSchema"
import { CdiIntentRegistrySchema } from "@/lib/schemas/cdiSchema"
import type { ArchitectureDataset } from "@/lib/types/architecture"
import type { CdiIntentRegistry } from "@/lib/types/cdi"

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

  // Step 3: Validate all CDI IDs are unique
  const cdiIds = new Set<string>()
  for (const intent of cdiRegistry.intents) {
    if (cdiIds.has(intent.id)) {
      throw new ArchitectureValidationError(
        `Duplicate CDI ID found: ${intent.id}`
      )
    }
    cdiIds.add(intent.id)
  }

  // Step 4: Validate all referenced elements exist in CERM
  for (const intent of cdiRegistry.intents) {
    for (const elementId of intent.referencedElements) {
      if (!validElementIds.has(elementId)) {
        throw new ArchitectureValidationError(
          `Invalid CERM reference in CDI ${intent.id}: ${elementId} does not exist in CERM dataset`
        )
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

  for (const intent of cdiRegistry.intents) {
    if (!versionRegex.test(intent.version)) {
      throw new ArchitectureValidationError(
        `Invalid version format for CDI intent ${intent.id}: ${intent.version}`
      )
    }
  }

  // Validation successful
}
