import { z } from "zod"

// ============================================================
// CMP IDENTIFIER VALIDATION
// ============================================================

export const CmpIdSchema = z.string().regex(
  /^CMP-(ISSB-S[12]|ESRS-EU-S[12]|GRI|UNSDG|CDP|SASB|TNFD)-\d{3}$/,
  "CMP ID must match pattern: CMP-(ISSB-S[12]|ESRS-EU-S[12]|GRI|UNSDG|CDP|SASB|TNFD)-XXX where XXX is a three-digit number"
)

export const CmpPackIdSchema = z.string().regex(
  /^CMP-PACK-[A-Z0-9-]+$/,
  "CMP Pack ID must match pattern: CMP-PACK-[FRAMEWORK-NAME]"
)

// ============================================================
// CMP MAPPING
// ============================================================

export const CmpMappingSchema = z.object({
  id: z.string().regex(
    /^CMP-(ISSB-S[12]|ESRS-EU-S[12]|GRI|UNSDG|CDP|SASB|TNFD)-\d{3}$/,
    "CMP mapping ID must match pattern: CMP-(ISSB-S[12]|ESRS-EU-S[12]|GRI|UNSDG|CDP|SASB|TNFD)-XXX"
  ),
  frameworkReference: z.string().min(5, "Framework reference must be at least 5 characters"),
  disclosureSummary: z.string().min(20, "Disclosure summary must be at least 20 characters"),
  mappedCdi: z.string().regex(
    /^CDI-[A-Z]{4}-\d{2}$/,
    "Mapped CDI must match pattern: CDI-[DOMAIN]-XX"
  ),
  interpretiveRationale: z.string().min(50, "Interpretive rationale must be at least 50 characters"),
  scopeConditions: z.string().min(20, "Scope conditions must be at least 20 characters"),
  version: z.string().regex(
    /^\d+\.\d+(\.\d+)?$/,
    "Version must match semantic version format"
  ),
})

// ============================================================
// CMP PACK
// ============================================================

export const CmpPackSchema = z.object({
  id: z.string().regex(
    /^CMP-PACK-[A-Z0-9-]+$/,
    "CMP Pack ID must match pattern: CMP-PACK-[FRAMEWORK-NAME]"
  ),
  frameworkName: z.string().min(5, "Framework name must be at least 5 characters"),
  jurisdiction: z.string().min(3, "Jurisdiction must be at least 3 characters"),
  authorityNote: z.string().min(50, "Authority note must be at least 50 characters").refine(
    (val) => val.toLowerCase().includes("non-authoritative"),
    "Authority note must explicitly state non-authoritative positioning"
  ),
  version: z.string().regex(
    /^\d+\.\d+(\.\d+)?$/,
    "Version must match semantic version format"
  ),
  mappings: z.array(CmpMappingSchema).min(1, "At least one mapping is required"),
})
