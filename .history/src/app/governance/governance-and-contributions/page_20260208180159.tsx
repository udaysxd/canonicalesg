import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';
import matter from 'gray-matter';

export default async function GovernanceAndContributionsPage() {
  const filePath = path.join(process.cwd(), 'content', 'governance', 'governance-and-contributions.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { content } = matter(fileContents);

  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeHighlight)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(content);

  const html = processedContent.toString();

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <article 
        className="prose"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </main>
  );
}
