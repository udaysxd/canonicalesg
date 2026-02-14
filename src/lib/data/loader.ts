// Canonical ESG Architecture Data Loader
// Imports JSON definitions and validates/converts to strict types
// All structural mismatches throw explicit errors

import {
  asElementId,
  asLayerId,
  asPrincipleId,
  asVersion,
  type CanonicalElementType,
  type LayerDefinition,
  type DesignPrinciple,
  type ArchitectureDataset,
  type RelationshipDefinition,
  type ElementId,
  type LayerId,
  type PrincipleId,
  type VersionString,
} from "@/lib/types/architecture"
import type { CdiIntentRegistry } from "@/lib/types/cdi"
import type { CmpPack } from "@/lib/types/cmp"
import type { SssRegistry, StructuredStatement } from "@/lib/types/presentation"
import { validateArchitecture, validateCdiRegistry, validateCmpPack, validateSssRegistry } from "@/lib/validateArchitecture"

// Import raw JSON data
import cermJson from "../../../data/cerm-reference-model.json"
import cdiJson from "../../../data/cdi-architecture.json"
import cmpJson from "../../../data/cmp-architecture.json"
import sssJson from "../../../data/presentation-layer.json"
import principlesJson from "../../../data/design-principles.json"
import architectureJson from "../../../data/architecture.json"
import cdiIntentsJson from "../../../data/cdi-intents.json"
import ifrsS2CmpJson from "../../../data/cmp-packs/issb/ifrs-s2.json"
import sssPositionStatementJson from "../../../data/presentation-layer/sss-position-statement.json"
import sssTransitionAnnexJson from "../../../data/presentation-layer/sss-transition-annex.json"

// ============================================================
// VALIDATION ERRORS
// ============================================================

class ArchitectureDataError extends Error {
  constructor(message: string) {
    super(`[ArchitectureDataError] ${message}`)
    this.name = "ArchitectureDataError"
  }
}

// ============================================================
// RELATIONSHIP CONVERTER
// ============================================================

function toRelationshipDefinition(
  raw: {
    relationship: string
    target_element: string
    direction: string
    description: string
  }
): RelationshipDefinition {
  if (!raw.relationship || typeof raw.relationship !== "string") {
    throw new ArchitectureDataError(`Invalid relationship: missing or non-string relationship field`)
  }

  if (!raw.target_element || typeof raw.target_element !== "string") {
    throw new ArchitectureDataError(`Invalid relationship: missing or non-string target_element`)
  }

  if (raw.direction !== "outgoing" && raw.direction !== "incoming") {
    throw new ArchitectureDataError(`Invalid relationship direction: ${raw.direction}. Must be "outgoing" or "incoming"`)
  }

  if (!raw.description || typeof raw.description !== "string") {
    throw new ArchitectureDataError(`Invalid relationship: missing or non-string description`)
  }

  return {
    relationship: raw.relationship,
    targetElement: asElementId(raw.target_element),
    direction: raw.direction,
    description: raw.description,
  }
}

// ============================================================
// CERM ELEMENT CONVERTER
// ============================================================

function toCanonicalElementType(
  raw: {
    id: string
    name: string
    definition: string
    characteristics: string[]
    permitted_relationships: Array<{
      relationship: string
      target_element: string
      direction: string
      description: string
    }>
    version: string
  }
): CanonicalElementType {
  if (!raw.id || typeof raw.id !== "string") {
    throw new ArchitectureDataError(`Invalid element: missing or non-string id`)
  }

  if (!raw.name || typeof raw.name !== "string") {
    throw new ArchitectureDataError(`Invalid element ${raw.id}: missing or non-string name`)
  }

  if (!raw.definition || typeof raw.definition !== "string") {
    throw new ArchitectureDataError(`Invalid element ${raw.id}: missing or non-string definition`)
  }

  if (!Array.isArray(raw.characteristics)) {
    throw new ArchitectureDataError(`Invalid element ${raw.id}: characteristics must be an array`)
  }

  if (raw.characteristics.length === 0) {
    throw new ArchitectureDataError(`Invalid element ${raw.id}: characteristics cannot be empty`)
  }

  for (let i = 0; i < raw.characteristics.length; i++) {
    if (typeof raw.characteristics[i] !== "string") {
      throw new ArchitectureDataError(`Invalid element ${raw.id}: characteristic at index ${i} must be a string`)
    }
  }

  if (!Array.isArray(raw.permitted_relationships)) {
    throw new ArchitectureDataError(`Invalid element ${raw.id}: permitted_relationships must be an array`)
  }

  const permittedRelationships: RelationshipDefinition[] = []
  for (let i = 0; i < raw.permitted_relationships.length; i++) {
    try {
      permittedRelationships.push(toRelationshipDefinition(raw.permitted_relationships[i]))
    } catch (error) {
      throw new ArchitectureDataError(
        `Invalid element ${raw.id}: relationship at index ${i} is invalid - ${error instanceof Error ? error.message : "unknown error"}`
      )
    }
  }

  if (!raw.version || typeof raw.version !== "string") {
    throw new ArchitectureDataError(`Invalid element ${raw.id}: missing or non-string version`)
  }

  return {
    id: asElementId(raw.id),
    name: raw.name,
    definition: raw.definition,
    characteristics: raw.characteristics,
    permittedRelationships: permittedRelationships,
    version: asVersion(raw.version),
  }
}

