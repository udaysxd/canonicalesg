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
          A disclosure intent represents what an organisation intends to communicate, independent of how that disclosure is requested, structured, or formatted by sustainability reporting standards.
        </p>

        <h2 className="text-[1.5rem] font-semibold text-[#1a1a1a] mb-3 mt-10">Why Disclosure Intent Matters</h2>
        <p className="text-[#1a1a1a] mb-4">
          Sustainability reporting frameworks often request similar information using different structures, terminology, and granularity.
        </p>
        <p className="text-[#1a1a1a] mb-2">Without a stable disclosure intent layer:</p>
        <ul className="list-disc list-inside text-[#1a1a1a] mb-4 space-y-1.5">
          <li>disclosure meaning is re-interpreted repeatedly,</li>
          <li>inconsistencies emerge across reports,</li>
          <li>audit complexity increases,</li>
          <li>changes in standards require re-modelling of data.</li>
        </ul>
        <p className="text-[#1a1a1a] mb-10">CDI separates disclosure meaning from reporting mechanics.</p>

        <h2 className="text-[1.5rem] font-semibold text-[#1a1a1a] mb-3 mt-10">Position in Canonical ESG</h2>
        <p className="text-[#1a1a1a] mb-4">
          Canonical ESG separates concerns across three layers:
        </p>
        <ul className="list-disc list-inside text-[#1a1a1a] mb-4 space-y-1.5">
          <li><strong className="font-semibold text-[#111]">CERM</strong> defines canonical sustainability data</li>
          <li><strong className="font-semibold text-[#111]">CDI</strong> defines disclosure meaning</li>
          <li><strong className="font-semibold text-[#111]">CMP</strong> defines framework-specific interpretation</li>
        </ul>
        <p className="text-[#1a1a1a] mb-10">CDI acts as the semantic bridge between data and reporting frameworks.</p>

        <h2 className="text-[1.5rem] font-semibold text-[#1a1a1a] mb-3 mt-10">What CDI Does and Does Not Do</h2>
        <p className="text-[#1a1a1a] mb-2">CDI:</p>
        <ul className="list-disc list-inside text-[#1a1a1a] mb-4 space-y-1.5">
          <li>Defines stable disclosure intent identifiers</li>
          <li>Enables reuse of disclosure meaning across frameworks</li>
          <li>Supports consistency and traceability</li>
        </ul>
        <p className="text-[#1a1a1a] mb-2">CDI does not:</p>
        <ul className="list-disc list-inside text-[#1a1a1a] mb-10 space-y-1.5">
          <li>Define reporting requirements</li>
          <li>Determine materiality</li>
          <li>Assert compliance</li>
          <li>Interpret standards authoritatively</li>
        </ul>

        <h2 className="text-[1.5rem] font-semibold text-[#1a1a1a] mb-4 mt-10">CDI v1 Documentation</h2>
        <ul className="space-y-2.5 mb-10">
          {pages.map(p => (
            <li key={p.slug}>
              <Link href={`/cdi/${p.slug}`} className="text-[#1a1a1a] underline underline-offset-[0.15em] decoration-[#999] hover:decoration-[#1a1a1a]">{p.title}</Link>
            </li>
          ))}
        </ul>

        <p className="text-[#1a1a1a] mb-4"><strong className="font-semibold text-[#111]">Current version:</strong> v1.0.0</p>

        <p className="text-sm text-[#666] mt-10">
          CDI is a non-authoritative semantic layer. It is not endorsed by, and does not represent, any sustainability reporting standard or regulatory body.
        </p>
      </div>
    </main>
  );
}
