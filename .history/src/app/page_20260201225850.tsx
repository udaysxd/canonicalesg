export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-semibold text-slate-900 mb-6">
          Model sustainability data once. Reuse it across standards.
        </h1>
        <p className="text-lg text-slate-600 mb-4 leading-relaxed">
          Canonical ESG is an open, non-authoritative reference architecture that enables organisations to model sustainability data once and reuse it consistently across ESRS, GRI, ISSB, CDP, and other reporting frameworks.
        </p>
        <p className="text-base text-slate-500 mb-8 leading-relaxed">
          It separates canonical data, disclosure meaning, and framework interpretation to reduce duplication, inconsistency, and rework in sustainability reporting.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <a href="/cerm" className="block p-6 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
            <h2 className="text-xl font-medium text-slate-900 mb-2">CERM</h2>
            <p className="text-slate-600">Canonical ESG Reference Model — Canonical, framework-independent data structures for sustainability metrics, targets, and evidence.</p>
          </a>
          <a href="/cdi" className="block p-6 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
            <h2 className="text-xl font-medium text-slate-900 mb-2">CDI</h2>
            <p className="text-slate-600">Canonical Disclosure Intents — Stable, framework-independent definitions of what an organisation intends to disclose.</p>
          </a>
          <a href="/cmp" className="block p-6 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
            <h2 className="text-xl font-medium text-slate-900 mb-2">CMP</h2>
            <p className="text-slate-600">Canonical Mapping Packs — Explicit documentation of how disclosure intent is interpreted by specific reporting standards.</p>
          </a>
          <a href="/standards" className="block p-6 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
            <h2 className="text-xl font-medium text-slate-900 mb-2">Standards</h2>
            <p className="text-slate-600">ESRS, GRI, ISSB, CDP, and other sustainability reporting frameworks referenced without endorsement.</p>
          </a>
        </div>

        <p className="text-sm text-slate-400 mt-12">
          Canonical ESG is a neutral reference system. It does not define reporting requirements, assert compliance, or represent endorsement by any standards-setting body.
        </p>
      </div>
    </main>
  );
}
