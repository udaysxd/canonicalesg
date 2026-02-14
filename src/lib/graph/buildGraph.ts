// Canonical ESG Semantic Explorer Graph Builder
// Builds unified node structure and bidirectional edges across all architecture layers

import {
  architectureDataset,
  cermElements,
  cdiRegistry,
} from "@/lib/data/loader"
import ifrsS2CmpJson from "../../../data/cmp-packs/issb/ifrs-s2.json"
import sssPositionStatementJson from "../../../data/presentation-layer/sss-position-statement.json"
import sssTransitionAnnexJson from "../../../data/presentation-layer/sss-transition-annex.json"

// ============================================================
// TYPES
// ============================================================

export type LayerType = "cerm" | "cdi" | "cmp" | "sss"

export interface ExplorerNode {
  id: string
  name: string
  layer: LayerType
  version: string
  description?: string
  definition?: string
  purpose?: string
  raw: unknown
}

export interface ExplorerEdge {
  targetId: string
  targetLayer: LayerType
  label: string
  relationship: string
}

export interface ArchitectureGraph {
  nodes: ExplorerNode[]
  forwardEdges: Record<string, ExplorerEdge[]>
  reverseEdges: Record<string, ExplorerEdge[]>
}

// ============================================================
// GRAPH BUILDER
// ============================================================

export function buildGraph(): ArchitectureGraph {
  const nodes: ExplorerNode[] = []
  const forwardEdges: Record<string, ExplorerEdge[]> = {}
  const reverseEdges: Record<string, ExplorerEdge[]> = {}

  // Helper to add edge
  function addEdge(fromId: string, edge: ExplorerEdge) {
    if (!forwardEdges[fromId]) {
      forwardEdges[fromId] = []
    }
    forwardEdges[fromId].push(edge)

    // Build reverse edge
    if (!reverseEdges[edge.targetId]) {
      reverseEdges[edge.targetId] = []
    }
    reverseEdges[edge.targetId].push({
      targetId: fromId,
      targetLayer: nodes.find(n => n.id === fromId)?.layer || "cerm",
      label: `referenced by ${edge.label}`,
      relationship: "incoming",
    })
  }

  // ============================================================
  // 1. CERM ELEMENTS
  // ============================================================

  for (const element of cermElements) {
    const node: ExplorerNode = {
      id: element.id,
      name: element.name,
      layer: "cerm",
      version: element.version,
      definition: element.definition,
      raw: element,
    }
    nodes.push(node)

    // Build edges for permitted relationships
    for (const rel of element.permittedRelationships) {
      addEdge(element.id, {
        targetId: rel.targetElement,
        targetLayer: "cerm",
        label: rel.description,
        relationship: rel.relationship,
      })
    }
  }

  // ============================================================
  // 2. CDI INTENTS
  // ============================================================

  // Process all CDI intents across all domains
  const allCdiIntents: any[] = []
  
  for (const [domainKey, domain] of Object.entries(cdiRegistry.domains)) {
    for (const intent of domain.intents) {
      allCdiIntents.push({
        ...intent,
        domain: domainKey,
        domainName: domain.name
      })
    }
  }

  for (const intent of allCdiIntents) {
    const node: ExplorerNode = {
      id: intent.id,
      name: intent.name,
      layer: "cdi",
      version: intent.version,
      definition: intent.definition,
      purpose: `Calculation role: ${intent.calculationRole}`,
      raw: intent,
    }
    nodes.push(node)

    // Build edges for referenced CERM elements
    for (const elementId of intent.referencedElements) {
      addEdge(intent.id, {
        targetId: elementId,
        targetLayer: "cerm",
        label: "references CERM element",
        relationship: "references",
      })
    }
  }

  // ============================================================
  // 3. CMP PACKS
  // ============================================================

  const cmpPack = ifrsS2CmpJson as {
    id: string
    frameworkName: string
    jurisdiction: string
    authorityNote: string
    version: string
    mappings: Array<{
      id: string
      frameworkReference: string
      disclosureSummary: string
      mappedCdi: string
      interpretiveRationale: string
      scopeConditions: string
      version: string
    }>
  }

  // Add CMP Pack as node
  const cmpPackNode: ExplorerNode = {
    id: cmpPack.id,
    name: cmpPack.frameworkName,
    layer: "cmp",
    version: cmpPack.version,
    purpose: `Jurisdiction: ${cmpPack.jurisdiction}`,
    definition: cmpPack.authorityNote,
    raw: cmpPack,
  }
  nodes.push(cmpPackNode)

  // Add individual mappings as nodes
  for (const mapping of cmpPack.mappings) {
    const node: ExplorerNode = {
      id: mapping.id,
      name: mapping.frameworkReference,
      layer: "cmp",
      version: mapping.version,
      definition: mapping.disclosureSummary,
      purpose: mapping.interpretiveRationale.slice(0, 100) + "...",
      raw: mapping,
    }
    nodes.push(node)

    // Build edge to mapped CDI
    addEdge(mapping.id, {
      targetId: mapping.mappedCdi,
      targetLayer: "cdi",
      label: "maps to CDI",
      relationship: "maps-to",
    })

    // Build edge from CMP Pack to mapping
    addEdge(cmpPack.id, {
      targetId: mapping.id,
      targetLayer: "cmp",
      label: "contains mapping",
      relationship: "contains",
    })
  }

  // ============================================================
  // 4. SSS STATEMENTS
  // ============================================================

  const sssStatements = [
    sssPositionStatementJson,
    sssTransitionAnnexJson,
  ] as Array<{
    id: string
    name: string
    purpose: string
    nonAuthoritativeNote: string
    version: string
    fields: Array<{
      id: string
      label: string
      mappedCdi: string
      dataType: string
      unit: string | null
      assuranceApplicable: boolean
      presentationRole: string
    }>
  }>

  for (const statement of sssStatements) {
    const node: ExplorerNode = {
      id: statement.id,
      name: statement.name,
      layer: "sss",
      version: statement.version,
      definition: statement.purpose,
      purpose: statement.nonAuthoritativeNote.slice(0, 100) + "...",
      raw: statement,
    }
    nodes.push(node)

    // Build edges for fields to CDIs
    for (const field of statement.fields) {
      addEdge(statement.id, {
        targetId: field.mappedCdi,
        targetLayer: "cdi",
        label: `field "${field.label}" maps to`,
        relationship: "field-maps-to",
      })
    }
  }

  return {
    nodes,
    forwardEdges,
    reverseEdges,
  }
}

// ============================================================
// EXPORT PRE-BUILT GRAPH
// ============================================================

export const architectureGraph = buildGraph()
