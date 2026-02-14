import { Metadata } from 'next';
import Link from 'next/link';
import cdiData from '@/data/cdi-architecture.json';

export const metadata: Metadata = {
  title: 'CDI - Canonical Disclosure Intent Layer',
  description: 'Structural layer defining disclosure intent, constraints, and architectural positioning without asserting authoritative mappings or disclosure concept definitions.',
  alternates: {
    canonical: 'https://canonicalesg.org/architecture/cdi',
  },
};

export default function CDIPage() {
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
          {cdiData.name}
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          {cdiData.description}
        </p>
        <div className="mt-4 text-sm text-gray-500">
          Version: {cdiData.version}
        </div>
      </div>

      {/* Purpose */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          Purpose
        </h2>
        <p className="text-gray-700">
          {cdiData.purpose}
        </p>
      </section>

      {/* Responsibilities */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          Responsibilities
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {cdiData.responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Constraints */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          Constraints
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {cdiData.constraints.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Interaction with CERM */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          Interaction with CERM
        </h2>
        <p className="text-gray-700">
          {cdiData.interaction_with_cerm}
        </p>
      </section>

      {/* Structural Components */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
          Structural Components
        </h2>
        
        <div className="space-y-6">
          {cdiData.structural_components.map((component) => (
            <div 
              key={component.id}
              className="border border-gray-200 p-6"
            >
              <div className="text-xs font-mono text-gray-500 mb-2">
                {component.id}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {component.name}
              </h3>
              <p className="text-gray-700 mb-4">
                {component.definition}
              </p>
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-2">
                  Characteristics
                </h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  {component.characteristics.map((char, index) => (
                    <li key={index}>{char}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Versioning Rules */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          Versioning Rules
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {cdiData.versioning_rules.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Governance */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          Governance Positioning
        </h2>
        
        <div className="space-y-4 text-sm">
          <div>
            <span className="font-medium text-gray-900">Authority:</span>{' '}
            <span className="text-gray-700">{cdiData.governance_positioning.authority}</span>
          </div>
          <div>
            <span className="font-medium text-gray-900">Non-Authoritative on Disclosure:</span>{' '}
            <span className="text-gray-700">{cdiData.governance_positioning.non_authoritative_on_disclosure}</span>
          </div>
          <div>
            <span className="font-medium text-gray-900">Structural Integrity:</span>{' '}
            <span className="text-gray-700">{cdiData.governance_positioning.structural_integrity}</span>
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="font-medium text-gray-900 mb-3">Review Criteria</h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
            {cdiData.governance_positioning.review_criteria.map((criterion, index) => (
              <li key={index}>{criterion}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
