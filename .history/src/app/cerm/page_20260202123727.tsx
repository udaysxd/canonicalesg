import { DOCS } from "@/lib/docs";
import Link from "next/link";

export default function CERMPage() {
  const pages = DOCS.cerm.pages;

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <div className="max-w-4xl">
        <h1 className="text-3xl font-semibold text-slate-900 mb-6">
          Canonical ESG Reference Model (CERM)
        </h1>

        <p className="text-lg text-slate-600 mb-4 leading-relaxed">
          The Canonical ESG Reference Model (CERM) defines a neutral, framework-independent structure for modelling sustainability data.
        </p>

        <p className="text-slate-600 mb-8 leading-relaxed">
          CERM provides a common foundation for representing metrics, targets, trajectories, and supporting evidence in a way that is reusable across multiple sustainability reporting frameworks.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mb-4 mt-8">What CERM Does</h2>
        <p className="text-slate-600 mb-2">CERM:</p>
        <ul className="list-disc list-inside text-slate-600 mb-6 space-y-1">
          <li>Defines canonical structures for sustainability data and assertions</li>
          <li>Enables reuse of the same data across multiple reporting standards</li>
          <li>Supports traceability, lineage, and auditability</li>
          <li>Preserves stability through explicit versioning</li>
        </ul>

        <h2 className="text-xl font-semibold text-slate-900 mb-4 mt-8">What CERM Does Not Do</h2>
        <p className="text-slate-600 mb-2">CERM does not:</p>
        <ul className="list-disc list-inside text-slate-600 mb-8 space-y-1">
          <li>Define disclosure requirements</li>
          <li>Encode regulatory or jurisdictional logic</li>
          <li>Determine materiality</li>
          <li>Assert compliance with any reporting framework</li>
        </ul>

        <h2 className="text-xl font-semibold text-slate-900 mb-4 mt-8">CERM v1 Documentation</h2>
        <ul className="space-y-2 mb-8">
          {pages.map(p => (
            <li key={p.slug}>
              <Link href={`/cerm/${p.slug}`} className="text-slate-600 hover:text-slate-900">{p.title}</Link>
            </li>
          ))}
        </ul>

        <p className="text-slate-600 mb-4"><strong>Current version:</strong> v1.0.0</p>

        <p className="text-sm text-slate-400 mt-8">
          CERM is a non-authoritative reference model. It is not endorsed by, and does not represent, any sustainability reporting standard or regulatory body.
        </p>
      </div>
    </main>
  );
}
