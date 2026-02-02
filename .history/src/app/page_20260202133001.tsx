export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <div>
        <h1 className="text-[2.25rem] font-semibold text-[#111] mb-4 leading-tight">
          Model sustainability data once. Reuse it across standards.
        </h1>
        <p className="text-[1.0625rem] text-[#1a1a1a] mb-4 leading-relaxed">
          Canonical ESG is an open, non-authoritative reference architecture that enables organisations to model sustainability data once and reuse it consistently across ESRS, GRI, ISSB, CDP, and other reporting frameworks.
        </p>
        <p className="text-[#1a1a1a] mb-10 leading-relaxed">
          It separates canonical data, disclosure meaning, and framework interpretation to reduce duplication, inconsistency, and rework in sustainability reporting.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <a href="/cerm" className="block py-4 border-t border-[#eee]">
            <h2 className="text-[1.25rem] font-semibold text-[#111] mb-2">CERM</h2>
            <p className="text-[#666]">Canonical ESG Reference Model — Canonical, framework-independent data structures for sustainability metrics, targets, and evidence.</p>
          </a>
          <a href="/cdi" className="block py-4 border-t border-[#eee]">
            <h2 className="text-[1.25rem] font-semibold text-[#111] mb-2">CDI</h2>
            <p className="text-[#666]">Canonical Disclosure Intents — Stable, framework-independent definitions of what an organisation intends to disclose.</p>
          </a>
          <a href="/cmp" className="block py-4 border-t border-[#eee]">
            <h2 className="text-[1.25rem] font-semibold text-[#111] mb-2">CMP</h2>
            <p className="text-[#666]">Canonical Mapping Packs — Explicit documentation of how disclosure intent is interpreted by specific reporting standards.</p>
          </a>
          <a href="/standards" className="block py-4 border-t border-[#eee]">
            <h2 className="text-[1.25rem] font-semibold text-[#111] mb-2">Standards</h2>
            <p className="text-[#666]">ESRS, GRI, ISSB, CDP, and other sustainability reporting frameworks referenced without endorsement.</p>
          </a>
        </div>

        <p className="text-sm text-[#666] mt-12">
          Canonical ESG is a neutral reference system. It does not define reporting requirements, assert compliance, or represent endorsement by any standards-setting body.
        </p>
      </div>
    </main>
  );
}
