import { DOCS } from "@/lib/docs";
import Link from "next/link";

export default function CERMPage() {
  const pages = DOCS.cerm.pages;

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <div>
        <h1 className="text-[2.25rem] font-semibold text-[#111] mb-4 leading-tight">
          Canonical ESG Reference Model (CERM)
        </h1>

        <p className="text-[1.0625rem] text-[#1a1a1a] mb-4 leading-relaxed">
          The Canonical ESG Reference Model (CERM) defines a neutral, framework-independent structure for modelling sustainability data.
        </p>

        <p className="text-[#1a1a1a] mb-10 leading-relaxed">
          CERM provides a common foundation for representing metrics, targets, trajectories, and supporting evidence in a way that is reusable across multiple sustainability reporting frameworks.
        </p>

        <h2 className="text-[1.5rem] font-semibold text-[#1a1a1a] mb-3 mt-10">What CERM Does</h2>
        <p className="text-[#1a1a1a] mb-2">CERM:</p>
        <ul className="list-disc list-inside text-[#1a1a1a] mb-8 space-y-1.5">
          <li>Defines canonical structures for sustainability data and assertions</li>
          <li>Enables reuse of the same data across multiple reporting standards</li>
          <li>Supports traceability, lineage, and auditability</li>
          <li>Preserves stability through explicit versioning</li>
        </ul>

        <h2 className="text-[1.5rem] font-semibold text-[#1a1a1a] mb-3 mt-10">What CERM Does Not Do</h2>
        <p className="text-[#1a1a1a] mb-2">CERM does not:</p>
        <ul className="list-disc list-inside text-[#1a1a1a] mb-10 space-y-1.5">
          <li>Define disclosure requirements</li>
          <li>Encode regulatory or jurisdictional logic</li>
          <li>Determine materiality</li>
          <li>Assert compliance with any reporting framework</li>
        </ul>

        <h2 className="text-[1.5rem] font-semibold text-[#1a1a1a] mb-4 mt-10">CERM v1 Documentation</h2>
        <ul className="space-y-2.5 mb-10">
          {pages.map(p => (
            <li key={p.slug}>
              <Link href={`/cerm/${p.slug}`} className="text-[#1a1a1a] underline underline-offset-[0.15em] decoration-[#999] hover:decoration-[#1a1a1a]">{p.title}</Link>
            </li>
          ))}
        </ul>

        <p className="text-[#1a1a1a] mb-4"><strong className="font-semibold text-[#111]">Current version:</strong> v1.0.0</p>

        <p className="text-sm text-[#666] mt-10">
          CERM is a non-authoritative reference model. It is not endorsed by, and does not represent, any sustainability reporting standard or regulatory body.
        </p>
      </div>
    </main>
  );
}
