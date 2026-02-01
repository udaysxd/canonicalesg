export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-semibold text-slate-900 mb-6">
          Canonical ESG Reference Architecture
        </h1>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          An open, non-authoritative reference model for sustainability reporting.
          Designed for neutrality, interoperability, and long-term stability.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <a href="/cerm" className="block p-6 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
            <h2 className="text-xl font-medium text-slate-900 mb-2">CERM</h2>
            <p className="text-slate-600">Canonical ESG Reference Model — Core reference architecture</p>
          </a>
          <a href="/cdi" className="block p-6 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
            <h2 className="text-xl font-medium text-slate-900 mb-2">CDI</h2>
            <p className="text-slate-600">Canonical Disclosure Intents — Standardized disclosure definitions</p>
          </a>
          <a href="/cmp" className="block p-6 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
            <h2 className="text-xl font-medium text-slate-900 mb-2">CMP</h2>
            <p className="text-slate-600">Canonical Mapping Packs — Cross-standard mappings</p>
          </a>
          <a href="/standards" className="block p-6 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
            <h2 className="text-xl font-medium text-slate-900 mb-2">Standards</h2>
            <p className="text-slate-600">ESRS, GRI, ISSB, CDP, and other framework references</p>
          </a>
        </div>
      </div>
    </main>
  );
}
