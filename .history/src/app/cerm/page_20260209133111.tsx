import { DOCS } from "@/lib/docs";
import Link from "next/link";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "CERM - Canonical ESG Reference Model",
  description: "Framework-independent structural architecture for modeling sustainability data. Defines canonical structures for metrics, targets, trajectories, risks, and evidence.",
  keywords: ["CERM", "ESG data model", "sustainability data structure", "framework-independent", "ESG architecture", "sustainability metrics"],
  openGraph: {
    title: "CERM - Canonical ESG Reference Model",
    description: "Framework-independent structural architecture for modeling sustainability data across reporting frameworks.",
    url: "https://canonicalesg.org/cerm",
  },
}

export default function CERMPage() {
  const pages = DOCS.cerm.pages;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Canonical ESG Reference Model (CERM)',
    description: 'Framework-independent structural architecture for modeling sustainability data',
    url: 'https://canonicalesg.org/cerm',
    author: {
      '@type': 'Organization',
      name: 'Canonical ESG',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Canonical ESG',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="max-w-3xl mx-auto px-6 py-12">
        <div>
        <h1 className="text-[2.25rem] font-semibold text-[#111] mb-4 leading-tight">
          Canonical ESG Reference Model (CERM)
        </h1>

        <p className="text-[1.0625rem] text-[#1a1a1a] mb-4 leading-relaxed">
          The Canonical ESG Reference Model (CERM) defines a neutral, framework-independent structural architecture for modelling sustainability data.
        </p>

        <p className="text-[#1a1a1a] mb-10 leading-relaxed">
          CERM provides a stable semantic foundation for representing metrics, targets, trajectories, risks, and supporting evidence in a form that can be reused consistently across sustainability reporting frameworks and regulatory regimes.
        </p>

        <h2 className="text-[1.5rem] font-semibold text-[#1a1a1a] mb-3 mt-10">
          Architectural Role
        </h2>
        <p className="text-[#1a1a1a] mb-6 leading-relaxed">
          CERM operates at the structural layer of Canonical ESG.  
          It defines how sustainability information is modelled — not what must be disclosed and not how regulation applies.
        </p>

        <h2 className="text-[1.5rem] font-semibold text-[#1a1a1a] mb-3 mt-10">
          What CERM Does
        </h2>
        <ul className="list-disc list-inside text-[#1a1a1a] mb-8 space-y-1.5">
          <li>Defines canonical structures for sustainability data and assertions</li>
          <li>Separates data modelling from disclosure interpretation</li>
          <li>Enables reuse of the same structured dataset across multiple standards</li>
          <li>Supports traceability, lineage, and audit transparency</li>
          <li>Preserves structural stability through explicit versioning discipline</li>
        </ul>

        <h2 className="text-[1.5rem] font-semibold text-[#1a1a1a] mb-3 mt-10">
          What CERM Does Not Do
        </h2>
        <ul className="list-disc list-inside text-[#1a1a1a] mb-10 space-y-1.5">
          <li>Define disclosure requirements</li>
          <li>Encode regulatory or jurisdictional logic</li>
          <li>Determine materiality thresholds</li>
          <li>Interpret external standards</li>
          <li>Assert compliance with any reporting framework</li>
        </ul>

        <h2 className="text-[1.5rem] font-semibold text-[#1a1a1a] mb-4 mt-10">
          CERM v1 Documentation
        </h2>
        <ul className="space-y-2.5 mb-10">
          {pages.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/cerm/${p.slug}`}
                className="text-[#1a1a1a] underline underline-offset-[0.15em] decoration-[#999] hover:decoration-[#1a1a1a]"
              >
                {p.title}
              </Link>
            </li>
          ))}
        </ul>

        <p className="text-[#1a1a1a] mb-4">
          <strong className="font-semibold text-[#111]">
            Current version:
          </strong>{" "}
          v1.0.0
        </p>

        <p className="text-sm text-[#666] mt-10">
          CERM is a non-authoritative reference architecture.  
          It is not endorsed by, does not interpret, and does not represent any sustainability reporting standard, regulator, or jurisdictional authority.
        </p>
      </div>
    </main>
    </>
  );
}
