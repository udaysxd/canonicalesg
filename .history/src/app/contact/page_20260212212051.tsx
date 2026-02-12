import { renderMarkdown } from "@/lib/markdown";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contact - Canonical ESG",
  description: "Get in touch with Canonical ESG for questions about the reference architecture, collaboration opportunities, or technical inquiries.",
  alternates: {
    canonical: "https://canonicalesg.org/contact",
  },
}

export default async function ContactPage() {
  const html = await renderMarkdown('content/contact.md');

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
