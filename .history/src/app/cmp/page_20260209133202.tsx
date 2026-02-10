import { DOCS } from "@/lib/docs";
import Link from "next/link";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "CMP - Canonical Mapping Packs",
  description: "Explicit documentation of how disclosure intents are interpreted across sustainability reporting frameworks. Maps CDIs to ESRS, GRI, ISSB, CDP, and other standards.",
  keywords: ["CMP", "mapping packs", "framework mapping", "ESRS mapping", "GRI mapping", "ISSB mapping", "CDP mapping", "disclosure interpretation"],
  openGraph: {
    title: "CMP - Canonical Mapping Packs",
    description: "Explicit documentation of how disclosure intents are interpreted across sustainability reporting frameworks.",
    url: "https://canonicalesg.org/cmp",
  },
}

export default function CMPPage() {
  const pages = DOCS.cmp.pages;

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <div>
        <h1 className="text-[2.25rem] font-semibold text-[#111] mb-4 leading-tight">
          Canonical Mapping Packs (CMP)
        </h1>

        <p className="text-[1.0625rem] text-[#1a1a1a] mb-4 leading-relaxed">
          Canonical Mapping Packs (CMP) document how disclosure intent is interpreted by specific sustainability reporting frameworks.
        </p>

        <p className="text-[#1a1a1a] mb-10 leading-relaxed">
          CMPs make interpretation explicit, transparent, and reviewable without asserting authority, compliance, or endorsement.
        </p>

        {/* WHY CMPS */}
        <h2 className="text-[1.5rem] font-semibold text-[#1a1a1a] mb-3 mt-10">
          Why CMPs Exist
        </h2>

        <ul className="list-disc list-inside text-[#1a1a1a] mb-10 space-y-1.5">
          <li>Document interpretation decisions explicitly</li>
          <li>Make assumptions and limitations visible</li>
          <li>Reduce inconsistent interpretation</li>
          <li>Support reuse of disclosure meaning across frameworks</li>
        </ul>

        {/* WHAT CMP DOES */}
        <h2 className="text-[1.5rem] font-semibold text-[#1a1a1a] mb-3 mt-10">
          What CMPs Do
        </h2>

        <ul className="list-disc list-inside text-[#1a1a1a] mb-6 space-y-1.5">
          <li>Map CDIs to framework requirements</li>
          <li>Document interpretation choices</li>
          <li>Enable traceability and review</li>
          <li>Support structural consistency</li>
        </ul>

        <h2 className="text-[1.5rem] font-semibold text-[#1a1a1a] mb-3 mt-10">
          What CMPs Do Not Do
        </h2>

        <ul className="list-disc list-inside text-[#1a1a1a] mb-10 space-y-1.5">
          <li>Define reporting obligations</li>
          <li>Determine materiality</li>
          <li>Assert compliance</li>
          <li>Replace professional judgement</li>
        </ul>

        {/* POSITION */}
        <h2 className="text-[1.5rem] font-semibold text-[#1a1a1a] mb-4 mt-10">
          Position in Canonical ESG
        </h2>

        <ul className="list-disc list-inside text-[#1a1a1a] mb-10 space-y-1.5">
          <li><strong className="text-[#111]">CERM</strong> — canonical sustainability data</li>
          <li><strong className="text-[#111]">CDI</strong> — stable disclosure meaning</li>
          <li><strong className="text-[#111]">CMP</strong> — framework interpretation</li>
        </ul>

        {/* CMP DOCS */}
        <h2 className="text-[1.5rem] font-semibold text-[#1a1a1a] mb-4 mt-10">
          CMP v1 Documentation
        </h2>

        <ul className="space-y-2.5 mb-10">
          {pages.map(p => (
            <li key={p.slug}>
              <Link
                href={`/cmp/${p.slug}`}
                className="text-[#1a1a1a] underline underline-offset-[0.15em] decoration-[#999] hover:decoration-[#1a1a1a]"
              >
                {p.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* SCHEMA SECTION */}
        <h2 className="text-[1.5rem] font-semibold text-[#1a1a1a] mb-4 mt-10">
          Schema Specification
        </h2>

        <div className="border border-[#e5e5e5] rounded p-5 bg-[#fafafa] mb-10">
          <p className="text-[#1a1a1a] mb-3">
            The CMP JSON Schema defines the formal machine-readable structure used to validate Canonical Mapping Packs.
          </p>

          <ul className="space-y-2">
            <li>
              <Link
                href="/cmp/v1/04-schema-specification"
                className="text-[#1a1a1a] underline underline-offset-[0.15em] decoration-[#999] hover:decoration-[#1a1a1a]"
              >
                → View Human-Readable Schema Specification
              </Link>
            </li>

            <li>
              <Link
                href="/cmp/v1/schema/cmp.schema.json"
                className="text-[#1a1a1a] underline underline-offset-[0.15em] decoration-[#999] hover:decoration-[#1a1a1a]"
              >
                → Download JSON Schema (Draft 2020-12)
              </Link>
            </li>
          </ul>
        </div>

        {/* REGISTRY */}
        <h2 className="text-[1.5rem] font-semibold text-[#1a1a1a] mb-4 mt-10">
          CMP Registry
        </h2>

        <p className="text-[#1a1a1a] mb-4">
          Machine-readable index of published Canonical Mapping Packs.
        </p>

        <Link
          href="/cmp/registry/cmp-index.json"
          className="text-[#1a1a1a] underline underline-offset-[0.15em] decoration-[#999] hover:decoration-[#1a1a1a]"
        >
          → Download CMP Registry Index (cmp-index.json)
        </Link>

        {/* VERSION */}
        <p className="text-[#1a1a1a] mt-12">
          <strong className="text-[#111]">Current version:</strong> v1.0.0
        </p>

        <p className="text-sm text-[#666] mt-10">
          CMPs are non-authoritative interpretation artefacts. They are not endorsed by, and do not represent, any sustainability reporting standard or regulatory body.
        </p>
      </div>
    </main>
  );
}
