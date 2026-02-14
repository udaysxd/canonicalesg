declare module '@/data/architecture.json' {
  const value: {
    id: string;
    name: string;
    version: string;
    description: string;
    layers: Array<{
      id: string;
      name: string;
      short_name: string;
      position: number;
      purpose: string;
      scope: string;
      json_file: string;
    }>;
    cross_cutting: {
      design_principles: {
        file: string;
        count: number;
        principles: string[];
      };
    };
    versioning_rules: {
      major_version: string;
      minor_version: string;
      patch_version: string;
      governance_authority: string;
      change_process: string;
    };
    governance: {
      architecture_authority: string;
      principle_guardian: string;
      change_review_criteria: string[];
    };
  };
  export default value;
}

declare module '@/data/cerm-reference-model.json' {
  interface Element {
    id: string;
    name: string;
    definition: string;
    characteristics: string[];
    permitted_relationships: Array<{
      relationship: string;
      target_element: string;
      direction: string;
      description: string;
    }>;
    version: string;
  }

  const value: {
    id: string;
    name: string;
    short_name: string;
    version: string;
    description: string;
    elements: Element[];
  };
  export default value;
}

declare module '@/data/cdi-architecture.json' {
  const value: {
    id: string;
    name: string;
    short_name: string;
    version: string;
    description: string;
    purpose: string;
    responsibilities: string[];
    constraints: string[];
    interaction_with_cerm: string;
    structural_components: Array<{
      id: string;
      name: string;
      definition: string;
      characteristics: string[];
    }>;
    versioning_rules: string[];
    governance_positioning: {
      authority: string;
      non_authoritative_on_disclosure: string;
      structural_integrity: string;
      review_criteria: string[];
    };
  };
  export default value;
}

declare module '@/data/cmp-architecture.json' {
  const value: {
    id: string;
    name: string;
    short_name: string;
    version: string;
    description: string;
    purpose: string;
    responsibilities: string[];
    non_authoritative_positioning: string[];
    independence_rules: string[];
    evolution_rules: string[];
    structural_components: Array<{
      id: string;
      name: string;
      definition: string;
      characteristics: string[];
    }>;
    governance_positioning: {
      authority: string;
      non_authoritative_on_frameworks: string;
      structural_integrity: string;
      review_criteria: string[];
    };
  };
  export default value;
}

declare module '@/data/presentation-layer.json' {
  const value: {
    id: string;
    name: string;
    short_name: string;
    version: string;
    description: string;
    purpose: string;
    constraints: string[];
    relation_to_cdi: string;
    non_goals: string[];
    structural_formats: Array<{
      id: string;
      name: string;
      definition: string;
      structure: {
        header_section?: {
          description: string;
          required_fields: string[];
          field_types: string;
        };
        metric_tables?: {
          description: string;
          table_structure: {
            columns: string[];
            no_sample_rows: string;
          };
        };
        assertion_section?: {
          description: string;
          structure: {
            assertion_blocks: string[];
          };
        };
        narrative_sections?: {
          description: string;
          structure: {
            section_slots: string[];
          };
        };
        target_summary_table?: {
          description: string;
          columns: string[];
          no_target_values: string;
        };
        trajectory_detail_table?: {
          description: string;
          columns: string[];
          no_trajectory_values: string;
        };
        methodology_reference_section?: {
          description: string;
          structure: {
            methodology_blocks: string[];
          };
        };
      };
    }>;
    versioning_rules: string[];
    governance_positioning: {
      authority: string;
      structural_integrity: string;
      review_criteria: string[];
    };
  };
  export default value;
}

declare module '@/data/design-principles.json' {
  const value: {
    id: string;
    name: string;
    version: string;
    description: string;
    principles: Array<{
      id: string;
      name: string;
      description: string;
      constraints: string[];
      rationale: string;
    }>;
    governance: {
      principle_guardian: string;
      interpretation_authority: string;
      enforcement_mechanism: string;
      amendment_process: string;
    };
  };
  export default value;
}
