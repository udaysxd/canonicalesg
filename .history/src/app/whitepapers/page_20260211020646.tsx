import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Whitepapers - Canonical ESG",
  description: "In-depth research and analysis on sustainability reporting infrastructure, framework interoperability, and regional alignment.",
  keywords: ["ESG whitepapers", "sustainability reporting research", "GCC ESG", "framework alignment"],
  openGraph: {
    title: "Whitepapers - Canonical ESG",
    description: "In-depth research on sustainability reporting infrastructure and regional alignment.",
    url: "https://canonicalesg.org/whitepapers",
  },
};

export default function WhitepapersPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Whitepapers',
    description: 'Research and analysis on sustainability reporting infrastructure',
    url: 'https://canonicalesg.org/whitepapers',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'Article',
            name: 'The Economics of Sustainability Reporting: Structural Costs and Implementation Maturity',
            description: 'An analysis of structural cost drivers and the economic case for institutional infrastructure',
            url: 'https://canonicalesg.org/whitepapers/economics-sustainability-reporting'
          }
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'Article',
            name: 'Stabilising ISSB Implementation: The Case for Institutional Infrastructure',
            description: 'A technical analysis of ISSB implementation challenges and the need for institutional infrastructure',
            url: 'https://canonicalesg.org/whitepapers/issb-implementation-infrastructure'
          }
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'Article',
            name: 'Building a Unified ESG Reporting Foundation for the GCC',
            description: 'A Practical Infrastructure Proposal for Regional Alignment',
            url: 'https://canonicalesg.org/whitepapers/gcc-sustainability-reporting-foundation'
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="max-w-3xl mx-auto px-6 py-12">
        <div>
          <h1 className="text-[2.25rem] font-semibold text-[#111] mb-4 leading-tight">
            Whitepapers
          </h1>
          
          <p className="text-[1.0625rem] text-[#1a1a1a] mb-10 leading-relaxed">
            In-depth research and analysis on sustainability reporting infrastructure, framework interoperability, and regional alignment.
          </p>

          <div className="space-y-6">
            <Link 
              href="/whitepapers/economics-sustainability-reporting"
              className="block p-6 border border-[#eee] rounded-lg hover:border-[#ccc] hover:bg-[#fafafa] transition-colors"
            >
              <h2 className="text-[1.5rem] font-semibold text-[#111] mb-2 leading-tight">
                The Economics of Sustainability Reporting: Structural Costs and Implementation Maturity
              </h2>
              <p className="text-[1rem] text-[#666] leading-relaxed">
                An analysis of structural cost drivers and the economic case for institutional infrastructure
              </p>
            </Link>
            
            <Link 
              href="/whitepapers/issb-implementation-infrastructure"
              className="block p-6 border border-[#eee] rounded-lg hover:border-[#ccc] hover:bg-[#fafafa] transition-colors"
            >
              <h2 className="text-[1.5rem] font-semibold text-[#111] mb-2 leading-tight">
                Stabilising ISSB Implementation: The Case for Institutional Infrastructure
              </h2>
              <p className="text-[1rem] text-[#666] leading-relaxed">
                A technical analysis of ISSB implementation challenges and the need for institutional infrastructure
              </p>
            </Link>
            
            <Link 
              href="/whitepapers/gcc-sustainability-reporting-foundation"
              className="block p-6 border border-[#eee] rounded-lg hover:border-[#ccc] hover:bg-[#fafafa] transition-colors"
            >
              <h2 className="text-[1.5rem] font-semibold text-[#111] mb-2 leading-tight">
                Building a Unified ESG Reporting Foundation for the GCC
              </h2>
              <p className="text-[1rem] text-[#666] leading-relaxed">
                A Practical Infrastructure Proposal for Regional Alignment
              </p>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
