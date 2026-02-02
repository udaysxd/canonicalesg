import { getDocument } from "@/lib/markdown";

export default async function WhoThisIsForPage() {
  const doc = await getDocument("resources", "v1", "who-this-is-for");
  
  if (!doc) {
    return (
      <main className="max-w-3xl mx-auto px-6 py-12">
        <p className="text-[#666]">Document not found.</p>
      </main>
    );
  }

  const { html } = doc;

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <article 
        className="prose"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </main>
  );
}
