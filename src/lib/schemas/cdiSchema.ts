import { z } from "zod"

// ============================================================
// CDI IDENTIFIER VALIDATION
// ============================================================

export const CdiIdSchema = z.string().regex(
  /^CDI-[A-Z]{4}-\d{2}$/,
  "CDI ID must match pattern: CDI-[DOMAIN]-XX where DOMAIN is 4 letters and XX is two digits"
)

// ============================================================
// CALCULATION ROLE
// ============================================================

export const CalculationRoleSchema = z.enum(["measured", "derived", "declarative"])

// ============================================================
// CDI INTENT
// ============================================================

export const CdiIntentSchema = z.object({
  id: z.string().regex(
    /^CDI-[A-Z]{4}-\d{2}$/,
    "CDI ID must match pattern: CDI-[DOMAIN]-XX"
  ),
  name: z.string().min(3, "Name must be at least 3 characters"),
  definition: z.string().min(20, "Definition must be at least 20 characters"),
  referencedElements: z.array(
    z.string().regex(
      /^CERM-ELEMENT-[A-Z-]+$/,
      "Referenced element must be a valid CERM Element ID"
    )
  ).min(1, "At least one referenced element is required"),
  boundaryApplicability: z.string().min(10, "Boundary applicability must be at least 10 characters"),
  temporalApplicability: z.string().min(10, "Temporal applicability must be at least 10 characters"),
  calculationRole: CalculationRoleSchema,
  stabilityNote: z.string().min(10, "Stability note must be at least 10 characters"),
  version: z.string().regex(
    /^\d+\.\d+(\.\d+)?$/,
    "Version must match semantic version format"
  ),
})

// ============================================================
// CDI REGISTRY
// ============================================================

export const CdiIntentRegistrySchema = z.object({
  id: z.string().min(5, "Registry ID must be at least 5 characters"),
  name: z.string().min(5, "Registry name must be at least 5 characters"),
  version: z.string().regex(
    /^\d+\.\d+(\.\d+)?$/,
    "Version must match semantic version format"
  ),
  description: z.string().min(20, "Description must be at least 20 characters"),
  domains: z.record(
    z.string().regex(/^[a-z-]+$/, "Domain key must be lowercase with hyphens"),
    z.object({
      name: z.string().min(3, "Domain name must be at least 3 characters"),
      description: z.string().min(10, "Domain description must be at least 10 characters"),
      intents: z.array(CdiIntentSchema),
    })
  ).refine((domains) => Object.keys(domains).length > 0, "At least one domain is required"),
})
