// CDI Intent Type Definitions
// Strict structural typing for canonical disclosure intents
// No optional fields. No loose strings. No framework references.

import type { ElementId, VersionString } from "./architecture"

// ============================================================
// BRANDED IDENTIFIER TYPES
// ============================================================

type Brand<K, T> = K & { __brand: T }

export type CdiId = Brand<string, "CdiId">

// ============================================================
// FACTORY HELPERS
// ============================================================

export const asCdiId = (id: string): CdiId => id as CdiId

// ============================================================
// CALCULATION ROLE
// ============================================================

export type CalculationRole = "measured" | "derived" | "declarative"

// ============================================================
// CDI INTENT
// ============================================================

export interface CdiIntent {
  id: CdiId
  name: string
  definition: string
  referencedElements: ElementId[]
  boundaryApplicability: string
  temporalApplicability: string
  calculationRole: CalculationRole
  stabilityNote: string
  version: VersionString
}

// ============================================================
// CDI REGISTRY
// ============================================================

export interface CdiDomain {
  name: string
  description: string
  intents: CdiIntent[]
}

export interface CdiIntentRegistry {
  id: string
  name: string
  version: VersionString
  description: string
  domains: Record<string, CdiDomain>
}
