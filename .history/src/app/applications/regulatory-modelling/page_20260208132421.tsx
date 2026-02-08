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

      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <div className="prose prose-neutral max-w-none">
          <p className="text-[#333] leading-relaxed text-base mb-4">
            Regulatory sustainability regimes increasingly embed legal interpretation into disclosure architecture.
          </p>
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-4">
            <li>ESRS under CSRD introduces double materiality.</li>
            <li>EU Taxonomy introduces eligibility and alignment modelling.</li>
            <li>Jurisdictional reporting layers introduce scope, phasing, and assurance requirements.</li>
          </ul>
          <p className="text-[#333] leading-relaxed text-base">
            Canonical ESG separates semantic meaning from regulatory obligation.
          </p>
        </div>
      </section>

      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-xl font-medium mb-6">The Structural Problem</h2>
        <div className="prose prose-neutral max-w-none">
          <p className="text-[#333] leading-relaxed text-base mb-4">
            In most advisory workflows, regulatory logic becomes embedded directly into disclosure modelling.
          </p>
          <p className="text-[#333] font-medium mb-3">This leads to:</p>
          <ul className="list-disc list-inside space-y-2 text-[#333] mb-6">
            <li>Framework-specific terminology replacing durable concepts</li>
            <li>Data models designed around regulation rather than meaning</li>
            <li>Regulatory change requiring structural redesign</li>
            <li>Increased risk of semantic drift over time</li>
          </ul>
          <p className="text-[#333] leading-relaxed text-base mb-4">
            When regulation evolves, the underlying data model must be rebuilt.
          </p>
          <p className="text-[#333] leading-relaxed text-base">
            The instability originates from conflating meaning with obligation.
          </p>
        </div>
      </section>

      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-xl font-medium mb-6">The Canonical ESG Separation Principle</h2>
        <div className="prose prose-neutral max-w-none">
          <p className="text-[#333] leading-relaxed text-base mb-4">
            Canonical ESG operates through three layers:
          </p>
          <p className="text-[#333] leading-relaxed text-base mb-2">
            <strong>Layer 1 — Semantic Meaning (CDI)</strong>
          </p>
          <p className="text-[#333] leading-relaxed text-base mb-4">
            Defines stable disclosure concepts independent of law.
          </p>
          <p className="text-[#333] leading-relaxed text-base mb-2">
            <strong>Layer 2 — Framework Interpretation (CMP)</strong>
          </p>
          <p className="text-[#333] leading-relaxed text-base mb-4">
            Models how voluntary and global standards interpret those concepts.
          </p>
          <p className="text-[#333] leading-relaxed text-base mb-2">
            <strong>Layer 3 — Jurisdictional Mapping</strong>
          </p>
          <p className="text-[#333] leading-relaxed text-base mb-4">
            Models how legal regimes impose obligations, scope, and regulatory interpretation.
          </p>
          <p className="text-[#333] leading-relaxed text-base font-medium">
            Regulation is modelled.
            <br />
            It is not embedded into semantic meaning.
          </p>
        </div>
      </section>

      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-xl font-medium mb-6">Double Materiality Modelling (ESRS Example)</h2>
        <div className="prose prose-neutral max-w-none">
          <p className="text-[#333] leading-relaxed text-base mb-4">
            Under ESRS:
          </p>
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-4">
            <li>Impact materiality must be assessed</li>
            <li>Financial materiality must be assessed</li>
            <li>Results determine disclosure obligation</li>
          </ul>
          <p className="text-[#333] leading-relaxed text-base mb-3">
            Canonical ESG models this as:
          </p>
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-4">
            <li><strong>CDI</strong> → Stable disclosure concept</li>
            <li><strong>IRO layer</strong> → Materiality assessment logic</li>
            <li><strong>Jurisdiction CMP</strong> → Legal obligation modelling</li>
          </ul>
          <p className="text-[#333] leading-relaxed text-base mb-4">
            Double materiality remains regulatory.
            <br />
            The semantic meaning of the disclosure remains unchanged.
          </p>
          <p className="text-[#333] leading-relaxed text-base">
            This prevents semantic distortion when applied outside the EU context.
          </p>
        </div>
      </section>

      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-xl font-medium mb-6">Value Chain Scope Modelling</h2>
        <div className="prose prose-neutral max-w-none">
          <p className="text-[#333] leading-relaxed text-base mb-4">
            Regulatory regimes may extend reporting beyond operational boundaries.
          </p>
          <p className="text-[#333] leading-relaxed text-base mb-3">
            Examples include:
          </p>
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-4">
            <li>Upstream emissions</li>
            <li>Downstream impacts</li>
            <li>Supply chain labour practices</li>
            <li>Community impacts</li>
          </ul>
          <p className="text-[#333] leading-relaxed text-base mb-4">
            Canonical ESG models scope expansion at the jurisdiction layer.
          </p>
          <p className="text-[#333] leading-relaxed text-base mb-4">
            The underlying disclosure concept remains stable.
          </p>
          <p className="text-[#333] leading-relaxed text-base">
            Scope expansion does not redefine meaning.
          </p>
        </div>
      </section>

      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-xl font-medium mb-6">EU Taxonomy Alignment Modelling</h2>
        <div className="prose prose-neutral max-w-none">
          <p className="text-[#333] leading-relaxed text-base mb-4">
            The EU Taxonomy introduces:
          </p>
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-4">
            <li>Eligibility assessment</li>
            <li>Technical screening criteria</li>
            <li>Do No Significant Harm (DNSH)</li>
            <li>Minimum safeguards</li>
            <li>KPI disclosures (Turnover, CapEx, OpEx)</li>
          </ul>
          <p className="text-[#333] leading-relaxed text-base mb-3">
            Canonical ESG models these as regulatory overlays applied to:
          </p>
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-4">
            <li>Climate CDIs</li>
            <li>Energy CDIs</li>
            <li>Water CDIs</li>
            <li>Biodiversity CDIs</li>
            <li>Pollution CDIs</li>
            <li>Economic CDIs</li>
          </ul>
          <p className="text-[#333] leading-relaxed text-base mb-4">
            The taxonomy does not redefine emissions or energy use.
          </p>
          <p className="text-[#333] leading-relaxed text-base">
            It defines regulatory classification rules applied to them.
          </p>
        </div>
      </section>

      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-xl font-medium mb-6">What This Enables</h2>
        <div className="prose prose-neutral max-w-none mb-6">
          <ul className="list-disc list-inside space-y-2 text-[#333] mb-6">
            <li>Clear separation between disclosure meaning and legal obligation</li>
            <li>Future-proof modelling when regulation evolves</li>
            <li>Reduced rebuild effort under regime changes</li>
            <li>Structured regulatory equivalence analysis</li>
            <li>Transparent double materiality representation</li>
            <li>Taxonomy alignment without semantic mutation</li>
          </ul>
          <p className="text-[#333] leading-relaxed text-base mb-3">
            This architecture is particularly relevant for:
          </p>
          <ul className="list-disc list-inside space-y-1 text-[#333]">
            <li>CSRD advisory engagements</li>
            <li>Multi-jurisdiction reporting groups</li>
            <li>ESG data architecture design</li>
            <li>Audit and assurance modelling</li>
            <li>Regulatory gap analysis</li>
          </ul>
        </div>
      </section>

      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-xl font-medium mb-6">Why Regulatory Modelling Matters</h2>
        <div className="prose prose-neutral max-w-none">
          <p className="text-[#333] leading-relaxed text-base mb-4">
            Sustainability regulation is expanding rapidly.
          </p>
          <p className="text-[#333] leading-relaxed text-base mb-4">
            New jurisdictions adopt different materiality logics, scope definitions, and assurance requirements.
          </p>
          <p className="text-[#333] leading-relaxed text-base mb-4">
            If semantic meaning is embedded inside regulation, every regulatory change forces structural redesign.
          </p>
          <p className="text-[#333] leading-relaxed text-base mb-4">
            Canonical ESG isolates regulation at the outer layer.
          </p>
          <p className="text-[#333] leading-relaxed text-base">
            This allows semantic stability beneath regulatory evolution.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-[#1a1a1a] text-xl font-medium mb-6">Related Use Cases</h2>
        <div className="prose prose-neutral max-w-none">
          <ul className="list-disc list-inside space-y-2 text-[#333]">
            <li>
              <a href="/applications/cross-framework-climate-modelling" className="text-[#333] hover:text-[#111] border-b border-[#333] hover:border-[#111]">
                Cross-Framework Climate Modelling
              </a>
            </li>
            <li>
              <a href="/applications/consultants" className="text-[#333] hover:text-[#111] border-b border-[#333] hover:border-[#111]">
                Consultants
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
