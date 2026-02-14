import { Metadata } from 'next';
import Link from 'next/link';
import ifrsS2Data from '@/data/cmp-packs/issb/ifrs-s2.json';

export const metadata: Metadata = {
  title: 'CMP - Canonical Mapping Packs',
  description: 'Canonical Mapping Packs documenting non-authoritative interpretations of external framework requirements using Canonical ESG disclosure intents.',
  alternates: {
    canonical: 'https://canonicalesg.org/cmp',
  },
};

export default function CmpIndexPage() {
  const packs = [ifrsS2Data];

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Canonical Mapping Packs
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Non-authoritative interpretive mappings between external disclosure frameworks 
          and Canonical ESG disclosure intents. These packs document interpretation without 
          asserting authoritative status relative to framework issuers.
        </p>
      </div>

      {/* CMP Packs List */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
          Available Mapping Packs
        </h2>
        
        <div className="space-y-4">
          {packs.map((pack) => (
            <div 
              key={pack.id}
              className="border border-gray-200 p-6 hover:border-gray-400 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-xs font-mono text-gray-500 mb-2">
                    {pack.id}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {pack.frameworkName}
                  </h3>
                  <div className="text-sm text-gray-600 mt-1">
                    {pack.jurisdiction}
                  </div>
                </div>
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                  v{pack.version}
                </span>
              </div>
              
              <div className="text-sm text-gray-700 mb-4">
                <span className="font-medium">{pack.mappings.length} mappings</span> to Canonical ESG disclosure intents
              </div>
              
              <Link
                href={`/cmp/${pack.id.toLowerCase().replace(/-/g, '-')}`}
                className="text-sm text-gray-600 hover:text-gray-900 underline"
              >
                View mapping pack →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Info */}
      <section className="mt-16 pt-8 border-t border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          About CMP
        </h2>
        <p className="text-gray-700 text-sm mb-4">
          Canonical Mapping Packs (CMP) document the interpretive layer connecting external 
          disclosure frameworks to Canonical ESG disclosure intents. Each mapping is non-authoritative: 
          it does not claim to supersede or authoritatively interpret the source framework.
        </p>
        <p className="text-gray-700 text-sm">
          Mappings include interpretive rationale explaining how framework requirements correspond 
          to canonical disclosure intents, along with scope conditions defining boundary and 
          temporal applicability. Users must consult official framework documentation for 
          definitive requirements.
        </p>
      </section>
    </main>
  );
}
