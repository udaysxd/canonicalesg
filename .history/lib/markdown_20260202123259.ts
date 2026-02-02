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

export async function renderMarkdown(filePath: string): Promise<string> {
  const fullPath = path.join(process.cwd(), filePath);
  
  if (!fs.existsSync(fullPath)) {
    throw new Error(`File not found: ${filePath}`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content } = matter(fileContents);
  
  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeHighlight)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(content);

  return processedContent.toString();
}

export async function getDocument(
  section: string,
  version: string,
  document: string
): Promise<MarkdownDocument | null> {
  const fullPath = path.join(contentDirectory, section, version, `${document}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeHighlight)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(content);

  return {
    slug: document,
    frontmatter: data,
    content,
    html: processedContent.toString(),
  };
}

export async function getAllDocuments(
  section: string,
  version: string
): Promise<MarkdownDocument[]> {
  const versionPath = path.join(contentDirectory, section, version);
  
  if (!fs.existsSync(versionPath)) {
    return [];
  }

  const files = fs.readdirSync(versionPath).filter(file => file.endsWith('.md'));
  
  const documents = await Promise.all(
    files.map(async (file) => {
      const doc = file.replace(/\.md$/, '');
      return getDocument(section, version, doc);
    })
  );

  return documents.filter((doc): doc is MarkdownDocument => doc !== null);
}

export function getDocumentNames(section: string, version: string): string[] {
  const versionPath = path.join(contentDirectory, section, version);
  
  if (!fs.existsSync(versionPath)) {
    return [];
  }

  return fs.readdirSync(versionPath)
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace(/\.md$/, ''));
}

export function getVersions(section: string): string[] {
  const sectionPath = path.join(contentDirectory, section);
  
  if (!fs.existsSync(sectionPath)) {
    return [];
  }

  return fs.readdirSync(sectionPath)
    .filter(name => {
      const fullPath = path.join(sectionPath, name);
      return fs.statSync(fullPath).isDirectory() && name.match(/^v\d+$/);
    })
    .sort();
}
