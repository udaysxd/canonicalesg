import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: "Canonical ESG Reference Architecture",
  description: "Open, non-authoritative semantic infrastructure for sustainability reporting. Model sustainability data once and reuse it across ESRS, GRI, ISSB, CDP, and other frameworks.",
  keywords: ["ESG", "sustainability reporting", "ESRS", "GRI", "ISSB", "CDP", "sustainability data model", "disclosure framework", "CERM", "CDI", "CMP"],
  openGraph: {
    title: "Canonical ESG Reference Architecture",
    description: "Model sustainability data once. Reuse it across ESRS, GRI, ISSB, CDP, and other reporting frameworks.",
    url: "https://canonicalesg.org",
    siteName: "Canonical ESG",
    type: "website",
  },
}

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Canonical ESG Reference Architecture',
    description: 'Open, non-authoritative semantic infrastructure for sustainability reporting',
    url: 'https://canonicalesg.org',
    publisher: {
      '@type': 'Organization',
      name: 'Canonical ESG',
      url: 'https://canonicalesg.org',
    },
    about: {
      '@type': 'Thing',
      name: 'Sustainability Reporting',
      description: 'Framework-independent reference architecture for ESG data modeling and disclosure',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="max-w-3xl mx-auto px-6 py-16">
        <div>
        <h1 className="text-[2.25rem] font-semibold text-[#111] mb-4 leading-tight">
          Model sustainability data once. Reuse it across standards.
        </h1>

        <p className="text-[1.0625rem] text-[#1a1a1a] mb-4 leading-relaxed">
          Canonical ESG is open, non-authoritative semantic infrastructure for sustainability reporting. It enables organisations to model sustainability data once and reuse it consistently across ESRS, GRI, ISSB, CDP, and other reporting frameworks.
        </p>

        <p className="text-[#1a1a1a] mb-10 leading-relaxed">
          It separates canonical data structures, disclosure meaning, and framework-specific interpretation to reduce duplication, inconsistency, and rework in sustainability reporting.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <a href="/cerm" className="block py-4 border-t border-[#eee]">
            <h2 className="text-[1.25rem] font-semibold text-[#111] mb-2">CERM</h2>
            <p className="text-[#666]">
              Canonical ESG Reference Model — Framework-independent data structures for sustainability metrics, targets, evidence, and traceability.
            </p>
          </a>

          <a href="/cdi" className="block py-4 border-t border-[#eee]">
            <h2 className="text-[1.25rem] font-semibold text-[#111] mb-2">CDI</h2>
            <p className="text-[#666]">
              Canonical Disclosure Intents — Stable, framework-neutral definitions of what an organisation intends to disclose.
            </p>
          </a>

          <a href="/cmp" className="block py-4 border-t border-[#eee]">
            <h2 className="text-[1.25rem] font-semibold text-[#111] mb-2">CMP</h2>
            <p className="text-[#666]">
              Canonical Mapping Packs — Explicit documentation of how disclosure intent is interpreted by specific reporting standards and jurisdictions.
            </p>
          </a>

          <a href="/standards" className="block py-4 border-t border-[#eee]">
            <h2 className="text-[1.25rem] font-semibold text-[#111] mb-2">Standards</h2>
            <p className="text-[#666]">
              ESRS, GRI, ISSB, CDP, and other sustainability reporting frameworks referenced without endorsement.
            </p>
          </a>
        </div>

        <div className="mt-16">
          <h2 className="text-[1.5rem] font-semibold text-[#1a1a1a] mb-6">
            Why Canonical ESG exists
          </h2>

          <p className="text-[#1a1a1a] mb-4">
            Sustainability reporting now requires organisations to respond to overlapping frameworks, jurisdictional mandates, and stakeholder expectations — often using structurally different disclosure models.
          </p>

          <p className="text-[#1a1a1a] mb-4">
            Organisations are asked to report similar information across multiple frameworks using different terminology, structures, and assumptions.
          </p>

          <p className="text-[#1a1a1a] mb-4">
            This has led to:
          </p>

          <ul className="list-disc list-inside text-[#1a1a1a] mb-6 space-y-1.5">
            <li>duplicated effort,</li>
            <li>inconsistent interpretation,</li>
            <li>limited reuse of disclosed information,</li>
            <li>reduced transparency into how disclosures are derived.</li>
          </ul>

          <p className="text-[#1a1a1a] mb-6">
            Canonical ESG addresses this structural problem.
          </p>

          <h3 className="text-[1.25rem] font-semibold text-[#1a1a1a] mb-4 mt-8">
            The underlying issue
          </h3>

          <p className="text-[#1a1a1a] mb-4">
            Most sustainability frameworks are designed to answer <em>what</em> should be disclosed.
          </p>

          <p className="text-[#1a1a1a] mb-4">
            They are not designed to:
          </p>

          <ul className="list-disc list-inside text-[#1a1a1a] mb-6 space-y-1.5">
            <li>separate data from disclosure meaning,</li>
            <li>make interpretation decisions explicit,</li>
            <li>enable reuse across frameworks,</li>
            <li>support machine-readable validation and automation.</li>
          </ul>

          <p className="text-[#1a1a1a] mb-6">
            As a result, interpretation happens repeatedly and inconsistently — often inside spreadsheets, consulting workpapers, or proprietary software systems.
          </p>

          <h3 className="text-[1.25rem] font-semibold text-[#1a1a1a] mb-4 mt-8">
            A structural, not normative, response
          </h3>

          <p className="text-[#1a1a1a] mb-4">
            Canonical ESG does not introduce new reporting requirements.
          </p>

          <p className="text-[#1a1a1a] mb-4">
            It provides a neutral reference architecture that:
          </p>

          <ul className="list-disc list-inside text-[#1a1a1a] mb-6 space-y-1.5">
            <li>separates <strong>data modelling</strong> from <strong>disclosure meaning</strong>,</li>
            <li>separates <strong>disclosure meaning</strong> from <strong>framework-specific interpretation</strong>,</li>
            <li>documents interpretation explicitly without asserting authority.</li>
          </ul>

          <p className="text-[#1a1a1a] mb-6">
            This separation allows existing standards to coexist while reducing duplication and ambiguity.
          </p>

          <h3 className="text-[1.25rem] font-semibold text-[#1a1a1a] mb-4 mt-8">
            Designed to coexist with standards
          </h3>

          <p className="text-[#1a1a1a] mb-4">
            Canonical ESG does not replace sustainability reporting frameworks. Framework texts remain authoritative.
          </p>

          <p className="text-[#1a1a1a] mb-4">
            It is designed to:
          </p>

          <ul className="list-disc list-inside text-[#1a1a1a] mb-6 space-y-1.5">
            <li>work alongside ESRS, GRI, CDP, ISSB, and others,</li>
            <li>preserve professional judgement,</li>
            <li>support assurance and review,</li>
            <li>enable software systems without embedding hidden interpretive assumptions.</li>
          </ul>

          <h3 className="text-[1.25rem] font-semibold text-[#1a1a1a] mb-4 mt-8">
            Why now
          </h3>

          <p className="text-[#1a1a1a] mb-4">
            Regulatory expansion, investor scrutiny, and digital reporting expectations are increasing the need for interoperability, auditability, and automation in sustainability reporting.
          </p>

          <p className="text-[#1a1a1a] mb-4">
            Organisations require a systematic way to:
          </p>

          <ul className="list-disc list-inside text-[#1a1a1a] mb-6 space-y-1.5">
            <li>model information once,</li>
            <li>interpret it transparently,</li>
            <li>reuse it across outputs.</li>
          </ul>

          <p className="text-[#1a1a1a] mb-6">
            For example, Scope 1 greenhouse gas emissions can be defined once at the CDI level and mapped — through CMP — to ESRS E1, GRI 305, IFRS S2, and CDP Climate without redefining the underlying meaning.
          </p>

          <h3 className="text-[1.25rem] font-semibold text-[#1a1a1a] mb-4 mt-8">
            What Canonical ESG aims to enable
          </h3>

          <ul className="list-disc list-inside text-[#1a1a1a] mb-6 space-y-1.5">
            <li>clearer disclosure traceability,</li>
            <li>reduced interpretation risk,</li>
            <li>improved consistency across reports,</li>
            <li>structured collaboration between practitioners, auditors, and system architects.</li>
          </ul>

          <p className="text-[#1a1a1a] mb-6">
            It does not seek to centralise authority or define compliance.
          </p>

          <h3 className="text-[1.25rem] font-semibold text-[#1a1a1a] mb-4 mt-8">
            A shared reference, not a single truth
          </h3>

          <p className="text-[#1a1a1a] mb-4">
            Canonical ESG is intentionally non-authoritative. Its value lies in making structure, meaning, and interpretation explicit — not in declaring what is correct.
          </p>

          <p className="text-[#1a1a1a] mb-6">
            Users remain responsible for materiality, applicability, and regulatory compliance.
          </p>

          <p className="text-[#1a1a1a] mb-4">
            CDI v1 is version-controlled and semantically stable. CMPs evolve transparently as frameworks and jurisdictions change.
          </p>

          <p className="text-[#1a1a1a] mt-8">
            <a
              href="/resources/who-this-is-for"
              className="text-[#1a1a1a] underline underline-offset-[0.15em] decoration-[#999] hover:decoration-[#1a1a1a]"
            >
              Who Canonical ESG is for
            </a>
          </p>
        </div>

        <p className="text-sm text-[#666] mt-12">
          Canonical ESG is a neutral reference system. It does not define reporting requirements, assert compliance, or represent endorsement by any standards-setting body.
        </p>
      </div>
    </main>
    </>
  );
}
