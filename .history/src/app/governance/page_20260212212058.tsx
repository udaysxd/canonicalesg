import { renderMarkdown } from "@/lib/markdown";
import Link from "next/link";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Governance - Canonical ESG",
  description: "Governance framework and stewardship model for Canonical ESG's open infrastructure initiative.",
  alternates: {
    canonical: "https://canonicalesg.org/governance",
  },
}

export default async function GovernancePage() {
  const html = await renderMarkdown('content/governance/index.md');

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <div>
        <article 
          className="prose"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </main>
  );
}
