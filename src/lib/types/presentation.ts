// SSS Presentation Layer Type Definitions
// Strict structural typing for structured sustainability statements
// No optional fields. No loose strings. Format-only layer.

import type { CdiId } from "./cdi"
import type { VersionString } from "./architecture"

// ============================================================
// BRANDED IDENTIFIER TYPES
// ============================================================

type Brand<K, T> = K & { __brand: T }

export type SssId = Brand<string, "SssId">
export type SssFieldId = Brand<string, "SssFieldId">

// ============================================================
// FACTORY HELPERS
// ============================================================

export const asSssId = (id: string): SssId => id as SssId
export const asSssFieldId = (id: string): SssFieldId => id as SssFieldId

// ============================================================
// PRESENTATION ROLE
// ============================================================

export type PresentationRole =
  | "metric"
  | "target_descriptor"
  | "progress_indicator"
  | "methodology_descriptor"
  | "assurance_indicator"

// ============================================================
// SSS FIELD
// ============================================================

export interface SssField {
  id: SssFieldId
  label: string
  mappedCdi: CdiId
  dataType: "numeric" | "text" | "percentage"
  unit: string | null
  assuranceApplicable: boolean
  presentationRole: PresentationRole
}

// ============================================================
// STRUCTURED STATEMENT
// ============================================================

export interface StructuredStatement {
  id: SssId
  name: string
  purpose: string
  nonAuthoritativeNote: string
  fields: SssField[]
  version: VersionString
}

// ============================================================
// SSS REGISTRY
// ============================================================

export interface SssRegistry {
  statements: StructuredStatement[]
}
