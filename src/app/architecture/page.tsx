import { Metadata } from 'next';
import Link from 'next/link';
import architectureData from '@/data/architecture.json';

export const metadata: Metadata = {
  title: 'Canonical ESG Full Architecture Explorer',
  description: 'Structural definition of the Canonical ESG institutional data architecture comprising four canonical layers and cross-cutting design principles.',
  alternates: {
    canonical: 'https://canonicalesg.org/architecture',
  },
};

export default function ArchitecturePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {architectureData.name}
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          {architectureData.description}
        </p>
        <div className="mt-4 text-sm text-gray-500">
          Version: {architectureData.version}
        </div>
      </div>

      {/* Architecture Overview */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
          Architecture Layers
        </h2>
        
        <div className="space-y-6">
          {architectureData.layers.map((layer) => (
            <div 
              key={layer.id}
              className="border border-gray-200 p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-sm text-gray-500 mb-1">
                    Layer {layer.position}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {layer.name}
                  </h3>
                  <div className="text-sm text-gray-500 mt-1">
                    {layer.short_name}
                  </div>
                </div>
                <Link
                  href={`/architecture/${layer.short_name.toLowerCase()}`}
                  className="text-sm text-gray-600 hover:text-gray-900 underline"
                >
                  View Details →
                </Link>
              </div>
              
              <p className="text-gray-700 mb-3">
                {layer.purpose}
              </p>
              
              <div className="text-sm text-gray-500">
                <span className="font-medium">Scope:</span> {layer.scope}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cross-Cutting Design Principles */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
          Cross-Cutting Design Principles
        </h2>
        
        <p className="text-gray-700 mb-6">
          Nine design principles govern the Canonical ESG architecture, ensuring structural integrity, 
          institutional neutrality, and long-term sustainability of the reference model.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {architectureData.cross_cutting.design_principles.principles.map((principle) => (
            <div 
              key={principle}
              className="border border-gray-200 p-4 text-center"
            >
              <span className="text-sm font-medium text-gray-900">
                {principle}
              </span>
            </div>
          ))}
        </div>
        
        <Link
          href="/architecture/principles"
          className="text-sm text-gray-600 hover:text-gray-900 underline"
        >
          View All Design Principles →
        </Link>
      </section>

      {/* Versioning Rules */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
          Versioning Rules
        </h2>
        
        <div className="space-y-4">
          <div className="border-l-2 border-gray-400 pl-4">
            <h3 className="font-medium text-gray-900">Major Version</h3>
            <p className="text-sm text-gray-700">
              {architectureData.versioning_rules.major_version}
            </p>
          </div>
          
          <div className="border-l-2 border-gray-400 pl-4">
            <h3 className="font-medium text-gray-900">Minor Version</h3>
            <p className="text-sm text-gray-700">
              {architectureData.versioning_rules.minor_version}
            </p>
          </div>
          
          <div className="border-l-2 border-gray-400 pl-4">
            <h3 className="font-medium text-gray-900">Patch Version</h3>
            <p className="text-sm text-gray-700">
              {architectureData.versioning_rules.patch_version}
            </p>
          </div>
        </div>
        
        <div className="mt-6 text-sm text-gray-600">
          <span className="font-medium">Governance Authority:</span>{' '}
          {architectureData.versioning_rules.governance_authority}
        </div>
      </section>

      {/* Governance */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
          Governance
        </h2>
        
        <div className="space-y-3 text-sm">
          <div>
            <span className="font-medium text-gray-900">Architecture Authority:</span>{' '}
            <span className="text-gray-700">{architectureData.governance.architecture_authority}</span>
          </div>
          <div>
            <span className="font-medium text-gray-900">Principle Guardian:</span>{' '}
            <span className="text-gray-700">{architectureData.governance.principle_guardian}</span>
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="font-medium text-gray-900 mb-3">Change Review Criteria</h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
            {architectureData.governance.change_review_criteria.map((criterion) => (
              <li key={criterion}>{criterion}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
