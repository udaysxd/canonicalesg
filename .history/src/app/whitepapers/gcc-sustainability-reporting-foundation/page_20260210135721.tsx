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
      <main className="max-w-3xl mx-auto px-6 py-12">
        <div>
          <Link 
            href="/whitepapers" 
            className="text-sm text-[#666] hover:text-[#1a1a1a] hover:underline mb-8 inline-block"
          >
            ← Back to Whitepapers
          </Link>
          <AudioPlayer text={rawText} />
          <article
            className="prose max-w-none font-serif
              prose-h1:text-[2.75rem] prose-h1:font-normal prose-h1:leading-[1.15] prose-h1:tracking-tight prose-h1:mb-6 prose-h1:mt-0 prose-h1:text-[#111]
              prose-h2:text-[1.75rem] prose-h2:font-semibold prose-h2:leading-[1.3] prose-h2:mt-14 prose-h2:mb-5 prose-h2:text-[#1a1a1a]
              prose-h3:text-[1.375rem] prose-h3:font-semibold prose-h3:leading-[1.4] prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-[#222]
              prose-p:text-[1.125rem] prose-p:leading-[1.75] prose-p:mb-6 prose-p:text-[#333]
              prose-li:text-[1.125rem] prose-li:leading-[1.75] prose-li:mb-2 prose-li:text-[#333]
              prose-strong:font-semibold prose-strong:text-[#111]
              prose-a:text-[#1a1a1a] prose-a:underline prose-a:underline-offset-4 prose-a:decoration-[#999] hover:prose-a:decoration-[#1a1a1a]
              prose-blockquote:border-l-4 prose-blockquote:border-[#ccc] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-[#555] prose-blockquote:text-[1.125rem] prose-blockquote:my-8
              prose-hr:my-12 prose-hr:border-[#ddd]"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </main>
    </>
  );
}
