import { renderMarkdown } from "@/lib/markdown";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "CMP - Canonical ESG",
  description: "Canonical Mapping Packs for sustainability reporting frameworks.",
  alternates: {
    canonical: "https://canonicalesg.org/cmp",
  },
};

export default async function CMPPage() {
  const html = await renderMarkdown('content/cmp/index.md');

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
