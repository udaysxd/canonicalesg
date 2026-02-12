import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contribute - Canonical ESG",
  description: "Contribute to Canonical ESG's open semantic infrastructure initiative for sustainability disclosure modelling.",
  alternates: {
    canonical: "https://canonicalesg.org/contribute",
  },
}

export default function ContributePage() {
  return (
    <main className="max-w-[760px] mx-auto px-6 py-16">
      {/* Hero Section */}
      <header className="mb-20">
        <h1 
          className="text-4xl font-normal text-[#111] mb-4"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          Contribute to Canonical ESG
        </h1>
        <p className="text-lg text-[#555] leading-relaxed max-w-2xl">
          Canonical ESG is an open semantic infrastructure initiative for sustainability disclosure modelling.
        </p>
        <p className="text-base text-[#666] mt-4 leading-relaxed">
          We welcome structured contributions from practitioners, researchers, technologists, and standards experts who value rigor, clarity, and long-term interoperability.
        </p>
        <p className="text-sm text-[#888] mt-6 uppercase tracking-wide">
          Canonical ESG evolves through disciplined collaboration.
        </p>
      </header>

      {/* Why Contribute */}
      <section className="mb-16">
        <h2 
          className="text-2xl font-normal text-[#1a1a1a] mb-6 pb-3 border-b border-[#e5e5e5]"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          Why Contribute
        </h2>
        <p className="text-[#333] leading-7 mb-4">
          Sustainability reporting today is fragmented across multiple frameworks, jurisdictions, and interpretive layers.
        </p>
        <p className="text-[#333] leading-7 mb-4">
          Canonical ESG exists to provide:
        </p>
        <ul className="list-disc pl-6 mb-6 text-[#333] leading-7 space-y-1">
          <li>Stable semantic disclosure intents (CDI)</li>
          <li>Cross-framework mapping infrastructure (CMP)</li>
          <li>Regulatory modelling across jurisdictions</li>
          <li>Version-safe extensibility</li>
          <li>Semantic equivalence analysis across standards</li>
        </ul>
        <p className="text-[#333] leading-7 mb-4">
          Contributors help:
        </p>
        <ul className="list-disc pl-6 mb-6 text-[#333] leading-7 space-y-1">
          <li>Strengthen semantic precision</li>
          <li>Expand framework coverage</li>
          <li>Stress-test cross-framework mappings</li>
          <li>Identify structural inconsistencies</li>
          <li>Improve regulatory modelling architecture</li>
        </ul>
        <p className="text-[#555] italic">
          This is infrastructure work.
        </p>
      </section>

      {/* Who Should Contribute */}
      <section className="mb-16">
        <h2 
          className="text-2xl font-normal text-[#1a1a1a] mb-6 pb-3 border-b border-[#e5e5e5]"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          Who Should Contribute
        </h2>
        <p className="text-[#333] leading-7 mb-4">
          We welcome contributions from:
        </p>
        <ul className="list-disc pl-6 mb-6 text-[#333] leading-7 space-y-1">
          <li>ESG and sustainability reporting specialists</li>
          <li>ESRS technical practitioners</li>
          <li>ISSB / IFRS S1–S2 experts</li>
          <li>GRI specialists (Universal, 200, 300, 400)</li>
          <li>SASB standards practitioners</li>
          <li>CDP reporting professionals</li>
          <li>EU Taxonomy regulatory experts</li>
          <li>TNFD and biodiversity disclosure specialists</li>
          <li>RegTech engineers</li>
          <li>Semantic modelling researchers</li>
          <li>Accounting and assurance professionals</li>
          <li>Policy and regulatory analysts</li>
        </ul>
        <p className="text-[#555]">
          Institutional affiliation is not required.
        </p>
        <p className="text-[#333] font-medium mt-2">
          Rigor is.
        </p>
      </section>

      {/* Areas of Contribution */}
      <section className="mb-16">
        <h2 
          className="text-2xl font-normal text-[#1a1a1a] mb-6 pb-3 border-b border-[#e5e5e5]"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          Areas of Contribution
        </h2>

        <div className="mb-8">
          <h3 className="text-lg font-medium text-[#1a1a1a] mb-3">
            1. CDI Taxonomy Refinement
          </h3>
          <ul className="list-disc pl-6 text-[#333] leading-7 space-y-1">
            <li>Clarification proposals</li>
            <li>Semantic precision improvements</li>
            <li>Cross-domain consistency enhancements</li>
            <li>Future domain proposals (for CDI v2)</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-medium text-[#1a1a1a] mb-3">
            2. New Framework Coverage
          </h3>
          <ul className="list-disc pl-6 text-[#333] leading-7 space-y-1">
            <li>Additional voluntary standards</li>
            <li>Emerging regulatory regimes</li>
            <li>Jurisdiction-specific requirements</li>
            <li>Sector-specific disclosure regimes</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-medium text-[#1a1a1a] mb-3">
            3. Stress Testing & Equivalence Analysis
          </h3>
          <ul className="list-disc pl-6 text-[#333] leading-7 space-y-1">
            <li>Line-by-line framework comparison</li>
            <li>Conflict detection</li>
            <li>Coverage gap identification</li>
            <li>Cross-framework semantic reconciliation</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-medium text-[#1a1a1a] mb-3">
            4. Regulatory Modelling Enhancements
          </h3>
          <ul className="list-disc pl-6 text-[#333] leading-7 space-y-1">
            <li>Technical screening criteria modelling</li>
            <li>KPI architecture refinement</li>
            <li>Eligibility vs alignment logic modelling</li>
            <li>DNSH and safeguard modelling</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium text-[#1a1a1a] mb-3">
            5. Governance & Documentation
          </h3>
          <ul className="list-disc pl-6 text-[#333] leading-7 space-y-1">
            <li>Versioning architecture improvements</li>
            <li>Schema validation refinement</li>
            <li>Contribution governance proposals</li>
          </ul>
        </div>
      </section>

      {/* Contribution Principles */}
      <section className="mb-16">
        <h2 
          className="text-2xl font-normal text-[#1a1a1a] mb-6 pb-3 border-b border-[#e5e5e5]"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          Contribution Principles
        </h2>
        <p className="text-[#333] leading-7 mb-4">
          All contributions must align with Canonical ESG's core principles:
        </p>
        <ul className="list-disc pl-6 mb-6 text-[#333] leading-7 space-y-1">
          <li>Framework Independence</li>
          <li>Semantic Stability</li>
          <li>Non-Authoritativeness</li>
          <li>Regulatory Neutrality</li>
          <li>Explicit Scope Boundaries</li>
          <li>Version Safety</li>
        </ul>
        <p className="text-[#555]">
          Canonical ESG does not create legal interpretations.
        </p>
        <p className="text-[#333] mt-2">
          It models structure — not compliance.
        </p>
      </section>

      {/* How to Contribute */}
      <section className="mb-16">
        <h2 
          className="text-2xl font-normal text-[#1a1a1a] mb-6 pb-3 border-b border-[#e5e5e5]"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          How to Contribute
        </h2>

        <div className="mb-8">
          <h3 className="text-lg font-medium text-[#1a1a1a] mb-3">
            Step 1 — Review the Architecture
          </h3>
          <p className="text-[#333] leading-7 mb-3">
            Before submitting a proposal, review:
          </p>
          <ul className="list-disc pl-6 text-[#333] leading-7 space-y-1">
            <li>CDI Taxonomy (v1)</li>
            <li>CMP Schema</li>
            <li>Global CMPs</li>
            <li>Jurisdiction CMPs</li>
            <li>Version freeze declarations</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-medium text-[#1a1a1a] mb-3">
            Step 2 — Prepare a Structured Proposal
          </h3>
          <p className="text-[#333] leading-7 mb-3">
            Your proposal should clearly state:
          </p>
          <ul className="list-disc pl-6 text-[#333] leading-7 space-y-1">
            <li>Scope of change</li>
            <li>Affected CDI identifiers</li>
            <li>Relevant framework references</li>
            <li>Semantic justification</li>
            <li>Cross-framework impact analysis</li>
            <li>Backward compatibility assessment</li>
          </ul>
          <p className="text-[#555] mt-4 italic">
            Unstructured suggestions will not be evaluated.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium text-[#1a1a1a] mb-3">
            Step 3 — Submit Proposal
          </h3>
          <p className="text-[#333] leading-7 mb-3">
            Proposals may be submitted via:
          </p>
          <ul className="list-disc pl-6 text-[#333] leading-7 space-y-1">
            <li>GitHub (preferred)</li>
            <li>Structured email submission</li>
            <li>Direct technical correspondence (by invitation)</li>
          </ul>
        </div>
      </section>

      {/* Governance Model */}
      <section className="mb-16">
        <h2 
          className="text-2xl font-normal text-[#1a1a1a] mb-6 pb-3 border-b border-[#e5e5e5]"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          Governance Model
        </h2>
        <p className="text-[#333] leading-7 mb-4">
          Canonical ESG currently operates under a curated stewardship model.
        </p>
        <ul className="list-disc pl-6 mb-6 text-[#333] leading-7 space-y-1">
          <li>CDI v1 is frozen.</li>
          <li>Major semantic extensions require a new major version.</li>
          <li>CMPs may evolve without altering CDI semantics.</li>
          <li>All accepted changes are documented through version history.</li>
        </ul>
        <p className="text-[#333] leading-7">
          As participation grows, governance formalisation will expand.
        </p>
      </section>

      {/* Early Contributor Participation */}
      <section className="mb-16">
        <h2 
          className="text-2xl font-normal text-[#1a1a1a] mb-6 pb-3 border-b border-[#e5e5e5]"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          Early Contributor Participation
        </h2>
        <p className="text-[#333] leading-7 mb-4">
          We are currently inviting early contributors to:
        </p>
        <ul className="list-disc pl-6 mb-6 text-[#333] leading-7 space-y-1">
          <li>Stress-test cross-framework mappings</li>
          <li>Review regulatory modelling architecture</li>
          <li>Participate in semantic equivalence analysis</li>
          <li>Shape the CDI v2 roadmap</li>
        </ul>
        <p className="text-[#333] leading-7">
          Early contributors influence structural direction.
        </p>
      </section>

      {/* Contact Block */}
      <section className="pt-8 border-t border-[#e5e5e5]">
        <h2 
          className="text-xl font-normal text-[#1a1a1a] mb-4"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          Contact for Contributions
        </h2>
        <p className="text-[#555] mb-2">
          For structured proposals:
        </p>
        <p className="text-[#333] mb-4">
          contribute@canonicalesg.org
        </p>
        <p className="text-sm text-[#888]">
          GitHub repository link: (to be published)
        </p>
      </section>
    </main>
  );
}
