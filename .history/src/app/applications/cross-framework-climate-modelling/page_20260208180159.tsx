export default function CrossFrameworkClimateModellingPage() {
  return (
    <main className="max-w-[720px] mx-auto px-6 py-12">
      <header className="mb-16">
        <h1 className="font-serif text-[#111] text-3xl font-medium tracking-tight leading-tight mb-6">
          Cross-Framework Climate Modelling
        </h1>
      </header>

      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <div className="prose prose-neutral max-w-none">
          <p className="text-[#333] leading-relaxed text-base mb-4">
            Climate disclosure is the most structurally duplicated area across global sustainability standards.
          </p>
          <p className="text-[#333] leading-relaxed text-base mb-4">
            ESRS E1, IFRS S2, GRI 305, CDP Climate, SASB industry metrics, and jurisdictional regimes often request overlapping but differently structured information.
          </p>
          <p className="text-[#333] leading-relaxed text-base">
            Canonical ESG addresses this duplication at the semantic layer.
          </p>
        </div>
      </section>

      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-xl font-medium mb-6">The Structural Problem</h2>
        <div className="prose prose-neutral max-w-none">
          <p className="text-[#333] leading-relaxed text-base mb-4">
            Most climate advisory workflows today follow this pattern:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-[#333] mb-6">
            <li>Interpret ESRS requirements</li>
            <li>Interpret ISSB requirements</li>
            <li>Interpret GRI requirements</li>
            <li>Build separate disclosure tables</li>
            <li>Reconcile overlaps manually</li>
          </ol>
          <p className="text-[#333] font-medium mb-3">This leads to:</p>
          <ul className="list-disc list-inside space-y-2 text-[#333] mb-6">
            <li>Redundant narrative drafting</li>
            <li>Repeated metric calculation logic</li>
            <li>Inconsistent terminology</li>
            <li>Increased audit friction</li>
            <li>Higher advisory hours</li>
          </ul>
          <p className="text-[#333] leading-relaxed text-base mb-4">
            The issue is not conceptual difference.
          </p>
          <p className="text-[#333] leading-relaxed text-base">
            It is semantic misalignment.
          </p>
        </div>
      </section>

      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-xl font-medium mb-6">The Canonical ESG Approach</h2>
        <div className="prose prose-neutral max-w-none mb-8">
          <p className="text-[#333] leading-relaxed text-base mb-3">
            Canonical ESG separates climate disclosure into:
          </p>
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-4">
            <li>Layer 1 — Climate CDIs</li>
            <li>Layer 2 — Cross-Framework CMPs</li>
            <li>Layer 3 — Jurisdiction CMPs</li>
          </ul>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-[#1a1a1a] text-lg font-medium mb-4">Step 1 — Model Once at the Semantic Layer</h3>
          <p className="text-[#333] leading-relaxed text-base mb-4">
            Climate CDIs define durable disclosure concepts such as:
          </p>
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-4">
            <li>GHG emissions (Scope 1, 2, 3)</li>
            <li>Governance oversight of climate</li>
            <li>Transition planning</li>
            <li>Scenario analysis</li>
            <li>Climate targets</li>
            <li>Methodology</li>
            <li>Energy interaction</li>
            <li>Climate risk and opportunity exposure</li>
          </ul>
          <p className="text-[#333] leading-relaxed text-base">
            Each CDI represents a single semantic concept.
          </p>
          <p className="text-[#333] leading-relaxed text-base">
            No regulatory logic is embedded.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-[#1a1a1a] text-lg font-medium mb-4">Step 2 — Apply Framework Interpretation</h3>
          <p className="text-[#333] leading-relaxed text-base mb-4">
            CMPs interpret those same CDIs across:
          </p>
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-4">
            <li>ESRS E1</li>
            <li>IFRS S2</li>
            <li>GRI 305</li>
            <li>CDP Climate</li>
            <li>SASB climate metrics</li>
          </ul>
          <p className="text-[#333] leading-relaxed text-base mb-3">
            This allows a consultant to:
          </p>
          <p className="text-[#333] leading-relaxed text-base font-medium">
            Model once → Map many.
          </p>
          <p className="text-[#333] leading-relaxed text-base mt-3">
            Without redefining the underlying concept.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="font-serif text-[#1a1a1a] text-lg font-medium mb-4">Step 3 — Apply Jurisdictional Layer (If Required)</h3>
          <p className="text-[#333] leading-relaxed text-base mb-3">
            Where regulation applies (e.g., CSRD),
            <br />
            Jurisdiction CMPs model:
          </p>
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-4">
            <li>Double materiality interpretation</li>
            <li>Regulatory scope thresholds</li>
            <li>EU Taxonomy alignment linkage</li>
            <li>Legal disclosure obligations</li>
          </ul>
          <p className="text-[#333] leading-relaxed text-base">
            Without altering the original CDI meaning.
          </p>
        </div>
      </section>

      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-xl font-medium mb-6">Example: Scope 1 Emissions</h2>
        <div className="mb-8">
          <p className="text-[#555] font-medium mb-2">Traditional Workflow:</p>
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-2">
            <li>Calculate Scope 1 for ESRS</li>
            <li>Reformat for ISSB</li>
            <li>Re-describe for GRI</li>
            <li>Re-enter for CDP</li>
          </ul>
        </div>
        <div className="pl-4 border-l-2 border-[#555] mb-4">
          <p className="text-[#111] font-medium mb-2">Canonical ESG Workflow:</p>
          <p className="text-[#333] mb-3">
            CDI-CLIM-01 — Scope 1 Emissions (semantic baseline)
          </p>
          <p className="text-[#333] mb-2">Mapped across:</p>
          <ul className="list-disc list-inside space-y-1 text-[#333]">
            <li>ESRS E1-6</li>
            <li>IFRS S2 metrics</li>
            <li>GRI 305-1</li>
            <li>CDP C6</li>
            <li>SASB sector metrics</li>
          </ul>
        </div>
        <p className="text-[#333] leading-relaxed text-base">
          One semantic model.
          <br />
          Multiple interpretive outputs.
        </p>
      </section>

      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-xl font-medium mb-6">What This Enables for Consultants</h2>
        <div className="border border-[#d4d4d4] rounded px-5 py-5 bg-[#fafafa]">
          <ul className="list-disc list-inside space-y-1 text-[#333]">
            <li>Reduced duplication in drafting</li>
            <li>Clear traceability across frameworks</li>
            <li>Structural equivalence analysis</li>
            <li>Consistent terminology across regimes</li>
            <li>Easier audit reconciliation</li>
            <li>Lower model drift year-over-year</li>
          </ul>
          <p className="text-[#333] leading-relaxed text-base mt-4">
            This is not automation software.
          </p>
          <p className="text-[#333] leading-relaxed text-base">
            It is semantic infrastructure beneath advisory workflows.
          </p>
        </div>
      </section>

      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-xl font-medium mb-6">Where This Is Most Valuable</h2>
        <div className="prose prose-neutral max-w-none">
          <ul className="list-disc list-inside space-y-2 text-[#333]">
            <li>Large clients reporting under both ESRS and ISSB</li>
            <li>Multinational entities facing multi-regime climate disclosures</li>
            <li>Firms building internal ESG data models</li>
            <li>Assurance engagements requiring cross-framework reconciliation</li>
          </ul>
        </div>
      </section>

      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-xl font-medium mb-6">Why Climate First?</h2>
        <div className="prose prose-neutral max-w-none">
          <p className="text-[#333] leading-relaxed text-base mb-4">
            Climate is the most developed cross-framework disclosure domain.
          </p>
          <p className="text-[#333] leading-relaxed text-base mb-4">
            It is also the domain where structural fragmentation is most visible.
          </p>
          <p className="text-[#333] leading-relaxed text-base">
            Demonstrating semantic stability here illustrates the broader architectural principle.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-[#1a1a1a] text-xl font-medium mb-6">Related Use Cases</h2>
        <div className="prose prose-neutral max-w-none">
          <ul className="list-disc list-inside space-y-2 text-[#333]">
            <li>Regulatory & Double Materiality Modelling</li>
            <li>Multi-Standard Reporting Architecture</li>
            <li>Taxonomy Alignment Modelling</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
