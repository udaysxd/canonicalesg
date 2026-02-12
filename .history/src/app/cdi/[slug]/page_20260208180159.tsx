import { notFound } from "next/navigation";
import { DOCS } from "@/lib/docs";
import { renderMarkdown } from "@/lib/markdown";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const section = DOCS.cdi;
  const page = section.pages.find(p => p.slug === slug);
  
  if (!page) {
    notFound();
  }

  const path = `content/cdi/${section.version}/${page.file}`;
  const html = await renderMarkdown(path);

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <div>
        <nav className="text-sm text-[#666] mb-6">
          <Link href="/cdi" className="hover:text-[#1a1a1a] hover:underline">CDI</Link>
          <span className="mx-2">/</span>
          <span className="text-[#1a1a1a]">{page.title}</span>
        </nav>
        <article 
          className="prose"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </main>
  );
}
