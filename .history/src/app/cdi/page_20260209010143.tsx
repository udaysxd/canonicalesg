import { DOCS } from "@/lib/docs";
import Link from "next/link";

export default function CDIPage() {
  const pages = DOCS.cdi.pages;

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <div>
        <h1 className="text-[2.25rem] font-semibold text-[#111] mb-4 leading-tight">
          Canonical Disclosure Intents (CDI)
        </h1>

        <p className="text-[1.0625rem] text-[#1a1a1a] mb-4 leading-relaxed">
          Canonical Disclosure Intents (CDI) define stable, framework-independent disclosure meaning.
        </p>

        <p className="text-[#1a1a1a] mb-10 leading-relaxed">
          A disclosure intent represents the semantic concept an organisation intends to communicate —
          independent of how any specific sustainability framework structures, formats, or sequences that communication.
        </p>

        <h2 className="text-[1.5rem] font-semibold text-[#1a1a1a] mb-3 mt-10">
          Why Disclosure Intent Matters
        </h2>

        <p className="text-[#1a1a1a] mb-4">
          Sustainability reporting standards frequently request overlapping information using different terminology, granularity, and presentation structures.
        </p>

        <p className="text-[#1a1a1a] mb-2">
          Without a stable disclosure intent layer:
        </p>

        <ul className="list-disc list-inside text-[#1a1a1a] mb-6 space-y-1.5">
          <li>disclosure meaning is repeatedly re-interpreted,</li>
          <li>semantic drift emerges across frameworks,</li>
          <li>narrative and metric inconsistencies accumulate,</li>
          <li>audit and assurance complexity increases,</li>
          <li>framework updates require structural re-modelling.</li>
        </ul>

        <p className="text-[#1a1a1a] mb-10 leading-relaxed">
          CDI isolates meaning from reporting mechanics.
          This enables organisations to model disclosure concepts once and reuse them consistently across evolving standards.
        </p>

        <h2 className="text-[1.5rem] font-semibold text-[#1a1a1a] mb-3 mt-10">
          Position Within Canonical ESG
        </h2>

        <p className="text-[#1a1a1a] mb-4">
          Canonical ESG separates sustainability architecture into three logical layers:
        </p>

        <ul className="list-disc list-inside text-[#1a1a1a] mb-6 space-y-1.5">
          <li>
            <strong className="font-semibold text-[#111]">CERM</strong> — canonical sustainability data and structural elements
          </li>
          <li>
            <strong className="font-semibold text-[#111]">CDI</strong> — stable disclosure meaning
          </li>
          <li>
            <strong className="font-semibold text-[#111]">CMP</strong> — framework-specific interpretation and mapping
          </li>
        </ul>

        <p className="text-[#1a1a1a] mb-10 leading-relaxed">
          CDI acts as the semantic bridge between sustainability data (CERM) and framework interpretation (CMP).
          It prevents duplication of meaning across standards.
        </p>

        <h2 className="text-[1.5rem] font-semibold text-[#1a1a1a] mb-3 mt-10">
          What CDI Does
        </h2>

        <ul className="list-disc list-inside text-[#1a1a1a] mb-6 space-y-1.5">
          <li>Defines stable disclosure intent identifiers</li>
          <li>Provides durable semantic anchors across reporting regimes</li>
          <li>Enables cross-framework traceability</li>
          <li>Supports consistent audit and assurance mapping</li>
          <li>Preserves disclosure meaning across regulatory evolution</li>
        </ul>

        <h2 className="text-[1.5rem] font-semibold text-[#1a1a1a] mb-3 mt-10">
          What CDI Does Not Do
        </h2>

        <ul className="list-disc list-inside text-[#1a1a1a] mb-10 space-y-1.5">
          <li>Define reporting requirements</li>
          <li>Determine materiality</li>
          <li>Encode regulatory obligations</li>
          <li>Declare compliance</li>
          <li>Interpret standards authoritatively</li>
        </ul>

        <h2 className="text-[1.5rem] font-semibold text-[#1a1a1a] mb-4 mt-10">
          CDI v1 Documentation
        </h2>

        <ul className="space-y-2.5 mb-10">
          {pages.map(p => (
            <li key={p.slug}>
              <Link
                href={`/cdi/${p.slug}`}
                className="text-[#1a1a1a] underline underline-offset-[0.15em] decoration-[#999] hover:decoration-[#1a1a1a]"
              >
                {p.title}
              </Link>
            </li>
          ))}
        </ul>

        <p className="text-[#1a1a1a] mb-4">
          <strong className="font-semibold text-[#111]">Current version:</strong> v1.0.0
        </p>

        <p className="text-sm text-[#666] mt-10">
          CDI is a non-authoritative semantic layer.
          It is not endorsed by, and does not represent, any sustainability reporting standard, regulatory body, or assurance authority.
        </p>
      </div>
    </main>
  );
}
