import { DOCS } from "@/lib/docs";
import Link from "next/link";

export default function CMPPage() {
  const pages = DOCS.cmp.pages;
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <div className="max-w-4xl">
        <h1 className="text-3xl font-semibold text-slate-900 mb-6">
          Canonical Mapping Packs (CMP)
        </h1>

        <p className="text-lg text-slate-600 mb-4 leading-relaxed">
          Canonical Mapping Packs (CMP) document how disclosure intent is interpreted by specific sustainability reporting frameworks.
        </p>

        <p className="text-slate-600 mb-8 leading-relaxed">
          CMPs make interpretation explicit, transparent, and reviewable without asserting authority, compliance, or endorsement.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mb-4 mt-8">Why CMPs Exist</h2>
        <p className="text-slate-600 mb-4">
          Sustainability reporting frameworks often request similar disclosures using different structures, terminology, and scope.
        </p>
        <p className="text-slate-600 mb-4">
          Interpreting these requirements involves professional judgement.
        </p>
        <p className="text-slate-600 mb-2">CMPs exist to:</p>
        <ul className="list-disc list-inside text-slate-600 mb-8 space-y-1">
          <li>document interpretation decisions explicitly,</li>
          <li>make assumptions and limitations visible,</li>
          <li>reduce undocumented and inconsistent interpretation,</li>
          <li>support reuse of disclosure meaning across frameworks.</li>
        </ul>

        <h2 className="text-xl font-semibold text-slate-900 mb-4 mt-8">What CMPs Do and Do Not Do</h2>
        <p className="text-slate-600 mb-2">CMPs:</p>
        <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1">
          <li>Map Canonical Disclosure Intents (CDIs) to framework requirements</li>
          <li>Document interpretation choices and assumptions</li>
          <li>Enable traceability and review</li>
          <li>Support consistency across reporting outputs</li>
        </ul>
        <p className="text-slate-600 mb-2">CMPs do not:</p>
        <ul className="list-disc list-inside text-slate-600 mb-8 space-y-1">
          <li>Define reporting obligations</li>
          <li>Determine materiality</li>
          <li>Assert compliance or sufficiency</li>
          <li>Replace professional judgement</li>
        </ul>

        <h2 className="text-xl font-semibold text-slate-900 mb-4 mt-8">Position in Canonical ESG</h2>
        <p className="text-slate-600 mb-4">
          Canonical ESG separates concerns across three layers:
        </p>
        <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1">
          <li><strong>CERM</strong> defines canonical sustainability data</li>
          <li><strong>CDI</strong> defines disclosure meaning</li>
          <li><strong>CMP</strong> documents framework-specific interpretation</li>
        </ul>
        <p className="text-slate-600 mb-8">CMPs sit at the boundary between semantic meaning and reporting standards.</p>

        <h2 className="text-xl font-semibold text-slate-900 mb-4 mt-8">CMP v1 Documentation</h2>
        <ul className="space-y-2 mb-8">
          {pages.map(p => (
            <li key={p.slug}>
              <Link href={`/cmp/${p.slug}`} className="text-slate-600 hover:text-slate-900">{p.title}</Link>
            </li>
          ))}
        </ul>

        <p className="text-slate-600 mb-4"><strong>Current version:</strong> v1.0.0</p>

        <p className="text-sm text-slate-400 mt-8">
          CMPs are non-authoritative interpretation artefacts. They are not endorsed by, and do not represent, any sustainability reporting standard or regulatory body.
        </p>
      </div>
    </main>
  );
}
