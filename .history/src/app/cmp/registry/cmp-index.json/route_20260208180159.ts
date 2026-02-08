import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const registryPath = path.join(
    process.cwd(),
    "content",
    "cmp",
    "registry",
    "cmp-index.json"
  );

  const json = fs.readFileSync(registryPath, "utf-8");

  return new NextResponse(json, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600"
    }
  });
}
