import { z } from "zod"

// ============================================================
// SSS IDENTIFIER VALIDATION
// ============================================================

export const SssIdSchema = z.string().regex(
  /^SSS-\d{3}$/,
  "SSS ID must match pattern: SSS-XXX where XXX is a three-digit number"
)

export const SssFieldIdSchema = z.string().regex(
  /^SSS-FIELD-\d{3}$/,
  "SSS Field ID must match pattern: SSS-FIELD-XXX"
)

// ============================================================
// PRESENTATION ROLE
// ============================================================

export const PresentationRoleSchema = z.enum([
  "metric",
  "target_descriptor",
  "progress_indicator",
  "methodology_descriptor",
  "assurance_indicator"
])

// ============================================================
// SSS FIELD
// ============================================================

export const SssFieldSchema = z.object({
  id: z.string().regex(
    /^SSS-FIELD-\d{3}$/,
    "Field ID must match pattern: SSS-FIELD-XXX"
  ),
  label: z.string().min(3, "Label must be at least 3 characters"),
  mappedCdi: z.string().regex(
    /^CDI-[A-Z]{4}-\d{2}$/,
    "Mapped CDI must be a valid CDI ID"
  ),
  dataType: z.enum(["numeric", "text", "percentage"]),
  unit: z.union([z.string(), z.null()]),
  assuranceApplicable: z.boolean(),
  presentationRole: PresentationRoleSchema,
})

// ============================================================
// STRUCTURED STATEMENT
// ============================================================

export const StructuredStatementSchema = z.object({
  id: z.string().regex(
    /^SSS-\d{3}$/,
    "SSS ID must match pattern: SSS-XXX"
  ),
  name: z.string().min(5, "Name must be at least 5 characters"),
  purpose: z.string().min(20, "Purpose must be at least 20 characters"),
  nonAuthoritativeNote: z.string().min(50, "Non-authoritative note must be at least 50 characters").refine(
    (val) => val.toLowerCase().includes("does not"),
    "Non-authoritative note must contain 'does not' to clarify limitations"
  ),
  fields: z.array(SssFieldSchema).min(1, "At least one field is required"),
  version: z.string().regex(
    /^\d+\.\d+(\.\d+)?$/,
    "Version must match semantic version format"
  ),
})

// ============================================================
// SSS REGISTRY
// ============================================================

export const SssRegistrySchema = z.object({
  statements: z.array(StructuredStatementSchema).min(1, "At least one statement is required"),
})
