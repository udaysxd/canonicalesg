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
        <div className="max-w-[600px] mx-auto">
          {/* Layer 1 */}
          <div className="border border-[#333] rounded p-4 mb-2">
            <p className="text-[#111] font-medium text-center mb-3 text-sm">Layer 1 — Canonical Disclosure Intents (CDI)</p>
            <div className="grid grid-cols-4 gap-2 text-center text-xs text-[#333]">
              <div className="border border-[#ccc] rounded py-2">Emissions</div>
              <div className="border border-[#ccc] rounded py-2">Energy</div>
              <div className="border border-[#ccc] rounded py-2">Revenue by Activity</div>
              <div className="border border-[#ccc] rounded py-2">CapEx</div>
              <div className="border border-[#ccc] rounded py-2">Water</div>
              <div className="border border-[#ccc] rounded py-2">Biodiversity</div>
              <div className="border border-[#ccc] rounded py-2 col-span-3">Governance</div>
            </div>
          </div>
          
          {/* Divider */}
          <div className="flex justify-center my-2">
            <div className="w-px h-4 bg-[#999]"></div>
          </div>
          
          {/* Layer 2 */}
          <div className="border border-[#333] rounded p-4 mb-2">
            <p className="text-[#111] font-medium text-center mb-3 text-sm">Layer 2 — ESRS Interpretation Layer</p>
            <div className="grid grid-cols-3 gap-2 text-center text-xs text-[#333]">
              <div className="border border-[#ccc] rounded py-2">E1 Climate</div>
              <div className="border border-[#ccc] rounded py-2">E2 Pollution</div>
              <div className="border border-[#ccc] rounded py-2">E3 Water</div>
              <div className="border border-[#ccc] rounded py-2">E4 Biodiversity</div>
              <div className="border border-[#ccc] rounded py-2">E5 Circularity</div>
              <div className="border border-[#ccc] rounded py-2">G1 Governance</div>
            </div>
          </div>
          
          {/* Divider */}
          <div className="flex justify-center my-2">
            <div className="w-px h-4 bg-[#999]"></div>
          </div>
          
          {/* Layer 3 */}
          <div className="border border-[#333] rounded p-4 mb-2">
            <p className="text-[#111] font-medium text-center mb-3 text-sm">Layer 3 — EU Taxonomy Regulatory Layer</p>
            <div className="grid grid-cols-2 gap-2 text-center text-xs text-[#333]">
              <div className="border border-[#ccc] rounded py-2">Eligibility</div>
              <div className="border border-[#ccc] rounded py-2">Technical Screening Criteria</div>
              <div className="border border-[#ccc] rounded py-2">DNSH</div>
              <div className="border border-[#ccc] rounded py-2">Minimum Safeguards</div>
            </div>
          </div>
          
          {/* Divider */}
          <div className="flex justify-center my-2">
            <div className="w-px h-4 bg-[#999]"></div>
          </div>
          
          {/* Layer 4 */}
          <div className="border border-[#333] rounded p-4">
            <p className="text-[#111] font-medium text-center mb-3 text-sm">Layer 4 — KPI Output Layer</p>
            <div className="grid grid-cols-3 gap-2 text-center text-xs text-[#333]">
              <div className="border border-[#ccc] rounded py-2">% Aligned Turnover</div>
              <div className="border border-[#ccc] rounded py-2">% Aligned CapEx</div>
              <div className="border border-[#ccc] rounded py-2">% Aligned OpEx</div>
            </div>
          </div>
          
          {/* Bottom text */}
          <p className="text-[#666] text-sm text-center mt-6 italic">
            Meaning remains stable. Regulation is layered.
          </p>
        </div>
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
        <p className="text-[#1a1a1a] text-xl font-medium text-center mt-8">
          This is regulatory architecture —
          <br />
          not compliance patchwork.
        </p>
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
