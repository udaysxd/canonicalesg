export default function UseCasesIndexPage() {
  return (
    <main className="max-w-[800px] mx-auto px-6 py-12">
      <header className="mb-12 text-center">
        <h1 className="font-serif text-[#111] text-3xl font-medium tracking-tight leading-tight mb-6">
          Applications
        </h1>
        <p className="text-[#333] text-base leading-relaxed max-w-[600px] mx-auto">
          Canonical ESG is designed as semantic infrastructure.
          <br />
          The following use cases demonstrate how the architecture operates in real-world advisory, cross-framework modelling, and regulatory alignment contexts.
        </p>
      </header>

      <section className="space-y-8 mb-16">
        <div className="border border-[#e5e5e5] rounded p-6">
          <h2 className="font-serif text-[#1a1a1a] text-xl font-medium mb-3">
            For ESG Consultants
          </h2>
          <p className="text-[#333] text-base leading-relaxed mb-5">
            Demonstrates how Canonical ESG enables structured cross-framework advisory workflows without semantic duplication.
          </p>
          <a 
            href="/applications/consultants" 
            className="inline-block text-[#333] hover:text-[#111] text-sm font-medium border-b border-[#333] hover:border-[#111] transition-colors"
          >
            View Consultant Use Case →
          </a>
        </div>

        <div className="border border-[#e5e5e5] rounded p-6">
          <h2 className="font-serif text-[#1a1a1a] text-xl font-medium mb-3">
            Cross-Framework Climate Modelling
          </h2>
          <p className="text-[#333] text-base leading-relaxed mb-5">
            Illustrates how a single CDI baseline can support ESRS, ISSB, GRI, CDP and other climate disclosure regimes simultaneously.
          </p>
          <a 
            href="/applications/cross-framework-climate-modelling" 
            className="inline-block text-[#333] hover:text-[#111] text-sm font-medium border-b border-[#333] hover:border-[#111] transition-colors"
          >
            View Climate Use Case →
          </a>
        </div>

        <div className="border border-[#e5e5e5] rounded p-6">
          <h2 className="font-serif text-[#1a1a1a] text-xl font-medium mb-3">
            Regulatory & Double Materiality Modelling
          </h2>
          <p className="text-[#333] text-base leading-relaxed mb-5">
            Shows how Jurisdiction CMPs represent regulatory interpretation layers without altering semantic meaning.
          </p>
          <a 
            href="/applications/regulatory-modelling" 
            className="inline-block text-[#333] hover:text-[#111] text-sm font-medium border-b border-[#333] hover:border-[#111] transition-colors"
          >
            View Regulatory Use Case →
          </a>
        </div>
      </section>

      <section className="border-t border-[#e5e5e5] pt-12">
        <h2 className="font-serif text-[#1a1a1a] text-2xl font-medium mb-8 text-center">
          Case Studies
        </h2>
        <div className="border border-[#e5e5e5] rounded p-6 max-w-[600px] mx-auto">
          <h3 className="font-serif text-[#1a1a1a] text-xl font-medium mb-3">
            Multi-Standard Reporting Without Semantic Duplication
          </h3>
          <p className="text-[#333] text-base leading-relaxed mb-5">
            Flagship case study demonstrating ESRS + ISSB + GRI + CDP alignment for a multinational industrial manufacturer using Canonical ESG.
          </p>
          <a 
            href="/applications/flagship-case-study" 
            className="inline-block text-[#333] hover:text-[#111] text-sm font-medium border-b border-[#333] hover:border-[#111] transition-colors"
          >
            View Case Study →
          </a>
        </div>
      </section>
    </main>
  );
}
