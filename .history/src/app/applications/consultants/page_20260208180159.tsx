export default function ConsultantsUseCasePage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <header className="mb-16">
        <p className="text-sm text-[#666] uppercase tracking-wide mb-2">
          Use Cases — For ESG Consultants
        </p>
        <h1 
          className="text-3xl font-normal text-[#111] mb-6"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          Applications for ESG Consultants
        </h1>
        <p className="text-[#333] leading-7 max-w-2xl">
          Canonical ESG is designed as infrastructure beneath sustainability standards.
        </p>
        <p className="text-[#333] leading-7 mt-4 max-w-2xl">
          For ESG consultants, it functions as a structural modelling layer that reduces duplication, clarifies interpretation boundaries, and improves cross-framework consistency.
        </p>
        <p className="text-[#555] mt-4">
          This section outlines practical applications in advisory and reporting contexts.
        </p>
      </header>

      {/* Section 1 */}
      <section className="mb-14">
        <h2 
          className="text-xl font-normal text-[#1a1a1a] mb-6 pb-3 border-b border-[#e5e5e5]"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          1. Multi-Framework Reporting Without Duplication
        </h2>

        <div className="mb-8">
          <h3 className="text-base font-medium text-[#1a1a1a] mb-3">
            The Situation
          </h3>
          <p className="text-[#333] leading-7 mb-4">
            A client must report under:
          </p>
          <ul className="list-disc pl-6 mb-4 text-[#333] leading-7 space-y-1">
            <li>ESRS</li>
            <li>ISSB</li>
            <li>GRI</li>
            <li>CDP</li>
            <li>EU Taxonomy</li>
          </ul>
          <p className="text-[#333] leading-7 mb-4">
            Each framework requests overlapping concepts:
          </p>
          <ul className="list-disc pl-6 mb-6 text-[#333] leading-7 space-y-1">
            <li>Greenhouse gas emissions</li>
            <li>Governance oversight</li>
            <li>Risk management</li>
            <li>Workforce metrics</li>
            <li>Biodiversity exposure</li>
            <li>Economic value generation</li>
          </ul>
          <p className="text-[#333] leading-7 mb-4">
            Yet each expresses them differently.
          </p>
          <p className="text-[#333] leading-7 mb-4">
            Consultants typically:
          </p>
          <ul className="list-disc pl-6 mb-6 text-[#333] leading-7 space-y-1">
            <li>Rewrite similar disclosures multiple times</li>
            <li>Maintain parallel mapping spreadsheets</li>
            <li>Reconcile terminology inconsistencies</li>
            <li>Reinterpret metrics per framework</li>
            <li>Manage version drift across standards</li>
          </ul>
          <p className="text-[#333] leading-7">
            This increases time, cost, and interpretation risk.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-base font-medium text-[#1a1a1a] mb-3">
            Canonical ESG Approach
          </h3>
          <p className="text-[#333] leading-7 mb-4">
            Canonical ESG separates:
          </p>
          <ul className="list-disc pl-6 mb-4 text-[#333] leading-7 space-y-1">
            <li>Meaning (CDI layer)</li>
            <li>Framework interpretation (CMP layer)</li>
            <li>Regulatory interpretation (Jurisdiction layer)</li>
          </ul>
          <p className="text-[#333] leading-7 mb-4">
            The consultant models the disclosure once at the semantic level.
          </p>
          <p className="text-[#333] leading-7 mb-2">
            Example:
          </p>
          <p className="text-[#333] leading-7 mb-4">
            A Scope 2 emissions disclosure is modelled under a single Canonical Disclosure Intent (CDI).
          </p>
          <p className="text-[#333] leading-7 mb-4">
            That CDI then maps structurally to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-[#333] leading-7 space-y-1">
            <li>ESRS E1</li>
            <li>IFRS S2</li>
            <li>GRI 305-2</li>
            <li>CDP C6</li>
          </ul>
          <p className="text-[#333] leading-7 mb-2">
            The semantic anchor remains stable.
          </p>
          <p className="text-[#333] leading-7">
            Framework interpretations are documented transparently.
          </p>
        </div>

        <div>
          <h3 className="text-base font-medium text-[#1a1a1a] mb-3">
            Result
          </h3>
          <ul className="list-disc pl-6 mb-4 text-[#333] leading-7 space-y-1">
            <li>Reduced duplication</li>
            <li>Clear traceability across standards</li>
            <li>Improved consistency</li>
            <li>Easier multi-framework reporting</li>
            <li>Lower risk of interpretive divergence</li>
          </ul>
          <p className="text-[#555] italic">
            Canonical ESG does not replace reporting work.
          </p>
          <p className="text-[#555] italic">
            It reduces structural fragmentation beneath it.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="mb-14">
        <h2 
          className="text-xl font-normal text-[#1a1a1a] mb-6 pb-3 border-b border-[#e5e5e5]"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          2. Structuring Double Materiality Analysis
        </h2>

        <div className="mb-8">
          <h3 className="text-base font-medium text-[#1a1a1a] mb-3">
            The Situation
          </h3>
          <p className="text-[#333] leading-7 mb-4">
            Under ESRS, companies must assess:
          </p>
          <ul className="list-disc pl-6 mb-4 text-[#333] leading-7 space-y-1">
            <li>Impact materiality</li>
            <li>Financial materiality</li>
          </ul>
          <p className="text-[#333] leading-7 mb-4">
            Under ISSB, focus is primarily on financial materiality.
          </p>
          <p className="text-[#333] leading-7 mb-4">
            Consultants must:
          </p>
          <ul className="list-disc pl-6 mb-6 text-[#333] leading-7 space-y-1">
            <li>Explain differences</li>
            <li>Structure documentation</li>
            <li>Demonstrate consistency</li>
            <li>Avoid conflating lenses</li>
          </ul>
          <p className="text-[#333] leading-7">
            Without structural separation, materiality modelling becomes conceptually unstable.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-base font-medium text-[#1a1a1a] mb-3">
            Canonical ESG Approach
          </h3>
          <p className="text-[#333] leading-7 mb-4">
            Canonical ESG distinguishes:
          </p>
          <ul className="list-disc pl-6 mb-4 text-[#333] leading-7 space-y-1">
            <li>The semantic concept (CDI)</li>
            <li>The interpretive lens (CMP)</li>
            <li>The regulatory framing (Jurisdiction CMP)</li>
          </ul>
          <p className="text-[#333] leading-7 mb-4">
            A disclosure concept remains stable.
          </p>
          <p className="text-[#333] leading-7 mb-4">
            Materiality is modelled as an interpretive layer.
          </p>
          <p className="text-[#333] leading-7 mb-4">
            This enables:
          </p>
          <ul className="list-disc pl-6 mb-4 text-[#333] leading-7 space-y-1">
            <li>Clear documentation of financial vs impact perspective</li>
            <li>Transparent regulatory alignment</li>
            <li>Structured reasoning for auditors and regulators</li>
          </ul>
        </div>

        <div>
          <h3 className="text-base font-medium text-[#1a1a1a] mb-3">
            Result
          </h3>
          <ul className="list-disc pl-6 mb-4 text-[#333] leading-7 space-y-1">
            <li>Cleaner materiality matrices</li>
            <li>Improved defensibility</li>
            <li>Clear explanation of cross-standard divergence</li>
            <li>Reduced interpretive confusion</li>
          </ul>
        </div>
      </section>

      {/* Section 3 */}
      <section className="mb-14">
        <h2 
          className="text-xl font-normal text-[#1a1a1a] mb-6 pb-3 border-b border-[#e5e5e5]"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          3. EU Taxonomy KPI and Alignment Modelling
        </h2>

        <div className="mb-8">
          <h3 className="text-base font-medium text-[#1a1a1a] mb-3">
            The Situation
          </h3>
          <p className="text-[#333] leading-7 mb-4">
            EU Taxonomy requires modelling of:
          </p>
          <ul className="list-disc pl-6 mb-6 text-[#333] leading-7 space-y-1">
            <li>Eligibility</li>
            <li>Alignment</li>
            <li>Technical Screening Criteria</li>
            <li>Do No Significant Harm (DNSH)</li>
            <li>Minimum Safeguards</li>
            <li>Turnover, CapEx, and OpEx KPIs</li>
          </ul>
          <p className="text-[#333] leading-7 mb-4">
            Consultants often build complex Excel structures to manage:
          </p>
          <ul className="list-disc pl-6 mb-6 text-[#333] leading-7 space-y-1">
            <li>Activity mapping</li>
            <li>Revenue attribution</li>
            <li>Screening assessments</li>
            <li>Disclosure reconciliation</li>
          </ul>
          <p className="text-[#333] leading-7">
            This process is prone to structural inconsistency.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-base font-medium text-[#1a1a1a] mb-3">
            Canonical ESG Approach
          </h3>
          <p className="text-[#333] leading-7 mb-4">
            The EU Taxonomy CMP models:
          </p>
          <ul className="list-disc pl-6 mb-4 text-[#333] leading-7 space-y-1">
            <li>Economic activity</li>
            <li>Environmental objective</li>
            <li>Screening criteria</li>
            <li>DNSH tests</li>
            <li>Safeguards</li>
            <li>KPI metrics</li>
          </ul>
          <p className="text-[#333] leading-7 mb-4">
            All anchored to stable semantic CDIs.
          </p>
          <p className="text-[#333] leading-7 mb-4">
            This allows:
          </p>
          <ul className="list-disc pl-6 mb-4 text-[#333] leading-7 space-y-1">
            <li>Traceable alignment modelling</li>
            <li>Transparent documentation of assumptions</li>
            <li>Structured KPI derivation</li>
            <li>Separation of meaning from regulation</li>
          </ul>
        </div>

        <div>
          <h3 className="text-base font-medium text-[#1a1a1a] mb-3">
            Result
          </h3>
          <ul className="list-disc pl-6 mb-4 text-[#333] leading-7 space-y-1">
            <li>Cleaner alignment analysis</li>
            <li>Reduced ambiguity in eligibility vs alignment</li>
            <li>Structured audit trail</li>
            <li>Improved regulatory defensibility</li>
          </ul>
        </div>
      </section>

      {/* Section 4 */}
      <section className="mb-14">
        <h2 
          className="text-xl font-normal text-[#1a1a1a] mb-6 pb-3 border-b border-[#e5e5e5]"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          4. Cross-Framework Gap Analysis
        </h2>

        <div className="mb-8">
          <h3 className="text-base font-medium text-[#1a1a1a] mb-3">
            The Situation
          </h3>
          <p className="text-[#333] leading-7 mb-4">
            A client currently reports under GRI.
            They want readiness for ISSB or ESRS.
          </p>
          <p className="text-[#333] leading-7 mb-4">
            Consultants must determine:
          </p>
          <ul className="list-disc pl-6 mb-6 text-[#333] leading-7 space-y-1">
            <li>Which disclosures already exist</li>
            <li>Which concepts are partially covered</li>
            <li>Which are missing entirely</li>
            <li>Where interpretation differs</li>
          </ul>
          <p className="text-[#333] leading-7">
            This typically requires manual comparison across standards.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-base font-medium text-[#1a1a1a] mb-3">
            Canonical ESG Approach
          </h3>
          <p className="text-[#333] leading-7 mb-4">
            Using CDIs as semantic anchors:
          </p>
          <ul className="list-disc pl-6 mb-4 text-[#333] leading-7 space-y-1">
            <li>Existing disclosures are mapped to CDIs</li>
            <li>Target frameworks are analysed via CMP</li>
            <li>Structural equivalence and divergence become visible</li>
          </ul>
          <p className="text-[#333] leading-7 mb-4">
            This enables:
          </p>
          <ul className="list-disc pl-6 mb-4 text-[#333] leading-7 space-y-1">
            <li>Systematic gap identification</li>
            <li>Clear transition roadmap</li>
            <li>Reduced rework</li>
            <li>Evidence-based advisory</li>
          </ul>
        </div>

        <div>
          <h3 className="text-base font-medium text-[#1a1a1a] mb-3">
            Result
          </h3>
          <ul className="list-disc pl-6 mb-4 text-[#333] leading-7 space-y-1">
            <li>Faster transition planning</li>
            <li>Structured advisory output</li>
            <li>Transparent reasoning</li>
            <li>Reduced duplication of effort</li>
          </ul>
        </div>
      </section>

      {/* Summary Section */}
      <section className="pt-8 border-t border-[#e5e5e5]">
        <h2 
          className="text-xl font-normal text-[#1a1a1a] mb-6"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          What Canonical ESG Enables for Consultants
        </h2>
        <p className="text-[#333] leading-7 mb-4">
          Canonical ESG supports:
        </p>
        <ul className="list-disc pl-6 mb-6 text-[#333] leading-7 space-y-1">
          <li>Multi-standard reporting structuring</li>
          <li>Regulatory modelling</li>
          <li>Interpretive transparency</li>
          <li>Reduced semantic drift</li>
          <li>Version stability across evolving standards</li>
        </ul>
        <p className="text-[#555] italic">
          It does not replace professional judgement.
        </p>
        <p className="text-[#555] italic">
          It provides structural infrastructure beneath it.
        </p>
      </section>
    </main>
  );
}