// ============================================================
// LAYER CONVERTER
// ============================================================

function toLayerDefinition(
  id: LayerId,
  raw: {
    name: string
    purpose: string
    responsibilities?: string[]
    constraints?: string[]
    interactionContracts?: string[]
    version: string
  }
): LayerDefinition {
  if (!raw.name || typeof raw.name !== "string") {
    throw new ArchitectureDataError(`Invalid layer ${id}: missing or non-string name`)
  }

  if (!raw.purpose || typeof raw.purpose !== "string") {
    throw new ArchitectureDataError(`Invalid layer ${id}: missing or non-string purpose`)
  }

  const responsibilities = raw.responsibilities ?? []
  if (!Array.isArray(responsibilities)) {
    throw new ArchitectureDataError(`Invalid layer ${id}: responsibilities must be an array`)
  }
  for (let i = 0; i < responsibilities.length; i++) {
    if (typeof responsibilities[i] !== "string") {
      throw new ArchitectureDataError(`Invalid layer ${id}: responsibility at index ${i} must be a string`)
    }
  }

  const constraints = raw.constraints ?? []
  if (!Array.isArray(constraints)) {
    throw new ArchitectureDataError(`Invalid layer ${id}: constraints must be an array`)
  }
  for (let i = 0; i < constraints.length; i++) {
    if (typeof constraints[i] !== "string") {
      throw new ArchitectureDataError(`Invalid layer ${id}: constraint at index ${i} must be a string`)
    }
  }

  const interactionContracts = raw.interactionContracts ?? []
  if (!Array.isArray(interactionContracts)) {
    throw new ArchitectureDataError(`Invalid layer ${id}: interactionContracts must be an array`)
  }
  for (let i = 0; i < interactionContracts.length; i++) {
    if (typeof interactionContracts[i] !== "string") {
      throw new ArchitectureDataError(`Invalid layer ${id}: interactionContract at index ${i} must be a string`)
    }
  }

  if (!raw.version || typeof raw.version !== "string") {
    throw new ArchitectureDataError(`Invalid layer ${id}: missing or non-string version`)
  }

  return {
    id: id,
    name: raw.name,
    purpose: raw.purpose,
    responsibilities: responsibilities,
    constraints: constraints,
    interactionContracts: interactionContracts,
    version: asVersion(raw.version),
  }
}

// ============================================================
// DESIGN PRINCIPLE CONVERTER
// ============================================================

function toDesignPrinciple(
  raw: {
    id: string
    name: string
    description: string
    constraints: string[]
    version: string
  }
): DesignPrinciple {
  if (!raw.id || typeof raw.id !== "string") {
    throw new ArchitectureDataError(`Invalid principle: missing or non-string id`)
  }

  if (!raw.name || typeof raw.name !== "string") {
    throw new ArchitectureDataError(`Invalid principle ${raw.id}: missing or non-string name`)
  }

  if (!raw.description || typeof raw.description !== "string") {
    throw new ArchitectureDataError(`Invalid principle ${raw.id}: missing or non-string description`)
  }

  if (!Array.isArray(raw.constraints)) {
    throw new ArchitectureDataError(`Invalid principle ${raw.id}: constraints must be an array`)
  }
  for (let i = 0; i < raw.constraints.length; i++) {
    if (typeof raw.constraints[i] !== "string") {
      throw new ArchitectureDataError(`Invalid principle ${raw.id}: constraint at index ${i} must be a string`)
    }
  }

  if (!raw.version || typeof raw.version !== "string") {
    throw new ArchitectureDataError(`Invalid principle ${raw.id}: missing or non-string version`)
  }

  return {
    id: asPrincipleId(raw.id),
    name: raw.name,
    description: raw.description,
    constraints: raw.constraints,
    version: asVersion(raw.version),
  }
}

