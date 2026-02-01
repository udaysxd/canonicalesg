import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';
import remarkRehype from 'remark-rehype';
import fs from 'fs';
import path from 'path';

const contentDirectory = path.join(process.cwd(), 'content');

export interface MarkdownDocument {
  slug: string;
  frontmatter: Record<string, any>;
  content: string;
  html: string;
}

export async function getDocumentBySlug(slug: string, section: string): Promise<MarkdownDocument | null> {
  const fullPath = path.join(contentDirectory, section, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkSlug)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeHighlight)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(content);

  return {
    slug,
    frontmatter: data,
    content,
    html: processedContent.toString(),
  };
}

export async function getAllDocuments(section: string): Promise<MarkdownDocument[]> {
  const sectionPath = path.join(contentDirectory, section);
  
  if (!fs.existsSync(sectionPath)) {
    return [];
  }

  const files = fs.readdirSync(sectionPath).filter(file => file.endsWith('.md'));
  
  const documents = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.md$/, '');
      return getDocumentBySlug(slug, section);
    })
  );

  return documents.filter((doc): doc is MarkdownDocument => doc !== null);
}

export function getDocumentSlugs(section: string): string[] {
  const sectionPath = path.join(contentDirectory, section);
  
  if (!fs.existsSync(sectionPath)) {
    return [];
  }

  return fs.readdirSync(sectionPath)
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace(/\.md$/, ''));
}
