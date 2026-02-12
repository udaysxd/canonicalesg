import { renderMarkdown } from "@/lib/markdown";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Schemas - Canonical ESG",
  description: "Machine-readable schemas and technical specifications for Canonical ESG's sustainability reporting infrastructure.",
  alternates: {
    canonical: "https://canonicalesg.org/schemas",
  },
}

export default async function SchemasPage() {
  const html = await renderMarkdown('content/schemas/index.md');

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <div>
        <article 
          className="prose"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </main>
  );
}
