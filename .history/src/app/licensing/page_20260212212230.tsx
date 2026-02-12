import { renderMarkdown } from "@/lib/markdown";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Licensing - Canonical ESG",
  description: "Licensing information for Canonical ESG content and machine-readable schemas.",
  alternates: {
    canonical: "https://canonicalesg.org/licensing",
  },
}

export default async function LicensingPage() {
  const html = await renderMarkdown('content/licensing.md');

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
