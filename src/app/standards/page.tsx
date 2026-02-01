import { getDocument } from '@/lib/markdown';

export default async function StandardsPage() {
  const doc = await getDocument('standards', 'v1', 'index');
  
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <div className="max-w-4xl">
        <h1 className="text-3xl font-semibold text-slate-900 mb-6">
          Standards Reference
        </h1>
        {doc ? (
          <div 
            className="prose prose-slate max-w-none"
            dangerouslySetInnerHTML={{ __html: doc.html }}
          />
        ) : (
          <p className="text-slate-600">Documentation placeholder. Content to be authored.</p>
        )}
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-slate-200 rounded">
            <h3 className="font-medium text-slate-900">ESRS</h3>
            <p className="text-sm text-slate-600">European Sustainability Reporting Standards</p>
          </div>
          <div className="p-4 border border-slate-200 rounded">
            <h3 className="font-medium text-slate-900">GRI</h3>
            <p className="text-sm text-slate-600">Global Reporting Initiative</p>
          </div>
          <div className="p-4 border border-slate-200 rounded">
            <h3 className="font-medium text-slate-900">ISSB</h3>
            <p className="text-sm text-slate-600">International Sustainability Standards Board</p>
          </div>
          <div className="p-4 border border-slate-200 rounded">
            <h3 className="font-medium text-slate-900">CDP</h3>
            <p className="text-sm text-slate-600">Carbon Disclosure Project</p>
          </div>
        </div>
      </div>
    </main>
  );
}
