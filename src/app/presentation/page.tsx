import { Metadata } from 'next';
import Link from 'next/link';
import positionStatementData from '@/data/presentation-layer/sss-position-statement.json';
import transitionAnnexData from '@/data/presentation-layer/sss-transition-annex.json';

export const metadata: Metadata = {
  title: 'SSS - Structured Sustainability Statements',
  description: 'Standardised presentation formats for sustainability disclosures. Format-only layer preserving semantic discipline.',
  alternates: {
    canonical: 'https://canonicalesg.org/presentation',
  },
};

export default function PresentationIndexPage() {
  const statements = [positionStatementData, transitionAnnexData];

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Structured Sustainability Statements
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Standardised presentation formats for sustainability disclosures. 
          These are format-only templates that reference CDI intents without 
          introducing new metrics or asserting compliance.
        </p>
      </div>

      {/* Statements List */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
          Available Statement Formats
        </h2>
        
        <div className="space-y-4">
          {statements.map((statement) => (
            <div 
              key={statement.id}
              className="border border-gray-200 p-6 hover:border-gray-400 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-xs font-mono text-gray-500 mb-2">
                    {statement.id}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {statement.name}
                  </h3>
                </div>
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                  v{statement.version}
                </span>
              </div>
              
              <p className="text-gray-700 text-sm mb-4">
                {statement.purpose}
              </p>
              
              <div className="text-sm text-gray-600 mb-4">
                <span className="font-medium">{statement.fields.length} fields</span> referencing CDI intents
              </div>
              
              <Link
                href={`/presentation/${statement.id.toLowerCase()}`}
                className="text-sm text-gray-600 hover:text-gray-900 underline"
              >
                View statement structure →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Info */}
      <section className="mt-16 pt-8 border-t border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          About SSS
        </h2>
        <p className="text-gray-700 text-sm mb-4">
          Structured Sustainability Statements (SSS) provide standardised presentation formats 
          for sustainability disclosures. They are the presentation layer of the Canonical ESG architecture, 
          sitting above CERM (data), CDI (intent), and CMP (framework mapping).
        </p>
        <p className="text-gray-700 text-sm">
          SSS templates are format-only: they do not create disclosure obligations, 
          assert compliance, or interpret regulatory requirements. They preserve 
          semantic discipline by referencing CDI intents without introducing new metrics 
          or changing CDI meaning.
        </p>
      </section>
    </main>
  );
}
