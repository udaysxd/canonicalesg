import { renderMarkdown } from "@/lib/markdown";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Framework Coverage - Canonical ESG",
  description: "Coverage of sustainability reporting frameworks supported by Canonical ESG's semantic infrastructure.",
  alternates: {
    canonical: "https://canonicalesg.org/framework-coverage",
  },
}

export default async function FrameworkCoveragePage() {
  const html = await renderMarkdown('content/framework-coverage.md');

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
