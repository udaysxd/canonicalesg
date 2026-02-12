import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "EU Taxonomy + ESRS Integrated Modelling - Canonical ESG",
  description: "From semantic stabilisation to regulatory KPI computation — integrated EU Taxonomy and ESRS modelling using jurisdictional mapping layers.",
  alternates: {
    canonical: "https://canonicalesg.org/applications/eu-taxonomy-esrs-integration",
  },
}

export default function EuTaxonomyEsrsIntegrationPage() {
  return (
    <main className="max-w-[800px] mx-auto px-6 py-12">
      <nav className="mb-6">
        <a href="/applications" className="text-[#666] hover:text-[#1a1a1a] text-sm">Applications</a>
        <span className="text-[#999] mx-2">/</span>
        <span className="text-[#333] text-sm">EU Taxonomy + ESRS Integrated Modelling</span>
      </nav>

      <header className="mb-16">
        <h1 className="font-serif text-[#111] text-3xl font-medium tracking-tight leading-tight mb-4">
          EU Taxonomy + ESRS Integrated Modelling
        </h1>
        <p className="text-[#555] text-lg">
          From Semantic Stabilisation to Regulatory KPI Computation
        </p>
      </header>

      {/* Context */}
      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-2xl font-medium mb-6">Context</h2>

        <p className="text-[#333] leading-relaxed text-base mb-4">
          A large EU-listed industrial manufacturing group ("EuroManufacture AG") is subject to:
        </p>

        <ul className="list-disc list-inside space-y-1 text-[#333] mb-6">
          <li>CSRD</li>
          <li>ESRS</li>
          <li>EU Taxonomy Regulation (2020/852)</li>
          <li>Climate Delegated Act</li>
          <li>Environmental Delegated Act</li>
        </ul>

        <div className="grid grid-cols-3 gap-4">
          <div className="border border-[#e5e5e5] rounded p-4 text-center">
            <p className="text-[#666] text-sm mb-1">Revenue</p>
            <p className="text-[#333] font-medium">€4.2 billion</p>
          </div>
          <div className="border border-[#e5e5e5] rounded p-4 text-center">
            <p className="text-[#666] text-sm mb-1">Employees</p>
            <p className="text-[#333] font-medium">9,800</p>
          </div>
          <div className="border border-[#e5e5e5] rounded p-4 text-center">
            <p className="text-[#666] text-sm mb-1">EU-based operations</p>
            <p className="text-[#333] font-medium">72%</p>
          </div>
        </div>
      </section>

      {/* Regulatory Challenge */}
      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-2xl font-medium mb-6">
          The Regulatory Challenge
        </h2>

        <p className="text-[#333] leading-relaxed text-base mb-4">
          ESRS environmental disclosures and EU Taxonomy requirements overlap conceptually but differ structurally.
        </p>

        <p className="text-[#333] font-medium mb-2">Without semantic separation:</p>
        <ul className="list-disc list-inside space-y-1 text-[#333] mb-6">
          <li>Climate data is duplicated across regimes</li>
          <li>DNSH documentation is managed through parallel spreadsheets</li>
          <li>CapEx taxonomy mapping becomes inconsistent</li>
          <li>Audit traceability fragments</li>
          <li>Regulatory drift risk increases</li>
        </ul>

        <p className="text-[#333] leading-relaxed text-base">
          Canonical ESG is implemented as a structural modelling layer beneath both regimes.
        </p>
      </section>

      {/* Step 1 */}
      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-2xl font-medium mb-6">
          Step 1 — Semantic Stabilisation (CDI Layer)
        </h2>

        <p className="text-[#333] leading-relaxed text-base mb-4">
          All sustainability and economic data is first mapped into CDI v1 prior to regulatory interpretation.
        </p>

        <ul className="list-disc list-inside space-y-1 text-[#333] mb-6">
          <li>CDI-CLIM-01 → Scope 1 Emissions</li>
          <li>CDI-CLIM-02 → Scope 2 Emissions</li>
          <li>CDI-CLIM-07 → Transition Plan</li>
          <li>CDI-BIOD-03 → Ecosystem Interaction</li>
          <li>CDI-MATR-04 → Circular Material Inputs</li>
          <li>CDI-GOVR-02 → Oversight of Sustainability Risks</li>
          <li>CDI-ECON-05 → Capital Allocation</li>
        </ul>

        <ul className="list-disc list-inside space-y-1 text-[#333] mb-4">
          <li>Single semantically stable dataset</li>
          <li>No embedded ESRS logic</li>
          <li>No embedded Taxonomy logic</li>
        </ul>

        <p className="text-[#333] font-medium">
          Meaning is stabilised before interpretation.
        </p>
      </section>

      {/* Step 2 */}
      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-2xl font-medium mb-6">
          Step 2 — ESRS Interpretation (CMP Layer)
        </h2>

        <p className="text-[#333] leading-relaxed text-base mb-4">
          Using ESRS topical CMPs and EU jurisdictional CMPs, CDIs are interpreted into reporting requirements.
        </p>

        <ul className="list-disc list-inside space-y-1 text-[#333] mb-6">
          <li>CDI-CLIM-01 → ESRS E1-6 GHG disclosure</li>
          <li>CDI-CLIM-07 → ESRS E1-1 Transition plan</li>
          <li>CDI-BIOD-03 → ESRS E4 Biodiversity impacts</li>
        </ul>

        <p className="text-[#333] leading-relaxed text-base mb-4">
          Double materiality is layered at the interpretive level:
        </p>

        <ul className="list-disc list-inside space-y-1 text-[#333] mb-4">
          <li>Impact materiality</li>
          <li>Financial materiality</li>
        </ul>

        <p className="text-[#333] font-medium">
          No new semantic fields are created. Interpretation is layered onto the stable baseline.
        </p>
      </section>

      {/* Step 3 */}
      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-2xl font-medium mb-6">
          Step 3 — EU Taxonomy Regulatory Modelling
        </h2>

        <p className="text-[#333] leading-relaxed text-base mb-4">
          The same CDI dataset is interpreted through the EU Taxonomy CMP.
        </p>

        <ul className="list-disc list-inside space-y-1 text-[#333] mb-6">
          <li>Eligibility determination</li>
          <li>Alignment assessment</li>
          <li>Technical Screening Criteria</li>
          <li>DNSH tests</li>
          <li>Minimum safeguards</li>
        </ul>

        <p className="text-[#333] font-medium mb-4">
          Example — Climate Mitigation Activity
        </p>

        <p className="text-[#333] leading-relaxed text-base mb-4">
          Wind turbine gear manufacturing mapped to EU Taxonomy Activity 3.1.
        </p>

        <ul className="list-disc list-inside space-y-1 text-[#333] mb-6">
          <li>Eligible revenue: €1.2 billion (28.6%)</li>
          <li>Aligned turnover: €1.05 billion (25%)</li>
        </ul>

        <p className="text-[#333] font-medium">
          DNSH and safeguards reuse existing CDI domains — no parallel spreadsheet structures are created.
        </p>
      </section>

      {/* Diagram (unchanged) */}
      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-2xl font-medium mb-8 text-center">
          EU Taxonomy Regulatory Layering Architecture
        </h2>

        <div style={{ display: 'flex', justifyContent: 'center', margin: '80px 0' }}>
          <svg width="950" height="620" viewBox="0 0 950 620" xmlns="http://www.w3.org/2000/svg">
            <style>{`
              .box { fill: none; stroke: black; stroke-width: 1.4; }
              .line { stroke: black; stroke-width: 1.2; }
              .text { font-family: Arial, Helvetica, sans-serif; font-size: 14px; fill: black; }
              .layer { font-weight: bold; font-size: 15px; }
              .small { font-size: 13px; }
            `}</style>

            {/* Enterprise Data */}
            <rect x="250" y="40" width="450" height="60" className="box"/>
            <text x="475" y="75" textAnchor="middle" className="text">
              Enterprise Sustainability & Financial Data
            </text>

            {/* Layer 1 */}
            <rect x="250" y="130" width="450" height="90" className="box"/>
            <text x="475" y="165" textAnchor="middle" className="text layer">
              Layer 1 — Canonical Disclosure Intents (CDI)
            </text>
            <text x="475" y="185" textAnchor="middle" className="text small">
              Emissions • Energy • Revenue by Activity • CapEx • Water • Biodiversity • Governance
            </text>

            {/* Layer 2 */}
            <rect x="250" y="260" width="450" height="100" className="box"/>
            <text x="475" y="295" textAnchor="middle" className="text layer">
              Layer 2 — Framework Interpretation (CMP)
            </text>
            <text x="475" y="315" textAnchor="middle" className="text small">
              ESRS E1 • E2 • E3 • E4 • E5 • G1
            </text>

            {/* Layer 3 */}
            <rect x="250" y="400" width="450" height="120" className="box"/>
            <text x="475" y="435" textAnchor="middle" className="text layer">
              Layer 3 — Jurisdiction Regulatory Layer
            </text>
            <text x="475" y="455" textAnchor="middle" className="text small">
              EU Taxonomy Modelling:
            </text>
            <text x="475" y="475" textAnchor="middle" className="text small">
              Eligibility • Technical Screening Criteria • DNSH • Minimum Safeguards
            </text>

            {/* Regulatory Outputs */}
            <rect x="250" y="550" width="450" height="60" className="box"/>
            <text x="475" y="585" textAnchor="middle" className="text">
              Regulatory Outputs: % Aligned Turnover • % Aligned CapEx • % Aligned OpEx
            </text>

            {/* Flow Lines */}
            <line x1="475" y1="100" x2="475" y2="130" className="line"/>
            <line x1="475" y1="220" x2="475" y2="260" className="line"/>
            <line x1="475" y1="360" x2="475" y2="400" className="line"/>
            <line x1="475" y1="520" x2="475" y2="550" className="line"/>

          </svg>
        </div>

        <p style={{ textAlign: 'center', fontSize: '13px', marginTop: '10px' }} className="text-[#666]">
          Figure — EU Taxonomy + ESRS Integrated Modelling Architecture
        </p>
      </section>

      {/* KPI Computation */}
      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-2xl font-medium mb-6">
          Step 4 — KPI Computation
        </h2>

        <ul className="list-disc list-inside space-y-1 text-[#333] mb-6">
          <li>Aligned Turnover: 25%</li>
          <li>Aligned CapEx: 41%</li>
          <li>Aligned OpEx: 18%</li>
        </ul>

        <p className="text-[#333] font-medium">
          KPIs are derived from the canonical economic base through layered interpretation.
        </p>
      </section>

      {/* Quantified Outcomes */}
      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-2xl font-medium mb-6">
          Workflow Comparison (Illustrative)
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-[#ddd]">
                <th className="py-3 pr-4 text-[#333] font-medium">Metric</th>
                <th className="py-3 pr-4 text-center text-[#333] font-medium">Traditional</th>
                <th className="py-3 text-center text-[#333] font-medium">Layered Architecture</th>
              </tr>
            </thead>
            <tbody className="text-[#333]">
              <tr className="border-b border-[#eee]">
                <td className="py-3 pr-4">Taxonomy modelling time</td>
                <td className="py-3 pr-4 text-center">9–12 weeks</td>
                <td className="py-3 text-center">~5 weeks</td>
              </tr>
              <tr className="border-b border-[#eee]">
                <td className="py-3 pr-4">Data duplication</td>
                <td className="py-3 pr-4 text-center">High</td>
                <td className="py-3 text-center">Eliminated</td>
              </tr>
              <tr>
                <td className="py-3 pr-4">Regulatory update effort</td>
                <td className="py-3 pr-4 text-center">Full recalculation</td>
                <td className="py-3 text-center">Layer-specific update</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="mb-12">
        <h2 className="font-serif text-[#1a1a1a] text-2xl font-medium mb-6">
          Architectural Significance
        </h2>

        <ul className="list-disc list-inside space-y-1 text-[#333] mb-6">
          <li>Legal interpretation without semantic mutation</li>
          <li>Stable modelling across regulatory cycles</li>
          <li>Layer-isolated updates</li>
          <li>Structured audit traceability</li>
        </ul>

        <p className="text-[#333] font-medium">
          Regulatory modelling becomes layered architecture rather than document management.
        </p>

        <div className="mt-8 flex justify-between items-center">
          <a href="/applications" className="text-[#333] hover:text-[#111] text-sm font-medium border-b border-[#333] hover:border-[#111] transition-colors">
            ← Back to Applications
          </a>
          <a href="/applications/flagship-case-study" className="text-[#333] hover:text-[#111] text-sm font-medium border-b border-[#333] hover:border-[#111] transition-colors">
            View Multi-Standard Case Study →
          </a>
        </div>
      </section>
    </main>
  );
}
