// Canonical ESG Architecture Type Definitions
// Strict structural typing for institutional data architecture
// No optional fields. No loose strings. No runtime validation.

// ============================================================
// 1. BRANDED IDENTIFIER TYPES
// ============================================================

type Brand<K, T> = K & { __brand: T }

export type ElementId = Brand<string, "ElementId">
export type LayerId = Brand<string, "LayerId">
export type PrincipleId = Brand<string, "PrincipleId">
export type VersionString = Brand<string, "VersionString">

// ============================================================
// 2. FACTORY HELPERS
// ============================================================

export const asElementId = (id: string): ElementId => id as ElementId
export const asLayerId = (id: string): LayerId => id as LayerId
export const asPrincipleId = (id: string): PrincipleId => id as PrincipleId
export const asVersion = (v: string): VersionString => v as VersionString

// ============================================================
// 3. RELATIONSHIP DEFINITION
// ============================================================

export type RelationshipDirection = "outgoing" | "incoming"

export interface RelationshipDefinition {
  relationship: string
  targetElement: ElementId
  direction: RelationshipDirection
  description: string
}

// ============================================================
// 4. CANONICAL ELEMENT TYPE (CERM)
// ============================================================

export interface CanonicalElementType {
  id: ElementId
  name: string
  definition: string
  characteristics: string[]
  permittedRelationships: RelationshipDefinition[]
  version: VersionString
}

// ============================================================
// 5. LAYER DEFINITION (CDI, CMP, Presentation)
// ============================================================

export interface LayerDefinition {
  id: LayerId
  name: string
  purpose: string
  responsibilities: string[]
  constraints: string[]
  interactionContracts: string[]
  version: VersionString
}

// ============================================================
// 6. DESIGN PRINCIPLE
// ============================================================

export interface DesignPrinciple {
  id: PrincipleId
  name: string
  description: string
  constraints: string[]
  version: VersionString
}

// ============================================================
// 7. ARCHITECTURE DATASET
// ============================================================

export interface ArchitectureDataset {
  version: VersionString
  cerm: CanonicalElementType[]
  layers: LayerDefinition[]
  principles: DesignPrinciple[]
}
