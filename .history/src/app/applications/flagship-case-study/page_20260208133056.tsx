export default function FlagshipCaseStudyPage() {
  return (
    <main className="max-w-[800px] mx-auto px-6 py-12">
      <header className="mb-16">
        <h1 className="font-serif text-[#111] text-3xl font-medium tracking-tight leading-tight mb-4">
          Flagship Case Study — Multi-Standard Reporting Without Semantic Duplication
        </h1>
        <p className="text-[#555] text-lg">
          ESRS + ISSB + GRI + CDP Alignment Using Canonical ESG
        </p>
      </header>

      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-2xl font-medium mb-6">Executive Summary</h2>
        <div className="prose prose-neutral max-w-none">
          <p className="text-[#333] leading-relaxed text-base mb-4">
            A multinational industrial manufacturer faced overlapping sustainability reporting obligations across ESRS, ISSB, GRI and CDP.
          </p>
          <p className="text-[#333] leading-relaxed text-base mb-4">
            Instead of running parallel framework-specific workstreams, the advisory team implemented Canonical ESG as a semantic baseline.
          </p>
          <p className="text-[#333] font-medium mb-3">The result:</p>
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-4">
            <li>One climate data model instead of three</li>
            <li>One risk register instead of two</li>
            <li>Reduced advisory duplication from ~28% to under 8%</li>
            <li>Estimated annual advisory efficiency improvement: €420,000</li>
          </ul>
          <p className="text-[#333] leading-relaxed text-base">
            This case demonstrates how semantic stabilisation changes reporting architecture.
          </p>
        </div>
      </section>

      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-2xl font-medium mb-6">Client Profile</h2>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="border border-[#e5e5e5] rounded p-4">
            <p className="text-[#666] text-sm mb-1">Sector</p>
            <p className="text-[#333] font-medium">Industrial Manufacturing</p>
          </div>
          <div className="border border-[#e5e5e5] rounded p-4">
            <p className="text-[#666] text-sm mb-1">Revenue</p>
            <p className="text-[#333] font-medium">€4.8 billion</p>
          </div>
          <div className="border border-[#e5e5e5] rounded p-4">
            <p className="text-[#666] text-sm mb-1">Employees</p>
            <p className="text-[#333] font-medium">14,200</p>
          </div>
          <div className="border border-[#e5e5e5] rounded p-4">
            <p className="text-[#666] text-sm mb-1">Operations</p>
            <p className="text-[#333] font-medium">EU, US, India, Brazil</p>
          </div>
        </div>
        <div>
          <p className="text-[#333] font-medium mb-3">Reporting Obligations</p>
          <ul className="list-disc list-inside space-y-1 text-[#333]">
            <li>ESRS (CSRD compliance)</li>
            <li>ISSB IFRS S1 & S2 (investor reporting)</li>
            <li>GRI 2021 Standards</li>
            <li>CDP Climate & Water</li>
          </ul>
        </div>
      </section>

      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-2xl font-medium mb-6">The Structural Problem</h2>
        <div className="prose prose-neutral max-w-none mb-6">
          <p className="text-[#333] leading-relaxed text-base mb-4">
            The client had mature sustainability reporting — but fragmented architecture.
          </p>
          <p className="text-[#333] font-medium mb-3">Observed Issues</p>
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-6">
            <li>Separate climate workstreams for ESRS and ISSB</li>
            <li>Separate workforce datasets for ESRS S1 and GRI 401–404</li>
            <li>CDP questionnaire manually reconstructed from ESRS outputs</li>
            <li>Inconsistent Scope 3 boundary interpretations</li>
            <li>Double materiality assessment disconnected from investor risk analysis</li>
          </ul>
          <p className="text-[#333] font-medium mb-3">Consequences</p>
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-6">
            <li>4 overlapping reporting teams</li>
            <li>3 climate data models</li>
            <li>2 risk registers</li>
            <li>Narrative inconsistencies across disclosures</li>
            <li>~28% duplicated advisory hours</li>
          </ul>
          <p className="text-[#333] leading-relaxed text-base mb-4">
            The issue was not data availability.
          </p>
          <p className="text-[#333] leading-relaxed text-base font-medium">
            It was semantic duplication.
          </p>
        </div>
      </section>

      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-2xl font-medium mb-6">Step 1 — Establish Canonical Baseline (CDI Layer)</h2>
        <div className="prose prose-neutral max-w-none mb-6">
          <p className="text-[#333] leading-relaxed text-base mb-4">
            Instead of starting with standards, the advisory team structured disclosures using CDI v1.
          </p>
          <p className="text-[#333] font-medium mb-3">Climate Domain CDIs Applied</p>
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-6">
            <li>CDI-CLIM-01 Governance oversight</li>
            <li>CDI-CLIM-10 Climate risk identification</li>
            <li>CDI-CLIM-16 Scope 1 emissions</li>
            <li>CDI-CLIM-17 Scope 2 emissions</li>
            <li>CDI-CLIM-19 Scope 3 emissions</li>
            <li>CDI-CLIM-22 Transition plan</li>
            <li>CDI-CLIM-28 Scenario analysis</li>
          </ul>
          <p className="text-[#333] leading-relaxed text-base mb-3">This created:</p>
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-6">
            <li>One semantic model</li>
            <li>No embedded regulatory logic</li>
            <li>Framework-neutral meaning</li>
          </ul>
          <p className="text-[#333] leading-relaxed text-base">
            Meaning was defined once.
            <br />
            Data structured once.
          </p>
        </div>
      </section>

      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-2xl font-medium mb-6">Step 2 — Framework Interpretation (CMP Layer)</h2>
        <div className="prose prose-neutral max-w-none mb-6">
          <p className="text-[#333] leading-relaxed text-base mb-3">
            Using Canonical Mapping Packs:
          </p>
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-6">
            <li>ESRS E1</li>
            <li>ISSB IFRS S2</li>
            <li>GRI 305</li>
            <li>CDP Climate</li>
          </ul>
          <p className="text-[#333] leading-relaxed text-base mb-4">
            Each CDI was interpreted per framework without altering its core meaning.
          </p>
          <p className="text-[#333] font-medium mb-3">Example — CDI-CLIM-16 (Scope 1 Emissions)</p>
          <p className="text-[#333] leading-relaxed text-base mb-2">Mapped to:</p>
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-4">
            <li>ESRS E1-6</li>
            <li>IFRS S2 §29(a)</li>
            <li>GRI 305-1</li>
            <li>CDP C6.1</li>
          </ul>
          <p className="text-[#333] leading-relaxed text-base mb-2">
            Same data.
            <br />
            Different interpretive outputs.
          </p>
          <p className="text-[#333] leading-relaxed text-base font-medium">
            No duplication.
          </p>
        </div>
      </section>

      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-2xl font-medium mb-6">Step 3 — Regulatory Modelling (Jurisdiction Layer)</h2>
        <div className="prose prose-neutral max-w-none mb-6">
          <p className="text-[#333] font-medium mb-3">For EU operations:</p>
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-6">
            <li>Double materiality logic applied</li>
            <li>Value-chain boundary expansion</li>
            <li>ESRS narrative requirements layered</li>
            <li>Assurance-ready structuring</li>
          </ul>
          <p className="text-[#333] font-medium mb-3">For US investor reporting:</p>
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-6">
            <li>ISSB interpretation applied</li>
            <li>No double materiality expansion</li>
            <li>Investor materiality lens retained</li>
          </ul>
          <p className="text-[#333] leading-relaxed text-base">
            Same CDI.
            <br />
            Different regulatory layer.
            <br />
            No semantic drift.
          </p>
        </div>
      </section>

      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-2xl font-medium mb-6">Quantified Outcomes</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-[#ddd]">
                <th className="py-3 pr-4 text-[#333] font-medium">Metric</th>
                <th className="py-3 pr-4 text-[#333] font-medium text-center">Before</th>
                <th className="py-3 text-[#333] font-medium text-center">After Canonical ESG</th>
              </tr>
            </thead>
            <tbody className="text-[#333]">
              <tr className="border-b border-[#eee]">
                <td className="py-3 pr-4">Climate data models</td>
                <td className="py-3 pr-4 text-center">3</td>
                <td className="py-3 text-center">1</td>
              </tr>
              <tr className="border-b border-[#eee]">
                <td className="py-3 pr-4">Risk registers</td>
                <td className="py-3 pr-4 text-center">2</td>
                <td className="py-3 text-center">1</td>
              </tr>
              <tr className="border-b border-[#eee]">
                <td className="py-3 pr-4">Workforce datasets</td>
                <td className="py-3 pr-4 text-center">2</td>
                <td className="py-3 text-center">1</td>
              </tr>
              <tr className="border-b border-[#eee]">
                <td className="py-3 pr-4">Reporting workstreams</td>
                <td className="py-3 pr-4 text-center">4</td>
                <td className="py-3 text-center">2</td>
              </tr>
              <tr className="border-b border-[#eee]">
                <td className="py-3 pr-4">Advisory duplication</td>
                <td className="py-3 pr-4 text-center">~28%</td>
                <td className="py-3 text-center">&lt;8%</td>
              </tr>
              <tr>
                <td className="py-3 pr-4">Narrative inconsistencies</td>
                <td className="py-3 pr-4 text-center">Frequent</td>
                <td className="py-3 text-center">Structurally eliminated</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 space-y-1 text-[#333]">
          <p>Estimated annual advisory savings: €420,000</p>
          <p>Reduction in internal reporting time: 19%</p>
          <p className="mt-3">Audit traceability improved due to unified data lineage.</p>
        </div>
      </section>

      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-2xl font-medium mb-6">Workflow Transformation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="pl-4 border-l-2 border-[#ccc]">
            <p className="text-[#555] font-medium mb-3 text-lg">Before</p>
            <p className="text-[#333]">Standard-by-standard advisory modelling.</p>
          </div>
          <div className="pl-4 border-l-2 border-[#555]">
            <p className="text-[#111] font-medium mb-3 text-lg">After</p>
            <p className="text-[#333] font-medium mb-2">Semantic-first modelling:</p>
            <ol className="list-decimal list-inside space-y-1 text-[#333]">
              <li>Define meaning (CDI)</li>
              <li>Interpret via CMP</li>
              <li>Apply jurisdiction layer</li>
              <li>Generate framework outputs</li>
            </ol>
          </div>
        </div>
        <p className="text-[#333] leading-relaxed text-base mb-2">
          Consultants moved from repetitive mapping to structural advisory work.
        </p>
        <p className="text-[#333] leading-relaxed text-base font-medium">
          Higher-value judgement.
          <br />
          Lower mechanical duplication.
        </p>
      </section>

      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-2xl font-medium mb-6">Strategic Insight</h2>
        <div className="prose prose-neutral max-w-none">
          <p className="text-[#333] leading-relaxed text-base mb-4">
            The architectural shift was simple but profound:
          </p>
          <p className="text-[#333] leading-relaxed text-base mb-4">
            Instead of asking:
          </p>
          <p className="text-[#333] leading-relaxed text-base italic mb-4">
            "How do we respond to ESRS?"
          </p>
          <p className="text-[#333] leading-relaxed text-base mb-4">
            The team asked:
          </p>
          <p className="text-[#333] leading-relaxed text-base italic mb-4">
            "What is the underlying disclosure meaning?"
          </p>
          <p className="text-[#333] leading-relaxed text-base mb-4">
            Once meaning stabilised, framework outputs became derivations.
          </p>
          <p className="text-[#333] leading-relaxed text-base font-medium">
            Not separate projects.
          </p>
        </div>
      </section>

      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-2xl font-medium mb-6">Why This Matters for ESG Advisors</h2>
        <div className="prose prose-neutral max-w-none mb-6">
          <p className="text-[#333] leading-relaxed text-base mb-4">
            As reporting regimes expand:
          </p>
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-6">
            <li>EU ESRS + Taxonomy</li>
            <li>ISSB global adoption</li>
            <li>GRI continuity</li>
            <li>CDP integration</li>
            <li>TNFD emergence</li>
          </ul>
          <p className="text-[#333] leading-relaxed text-base mb-4">
            Complexity increases non-linearly.
          </p>
          <p className="text-[#333] leading-relaxed text-base mb-4">
            Standard-by-standard advisory scales linearly.
          </p>
          <p className="text-[#333] leading-relaxed text-base font-medium">
            Semantic-first advisory scales structurally.
          </p>
        </div>
      </section>

      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-2xl font-medium mb-6">What This Case Demonstrates</h2>
        <div className="prose prose-neutral max-w-none">
          <p className="text-[#333] leading-relaxed text-base mb-4">
            Canonical ESG:
          </p>
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-6">
            <li>Does not replace standards</li>
            <li>Does not provide legal interpretation</li>
            <li>Does not issue compliance guidance</li>
          </ul>
          <p className="text-[#333] leading-relaxed text-base mb-4">
            It stabilises disclosure meaning beneath evolving standards.
          </p>
          <p className="text-[#333] leading-relaxed text-base mb-4">
            When meaning is stable, interpretation becomes manageable.
          </p>
          <p className="text-[#333] leading-relaxed text-base font-medium">
            When interpretation is manageable, complexity becomes scalable.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-[#1a1a1a] text-xl font-medium mb-6">Explore Further</h2>
        <div className="prose prose-neutral max-w-none">
          <ul className="list-disc list-inside space-y-2 text-[#333]">
            <li>
              <a href="/applications/cross-framework-climate-modelling" className="text-[#333] hover:text-[#111] border-b border-[#333] hover:border-[#111]">
                Cross-Framework Climate Modelling
              </a>
            </li>
            <li>
              <a href="/applications/regulatory-modelling" className="text-[#333] hover:text-[#111] border-b border-[#333] hover:border-[#111]">
                Regulatory & Double Materiality Modelling
              </a>
            </li>
            <li>
              <a href="/applications/consultants" className="text-[#333] hover:text-[#111] border-b border-[#333] hover:border-[#111]">
                Consultant Workflow Architecture
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
