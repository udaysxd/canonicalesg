import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Applications for ESG Consultants - Canonical ESG",
  description: "How ESG consultants can use Canonical ESG for structured multi-framework advisory workflows and semantic stability across reporting regimes.",
  alternates: {
    canonical: "https://canonicalesg.org/applications/consultants",
  },
}

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
          Canonical ESG operates as semantic infrastructure beneath sustainability standards.
        </p>
        <p className="text-[#333] leading-7 mt-4 max-w-2xl">
          For ESG consultants, it provides a structural modelling layer that reduces duplication, clarifies interpretive boundaries, and improves cross-framework consistency.
        </p>
        <p className="text-[#555] mt-4">
          The following scenarios illustrate practical applications in advisory and reporting contexts.
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
            These frameworks request overlapping disclosure concepts — expressed through different terminology, structures, and interpretive assumptions.
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
            This increases cost, time exposure, and interpretation risk.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-base font-medium text-[#1a1a1a] mb-3">
            Canonical ESG Approach
          </h3>
          <p className="text-[#333] leading-7 mb-4">
            Canonical ESG structurally separates:
          </p>
          <ul className="list-disc pl-6 mb-4 text-[#333] leading-7 space-y-1">
            <li>Semantic meaning (CDI layer)</li>
            <li>Framework interpretation (CMP layer)</li>
            <li>Regulatory interpretation (Jurisdiction layer)</li>
          </ul>
          <p className="text-[#333] leading-7 mb-4">
            Disclosures are modelled once at the semantic layer.
          </p>
          <p className="text-[#333] leading-7 mb-4">
            Example: Scope 2 emissions are defined under a single Canonical Disclosure Intent.
          </p>
          <p className="text-[#333] leading-7 mb-4">
            That CDI maps structurally to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-[#333] leading-7 space-y-1">
            <li>ESRS E1</li>
            <li>IFRS S2</li>
            <li>GRI 305-2</li>
            <li>CDP C6</li>
          </ul>
          <p className="text-[#333] leading-7">
            The semantic anchor remains stable while interpretive differences are documented transparently.
          </p>
        </div>

        <div>
          <h3 className="text-base font-medium text-[#1a1a1a] mb-3">
            Result
          </h3>
          <ul className="list-disc pl-6 mb-4 text-[#333] leading-7 space-y-1">
            <li>Reduced structural duplication</li>
            <li>Clear traceability across standards</li>
            <li>Improved cross-framework consistency</li>
            <li>Lower risk of interpretive divergence</li>
            <li>More defensible advisory output</li>
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
            Under ESRS, companies must assess impact materiality and financial materiality.
          </p>
          <p className="text-[#333] leading-7 mb-4">
            Under ISSB, the focus is primarily financial materiality.
          </p>
          <p className="text-[#333] leading-7 mb-4">
            Consultants must:
          </p>
          <ul className="list-disc pl-6 mb-6 text-[#333] leading-7 space-y-1">
            <li>Explain conceptual differences</li>
            <li>Structure documentation clearly</li>
            <li>Demonstrate consistency</li>
            <li>Avoid conflating materiality lenses</li>
          </ul>
          <p className="text-[#333] leading-7">
            Without structural separation, materiality modelling becomes unstable and difficult to defend.
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
            The disclosure concept remains stable.
          </p>
          <p className="text-[#333] leading-7 mb-4">
            Materiality is modelled explicitly as an interpretive layer.
          </p>
          <p className="text-[#333] leading-7">
            This enables transparent documentation of financial versus impact perspectives without conflation.
          </p>
        </div>

        <div>
          <h3 className="text-base font-medium text-[#1a1a1a] mb-3">
            Result
          </h3>
          <ul className="list-disc pl-6 mb-4 text-[#333] leading-7 space-y-1">
            <li>Cleaner materiality matrices</li>
            <li>Improved audit defensibility</li>
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
            EU Taxonomy reporting requires modelling:
          </p>
          <ul className="list-disc pl-6 mb-6 text-[#333] leading-7 space-y-1">
            <li>Eligibility</li>
            <li>Alignment</li>
            <li>Technical Screening Criteria</li>
            <li>Do No Significant Harm (DNSH)</li>
            <li>Minimum Safeguards</li>
            <li>Turnover, CapEx, and OpEx KPIs</li>
          </ul>
          <p className="text-[#333] leading-7">
            Complex spreadsheet structures are often used to manage this, creating structural fragility.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-base font-medium text-[#1a1a1a] mb-3">
            Canonical ESG Approach
          </h3>
          <p className="text-[#333] leading-7 mb-4">
            The EU Taxonomy CMP models regulatory logic explicitly while anchoring all elements to stable CDIs.
          </p>
          <ul className="list-disc pl-6 mb-4 text-[#333] leading-7 space-y-1">
            <li>Economic activity</li>
            <li>Environmental objective</li>
            <li>Screening criteria</li>
            <li>DNSH tests</li>
            <li>Minimum safeguards</li>
            <li>KPI derivation logic</li>
          </ul>
          <p className="text-[#333] leading-7">
            Meaning remains stable while regulatory interpretation is layered transparently.
          </p>
        </div>

        <div>
          <h3 className="text-base font-medium text-[#1a1a1a] mb-3">
            Result
          </h3>
          <ul className="list-disc pl-6 mb-4 text-[#333] leading-7 space-y-1">
            <li>Cleaner alignment analysis</li>
            <li>Reduced ambiguity in eligibility versus alignment</li>
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
            A client reporting under GRI seeks readiness for ISSB or ESRS.
          </p>
          <p className="text-[#333] leading-7 mb-4">
            Consultants must determine:
          </p>
          <ul className="list-disc pl-6 mb-6 text-[#333] leading-7 space-y-1">
            <li>Which disclosures already exist</li>
            <li>Which concepts are partially covered</li>
            <li>Which are missing</li>
            <li>Where interpretive divergence occurs</li>
          </ul>
          <p className="text-[#333] leading-7">
            Manual comparison across standards is resource-intensive and error-prone.
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
            <li>Target frameworks are analysed through CMP</li>
            <li>Structural equivalence and divergence become visible</li>
          </ul>
          <p className="text-[#333] leading-7">
            Gap identification becomes systematic rather than interpretive guesswork.
          </p>
        </div>

        <div>
          <h3 className="text-base font-medium text-[#1a1a1a] mb-3">
            Result
          </h3>
          <ul className="list-disc pl-6 mb-4 text-[#333] leading-7 space-y-1">
            <li>Faster transition planning</li>
            <li>Structured advisory documentation</li>
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
        <ul className="list-disc pl-6 mb-6 text-[#333] leading-7 space-y-1">
          <li>Structured multi-standard reporting</li>
          <li>Explicit regulatory modelling</li>
          <li>Interpretive transparency</li>
          <li>Reduced semantic drift</li>
          <li>Version stability across evolving standards</li>
        </ul>
        <p className="text-[#555] italic">
          Canonical ESG does not replace professional judgement.
        </p>
        <p className="text-[#555] italic">
          It provides structural infrastructure beneath it.
        </p>
      </section>
    </main>
  );
}