// ============================================================
// LOAD CERM DATA
// ============================================================

function loadCermData(): CanonicalElementType[] {
  if (!cermJson || typeof cermJson !== "object") {
    throw new ArchitectureDataError("CERM JSON is not a valid object")
  }

  const rawElements = (cermJson as { elements?: unknown[] }).elements
  if (!Array.isArray(rawElements)) {
    throw new ArchitectureDataError("CERM JSON missing 'elements' array")
  }

  const elements: CanonicalElementType[] = []
  for (let i = 0; i < rawElements.length; i++) {
    try {
      elements.push(toCanonicalElementType(rawElements[i] as {
        id: string
        name: string
        definition: string
        characteristics: string[]
        permitted_relationships: Array<{
          relationship: string
          target_element: string
          direction: string
          description: string
        }>
        version: string
      }))
    } catch (error) {
      throw new ArchitectureDataError(
        `Failed to convert CERM element at index ${i}: ${error instanceof Error ? error.message : "unknown error"}`
      )
    }
  }

  return elements
}

// ============================================================
// LOAD LAYER DATA
// ============================================================

function loadLayerData(): LayerDefinition[] {
  const layers: LayerDefinition[] = []

  // CDI Layer
  try {
    const cdiRaw = cdiJson as {
      id: string
      name: string
      purpose: string
      responsibilities: string[]
      constraints: string[]
      interaction_with_cerm: string
      versioning_rules: string[]
      governance_positioning: {
        authority: string
        non_authoritative_on_disclosure: string
        structural_integrity: string
        review_criteria: string[]
      }
    }

    const cdiLayer = toLayerDefinition(asLayerId(cdiRaw.id), {
      name: cdiRaw.name,
      purpose: cdiRaw.purpose,
      responsibilities: cdiRaw.responsibilities,
      constraints: cdiRaw.constraints,
      interactionContracts: [
        `Interaction with CERM: ${cdiRaw.interaction_with_cerm}`,
        ...(cdiRaw.governance_positioning ? [
          `Authority: ${cdiRaw.governance_positioning.authority}`,
          `Non-authoritative positioning: ${cdiRaw.governance_positioning.non_authoritative_on_disclosure}`,
          `Structural integrity: ${cdiRaw.governance_positioning.structural_integrity}`,
        ] : []),
      ],
      version: "1.0",
    })
    layers.push(cdiLayer)
  } catch (error) {
    throw new ArchitectureDataError(
      `Failed to convert CDI layer: ${error instanceof Error ? error.message : "unknown error"}`
    )
  }

  // CMP Layer
  try {
    const cmpRaw = cmpJson as {
      id: string
      name: string
      purpose: string
      responsibilities: string[]
      non_authoritative_positioning: string[]
      independence_rules: string[]
      evolution_rules: string[]
      governance_positioning: {
        authority: string
        non_authoritative_on_frameworks: string
        structural_integrity: string
      }
    }

    const cmpLayer = toLayerDefinition(asLayerId(cmpRaw.id), {
      name: cmpRaw.name,
      purpose: cmpRaw.purpose,
      responsibilities: cmpRaw.responsibilities,
      constraints: cmpRaw.non_authoritative_positioning,
      interactionContracts: [
        ...cmpRaw.independence_rules,
        ...cmpRaw.evolution_rules,
        ...(cmpRaw.governance_positioning ? [
          `Authority: ${cmpRaw.governance_positioning.authority}`,
          `Non-authoritative on frameworks: ${cmpRaw.governance_positioning.non_authoritative_on_frameworks}`,
        ] : []),
      ],
      version: "1.0",
    })
    layers.push(cmpLayer)
  } catch (error) {
    throw new ArchitectureDataError(
      `Failed to convert CMP layer: ${error instanceof Error ? error.message : "unknown error"}`
    )
  }

  // SSS Layer
  try {
    const sssRaw = sssJson as {
      id: string
      name: string
      purpose: string
      responsibilities: string[]
      constraints: string[]
      relation_to_cdi: string
      non_goals: string[]
      versioning_rules: string[]
      governance_positioning: {
        authority: string
        structural_integrity: string
      }
    }

    const sssLayer = toLayerDefinition(asLayerId(sssRaw.id), {
      name: sssRaw.name,
      purpose: sssRaw.purpose,
      responsibilities: sssRaw.responsibilities,
      constraints: sssRaw.constraints,
      interactionContracts: [
        `Relation to CDI: ${sssRaw.relation_to_cdi}`,
        ...sssRaw.non_goals,
        ...(sssRaw.governance_positioning ? [
          `Authority: ${sssRaw.governance_positioning.authority}`,
        ] : []),
      ],
      version: "1.0",
    })
    layers.push(sssLayer)
  } catch (error) {
    throw new ArchitectureDataError(
      `Failed to convert SSS layer: ${error instanceof Error ? error.message : "unknown error"}`
    )
  }

  return layers
}

