import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";

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
              <a href="/" className="flex items-center">
                <Image 
                  src="/logo.png" 
                  alt="Canonical ESG" 
                  width={180} 
                  height={40}
                  className="h-8 w-auto"
                />
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
              <div>
                <p className="text-sm text-[#666]">Canonical ESG Reference Architecture — Open Documentation</p>
                <p className="text-xs text-[#888] mt-1">Content licensed under CC BY 4.0. Machine-readable schemas licensed under MIT.</p>
              </div>
              <ul className="flex gap-6 text-sm">
                <li><a href="/about" className="text-[#666] hover:text-[#1a1a1a] hover:underline">About</a></li>
                <li><a href="/contribute" className="text-[#666] hover:text-[#1a1a1a] hover:underline">Contribute</a></li>
                <li><a href="/framework-coverage" className="text-[#666] hover:text-[#1a1a1a] hover:underline">Coverage</a></li>
                <li><a href="/use-cases/consultants" className="text-[#666] hover:text-[#1a1a1a] hover:underline">Use Cases</a></li>
                <li><a href="/contact" className="text-[#666] hover:text-[#1a1a1a] hover:underline">Contact</a></li>
                <li><a href="/licensing" className="text-[#666] hover:text-[#1a1a1a] hover:underline">Licensing</a></li>
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
