import { z } from "zod"

// ============================================================
// IDENTIFIER VALIDATION
// ============================================================

export const ElementIdSchema = z.string().regex(
  /^CERM-ELEMENT-[A-Z-]+$/,
  "ElementId must match pattern: CERM-ELEMENT-[A-Z-]+"
)

export const LayerIdSchema = z.string().regex(
  /^(CERM|CDI|CMP|PRESENTATION)-LAYER$/,
  "LayerId must match pattern: (CERM|CDI|CMP|PRESENTATION)-LAYER"
)

export const PrincipleIdSchema = z.string().regex(
  /^PRINCIPLE-[A-Z-]+$/,
  "PrincipleId must match pattern: PRINCIPLE-[A-Z-]+"
)

export const VersionStringSchema = z.string().regex(
  /^\d+\.\d+(\.\d+)?$/,
  "VersionString must match semantic version format: X.Y or X.Y.Z"
)

// ============================================================
// RELATIONSHIP DEFINITION
// ============================================================

export const RelationshipDirectionSchema = z.enum(["outgoing", "incoming"])

export const RelationshipDefinitionSchema = z.object({
  relationship: z.string().min(3, "Relationship must be at least 3 characters"),
  targetElement: z.string().regex(
    /^CERM-ELEMENT-[A-Z-]+$/,
    "targetElement must be a valid ElementId"
  ),
  direction: RelationshipDirectionSchema,
  description: z.string().min(10, "Description must be at least 10 characters"),
})

// ============================================================
// CANONICAL ELEMENT TYPE (CERM)
// ============================================================

export const CanonicalElementTypeSchema = z.object({
  id: z.string().regex(
    /^CERM-ELEMENT-[A-Z-]+$/,
    "Element id must match pattern: CERM-ELEMENT-[A-Z-]+"
  ),
  name: z.string().min(3, "Name must be at least 3 characters"),
  definition: z.string().min(20, "Definition must be at least 20 characters"),
  characteristics: z.array(
    z.string().min(5, "Characteristic must be at least 5 characters")
  ).min(1, "At least one characteristic is required"),
  permittedRelationships: z.array(RelationshipDefinitionSchema),
  version: z.string().regex(
    /^\d+\.\d+(\.\d+)?$/,
    "Version must match semantic version format"
  ),
})

// ============================================================
// LAYER DEFINITION
// ============================================================

export const LayerDefinitionSchema = z.object({
  id: z.string().regex(
    /^(CERM|CDI|CMP|PRESENTATION)-LAYER$/,
    "Layer id must match pattern: (CERM|CDI|CMP|PRESENTATION)-LAYER"
  ),
  name: z.string().min(3, "Name must be at least 3 characters"),
  purpose: z.string().min(20, "Purpose must be at least 20 characters"),
  responsibilities: z.array(z.string()).min(1, "At least one responsibility is required"),
  constraints: z.array(z.string()),
  interactionContracts: z.array(z.string()),
  version: z.string().regex(
    /^\d+\.\d+(\.\d+)?$/,
    "Version must match semantic version format"
  ),
})

// ============================================================
// DESIGN PRINCIPLE
// ============================================================

export const DesignPrincipleSchema = z.object({
  id: z.string().regex(
    /^PRINCIPLE-[A-Z-]+$/,
    "Principle id must match pattern: PRINCIPLE-[A-Z-]+"
  ),
  name: z.string().min(3, "Name must be at least 3 characters"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  constraints: z.array(z.string()).min(1, "At least one constraint is required"),
  version: z.string().regex(
    /^\d+\.\d+(\.\d+)?$/,
    "Version must match semantic version format"
  ),
})

// ============================================================
// ARCHITECTURE DATASET
// ============================================================

export const ArchitectureDatasetSchema = z.object({
  version: z.string().regex(
    /^\d+\.\d+(\.\d+)?$/,
    "Version must match semantic version format"
  ),
  cerm: z.array(CanonicalElementTypeSchema).min(1, "At least one CERM element is required"),
  layers: z.array(LayerDefinitionSchema).min(1, "At least one layer is required"),
  principles: z.array(DesignPrincipleSchema).min(1, "At least one principle is required"),
})
