import { Metadata } from 'next';
import Link from 'next/link';
import { architectureGraph } from '@/lib/graph/buildGraph';

export const metadata: Metadata = {
  title: 'Architecture Explorer - Canonical ESG',
  description: 'Interactive explorer for the Canonical ESG architecture. Navigate across CERM, CDI, CMP, and Presentation Layer with bidirectional relationship mapping.',
  alternates: {
    canonical: 'https://canonicalesg.org/explorer',
  },
};

export default function ExplorerIndexPage() {
  const { nodes } = architectureGraph;

  // Group nodes by layer
  const cermNodes = nodes.filter(n => n.layer === 'cerm');
  const cdiNodes = nodes.filter(n => n.layer === 'cdi');
  const cmpNodes = nodes.filter(n => n.layer === 'cmp');
  const sssNodes = nodes.filter(n => n.layer === 'sss');

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Architecture Explorer
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Navigate the Canonical ESG architecture across all layers. 
          Explore relationships between CERM elements, CDI intents, CMP mappings, and SSS statements.
        </p>
      </div>

      {/* CERM Layer */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          CERM — Canonical Element Reference Model
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          {cermNodes.length} canonical element types defining the foundational data layer
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {cermNodes.map((node) => (
            <Link
              key={node.id}
              href={`/explorer/cerm/${node.id}`}
              className="border border-gray-200 p-3 hover:border-gray-400 transition-colors text-sm"
            >
              <div className="font-medium text-gray-900">{node.name}</div>
              <div className="text-xs text-gray-500 mt-1 font-mono">{node.id}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* CDI Layer */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          CDI — Canonical Disclosure Intents
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          {cdiNodes.length} disclosure intents for climate-related reporting
        </p>
        <div className="space-y-2">
          {cdiNodes.map((node) => (
            <Link
              key={node.id}
              href={`/explorer/cdi/${node.id}`}
              className="flex items-center justify-between border border-gray-200 p-3 hover:border-gray-400 transition-colors"
            >
              <div>
                <div className="font-medium text-gray-900">{node.name}</div>
                <div className="text-xs text-gray-500 mt-1 font-mono">{node.id}</div>
              </div>
              <span className="text-xs text-gray-400">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* CMP Layer */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          CMP — Canonical Mapping Packs
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          {cmpNodes.length} framework mappings documenting interpretive relationships
        </p>
        <div className="space-y-2">
          {cmpNodes.map((node) => (
            <Link
              key={node.id}
              href={`/explorer/cmp/${node.id}`}
              className="flex items-center justify-between border border-gray-200 p-3 hover:border-gray-400 transition-colors"
            >
              <div>
                <div className="font-medium text-gray-900">{node.name}</div>
                <div className="text-xs text-gray-500 mt-1 font-mono">{node.id}</div>
              </div>
              <span className="text-xs text-gray-400">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* SSS Layer */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          SSS — Structured Sustainability Statements
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          {sssNodes.length} presentation format templates
        </p>
        <div className="space-y-2">
          {sssNodes.map((node) => (
            <Link
              key={node.id}
              href={`/explorer/sss/${node.id}`}
              className="flex items-center justify-between border border-gray-200 p-3 hover:border-gray-400 transition-colors"
            >
              <div>
                <div className="font-medium text-gray-900">{node.name}</div>
                <div className="text-xs text-gray-500 mt-1 font-mono">{node.id}</div>
              </div>
              <span className="text-xs text-gray-400">→</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
