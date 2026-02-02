import { DOCS } from "@/lib/docs";
import Link from "next/link";

export default function CDIPage() {
  const pages = DOCS.cdi.pages;
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <div className="max-w-4xl">
        <h1 className="text-3xl font-semibold text-slate-900 mb-6">
          Canonical Disclosure Intents (CDI)
        </h1>

        <p className="text-lg text-slate-600 mb-4 leading-relaxed">
          Canonical Disclosure Intents (CDI) define stable, framework-independent disclosure meaning.
        </p>

        <p className="text-slate-600 mb-8 leading-relaxed">
          A disclosure intent represents what an organisation intends to communicate, independent of how that disclosure is requested, structured, or formatted by sustainability reporting standards.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mb-4 mt-8">Why Disclosure Intent Matters</h2>
        <p className="text-slate-600 mb-4">
          Sustainability reporting frameworks often request similar information using different structures, terminology, and granularity.
        </p>
        <p className="text-slate-600 mb-2">Without a stable disclosure intent layer:</p>
        <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1">
          <li>disclosure meaning is re-interpreted repeatedly,</li>
          <li>inconsistencies emerge across reports,</li>
          <li>audit complexity increases,</li>
          <li>changes in standards require re-modelling of data.</li>
        </ul>
        <p className="text-slate-600 mb-8">CDI separates disclosure meaning from reporting mechanics.</p>

        <h2 className="text-xl font-semibold text-slate-900 mb-4 mt-8">Position in Canonical ESG</h2>
        <p className="text-slate-600 mb-4">
          Canonical ESG separates concerns across three layers:
        </p>
        <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1">
          <li><strong>CERM</strong> defines canonical sustainability data</li>
          <li><strong>CDI</strong> defines disclosure meaning</li>
          <li><strong>CMP</strong> defines framework-specific interpretation</li>
        </ul>
        <p className="text-slate-600 mb-8">CDI acts as the semantic bridge between data and reporting frameworks.</p>

        <h2 className="text-xl font-semibold text-slate-900 mb-4 mt-8">What CDI Does and Does Not Do</h2>
        <p className="text-slate-600 mb-2">CDI:</p>
        <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1">
          <li>Defines stable disclosure intent identifiers</li>
          <li>Enables reuse of disclosure meaning across frameworks</li>
          <li>Supports consistency and traceability</li>
        </ul>
        <p className="text-slate-600 mb-2">CDI does not:</p>
        <ul className="list-disc list-inside text-slate-600 mb-8 space-y-1">
          <li>Define reporting requirements</li>
          <li>Determine materiality</li>
          <li>Assert compliance</li>
          <li>Interpret standards authoritatively</li>
        </ul>

        <h2 className="text-xl font-semibold text-slate-900 mb-4 mt-8">CDI v1 Documentation</h2>
        <ul className="space-y-2 mb-8">
          {pages.map(p => (
            <li key={p.slug}>
              <Link href={`/cdi/${p.slug}`} className="text-slate-600 hover:text-slate-900">{p.title}</Link>
            </li>
          ))}
        </ul>

        <p className="text-slate-600 mb-4"><strong>Current version:</strong> v1.0.0</p>

        <p className="text-sm text-slate-400 mt-8">
          CDI is a non-authoritative semantic layer. It is not endorsed by, and does not represent, any sustainability reporting standard or regulatory body.
        </p>
      </div>
    </main>
  );
}
