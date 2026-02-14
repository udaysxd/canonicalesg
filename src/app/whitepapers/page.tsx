import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Whitepapers - Canonical ESG",
  description: "In-depth research and analysis on sustainability reporting infrastructure, framework interoperability, and regional alignment.",
  keywords: ["ESG whitepapers", "sustainability reporting research", "GCC ESG", "framework alignment"],
  alternates: {
    canonical: "https://canonicalesg.org/whitepapers",
  },
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
            name: 'A Sovereign Sustainability Framework for Emerging Economies: Institutional Policy Design from Mandate to Market Integration',
            description: 'Institutional Policy Design from Mandate to Market Integration. A blueprint for emerging economies',
            url: 'https://canonicalesg.org/whitepapers/sovereign-sustainability-architecture-emerging-economies'
          }
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'Article',
            name: 'Standardising the Format of Sustainability Reporting: Why ESG Now Requires Structural Reform',
            description: 'A structural reform proposal for global ESG reporting infrastructure',
            url: 'https://canonicalesg.org/whitepapers/standardising-esg-reporting-format'
          }
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'Article',
            name: 'Stabilising ISSB Implementation: The Case for Institutional Infrastructure',
            description: 'A technical analysis of ISSB implementation challenges and the need for institutional infrastructure',
            url: 'https://canonicalesg.org/whitepapers/issb-implementation-infrastructure'
          }
        },
        {
          '@type': 'ListItem',
          position: 4,
          item: {
            '@type': 'Article',
            name: 'Building a Unified ESG Reporting Foundation for the Gulf Cooperation Council (GCC)',
            description: 'A Practical Infrastructure Proposal for Regional Alignment',
            url: 'https://canonicalesg.org/whitepapers/gcc-sustainability-reporting-foundation'
          }
        }
      ]
    }
  };

  const whitepapers = [
    {
      id: 'sovereign-sustainability-architecture-emerging-economies',
      title: 'A Sovereign Sustainability Framework for Emerging Economies',
      subtitle: 'Institutional Policy Design from Mandate to Market Integration',
      description: 'A blueprint for emerging economies to develop sustainable finance infrastructure',
      icon: '🏛️'
    },
    {
      id: 'standardising-esg-reporting-format',
      title: 'Standardising the Format of Sustainability Reporting',
      subtitle: 'Why ESG Now Requires Structural Reform',
      description: 'A structural reform proposal for global ESG reporting infrastructure',
      icon: '📋'
    },
    {
      id: 'issb-implementation-infrastructure',
      title: 'Stabilising ISSB Implementation',
      subtitle: 'The Case for Institutional Infrastructure',
      description: 'A technical analysis of ISSB implementation challenges and the need for institutional infrastructure',
      icon: '🏗️'
    },
    {
      id: 'gcc-sustainability-reporting-foundation',
      title: 'Building a Unified ESG Reporting Foundation for the GCC',
      subtitle: 'A Practical Infrastructure Proposal for Regional Alignment',
      description: 'Regional alignment framework for Gulf Cooperation Council countries',
      icon: '🌍'
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Whitepapers
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
            In-depth research and analysis on sustainability reporting infrastructure, framework interoperability, and regional alignment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whitepapers.map((paper) => (
            <Link
              key={paper.id}
              href={`/whitepapers/${paper.id}`}
              className="group block p-8 bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl group-hover:scale-110 transition-transform">
                  {paper.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {paper.title}
                  </h2>
                  <p className="text-sm text-gray-500 font-medium">
                    {paper.subtitle}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {paper.description}
              </p>
              <div className="mt-6 flex items-center text-blue-600 font-medium text-sm group-hover:underline">
                Read more
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
