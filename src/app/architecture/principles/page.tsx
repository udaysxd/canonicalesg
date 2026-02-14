import { Metadata } from 'next';
import Link from 'next/link';
import principlesData from '@/data/design-principles.json';

export const metadata: Metadata = {
  title: 'Design Principles - Canonical ESG Architecture',
  description: 'Nine cross-cutting design principles governing the Canonical ESG architecture.',
  alternates: {
    canonical: 'https://canonicalesg.org/architecture/principles',
  },
};

export default function PrinciplesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-8">
        <Link 
          href="/architecture"
          className="text-sm text-gray-600 hover:text-gray-900 underline mb-4 inline-block"
        >
          ← Back to Architecture Explorer
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {principlesData.name}
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          {principlesData.description}
        </p>
        <div className="mt-4 text-sm text-gray-500">
          Version: {principlesData.version}
        </div>
      </div>

      {/* Principles List */}
      <div className="space-y-12">
        {principlesData.principles.map((principle) => (
          <section 
            key={principle.id}
            id={principle.id.toLowerCase()}
            className="border border-gray-200 p-6"
          >
            <div className="mb-4">
              <div className="text-xs font-mono text-gray-500 mb-2">
                {principle.id}
              </div>
              <h2 className="text-xl font-semibold text-gray-900">
                {principle.name}
              </h2>
            </div>
            
            <p className="text-gray-700 mb-6">
              {principle.description}
            </p>
            
            {/* Constraints */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-3">
                Constraints
              </h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                {principle.constraints.map((constraint, index) => (
                  <li key={index}>{constraint}</li>
                ))}
              </ul>
            </div>
            
            {/* Rationale */}
            <div className="border-l-2 border-gray-300 pl-4">
              <h3 className="text-sm font-medium text-gray-900 mb-2">
                Rationale
              </h3>
              <p className="text-sm text-gray-700">
                {principle.rationale}
              </p>
            </div>
          </section>
        ))}
      </div>

      {/* Governance */}
      <section className="mt-16 pt-8 border-t border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Governance
        </h2>
        
        <div className="space-y-3 text-sm">
          <div>
            <span className="font-medium text-gray-900">Principle Guardian:</span>{' '}
            <span className="text-gray-700">{principlesData.governance.principle_guardian}</span>
          </div>
          <div>
            <span className="font-medium text-gray-900">Interpretation Authority:</span>{' '}
            <span className="text-gray-700">{principlesData.governance.interpretation_authority}</span>
          </div>
          <div>
            <span className="font-medium text-gray-900">Enforcement Mechanism:</span>{' '}
            <span className="text-gray-700">{principlesData.governance.enforcement_mechanism}</span>
          </div>
          <div>
            <span className="font-medium text-gray-900">Amendment Process:</span>{' '}
            <span className="text-gray-700">{principlesData.governance.amendment_process}</span>
          </div>
        </div>
      </section>
    </main>
  );
}
