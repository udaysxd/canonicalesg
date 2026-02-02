import { readFileSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";

async function getMarkdownContent() {
  const filePath = join(process.cwd(), "content", "resources", "who-this-is-for.md");
  
  try {
    const fileContents = readFileSync(filePath, "utf8");
    const { content } = matter(fileContents);
    
    const processedContent = await remark()
      .use(remarkGfm)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeHighlight)
      .use(rehypeStringify, { allowDangerousHtml: true })
      .process(content);
    
    return processedContent.toString();
  } catch {
    return null;
  }
}

export default async function WhoThisIsForPage() {
  const html = await getMarkdownContent();
  
  if (!html) {
    return (
      <main className="max-w-3xl mx-auto px-6 py-12">
        <p className="text-[#666]">Document not found.</p>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <article 
        className="prose"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </main>
  );
}
