export default function RegulatoryModellingPage() {
  return (
    <main className="max-w-[800px] mx-auto px-6 py-12">
      <nav className="mb-6">
        <a href="/applications" className="text-[#666] hover:text-[#1a1a1a] text-sm">Applications</a>
        <span className="text-[#999] mx-2">/</span>
        <span className="text-[#333] text-sm">Regulatory & Double Materiality Modelling</span>
      </nav>

      <header className="mb-16">
        <h1 className="font-serif text-[#111] text-3xl font-medium tracking-tight leading-tight mb-6">
          Regulatory & Double Materiality Modelling
        </h1>
      </header>

      {/* Introduction */}
      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <p className="text-[#333] leading-relaxed text-base mb-4">
          Sustainability regulation increasingly embeds legal interpretation directly into disclosure architecture.
        </p>
        <ul className="list-disc list-inside space-y-1 text-[#333] mb-6">
          <li>ESRS under CSRD introduces double materiality.</li>
          <li>EU Taxonomy introduces eligibility and alignment classification.</li>
          <li>Jurisdictional regimes introduce scope, phasing, and assurance logic.</li>
        </ul>
        <p className="text-[#333] leading-relaxed text-base">
          Canonical ESG separates semantic meaning from regulatory obligation.
        </p>
      </section>

      {/* Structural Problem */}
      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-xl font-medium mb-6">
          The Structural Problem
        </h2>

        <p className="text-[#333] leading-relaxed text-base mb-4">
          In many advisory workflows, regulatory logic becomes embedded directly into disclosure models.
        </p>

        <ul className="list-disc list-inside space-y-2 text-[#333] mb-6">
          <li>Framework terminology replaces durable semantic concepts</li>
          <li>Data models are structured around regulation rather than meaning</li>
          <li>Regulatory updates require structural redesign</li>
          <li>Semantic drift accumulates over time</li>
        </ul>

        <p className="text-[#333] leading-relaxed text-base">
          Instability arises when meaning and obligation are conflated.
        </p>
      </section>

      {/* Separation Principle */}
      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-xl font-medium mb-6">
          The Canonical ESG Separation Principle
        </h2>

        <p className="text-[#333] leading-relaxed text-base mb-4">
          Canonical ESG operates through three structurally distinct layers:
        </p>

        <p className="text-[#333] leading-relaxed text-base mb-2">
          <strong>Layer 1 — Semantic Meaning (CDI)</strong>
        </p>
        <p className="text-[#333] leading-relaxed text-base mb-4">
          Stable disclosure concepts defined independently of legal regimes.
        </p>

        <p className="text-[#333] leading-relaxed text-base mb-2">
          <strong>Layer 2 — Framework Interpretation (CMP)</strong>
        </p>
        <p className="text-[#333] leading-relaxed text-base mb-4">
          Modelling of how voluntary and global standards interpret those concepts.
        </p>

        <p className="text-[#333] leading-relaxed text-base mb-2">
          <strong>Layer 3 — Jurisdictional Mapping</strong>
        </p>
        <p className="text-[#333] leading-relaxed text-base mb-4">
          Representation of legal obligation, scope, and regulatory logic.
        </p>

        <p className="text-[#333] leading-relaxed text-base font-medium">
          Regulation is modelled.
          <br />
          It is not embedded into semantic meaning.
        </p>
      </section>

      {/* Double Materiality */}
      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-xl font-medium mb-6">
          Double Materiality Modelling (ESRS Example)
        </h2>

        <p className="text-[#333] leading-relaxed text-base mb-4">
          Under ESRS, disclosure obligation is determined by:
        </p>

        <ul className="list-disc list-inside space-y-1 text-[#333] mb-6">
          <li>Impact materiality assessment</li>
          <li>Financial materiality assessment</li>
        </ul>

        <p className="text-[#333] leading-relaxed text-base mb-4">
          Canonical ESG represents this structurally:
        </p>

        <ul className="list-disc list-inside space-y-1 text-[#333] mb-6">
          <li><strong>CDI</strong> — Stable disclosure concept</li>
          <li><strong>IRO / assessment layer</strong> — Materiality evaluation logic</li>
          <li><strong>Jurisdiction CMP</strong> — Legal obligation modelling</li>
        </ul>

        <p className="text-[#333] leading-relaxed text-base">
          Double materiality remains a regulatory lens.  
          The semantic concept remains unchanged.
        </p>
      </section>

      {/* Value Chain Scope */}
      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-xl font-medium mb-6">
          Value Chain Scope Modelling
        </h2>

        <p className="text-[#333] leading-relaxed text-base mb-4">
          Regulatory regimes frequently expand reporting boundaries beyond operational control.
        </p>

        <ul className="list-disc list-inside space-y-1 text-[#333] mb-6">
          <li>Upstream emissions</li>
          <li>Downstream impacts</li>
          <li>Supply chain labour practices</li>
          <li>Community effects</li>
        </ul>

        <p className="text-[#333] leading-relaxed text-base">
          Canonical ESG models scope expansion at the jurisdiction layer.
          <br />
          The underlying disclosure concept remains stable.
        </p>
      </section>

      {/* EU Taxonomy */}
      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-xl font-medium mb-6">
          EU Taxonomy Alignment Modelling
        </h2>

        <p className="text-[#333] leading-relaxed text-base mb-4">
          The EU Taxonomy introduces regulatory classification overlays:
        </p>

        <ul className="list-disc list-inside space-y-1 text-[#333] mb-6">
          <li>Eligibility assessment</li>
          <li>Technical screening criteria</li>
          <li>Do No Significant Harm (DNSH)</li>
          <li>Minimum safeguards</li>
          <li>KPI computation (Turnover, CapEx, OpEx)</li>
        </ul>

        <p className="text-[#333] leading-relaxed text-base mb-4">
          These overlays are applied to stable CDIs across climate, energy, water, biodiversity, pollution, and economic domains.
        </p>

        <p className="text-[#333] leading-relaxed text-base">
          The taxonomy does not redefine emissions or energy use.
          <br />
          It defines regulatory classification logic applied to them.
        </p>
      </section>

      {/* What This Enables */}
      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-xl font-medium mb-6">
          What This Enables
        </h2>

        <ul className="list-disc list-inside space-y-2 text-[#333] mb-6">
          <li>Clear separation between meaning and obligation</li>
          <li>Future-resilient modelling under regulatory change</li>
          <li>Reduced rebuild effort across regime updates</li>
          <li>Structured regulatory equivalence analysis</li>
          <li>Transparent double materiality representation</li>
          <li>Taxonomy alignment without semantic mutation</li>
        </ul>

        <p className="text-[#333] leading-relaxed text-base mb-4">
          Particularly relevant for:
        </p>

        <ul className="list-disc list-inside space-y-1 text-[#333]">
          <li>CSRD advisory engagements</li>
          <li>Multi-jurisdiction reporting groups</li>
          <li>ESG data architecture design</li>
          <li>Audit and assurance modelling</li>
          <li>Regulatory gap analysis</li>
        </ul>
      </section>

      {/* Why It Matters */}
      <section className="mb-12">
        <h2 className="font-serif text-[#1a1a1a] text-xl font-medium mb-6">
          Why Regulatory Modelling Matters
        </h2>

        <p className="text-[#333] leading-relaxed text-base mb-4">
          Sustainability regulation is expanding across jurisdictions, each introducing distinct materiality logics, scope definitions, and assurance frameworks.
        </p>

        <p className="text-[#333] leading-relaxed text-base mb-4">
          When semantic meaning is embedded within regulation, each regulatory change requires structural redesign.
        </p>

        <p className="text-[#333] leading-relaxed text-base">
          Canonical ESG isolates regulation at the outer layer.
          <br />
          Semantic stability is preserved beneath regulatory evolution.
        </p>
      </section>

      {/* Related */}
      <section>
        <h2 className="font-serif text-[#1a1a1a] text-xl font-medium mb-6">
          Related Use Cases
        </h2>

        <ul className="list-disc list-inside space-y-2 text-[#333]">
          <li>
            <a href="/applications/cross-framework-climate-modelling" className="text-[#333] hover:text-[#111] border-b border-[#333] hover:border-[#111]">
              Cross-Framework Climate Modelling
            </a>
          </li>
          <li>
            <a href="/applications/consultants" className="text-[#333] hover:text-[#111] border-b border-[#333] hover:border-[#111]">
              Applications for ESG Consultants
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
