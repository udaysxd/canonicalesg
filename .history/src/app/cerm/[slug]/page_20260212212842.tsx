import { notFound } from "next/navigation";
import { DOCS } from "@/lib/docs";
import { renderMarkdown } from "@/lib/markdown";
import Link from "next/link";
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const section = DOCS.cerm;
  const page = section.pages.find(p => p.slug === slug);
  
  if (!page) {
    return {
      title: "Page Not Found - Canonical ESG"
    };
  }

  return {
    title: `${page.title} - CERM - Canonical ESG`,
    description: `CERM ${page.title} documentation - Canonical ESG Reference Model`,
    alternates: {
      canonical: `https://canonicalesg.org/cerm/${slug}`,
    },
  };
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
    <main className="max-w-3xl mx-auto px-6 py-12">
      <div>
        <nav className="text-sm text-[#666] mb-6">
          <Link href="/cerm" className="hover:text-[#1a1a1a] hover:underline">CERM</Link>
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
