import { readFileSync } from "fs";
import { join } from "path";

export async function GET() {
  const filePath = join(process.cwd(), "content", "cmp", "v1", "schema", "cmp.schema.json");
  const fileContents = readFileSync(filePath, "utf8");
  
  return new Response(fileContents, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
