import { renderMarkdown, getRawText, getHeadings } from "@/lib/markdown";
import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from "@/components/AudioPlayer";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Designing Sovereign Sustainability Architecture in Emerging Economies - Canonical ESG",
  description: "A full-cycle institutional blueprint from policy to digital infrastructure for emerging economies seeking to attract institutional capital, reduce regulatory fragmentation, and build investor-grade reporting credibility.",
  keywords: ["sustainability architecture", "emerging economies", "sovereign sustainability", "policy framework", "ISSB", "ESRS", "institutional infrastructure", "capital markets", "Canonical ESG"],
  authors: [{ name: "Uday Singh" }],
  openGraph: {
    title: "Designing Sovereign Sustainability Architecture in Emerging Economies",
    description: "A Full-Cycle Institutional Blueprint from Policy to Digital Infrastructure",
    url: "https://canonicalesg.org/whitepapers/sovereign-sustainability-architecture-emerging-economies",
    type: "article",
    publishedTime: "2025-02-15",
  },
  twitter: {
    card: "summary_large_image",
    title: "Designing Sovereign Sustainability Architecture in Emerging Economies",
    description: "A Full-Cycle Institutional Blueprint from Policy to Digital Infrastructure",
  },
  alternates: {
    canonical: "https://canonicalesg.org/whitepapers/sovereign-sustainability-architecture-emerging-economies",
  },
};

export default async function WhitepaperPage() {
  const [html, rawText, headings] = await Promise.all([
    renderMarkdown('content/whitepapers/sovereign-sustainability-architecture-emerging-economies/index.md'),
    getRawText('content/whitepapers/sovereign-sustainability-architecture-emerging-economies/index.md'),
    getHeadings('content/whitepapers/sovereign-sustainability-architecture-emerging-economies/index.md')
  ]);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Designing Sovereign Sustainability Architecture in Emerging Economies: A Full-Cycle Institutional Blueprint from Policy to Digital Infrastructure',
    description: 'A full-cycle institutional blueprint from policy to digital infrastructure for emerging economies.',
    url: 'https://canonicalesg.org/whitepapers/sovereign-sustainability-architecture-emerging-economies',
    author: {
      '@type': 'Person',
      name: 'Uday Singh',
      jobTitle: 'Founding Architect',
      affiliation: {
        '@type': 'Organization',
        name: 'Canonical ESG',
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Canonical ESG',
      url: 'https://canonicalesg.org',
    },
    datePublished: '2025-02-15',
    dateModified: '2025-02-15',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://canonicalesg.org/whitepapers/sovereign-sustainability-architecture-emerging-economies',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12">
          {/* Table of Contents Sidebar */}
          <aside className="hidden lg:block">
            <TableOfContents headings={headings} />
          </aside>
          
          {/* Main Content */}
          <div className="max-w-3xl">
            <Link 
              href="/whitepapers" 
              className="text-sm text-[#666] hover:text-[#1a1a1a] hover:underline mb-8 inline-block"
            >
              ← Back to Whitepapers
            </Link>
            {/* Audio and Download */}
            <div className="flex items-center gap-4 mb-6">
              <AudioPlayer text={rawText} />
              <a
                href="/whitepapers/sovereign-sustainability-architecture-emerging-economies.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#111] border border-[#ccc] rounded hover:bg-[#f5f5f5] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF
              </a>
            </div>
            
            {/* Author Block - Outside prose to avoid style overrides */}
            <section className="mt-6 mb-8 border-b border-[#e5e5e5] pb-6 not-prose">
              <div className="flex items-start gap-4">
                <img
                  src="/images/uday-singh.jpg"
                  alt="Uday Singh"
                  className="w-20 h-20 rounded object-cover"
                />
                <div>
                  <p className="text-[#111] font-semibold text-[0.875rem]">
                    Uday Singh <span className="text-[#444] font-normal">— Founding Architect, Canonical ESG</span>
                  </p>
                  <p className="text-[#555] text-[0.75rem] leading-snug max-w-[560px] mt-1">
                    Uday Singh leads Canonical ESG, an independent initiative developing semantic infrastructure for sustainability disclosure. His work focuses on ESG data architecture and cross-framework alignment to strengthen regulatory coherence and interoperability.
                  </p>
                </div>
              </div>
            </section>
            
            <article
              className="prose max-w-none font-serif
                prose-h1:!text-[3.25rem] prose-h1:font-normal prose-h1:leading-[1.1] prose-h1:tracking-tight prose-h1:mb-6 prose-h1:mt-0 prose-h1:text-[#111]
                prose-h2:!text-[1.75rem] prose-h2:font-semibold prose-h2:leading-[1.3] prose-h2:mt-14 prose-h2:mb-5 prose-h2:text-[#1a1a1a]
                prose-h3:!text-[1.375rem] prose-h3:font-semibold prose-h3:leading-[1.4] prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-[#222]
                prose-p:!text-[1.875rem] prose-p:!leading-[1.7] prose-p:mb-8 prose-p:text-[#333]
                prose-li:!text-[1.875rem] prose-li:!leading-[1.7] prose-li:mb-3 prose-li:text-[#333]
                prose-strong:font-semibold prose-strong:text-[#111]
                prose-a:text-[#1a1a1a] prose-a:underline prose-a:underline-offset-4 prose-a:decoration-[#999] hover:prose-a:decoration-[#1a1a1a]
                prose-blockquote:border-l-4 prose-blockquote:border-[#ccc] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-[#555] prose-blockquote:!text-[1.875rem] prose-blockquote:my-8
                prose-hr:my-12 prose-hr:border-[#ddd]"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </main>
    </>
  );
}
