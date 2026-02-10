import { renderMarkdown } from "@/lib/markdown";

export default async function AboutPage() {
  const html = await renderMarkdown('content/about.md');

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
