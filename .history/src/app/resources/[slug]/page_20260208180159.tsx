import { notFound } from "next/navigation";
import { renderMarkdown } from "@/lib/markdown";
import fs from 'fs';
import path from 'path';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ResourcePage({ params }: PageProps) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'content', 'resources', `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const html = await renderMarkdown(`content/resources/${slug}.md`);

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <article 
        className="prose"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </main>
  );
}
