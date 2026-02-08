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
          Case Study #2 — EU Taxonomy + ESRS Integrated Modelling
        </h1>
        <p className="text-[#555] text-lg">
          From Disclosure Semantics to Regulatory KPIs
        </p>
      </header>

      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-2xl font-medium mb-6">Context</h2>
        <div className="prose prose-neutral max-w-none mb-6">
          <p className="text-[#333] leading-relaxed text-base mb-4">
            A large EU-listed industrial manufacturing group ("EuroManufacture AG") is subject to:
          </p>
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-4">
            <li>CSRD</li>
            <li>ESRS</li>
            <li>EU Taxonomy Regulation (2020/852)</li>
            <li>Climate Delegated Act</li>
            <li>Environmental Delegated Act</li>
          </ul>
          <p className="text-[#333] leading-relaxed text-base mb-4">
            The company operates in:
          </p>
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-4">
            <li>Heavy industrial equipment</li>
            <li>Renewable component manufacturing</li>
            <li>Cross-border EU subsidiaries</li>
          </ul>
        </div>
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

      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-2xl font-medium mb-6">The Regulatory Challenge</h2>
        <div className="prose prose-neutral max-w-none mb-6">
          <p className="text-[#333] leading-relaxed text-base mb-4">
            The company must:
          </p>
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-4">
            <li>Report ESRS E1–E5 (environmental)</li>
            <li>Perform Double Materiality Assessment</li>
            <li>Disclose EU Taxonomy:</li>
          </ul>
          <ul className="list-disc list-inside space-y-1 text-[#333] ml-6 mb-4">
            <li>Eligibility</li>
            <li>Alignment</li>
            <li>CapEx %</li>
            <li>OpEx %</li>
            <li>Turnover %</li>
            <li>DNSH compliance</li>
            <li>Minimum safeguards</li>
          </ul>
          <p className="text-[#333] font-medium mb-2">Problem:</p>
          <p className="text-[#333] leading-relaxed text-base mb-4">
            ESRS and EU Taxonomy overlap conceptually —
            <br />
            but are structurally different.
          </p>
          <p className="text-[#333] leading-relaxed text-base mb-2">Without semantic discipline:</p>
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-4">
            <li>Climate data gets duplicated</li>
            <li>DNSH checks become manual spreadsheets</li>
            <li>CapEx taxonomy mapping is inconsistent</li>
            <li>Audit trail becomes fragile</li>
            <li>Regulatory drift risk increases</li>
          </ul>
          <p className="text-[#333] leading-relaxed text-base">
            The consulting firm implements Canonical ESG.
          </p>
        </div>
      </section>

      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-2xl font-medium mb-6">Step 1 — Semantic Stabilisation (CDI Layer)</h2>
        <div className="prose prose-neutral max-w-none mb-6">
          <p className="text-[#333] leading-relaxed text-base mb-4">
            All sustainability data is first mapped into CDI v1.
          </p>
          <p className="text-[#333] font-medium mb-3">Examples:</p>
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-6">
            <li>CDI-CLIM-01 → Scope 1 Emissions</li>
            <li>CDI-CLIM-02 → Scope 2 Emissions</li>
            <li>CDI-CLIM-07 → Transition Plan</li>
            <li>CDI-BIOD-03 → Ecosystem Interaction</li>
            <li>CDI-MATR-04 → Circular Material Inputs</li>
            <li>CDI-GOVR-02 → Oversight of Sustainability Risks</li>
            <li>CDI-ECON-05 → Capital Allocation</li>
          </ul>
          <p className="text-[#333] leading-relaxed text-base mb-3">This produces:</p>
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-6">
            <li>One semantically stable dataset</li>
            <li>No regulatory logic embedded</li>
            <li>No Taxonomy logic embedded</li>
            <li>No ESRS interpretation embedded</li>
          </ul>
          <p className="text-[#333] leading-relaxed text-base font-medium">
            Meaning is fixed before interpretation.
          </p>
        </div>
      </section>

      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-2xl font-medium mb-6">Step 2 — ESRS Interpretation (CMP Layer)</h2>
        <div className="prose prose-neutral max-w-none mb-6">
          <p className="text-[#333] leading-relaxed text-base mb-3">Using:</p>
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-4">
            <li>ESRS topical CMPs</li>
            <li>EU jurisdiction CMP</li>
          </ul>
          <p className="text-[#333] leading-relaxed text-base mb-4">
            CDIs are interpreted into ESRS requirements.
          </p>
          <p className="text-[#333] font-medium mb-3">Example:</p>
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-4">
            <li>CDI-CLIM-01 → ESRS E1-6 GHG emissions disclosure</li>
            <li>CDI-CLIM-07 → ESRS E1-1 Transition plan</li>
            <li>CDI-BIOD-03 → ESRS E4 biodiversity impacts</li>
          </ul>
          <p className="text-[#333] leading-relaxed text-base mb-3">Double materiality logic is layered:</p>
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-4">
            <li>Impact materiality</li>
            <li>Financial materiality</li>
          </ul>
          <p className="text-[#333] leading-relaxed text-base mb-4">
            Material topics are selected using CDI baseline.
          </p>
          <p className="text-[#333] leading-relaxed text-base mb-2">
            No new data fields are created.
          </p>
          <p className="text-[#333] leading-relaxed text-base font-medium">
            Only interpretation layer is applied.
          </p>
        </div>
      </section>

      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-2xl font-medium mb-6">Step 3 — EU Taxonomy Regulatory Modelling</h2>
        <div className="prose prose-neutral max-w-none mb-6">
          <p className="text-[#333] leading-relaxed text-base mb-4">
            Now the same CDI dataset is interpreted through:
          </p>
          <p className="text-[#333] font-medium mb-3">EU Taxonomy CMP</p>
          <p className="text-[#333] leading-relaxed text-base mb-3">This layer introduces:</p>
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-6">
            <li>Eligibility determination</li>
            <li>Alignment assessment</li>
            <li>Technical Screening Criteria</li>
            <li>DNSH tests</li>
            <li>Minimum safeguards</li>
          </ul>
          <p className="text-[#333] font-medium mb-4">Example — Climate Mitigation Activity</p>
          <p className="text-[#333] leading-relaxed text-base mb-3">
            Business Activity:
          </p>
          <p className="text-[#333] leading-relaxed text-base mb-4">
            Manufacturing of wind turbine gear components
          </p>
          <p className="text-[#333] leading-relaxed text-base mb-3">
            Mapped to:
          </p>
          <p className="text-[#333] leading-relaxed text-base mb-4">
            EU Taxonomy Activity 3.1
            <br />
            Manufacture of renewable energy technologies
          </p>
          <p className="text-[#333] font-medium mb-3">3.1 Eligibility</p>
          <p className="text-[#333] leading-relaxed text-base mb-3">
            Using CDI-ECON-02 (Revenue by Activity)
          </p>
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-4">
            <li>Eligible revenue = €1.2 billion</li>
            <li>Total revenue = €4.2 billion</li>
            <li>Eligibility = 28.6%</li>
          </ul>
          <p className="text-[#333] font-medium mb-3">3.2 Alignment</p>
          <p className="text-[#333] leading-relaxed text-base mb-3">
            Technical Screening Criteria require:
          </p>
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-4">
            <li>Lifecycle emissions below threshold</li>
            <li>Substantial contribution demonstration</li>
          </ul>
          <p className="text-[#333] leading-relaxed text-base mb-3">
            Using CDI-CLIM-04 (Product Lifecycle Emissions)
          </p>
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-4">
            <li>Lifecycle intensity = 9g CO₂e/kWh</li>
            <li>Threshold = 100g CO₂e/kWh</li>
          </ul>
          <p className="text-[#333] leading-relaxed text-base mb-4">
            Activity qualifies.
          </p>
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-6">
            <li>Aligned turnover = €1.05 billion</li>
            <li>Aligned turnover ratio = 25%</li>
          </ul>
          <p className="text-[#333] font-medium mb-3">3.3 DNSH (Do No Significant Harm)</p>
          <p className="text-[#333] leading-relaxed text-base mb-3">
            DNSH requires evaluation across:
          </p>
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-4">
            <li>Water</li>
            <li>Circular economy</li>
            <li>Pollution</li>
            <li>Biodiversity</li>
          </ul>
          <p className="text-[#333] leading-relaxed text-base mb-3">
            Instead of new analysis,
            <br />
            consultants reuse:
          </p>
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-4">
            <li>CDI-WATR domain</li>
            <li>CDI-MATR domain</li>
            <li>CDI-POLL domain</li>
            <li>CDI-BIOD domain</li>
          </ul>
          <p className="text-[#333] leading-relaxed text-base mb-4">
            No parallel taxonomy spreadsheet created.
          </p>
          <p className="text-[#333] leading-relaxed text-base font-medium">
            DNSH evaluation becomes structured semantic checks.
          </p>
          <p className="text-[#333] font-medium mb-3 mt-6">3.4 Minimum Safeguards</p>
          <p className="text-[#333] leading-relaxed text-base mb-3">
            Minimum safeguards assessment reuses:
          </p>
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-4">
            <li>CDI-GOVR</li>
            <li>CDI-WORK</li>
            <li>CDI-VCWR</li>
          </ul>
          <p className="text-[#333] leading-relaxed text-base font-medium">
            No new governance questionnaire required.
          </p>
        </div>
      </section>

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

      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-2xl font-medium mb-6">Step 4 — KPI Computation</h2>
        <div className="prose prose-neutral max-w-none mb-6">
          <p className="text-[#333] leading-relaxed text-base mb-4">
            Taxonomy KPIs generated:
          </p>
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-4">
            <li>Aligned Turnover: 25%</li>
            <li>Aligned CapEx: 41%</li>
            <li>Aligned OpEx: 18%</li>
          </ul>
          <p className="text-[#333] leading-relaxed text-base mb-4">
            All derived from CDI economic base.
          </p>
          <p className="text-[#333] leading-relaxed text-base font-medium">
            No recalculation required when ESRS disclosures updated.
          </p>
        </div>
      </section>

      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-2xl font-medium mb-6">Step 5 — Regulatory Layer Separation</h2>
        <div className="prose prose-neutral max-w-none mb-6">
          <p className="text-[#333] font-medium mb-3">Important architectural outcome:</p>
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-4">
            <li>CDI layer remains unchanged</li>
            <li>ESRS layer applies reporting structure</li>
            <li>Taxonomy layer applies legal screening</li>
            <li>No semantic drift occurs</li>
          </ul>
          <p className="text-[#333] leading-relaxed text-base mb-4">
            If EU Taxonomy updates thresholds,
            <br />
            only Jurisdiction CMP updates.
          </p>
          <p className="text-[#333] leading-relaxed text-base font-medium">
            CDI baseline remains stable.
          </p>
        </div>
      </section>

      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-2xl font-medium mb-6">Quantified Outcomes</h2>
        <div className="prose prose-neutral max-w-none mb-4">
          <p className="text-[#333] leading-relaxed text-base mb-6">
            Compared to traditional workflow:
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-[#ddd]">
                <th className="py-3 pr-4 text-[#333] font-medium">Metric</th>
                <th className="py-3 pr-4 text-[#333] font-medium text-center">Without Canonical ESG</th>
                <th className="py-3 text-[#333] font-medium text-center">With Canonical ESG</th>
              </tr>
            </thead>
            <tbody className="text-[#333]">
              <tr className="border-b border-[#eee]">
                <td className="py-3 pr-4">Taxonomy modelling time</td>
                <td className="py-3 pr-4 text-center">9–12 weeks</td>
                <td className="py-3 text-center">5 weeks</td>
              </tr>
              <tr className="border-b border-[#eee]">
                <td className="py-3 pr-4">Data duplication</td>
                <td className="py-3 pr-4 text-center">High</td>
                <td className="py-3 text-center">None</td>
              </tr>
              <tr className="border-b border-[#eee]">
                <td className="py-3 pr-4">DNSH spreadsheets</td>
                <td className="py-3 pr-4 text-center">7 parallel files</td>
                <td className="py-3 text-center">Unified semantic base</td>
              </tr>
              <tr className="border-b border-[#eee]">
                <td className="py-3 pr-4">Audit traceability</td>
                <td className="py-3 pr-4 text-center">Fragmented</td>
                <td className="py-3 text-center">Structured</td>
              </tr>
              <tr>
                <td className="py-3 pr-4">Update effort (reg change)</td>
                <td className="py-3 pr-4 text-center">High</td>
                <td className="py-3 text-center">Layer-specific</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-8 border-l-2 border-[#333] pl-4 py-2">
          <p className="text-[#333] italic leading-relaxed text-base">
            "Regulatory modelling shifted from document management to architecture management."
          </p>
        </div>
      </section>

      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-2xl font-medium mb-6">Why This Matters</h2>
        <div className="prose prose-neutral max-w-none mb-6">
          <p className="text-[#333] leading-relaxed text-base mb-4">
            EU regulation is expanding.
          </p>
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-4">
            <li>ESRS evolves.</li>
            <li>Taxonomy evolves.</li>
            <li>Delegated Acts evolve.</li>
          </ul>
          <p className="text-[#333] leading-relaxed text-base mb-4">
            Canonical ESG allows:
          </p>
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-4">
            <li>Legal interpretation without semantic mutation</li>
            <li>Stable modelling across regulatory cycles</li>
            <li>Structured audit trail</li>
            <li>Separation of meaning and law</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex justify-between items-center">
          <a 
            href="/applications" 
            className="text-[#333] hover:text-[#111] text-sm font-medium border-b border-[#333] hover:border-[#111] transition-colors"
          >
            ← Back to Applications
          </a>
          <a 
            href="/applications/flagship-case-study" 
            className="text-[#333] hover:text-[#111] text-sm font-medium border-b border-[#333] hover:border-[#111] transition-colors"
          >
            View Case Study #1 →
          </a>
        </div>
      </section>
    </main>
  );
}
