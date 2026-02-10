import { renderMarkdown, getRawText } from "@/lib/markdown";
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Building a Unified ESG Reporting Foundation for the GCC - Canonical ESG",
  description: "A Practical Infrastructure Proposal for Regional Alignment. Gulf Cooperation Council (GCC) member states are accelerating the development of sustainability disclosure requirements.",
  keywords: ["GCC ESG", "sustainability reporting", "GCC infrastructure", "regional alignment", "ESG framework"],
  openGraph: {
    title: "Building a Unified ESG Reporting Foundation for the GCC",
    description: "A Practical Infrastructure Proposal for Regional Alignment",
    url: "https://canonicalesg.org/whitepapers/gcc-sustainability-reporting-foundation",
  },
};

export default async function WhitepaperPage() {
  const [html, rawText] = await Promise.all([
    renderMarkdown('content/whitepapers/gcc-sustainability-reporting-foundation/index.md'),
    getRawText('content/whitepapers/gcc-sustainability-reporting-foundation/index.md')
  ]);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Building a Unified ESG Reporting Foundation for the GCC',
    description: 'A Practical Infrastructure Proposal for Regional Alignment',
    url: 'https://canonicalesg.org/whitepapers/gcc-sustainability-reporting-foundation',
    author: {
      '@type': 'Organization',
      name: 'Canonical ESG',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Canonical ESG',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="max-w-3xl mx-auto px-6 py-12">
        <div>
          <Link 
            href="/whitepapers" 
            className="text-sm text-[#666] hover:text-[#1a1a1a] hover:underline mb-6 inline-block"
          >
            ← Back to Whitepapers
          </Link>
          <AudioPlayer text={rawText} /> 
            className="prose"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </main>
    </>
  );
}
