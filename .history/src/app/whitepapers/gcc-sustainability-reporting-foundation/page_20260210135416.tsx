import { renderMarkdown, getRawText } from "@/lib/markdown";
import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from "@/components/AudioPlayer";

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
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div>
          <Link 
            href="/whitepapers" 
            className="text-sm text-[#666] hover:text-[#1a1a1a] hover:underline mb-8 inline-block"
          >
            ← Back to Whitepapers
          </Link>
          <AudioPlayer text={rawText} />
          <article
            className="prose prose-lg max-w-none
              prose-h1:text-[3rem] prose-h1:font-semibold prose-h1:leading-tight prose-h1:tracking-tight prose-h1:mb-6 prose-h1:mt-0
              prose-h2:text-[1.875rem] prose-h2:font-semibold prose-h2:leading-snug prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-[1.5rem] prose-h3:font-semibold prose-h3:leading-snug prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-[1.125rem] prose-p:leading-[1.8] prose-p:mb-6 prose-p:text-[#1a1a1a]
              prose-li:text-[1.125rem] prose-li:leading-[1.8] prose-li:mb-2
              prose-strong:font-semibold
              prose-a:text-[#1a1a1a] prose-a:underline prose-a:underline-offset-4 prose-a:decoration-[#999] hover:prose-a:decoration-[#1a1a1a]
              prose-blockquote:border-l-4 prose-blockquote:border-[#ccc] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-[#555]
              prose-hr:my-10"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </main>
    </>
  );
}
