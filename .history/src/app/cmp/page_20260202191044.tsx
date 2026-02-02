import { DOCS } from "@/lib/docs";
import Link from "next/link";

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

        <h2 className="text-[1.5rem] font-semibold text-[#1a1a1a] mb-3 mt-10">Why CMPs Exist</h2>
        <p className="text-[#1a1a1a] mb-4">
          Sustainability reporting frameworks often request similar disclosures using different structures, terminology, and scope.
        </p>
        <p className="text-[#1a1a1a] mb-4">
          Interpreting these requirements involves professional judgement.
        </p>
        <p className="text-[#1a1a1a] mb-2">CMPs exist to:</p>
        <ul className="list-disc list-inside text-[#1a1a1a] mb-10 space-y-1.5">
          <li>document interpretation decisions explicitly,</li>
          <li>make assumptions and limitations visible,</li>
          <li>reduce undocumented and inconsistent interpretation,</li>
          <li>support reuse of disclosure meaning across frameworks.</li>
        </ul>

        <h2 className="text-[1.5rem] font-semibold text-[#1a1a1a] mb-3 mt-10">What CMPs Do and Do Not Do</h2>
        <p className="text-[#1a1a1a] mb-2">CMPs:</p>
        <ul className="list-disc list-inside text-[#1a1a1a] mb-4 space-y-1.5">
          <li>Map Canonical Disclosure Intents (CDIs) to framework requirements</li>
          <li>Document interpretation choices and assumptions</li>
          <li>Enable traceability and review</li>
          <li>Support consistency across reporting outputs</li>
        </ul>
        <p className="text-[#1a1a1a] mb-2">CMPs do not:</p>
        <ul className="list-disc list-inside text-[#1a1a1a] mb-10 space-y-1.5">
          <li>Define reporting obligations</li>
          <li>Determine materiality</li>
          <li>Assert compliance or sufficiency</li>
          <li>Replace professional judgement</li>
        </ul>

        <h2 className="text-[1.5rem] font-semibold text-[#1a1a1a] mb-3 mt-10">Position in Canonical ESG</h2>
        <p className="text-[#1a1a1a] mb-4">
          Canonical ESG separates concerns across three layers:
        </p>
        <ul className="list-disc list-inside text-[#1a1a1a] mb-4 space-y-1.5">
          <li><strong className="font-semibold text-[#111]">CERM</strong> defines canonical sustainability data</li>
          <li><strong className="font-semibold text-[#111]">CDI</strong> defines disclosure meaning</li>
          <li><strong className="font-semibold text-[#111]">CMP</strong> documents framework-specific interpretation</li>
        </ul>
        <p className="text-[#1a1a1a] mb-10">CMPs sit at the boundary between semantic meaning and reporting standards.</p>

        <h2 className="text-[1.5rem] font-semibold text-[#1a1a1a] mb-4 mt-10">CMP v1 Documentation</h2>
        <ul className="space-y-2.5 mb-10">
          {pages.map(p => (
            <li key={p.slug}>
              <Link href={`/cmp/${p.slug}`} className="text-[#1a1a1a] underline underline-offset-[0.15em] decoration-[#999] hover:decoration-[#1a1a1a]">{p.title}</Link>
            </li>
          ))}
          <li>
            <Link href="/cmp/v1/04-schema-specification" className="text-[#1a1a1a] underline underline-offset-[0.15em] decoration-[#999] hover:decoration-[#1a1a1a]">Schema Specification</Link>
            <p className="text-[#666] mt-1">Defines the formal JSON Schema used to validate Canonical Mapping Packs.</p>
            <p className="mt-1">
              <Link href="/cmp/v1/04-schema-specification" className="text-[#1a1a1a] underline underline-offset-[0.15em] decoration-[#999] hover:decoration-[#1a1a1a]">→ View CMP JSON Schema</Link>
            </p>
          </li>
          <li>
            <Link href="/cmp/v1/04-schema-specification" className="text-[#1a1a1a] underline underline-offset-[0.15em] decoration-[#999] hover:decoration-[#1a1a1a]">Schema Specification (v0.1)</Link>
            <p className="text-[#666] mt-1">Machine-readable structural model for Canonical Mapping Packs.</p>
            <ul className="mt-2 ml-4">
              <li>
                <Link href="/cmp/v1/schema/cmp.schema.json" className="text-[#1a1a1a] underline underline-offset-[0.15em] decoration-[#999] hover:decoration-[#1a1a1a]">JSON Schema (Draft 2020-12)</Link>
              </li>
            </ul>
          </li>
        </ul>

        <h2 className="text-[1.5rem] font-semibold text-[#1a1a1a] mb-4 mt-10">Reference CMPs (Illustrative)</h2>
        <p className="text-[#1a1a1a] mb-4">
          The following Canonical Mapping Packs are provided as illustrative reference implementations.
        </p>
        <p className="text-[#1a1a1a] mb-4">
          They demonstrate how CMPs can be constructed and applied without asserting authority, completeness, or compliance.
        </p>
        <ul className="space-y-2.5 mb-10">
          <li>
            <Link href="/cmp/v1/examples/climate-end-to-end" className="text-[#1a1a1a] underline underline-offset-[0.15em] decoration-[#999] hover:decoration-[#1a1a1a]">Climate CMP v0.1</Link>
            <p className="text-[#666] mt-1">Illustrative mapping of selected climate disclosure intents across multiple reporting frameworks.</p>
          </li>
        </ul>

        <h2 className="text-[1.5rem] font-semibold text-[#1a1a1a] mb-4 mt-10">CMP Registry</h2>
        <p className="text-[#1a1a1a] mb-4">
          The CMP Registry provides a machine-readable index of published Canonical Mapping Packs.
        </p>
        <p className="text-[#1a1a1a] mb-4">
          The registry enables discovery, version tracking, and tooling integration without asserting authority, endorsement, or compliance.
        </p>
        <p className="text-[#1a1a1a] mb-4">
          <Link href="/content/cmp/registry/cmp-index.json" className="text-[#1a1a1a] underline underline-offset-[0.15em] decoration-[#999] hover:decoration-[#1a1a1a]">→ Download CMP Registry Index (cmp-index.json)</Link>
        </p>

        <h2 className="text-[1.5rem] font-semibold text-[#1a1a1a] mb-4 mt-10">For tool builders</h2>
        <p className="text-[#1a1a1a] mb-4">
          Canonical Mapping Packs are designed to be consumable by both humans and software systems.
        </p>
        <p className="text-[#1a1a1a] mb-4">
          For teams building ESG platforms, internal tooling, or validation workflows, CMPs are accompanied by optional machine-readable artefacts, including:
        </p>
        <ul className="list-disc list-inside text-[#1a1a1a] mb-4 space-y-1.5">
          <li>a formal JSON Schema defining CMP structure,</li>
          <li>versioned identifiers for disclosure intents,</li>
          <li>a registry index for discovery and automation.</li>
        </ul>
        <p className="text-[#1a1a1a] mb-4">
          These artefacts support validation, interoperability, and reuse.
          <br />
          They do not assert compliance, replace professional judgement, or define reporting obligations.
        </p>
        <p className="text-[#1a1a1a] mb-4">
          Human-readable CMP documentation remains the primary reference.
        </p>

        <p className="text-[#1a1a1a] mb-4"><strong className="font-semibold text-[#111]">Current version:</strong> v1.0.0</p>

        <p className="text-sm text-[#666] mt-10">
          CMPs are non-authoritative interpretation artefacts. They are not endorsed by, and do not represent, any sustainability reporting standard or regulatory body.
        </p>
      </div>
    </main>
  );
}
