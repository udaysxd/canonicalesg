// CMP Pack Type Definitions
// Strict structural typing for canonical mapping packs
// No optional fields. No loose strings. Non-authoritative positioning.

import type { CdiId, VersionString } from "./cdi"

// ============================================================
// BRANDED IDENTIFIER TYPES
// ============================================================

type Brand<K, T> = K & { __brand: T }

export type CmpId = Brand<string, "CmpId">
export type CmpPackId = Brand<string, "CmpPackId">

// ============================================================
// FACTORY HELPERS
// ============================================================

export const asCmpId = (id: string): CmpId => id as CmpId
export const asCmpPackId = (id: string): CmpPackId => id as CmpPackId

// ============================================================
// CMP MAPPING
// ============================================================

export interface CmpMapping {
  id: CmpId
  frameworkReference: string
  disclosureSummary: string
  mappedCdi: CdiId
  interpretiveRationale: string
  scopeConditions: string
  version: VersionString
}

// ============================================================
// CMP PACK
// ============================================================

export interface CmpPack {
  id: CmpPackId
  frameworkName: string
  jurisdiction: string
  authorityNote: string
  version: VersionString
  mappings: CmpMapping[]
}