// ============================================================
// LOAD PRINCIPLES DATA
// ============================================================

function loadPrinciplesData(): DesignPrinciple[] {
  if (!principlesJson || typeof principlesJson !== "object") {
    throw new ArchitectureDataError("Principles JSON is not a valid object")
  }

  const rawPrinciples = (principlesJson as { principles?: unknown[] }).principles
  if (!Array.isArray(rawPrinciples)) {
    throw new ArchitectureDataError("Principles JSON missing 'principles' array")
  }

  const principles: DesignPrinciple[] = []
  for (let i = 0; i < rawPrinciples.length; i++) {
    try {
      const raw = rawPrinciples[i] as {
        id: string
        name: string
        description: string
        constraints: string[]
        version: string
      }
      principles.push(toDesignPrinciple(raw))
    } catch (error) {
      throw new ArchitectureDataError(
        `Failed to convert principle at index ${i}: ${error instanceof Error ? error.message : "unknown error"}`
      )
    }
  }

  return principles
}

// ============================================================
// EXPORT TYPED DATASET
// ============================================================

export const architectureVersion: VersionString = asVersion(
  (architectureJson as { version?: string }).version ?? "1.0"
)

export const cermElements: CanonicalElementType[] = loadCermData()

export const architectureLayers: LayerDefinition[] = loadLayerData()

export const designPrinciples: DesignPrinciple[] = loadPrinciplesData()

// ============================================================
// LOAD CDI DATA
// ============================================================

function loadCdiData(): CdiIntentRegistry {
  if (!cdiIntentsJson || typeof cdiIntentsJson !== "object") {
    throw new ArchitectureDataError("CDI Intents JSON is not a valid object")
  }

  const raw = cdiIntentsJson as any
  
  // Handle migration from old structure to new multi-domain structure
  if (raw.intents && Array.isArray(raw.intents)) {
    // Old format - migrate to new structure
    return {
      id: raw.id || "CDI-INTENT-REGISTRY-COMPLETE-1.0",
      name: raw.name || "Canonical Disclosure Intent Registry — Complete",
      version: raw.version || "1.0",
      description: raw.description || "Complete registry of canonical disclosure intents across all domains",
      domains: {
        climate: {
          name: "Climate",
          description: "Climate-related disclosure intents",
          intents: raw.intents
        }
      }
    }
  }
  
  // New format - validate domains structure
  if (raw.domains && typeof raw.domains === "object") {
    return raw as CdiIntentRegistry
  }
  
  throw new ArchitectureDataError("CDI Intents JSON must have either 'intents' array (old format) or 'domains' object (new format)")
}

export const cdiRegistry: CdiIntentRegistry = loadCdiData()

export const architectureDataset: ArchitectureDataset = {
  version: architectureVersion,
  cerm: cermElements,
  layers: architectureLayers,
  principles: designPrinciples,
}

// Validate architecture dataset at build time
// This will throw an error if validation fails, causing build to fail
validateArchitecture(architectureDataset)

// Validate CDI registry at build time
// Ensure all referenced elements exist in CERM
validateCdiRegistry(cdiRegistry, architectureDataset)

// Validate CMP packs at build time
// Ensure all mapped CDIs exist in CDI registry
validateCmpPack(ifrsS2CmpJson as CmpPack, cdiRegistry)

// Validate SSS presentation layer at build time
// Ensure all mapped CDIs exist in CDI registry
const sssRegistry: SssRegistry = {
  statements: [sssPositionStatementJson as unknown as StructuredStatement, sssTransitionAnnexJson as unknown as StructuredStatement]
}
validateSssRegistry(sssRegistry, cdiRegistry)
