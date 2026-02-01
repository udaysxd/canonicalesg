import { getDocument } from '@/lib/markdown';

export default async function CERMPage() {
  const doc = await getDocument('cerm', 'v1', 'index');
  
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <div className="max-w-4xl">
        <h1 className="text-3xl font-semibold text-slate-900 mb-6">
          Canonical ESG Reference Model (CERM)
        </h1>
        {doc ? (
          <div 
            className="prose prose-slate max-w-none"
            dangerouslySetInnerHTML={{ __html: doc.html }}
          />
        ) : (
          <p className="text-slate-600">Documentation placeholder. Content to be authored.</p>
        )}
      </div>
    </main>
  );
}
