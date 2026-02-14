import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { architectureGraph, type LayerType } from '@/lib/graph/buildGraph';

interface PageProps {
  params: Promise<{ type: string; id: string }>;
}

// ============================================================
// STATIC PARAMS GENERATION
// ============================================================

export function generateStaticParams() {
  const { nodes } = architectureGraph;
  
  return nodes.map((node) => ({
    type: node.layer,
    id: node.id,
  }));
}

// ============================================================
// METADATA
// ============================================================

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { type, id } = await params;
  const node = architectureGraph.nodes.find(
    (n) => n.layer === type && n.id === id
  );
  
  if (!node) {
    return {
      title: 'Node Not Found',
    };
  }
  
  const layerNames: Record<LayerType, string> = {
    cerm: 'CERM',
    cdi: 'CDI',
    cmp: 'CMP',
    sss: 'SSS',
  };
  
  return {
    title: `${node.name} - ${layerNames[node.layer]}`,
    description: node.definition?.slice(0, 160) || node.purpose?.slice(0, 160) || `${node.name} in Canonical ESG ${layerNames[node.layer]} layer`,
    alternates: {
      canonical: `https://canonicalesg.org/explorer/${type}/${id}`,
    },
  };
}

// ============================================================
// DETAIL PAGE
// ============================================================

export default async function ExplorerDetailPage({ params }: PageProps) {
  const { type, id } = await params;
  
  const node = architectureGraph.nodes.find(
    (n) => n.layer === type && n.id === id
  );
  
  if (!node) {
    notFound();
  }

  const layerNames: Record<LayerType, string> = {
    cerm: 'Canonical Element Reference Model',
    cdi: 'Canonical Disclosure Intent',
    cmp: 'Canonical Mapping Pack',
    sss: 'Structured Sustainability Statement',
  };

  // Get outgoing edges
  const outgoingEdges = architectureGraph.forwardEdges[node.id] || [];
  
  // Get incoming edges
  const incomingEdges = architectureGraph.reverseEdges[node.id] || [];

  // Group edges by target layer
  const outgoingByLayer = outgoingEdges.reduce((acc, edge) => {
    if (!acc[edge.targetLayer]) {
      acc[edge.targetLayer] = [];
    }
    acc[edge.targetLayer].push(edge);
    return acc;
  }, {} as Record<LayerType, typeof outgoingEdges>);

  // Group incoming edges by source layer (stored in targetId of reverse edges)
  const incomingByLayer = incomingEdges.reduce((acc, edge) => {
    // Find the source node's layer from the reverse edge
    const sourceNode = architectureGraph.nodes.find(n => n.id === edge.targetId);
    const sourceLayer = sourceNode?.layer || 'cerm';
    if (!acc[sourceLayer]) {
      acc[sourceLayer] = [];
    }
    acc[sourceLayer].push(edge);
    return acc;
  }, {} as Record<LayerType, typeof incomingEdges>);

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-8">
        <Link 
          href="/reference/explorer"
          className="text-sm text-gray-600 hover:text-gray-900 underline mb-4 inline-block"
        >
          ← Back to Explorer
        </Link>
        
        <div className="text-xs font-mono text-gray-500 mb-2">
          {node.id}
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          {node.name}
        </h1>
        <div className="flex items-center gap-4 text-sm">
          <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded">
            {layerNames[node.layer]}
          </span>
          <span className="text-gray-500">
            Version: {node.version}
          </span>
        </div>
      </div>

      {/* Definition/Purpose */}
      {(node.definition || node.purpose) && (
        <section className="mb-10 border-l-4 border-gray-300 pl-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            {node.definition ? 'Definition' : 'Purpose'}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {node.definition || node.purpose}
          </p>
        </section>
      )}

      {/* Outgoing Relationships */}
      {outgoingEdges.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
            Outgoing Relationships
          </h2>
          
          {Object.entries(outgoingByLayer).map(([layer, edges]) => (
            <div key={layer} className="mb-6">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">
                To {layerNames[layer as LayerType]}
              </h3>
              <div className="space-y-2">
                {edges.map((edge, idx) => {
                  const targetNode = architectureGraph.nodes.find(n => n.id === edge.targetId);
                  return (
                    <Link
                      key={idx}
                      href={`/reference/explorer/${edge.targetLayer}/${edge.targetId}`}
                      className="flex items-center justify-between border border-gray-200 p-3 hover:border-gray-400 transition-colors"
                    >
                      <div>
                        <div className="font-medium text-gray-900">
                          {targetNode?.name || edge.targetId}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {edge.label}
                        </div>
                      </div>
                      <span className="text-xs text-gray-400">→</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Incoming Relationships */}
      {incomingEdges.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
            Incoming Relationships
          </h2>
          
          {Object.entries(incomingByLayer).map(([layer, edges]) => (
            <div key={layer} className="mb-6">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">
                From {layerNames[layer as LayerType]}
              </h3>
              <div className="space-y-2">
                {edges.map((edge, idx) => {
                  const sourceNode = architectureGraph.nodes.find(n => n.id === edge.targetId);
                  return (
                    <Link
                      key={idx}
                      href={`/reference/explorer/${sourceNode?.layer || 'cerm'}/${edge.targetId}`}
                      className="flex items-center justify-between border border-gray-200 p-3 hover:border-gray-400 transition-colors"
                    >
                      <div>
                        <div className="font-medium text-gray-900">
                          {sourceNode?.name || edge.targetId}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {edge.label}
                        </div>
                      </div>
                      <span className="text-xs text-gray-400">←</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* No relationships notice */}
      {outgoingEdges.length === 0 && incomingEdges.length === 0 && (
        <section className="mb-10">
          <p className="text-gray-500 italic">
            No relationships defined for this node.
          </p>
        </section>
      )}
    </main>
  );
}
