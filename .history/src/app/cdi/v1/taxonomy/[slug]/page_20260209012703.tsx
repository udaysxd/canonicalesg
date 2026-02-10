import { notFound } from "next/navigation";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import remarkRehype from "remark-rehype";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const TAXONOMY_DIR = path.join(process.cwd(), "content", "cdi", "v1", "taxonomy");

async function renderMarkdown(content: string): Promise<string> {
  const processed = await remark()
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeHighlight)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(content);

  return processed.toString();
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  if (!fs.existsSync(TAXONOMY_DIR)) {
    return [];
  }

  const files = fs.readdirSync(TAXONOMY_DIR);
  const mdFiles = files.filter((file) => file.endsWith(".md"));

  return mdFiles.map((file) => ({
    slug: file.replace(/\.md$/, ""),
  }));
}

export default async function TaxonomyPage({ params }: PageProps) {
  const { slug } = await params;
  const filePath = path.join(TAXONOMY_DIR, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data: frontmatter, content } = matter(fileContents);
  const html = await renderMarkdown(content);

  const title = frontmatter.title ||
    slug.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <div>
        <nav className="text-sm text-[#666] mb-6">
          <Link href="/cdi" className="hover:text-[#1a1a1a] hover:underline">
            CDI
          </Link>
          <span className="mx-2">/</span>
          <Link href="/cdi/v1" className="hover:text-[#1a1a1a] hover:underline">
            v1
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#1a1a1a]">Taxonomy</span>
          <span className="mx-2">/</span>
          <span className="text-[#1a1a1a]">{title}</span>
        </nav>

        <article
          className="prose prose-slate max-w-none"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <div className="mt-12 pt-6 border-t border-[#eee]">
          <Link
            href="/cdi"
            className="text-sm text-[#666] hover:text-[#1a1a1a] hover:underline"
          >
            ← Back to CDI
          </Link>
        </div>
      </div>
    </main>
  );
}
