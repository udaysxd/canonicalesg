export default function MultiFrameworkClimatePage() {
  return (
    <main className="max-w-[720px] mx-auto px-6 py-12">
      <header className="mb-16">
        <h1 className="font-serif text-[#111] text-3xl font-medium tracking-tight leading-tight mb-6">
          Use Case: Multi-Framework Climate Reporting Without Semantic Drift
        </h1>
      </header>

      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-xl font-medium mb-6">Scenario</h2>
        <div className="prose max-w-none">
          <p className="text-[#333] leading-relaxed text-base mb-4">
            A large EU-based manufacturing company must:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[#333] mb-6">
            <li>Report under ESRS (mandatory under CSRD)</li>
            <li>Align voluntarily with ISSB (IFRS S1 & S2)</li>
            <li>Maintain continuity with an existing GRI report</li>
          </ul>
          <p className="text-[#333] leading-relaxed text-base">
            The objective:
          </p>
          <p className="text-[#333] leading-relaxed text-base">
            Produce a climate disclosure structure that serves all three frameworks without rewriting the same disclosures multiple times.
          </p>
        </div>
      </section>

      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-xl font-medium mb-6">Traditional Reporting Workflow</h2>
        <div className="prose max-w-none">
          <p className="text-[#333] leading-relaxed text-base mb-4">
            In most engagements, consultants:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-[#333] mb-6">
            <li>Draft the ESRS E1 climate chapter.</li>
            <li>Rewrite narrative sections to match ISSB framing.</li>
            <li>Extract GRI 305 metrics separately.</li>
            <li>Create mapping spreadsheets across frameworks.</li>
            <li>Reconcile terminology differences manually.</li>
            <li>Adjust disclosures again during audit.</li>
          </ol>
          <p className="text-[#333] font-medium mb-3">Common problems:</p>
          <ul className="list-disc list-inside space-y-2 text-[#333] mb-6">
            <li>Duplicated drafting effort</li>
            <li>Terminology inconsistencies</li>
            <li>Scope mismatches (e.g., value chain boundary differences)</li>
            <li>Version drift between standards</li>
            <li>Heavy reconciliation work</li>
            <li>Audit traceability gaps</li>
          </ul>
          <p className="text-[#333] leading-relaxed text-base">
            Each framework is treated as a separate reporting exercise.
          </p>
        </div>
      </section>

      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-xl font-medium mb-6">Canonical ESG Workflow</h2>
        <div className="prose prose-neutral max-w-none mb-8">
          <p className="text-[#333] leading-relaxed text-base">
            Canonical ESG separates meaning from interpretation.
          </p>
          <p className="text-[#333] leading-relaxed text-base">
            The workflow changes fundamentally.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-[#1a1a1a] text-lg font-medium mb-4">Step 1 — Model Climate Disclosures Using CDIs</h3>
          <p className="text-[#333] leading-relaxed text-base mb-4">
            Instead of drafting directly to a framework, consultants first anchor disclosures to Canonical Disclosure Intents (CDIs).
          </p>
          <p className="text-[#333] font-medium mb-2">Example semantic anchors:</p>
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-4">
            <li>Governance oversight of climate risks</li>
            <li>Climate-related risks and opportunities</li>
            <li>Scope 1 emissions</li>
            <li>Scope 2 emissions</li>
            <li>Scope 3 emissions</li>
            <li>Transition plan</li>
            <li>Climate targets</li>
            <li>Scenario analysis</li>
            <li>Emissions methodology</li>
          </ul>
          <p className="text-[#333] leading-relaxed text-base">
            Each of these is represented as a stable CDI.
          </p>
          <p className="text-[#333] leading-relaxed text-base">
            Meaning is now fixed.
          </p>
          <p className="text-[#333] leading-relaxed text-base">
            No regulatory logic is embedded at this layer.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-[#1a1a1a] text-lg font-medium mb-4">Step 2 — Apply Cross-Framework Mapping (CMP)</h3>
          <p className="text-[#333] leading-relaxed text-base mb-4">
            Once disclosures are structured semantically:
          </p>
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-4">
            <li>ESRS E1 references are applied through the ESRS CMP</li>
            <li>ISSB IFRS S2 references are applied through the ISSB CMP</li>
            <li>GRI 305 references are applied through the GRI CMP</li>
          </ul>
          <p className="text-[#333] leading-relaxed text-base mb-3">
            Each CDI maps transparently to framework references with:
          </p>
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-4">
            <li>Mapping type (full, partial, contextual)</li>
            <li>Reference location</li>
            <li>Interpretation notes</li>
          </ul>
          <p className="text-[#333] leading-relaxed text-base">
            No rewriting is required.
          </p>
          <p className="text-[#333] leading-relaxed text-base">
            Interpretation is layered.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="font-serif text-[#1a1a1a] text-lg font-medium mb-4">Step 3 — Apply Jurisdictional Layer (if applicable)</h3>
          <p className="text-[#333] leading-relaxed text-base mb-3">
            If the entity is subject to EU regulation:
          </p>
          <ul className="list-disc list-inside space-y-1 text-[#333] mb-4">
            <li>Double materiality interpretation is modelled</li>
            <li>Value chain scope extensions are clarified</li>
            <li>Assurance context is represented</li>
          </ul>
          <p className="text-[#333] leading-relaxed text-base">
            The EU CMP layer documents regulatory alignment without altering semantic meaning.
          </p>
          <p className="text-[#333] leading-relaxed text-base">
            Meaning remains stable.
            <br />
            Interpretation is jurisdiction-specific.
          </p>
        </div>
      </section>

      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-xl font-medium mb-6">Resulting Structure</h2>
        <div className="prose max-w-none">
          <p className="text-[#333] leading-relaxed text-base mb-4">
            Instead of three climate chapters, the organisation has:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[#333] mb-6">
            <li>One semantic climate model</li>
            <li>Three framework interpretations</li>
            <li>Full traceability from CDI → framework reference</li>
            <li>Reduced duplication</li>
            <li>Improved audit defensibility</li>
          </ul>
        </div>
      </section>

      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-xl font-medium mb-6">Structural Advantages for Consultants</h2>
        <div className="border border-[#d4d4d4] rounded px-5 py-5 bg-[#fafafa]">
          <p className="text-[#333] leading-relaxed text-base mb-3">
            Using Canonical ESG enables:
          </p>
          <ul className="list-disc list-inside space-y-1 text-[#333]">
            <li>Reuse of climate architecture across clients</li>
            <li>Consistent terminology across standards</li>
            <li>Transparent equivalence analysis</li>
            <li>Reduced redrafting effort</li>
            <li>Improved version control</li>
            <li>Clear regulatory modelling</li>
            <li>Easier onboarding of new team members</li>
          </ul>
          <p className="text-[#333] leading-relaxed text-base mt-4">
            The semantic foundation remains stable even if frameworks evolve.
          </p>
        </div>
      </section>

      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-xl font-medium mb-6">What Changes in Practice</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="pl-4 border-l-2 border-[#ccc]">
            <p className="text-[#555] font-medium mb-2">Without Canonical ESG:</p>
            <p className="text-[#333]">Frameworks drive structure.</p>
          </div>
          <div className="pl-4 border-l-2 border-[#555]">
            <p className="text-[#111] font-medium mb-2">With Canonical ESG:</p>
            <p className="text-[#333]">Meaning drives structure.</p>
            <p className="text-[#333]">Frameworks become interpretation layers.</p>
          </div>
        </div>
      </section>

      <section className="mb-14 border-b border-[#e5e5e5] pb-12">
        <h2 className="font-serif text-[#1a1a1a] text-xl font-medium mb-6">Why This Matters in Multi-Standard Environments</h2>
        <div className="prose max-w-none">
          <p className="text-[#333] leading-relaxed text-base mb-4">
            As sustainability standards proliferate:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[#333] mb-6">
            <li>ESRS integrates double materiality</li>
            <li>ISSB integrates financial materiality</li>
            <li>GRI integrates impact-based disclosures</li>
          </ul>
          <p className="text-[#333] leading-relaxed text-base">
            The underlying concepts frequently overlap.
          </p>
          <p className="text-[#333] leading-relaxed text-base">
            Canonical ESG provides the infrastructure to model those overlaps explicitly — rather than manually reconciling them in spreadsheets.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-[#1a1a1a] text-xl font-medium mb-6">Summary</h2>
        <div className="prose max-w-none">
          <p className="text-[#333] leading-relaxed text-base mb-4">
            Canonical ESG does not replace ESRS, ISSB, or GRI.
          </p>
          <p className="text-[#333] leading-relaxed text-base mb-6">
            It provides structural infrastructure beneath them.
          </p>
          <p className="text-[#333] leading-relaxed text-base mb-3">
            For consultants operating in multi-framework environments, it enables:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[#333]">
            <li>Semantic stability</li>
            <li>Cross-standard reuse</li>
            <li>Regulatory modelling without semantic drift</li>
            <li>Durable reporting architecture</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
