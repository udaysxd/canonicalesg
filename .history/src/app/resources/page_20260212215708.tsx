import { renderMarkdown } from "@/lib/markdown";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Resources - Canonical ESG",
  description: "Documentation, guides, and reference materials for Canonical ESG's sustainability reporting infrastructure.",
  alternates: {
    canonical: "https://canonicalesg.org/resources",
  },
}

export default async function ResourcesPage() {
  const html = await renderMarkdown('content/resources/index.md');

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <div>
        <article 
          className="prose-sm"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </main>
  );
}
