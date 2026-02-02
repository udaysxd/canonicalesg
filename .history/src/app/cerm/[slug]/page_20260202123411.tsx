import { notFound } from "next/navigation";
import { DOCS } from "@/lib/docs";
import { renderMarkdown } from "@/lib/markdown";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const section = DOCS.cerm;
  const page = section.pages.find(p => p.slug === slug);
  
  if (!page) {
    notFound();
  }

  const path = `content/cerm/${section.version}/${page.file}`;
  const html = await renderMarkdown(path);

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <div className="max-w-4xl">
        <nav className="text-sm text-slate-500 mb-6">
          <Link href="/cerm" className="hover:text-slate-900">CERM</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900">{page.title}</span>
        </nav>
        <h1 className="text-3xl font-semibold text-slate-900 mb-8">{page.title}</h1>
        <article 
          className="prose prose-slate max-w-none"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </main>
  );
}
