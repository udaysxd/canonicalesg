import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Applications - Canonical ESG",
  description: "Use cases and applications for Canonical ESG semantic infrastructure in advisory workflows, cross-framework disclosure modelling, and regulatory alignment.",
  alternates: {
    canonical: "https://canonicalesg.org/applications",
  },
}

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
          The following use cases demonstrate how the architecture operates in advisory workflows, cross-framework disclosure modelling, and regulatory alignment scenarios.
        </p>
      </header>

      <section className="space-y-8 mb-16">
        <div className="border border-[#e5e5e5] rounded p-6">
          <h2 className="font-serif text-[#1a1a1a] text-xl font-medium mb-3">
            For ESG Consultants
          </h2>
          <p className="text-[#333] text-base leading-relaxed mb-5">
            Demonstrates how Canonical ESG enables structured multi-framework advisory workflows while maintaining semantic stability across reporting regimes.
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
            Illustrates how a single CDI baseline can support ESRS, ISSB, GRI, CDP, and related climate disclosure regimes without redefining underlying disclosure meaning.
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
            Shows how Jurisdiction CMPs model regulatory interpretation layers — including double materiality — without embedding legal logic into the canonical semantic layer.
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
        <div className="space-y-6 max-w-[600px] mx-auto">
          <div className="border border-[#e5e5e5] rounded p-6">
            <h3 className="font-serif text-[#1a1a1a] text-xl font-medium mb-3">
              Multi-Standard Reporting Without Semantic Duplication
            </h3>
            <p className="text-[#333] text-base leading-relaxed mb-5">
              Analytical case study demonstrating ESRS, ISSB, GRI, and CDP alignment for a multinational industrial manufacturer using a single canonical disclosure baseline.
            </p>
            <a 
              href="/applications/flagship-case-study" 
              className="inline-block text-[#333] hover:text-[#111] text-sm font-medium border-b border-[#333] hover:border-[#111] transition-colors"
            >
              View Case Study →
            </a>
          </div>

          <div className="border border-[#e5e5e5] rounded p-6">
            <h3 className="font-serif text-[#1a1a1a] text-xl font-medium mb-3">
              EU Taxonomy + ESRS Integrated Modelling
            </h3>
            <p className="text-[#333] text-base leading-relaxed mb-5">
              Case study demonstrating integrated EU Taxonomy and ESRS modelling using jurisdictional mapping layers while preserving CDI semantic stability.
            </p>
            <a 
              href="/applications/eu-taxonomy-esrs-integration" 
              className="inline-block text-[#333] hover:text-[#111] text-sm font-medium border-b border-[#333] hover:border-[#111] transition-colors"
            >
              View Case Study →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
