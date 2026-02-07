import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Canonical ESG Reference Architecture",
  description: "Open, non-authoritative reference architecture for sustainability reporting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-[#1a1a1a]" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
        <header className="border-b border-[#eee] bg-white">
          <div className="max-w-3xl mx-auto px-6 py-4">
            <nav className="flex items-center justify-between">
              <a href="/" className="text-base font-semibold text-[#111] hover:text-[#1a1a1a]">
                canonicalesg.org
              </a>
              <ul className="flex gap-6 text-sm">
                <li><a href="/cerm" className="text-[#666] hover:text-[#1a1a1a] hover:underline">CERM</a></li>
                <li><a href="/cdi" className="text-[#666] hover:text-[#1a1a1a] hover:underline">CDI</a></li>
                <li><a href="/cmp" className="text-[#666] hover:text-[#1a1a1a] hover:underline">CMP</a></li>
                <li><a href="/schemas" className="text-[#666] hover:text-[#1a1a1a] hover:underline">Schemas</a></li>
                <li><a href="/resources" className="text-[#666] hover:text-[#1a1a1a] hover:underline">Resources</a></li>
                <li><a href="/governance" className="text-[#666] hover:text-[#1a1a1a] hover:underline">Governance</a></li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
        <footer className="border-t border-[#eee] mt-20">
          <div className="max-w-3xl mx-auto px-6 py-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <p className="text-sm text-[#666]">Canonical ESG Reference Architecture — Open Documentation</p>
              <ul className="flex gap-6 text-sm">
                <li><a href="/about" className="text-[#666] hover:text-[#1a1a1a] hover:underline">About</a></li>
                <li><a href="/framework-coverage" className="text-[#666] hover:text-[#1a1a1a] hover:underline">Coverage</a></li>
                <li><a href="/contact" className="text-[#666] hover:text-[#1a1a1a] hover:underline">Contact</a></li>
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
