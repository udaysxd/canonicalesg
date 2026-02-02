import { renderMarkdown } from "@/lib/markdown";
import Link from "next/link";

export default async function ClimateCMPPage() {
  const html = await renderMarkdown("content/cmp/v1/examples/climate-cmp-v0.1.md");

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <div>
        <nav className="text-sm text-[#666] mb-6">
          <Link href="/cmp" className="hover:text-[#1a1a1a] hover:underline">CMP</Link>
          <span className="mx-2">/</span>
          <span className="text-[#1a1a1a]">Climate CMP v0.1</span>
        </nav>
        <article 
          className="prose"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </main>
  );
}
