export default function CrossFrameworkClimateModellingPage() {
  return (
    <main className="max-w-[720px] mx-auto px-6 py-12">
      <header className="mb-16">
        <h1 className="font-serif text-[#111] text-3xl font-medium tracking-tight leading-tight mb-6">
          Cross-Framework Climate Modelling
        </h1>
      </header>

      {/* Introduction */}
      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <p className="text-[#333] leading-relaxed text-base mb-4">
          Climate disclosure represents the most structurally duplicated domain across global sustainability standards.
        </p>
        <p className="text-[#333] leading-relaxed text-base mb-4">
          ESRS E1, IFRS S2, GRI 305, CDP Climate, SASB industry metrics, and jurisdictional regimes request overlapping — but differently structured — information.
        </p>
        <p className="text-[#333] leading-relaxed text-base">
          Canonical ESG addresses this duplication at the semantic layer.
        </p>
      </section>

      {/* Structural Problem */}
      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-xl font-medium mb-6">
          The Structural Problem
        </h2>

        <p className="text-[#333] leading-relaxed text-base mb-4">
          Many advisory workflows follow this pattern:
        </p>

        <ol className="list-decimal list-inside space-y-2 text-[#333] mb-6">
          <li>Interpret ESRS requirements</li>
          <li>Interpret ISSB requirements</li>
          <li>Interpret GRI requirements</li>
          <li>Build separate disclosure structures</li>
          <li>Reconcile overlaps manually</li>
        </ol>

        <p className="text-[#333] font-medium mb-3">Consequences:</p>

        <ul className="list-disc list-inside space-y-2 text-[#333] mb-6">
          <li>Redundant narrative drafting</li>
          <li>Repeated metric calculation logic</li>
          <li>Terminology inconsistencies</li>
          <li>Audit reconciliation friction</li>
          <li>Structural inefficiency</li>
        </ul>

        <p className="text-[#333] leading-relaxed text-base">
          The underlying issue is not conceptual disagreement.
          <br />
          It is semantic misalignment.
        </p>
      </section>

      {/* Canonical Approach */}
      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-xl font-medium mb-6">
          The Canonical ESG Approach
        </h2>

        <p className="text-[#333] leading-relaxed text-base mb-4">
          Climate disclosure is structurally separated into three layers:
        </p>

        <ul className="list-disc list-inside space-y-1 text-[#333] mb-8">
          <li>Layer 1 — Climate CDIs (semantic baseline)</li>
          <li>Layer 2 — Cross-Framework CMPs (interpretive modelling)</li>
          <li>Layer 3 — Jurisdiction CMPs (regulatory overlays)</li>
        </ul>

        {/* Step 1 */}
        <div className="mb-10">
          <h3 className="font-serif text-[#1a1a1a] text-lg font-medium mb-4">
            Step 1 — Model Once at the Semantic Layer
          </h3>

          <p className="text-[#333] leading-relaxed text-base mb-4">
            Climate CDIs define durable disclosure concepts:
          </p>

          <ul className="list-disc list-inside space-y-1 text-[#333] mb-6">
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
            <br />
            No regulatory logic is embedded.
          </p>
        </div>

        {/* Step 2 */}
        <div className="mb-10">
          <h3 className="font-serif text-[#1a1a1a] text-lg font-medium mb-4">
            Step 2 — Apply Framework Interpretation
          </h3>

          <p className="text-[#333] leading-relaxed text-base mb-4">
            CMPs interpret those same CDIs across:
          </p>

          <ul className="list-disc list-inside space-y-1 text-[#333] mb-6">
            <li>ESRS E1</li>
            <li>IFRS S2</li>
            <li>GRI 305</li>
            <li>CDP Climate</li>
            <li>SASB sector metrics</li>
          </ul>

          <p className="text-[#333] leading-relaxed text-base font-medium">
            Model once.  
            Interpret many.
          </p>

          <p className="text-[#333] leading-relaxed text-base mt-3">
            The underlying semantic definition remains stable.
          </p>
        </div>

        {/* Step 3 */}
        <div>
          <h3 className="font-serif text-[#1a1a1a] text-lg font-medium mb-4">
            Step 3 — Apply Jurisdictional Overlay (If Required)
          </h3>

          <p className="text-[#333] leading-relaxed text-base mb-4">
            Where regulation applies (e.g., CSRD), jurisdiction CMPs model:
          </p>

          <ul className="list-disc list-inside space-y-1 text-[#333] mb-6">
            <li>Double materiality interpretation</li>
            <li>Regulatory scope thresholds</li>
            <li>EU Taxonomy linkage</li>
            <li>Legal disclosure obligations</li>
          </ul>

          <p className="text-[#333] leading-relaxed text-base">
            The semantic baseline remains unchanged.
          </p>
        </div>
      </section>

      {/* Example */}
      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-xl font-medium mb-6">
          Example — Scope 1 Emissions
        </h2>

        <div className="mb-8">
          <p className="text-[#555] font-medium mb-2">Traditional Workflow</p>
          <ul className="list-disc list-inside space-y-1 text-[#333]">
            <li>Calculate for ESRS</li>
            <li>Reformat for ISSB</li>
            <li>Re-describe for GRI</li>
            <li>Re-enter for CDP</li>
          </ul>
        </div>

        <div className="pl-4 border-l-2 border-[#555] mb-6">
          <p className="text-[#111] font-medium mb-2">Canonical ESG Workflow</p>
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

        <p className="text-[#333] leading-relaxed text-base font-medium">
          One semantic definition.  
          Multiple interpretive outputs.
        </p>
      </section>

      {/* Value for Consultants */}
      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-xl font-medium mb-6">
          What This Enables
        </h2>

        <div className="border border-[#d4d4d4] rounded px-5 py-5 bg-[#fafafa]">
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-6">
            <li>Reduced duplication in drafting</li>
            <li>Clear traceability across frameworks</li>
            <li>Structural equivalence analysis</li>
            <li>Consistent terminology across regimes</li>
            <li>Improved audit reconciliation</li>
            <li>Reduced year-over-year model drift</li>
          </ul>

          <p className="text-[#333] leading-relaxed text-base">
            Canonical ESG is not automation software.
            <br />
            It is semantic infrastructure beneath advisory workflows.
          </p>
        </div>
      </section>

      {/* Where Valuable */}
      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-xl font-medium mb-6">
          Where This Is Most Valuable
        </h2>

        <ul className="list-disc list-inside space-y-2 text-[#333]">
          <li>Organisations reporting under both ESRS and ISSB</li>
          <li>Multinational entities facing multi-regime climate disclosure</li>
          <li>Internal ESG data architecture design</li>
          <li>Assurance engagements requiring cross-framework reconciliation</li>
        </ul>
      </section>

      {/* Why Climate */}
      <section className="mb-12">
        <h2 className="font-serif text-[#1a1a1a] text-xl font-medium mb-6">
          Why Climate First?
        </h2>

        <p className="text-[#333] leading-relaxed text-base mb-4">
          Climate is the most mature and widely harmonised disclosure domain.
        </p>

        <p className="text-[#333] leading-relaxed text-base mb-4">
          It is also the domain where structural fragmentation is most visible.
        </p>

        <p className="text-[#333] leading-relaxed text-base">
          Demonstrating semantic stability here illustrates the broader architectural principle.
        </p>
      </section>
    </main>
  );
}
