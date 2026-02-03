import { renderMarkdown } from "@/lib/markdown";
import Link from "next/link";

export default async function GovernancePage() {
  const html = await renderMarkdown('content/governance/index.md');

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
