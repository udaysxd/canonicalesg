import { Metadata } from 'next';
import Link from 'next/link';
import sssData from '@/data/presentation-layer.json';

export const metadata: Metadata = {
  title: 'SSS - Structured Sustainability Statements',
  description: 'Presentation and disclosure layer defining structural formats for sustainability reports, annexes, and statement formats.',
  alternates: {
    canonical: 'https://canonicalesg.org/architecture/sss',
  },
};

export default function SSSPage() {
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
          {sssData.name}
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          {sssData.description}
        </p>
        <div className="mt-4 text-sm text-gray-500">
          Version: {sssData.version}
        </div>
      </div>

      {/* Purpose */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          Purpose
        </h2>
        <p className="text-gray-700">
          {sssData.purpose}
        </p>
      </section>

      {/* Constraints */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          Constraints
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {sssData.constraints.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Relation to CDI */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          Relation to CDI
        </h2>
        <p className="text-gray-700">
          {sssData.relation_to_cdi}
        </p>
      </section>

      {/* Non-Goals */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          Non-Goals
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {sssData.non_goals.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Structural Formats */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
          Structural Formats
        </h2>
        
        <div className="space-y-8">
          {sssData.structural_formats.map((format) => (
            <div 
              key={format.id}
              className="border border-gray-200 p-6"
            >
              <div className="text-xs font-mono text-gray-500 mb-2">
                {format.id}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {format.name}
              </h3>
              <p className="text-gray-700 mb-6">
                {format.definition}
              </p>
              
              {/* Structure Details */}
              <div className="space-y-4">
                {format.structure.header_section && (
                  <div className="border-l-2 border-gray-300 pl-4">
                    <h4 className="font-medium text-gray-900 mb-2">Header Section</h4>
                    <p className="text-sm text-gray-700 mb-2">{format.structure.header_section.description}</p>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Field Types:</span> {format.structure.header_section.field_types}
                    </div>
                  </div>
                )}
                
                {format.structure.metric_tables && (
                  <div className="border-l-2 border-gray-300 pl-4">
                    <h4 className="font-medium text-gray-900 mb-2">Metric Tables</h4>
                    <p className="text-sm text-gray-700 mb-2">{format.structure.metric_tables.description}</p>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Note:</span> {format.structure.metric_tables.no_sample_rows}
                    </div>
                  </div>
                )}
                
                {format.structure.target_summary_table && (
                  <div className="border-l-2 border-gray-300 pl-4">
                    <h4 className="font-medium text-gray-900 mb-2">Target Summary Table</h4>
                    <p className="text-sm text-gray-700 mb-2">{format.structure.target_summary_table.description}</p>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Note:</span> {format.structure.target_summary_table.no_target_values}
                    </div>
                  </div>
                )}
                
                {format.structure.trajectory_detail_table && (
                  <div className="border-l-2 border-gray-300 pl-4">
                    <h4 className="font-medium text-gray-900 mb-2">Trajectory Detail Table</h4>
                    <p className="text-sm text-gray-700 mb-2">{format.structure.trajectory_detail_table.description}</p>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Note:</span> {format.structure.trajectory_detail_table.no_trajectory_values}
                    </div>
                  </div>
                )}
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
          {sssData.versioning_rules.map((item, index) => (
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
            <span className="text-gray-700">{sssData.governance_positioning.authority}</span>
          </div>
          <div>
            <span className="font-medium text-gray-900">Structural Integrity:</span>{' '}
            <span className="text-gray-700">{sssData.governance_positioning.structural_integrity}</span>
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="font-medium text-gray-900 mb-3">Review Criteria</h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
            {sssData.governance_positioning.review_criteria.map((criterion, index) => (
              <li key={index}>{criterion}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
