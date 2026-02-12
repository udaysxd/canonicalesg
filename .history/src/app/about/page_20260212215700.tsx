import { renderMarkdown } from "@/lib/markdown";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "About - Canonical ESG",
  description: "Open infrastructure initiative for framework-neutral sustainability disclosure. Learn about the three-layer architecture and stewardship.",
  keywords: ["Canonical ESG", "ESG infrastructure", "sustainability reporting architecture", "CDI", "CERM", "CMP"],
  alternates: {
    canonical: "https://canonicalesg.org/about",
  },
  openGraph: {
    title: "About - Canonical ESG",
    description: "Open infrastructure initiative for framework-neutral sustainability disclosure.",
    url: "https://canonicalesg.org/about",
  },
}

export default async function AboutPage() {
  const html = await renderMarkdown('content/about.md');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Canonical ESG',
    description: 'Open infrastructure initiative for framework-neutral sustainability disclosure',
    url: 'https://canonicalesg.org/about',
    mainEntity: {
      '@type': 'Organization',
      name: 'Canonical ESG',
      url: 'https://canonicalesg.org',
      description: 'Framework-neutral reference architecture for sustainability reporting',
      founder: {
        '@type': 'Person',
        name: 'Uday Singh',
        url: 'https://www.linkedin.com/in/udsingh1/'
      }
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="max-w-3xl mx-auto px-6 py-12">
        <div>
          <article 
            className="prose-sm"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </main>
    </>
  );
}
