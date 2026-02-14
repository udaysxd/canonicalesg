import { Metadata } from 'next';
import Link from 'next/link';
import cermData from '@/data/cerm-reference-model.json';

export const metadata: Metadata = {
  title: 'CERM - Canonical Element Reference Model',
  description: 'Defines canonical element types and their permitted relationships for institutional sustainability data architecture.',
  alternates: {
    canonical: 'https://canonicalesg.org/architecture/cerm',
  },
};

export default function CERMPage() {
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
          {cermData.name}
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          {cermData.description}
        </p>
        <div className="mt-4 text-sm text-gray-500">
          Version: {cermData.version}
        </div>
      </div>

      {/* Elements */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
          Canonical Element Types
        </h2>
        
        <div className="space-y-8">
          {cermData.elements.map((element) => (
            <div 
              key={element.id}
              id={element.id.toLowerCase()}
              className="border border-gray-200 p-6"
            >
              <div className="mb-4">
                <div className="text-xs font-mono text-gray-500 mb-2">
                  {element.id}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {element.name}
                </h3>
              </div>
              
              <p className="text-gray-700 mb-4">
                {element.definition}
              </p>
              
              {/* Characteristics */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">
                  Characteristics
                </h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  {element.characteristics.map((char, index) => (
                    <li key={index}>{char}</li>
                  ))}
                </ul>
              </div>
              
              {/* Relationships */}
              {element.permitted_relationships.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">
                    Permitted Relationships
                  </h4>
                  <div className="space-y-2">
                    {element.permitted_relationships.map((rel, index) => (
                      <div 
                        key={index}
                        className="text-sm border-l-2 border-gray-300 pl-3 py-1"
                      >
                        <span className="font-medium text-gray-700">
                          {rel.description}
                        </span>
                        <div className="text-xs text-gray-500 mt-1">
                          Direction: {rel.direction} • Target: {rel.target_element}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
