import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Canonical ESG Reference Architecture",
    template: "%s | Canonical ESG"
  },
  description: "Open, non-authoritative reference architecture for sustainability reporting. Model sustainability data once and reuse it across ESRS, GRI, ISSB, CDP, and other frameworks.",
  keywords: ["ESG", "sustainability reporting", "ESRS", "GRI", "ISSB", "CDP", "sustainability data", "disclosure framework", "ESG data model", "sustainability standards"],
  authors: [{ name: "Canonical ESG" }],
  creator: "Canonical ESG",
  publisher: "Canonical ESG",
  metadataBase: new URL('https://canonicalesg.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://canonicalesg.org",
    siteName: "Canonical ESG",
    title: "Canonical ESG Reference Architecture",
    description: "Open, non-authoritative reference architecture for sustainability reporting. Model sustainability data once and reuse it across ESRS, GRI, ISSB, CDP, and other frameworks.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Canonical ESG Reference Architecture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Canonical ESG Reference Architecture",
    description: "Open, non-authoritative reference architecture for sustainability reporting. Model sustainability data once and reuse it across frameworks.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
                <img 
                  src="/logo-v2.png" 
                  alt="Canonical ESG" 
                  className="h-8 w-auto"
                />
              </a>
              <ul className="flex gap-6 text-sm">
                <li><a href="/cerm" className="text-[#666] hover:text-[#1a1a1a] hover:underline">CERM</a></li>
                <li><a href="/cdi" className="text-[#666] hover:text-[#1a1a1a] hover:underline">CDI</a></li>
                <li><a href="/cmp" className="text-[#666] hover:text-[#1a1a1a] hover:underline">CMP</a></li>
                <li><a href="/schemas" className="text-[#666] hover:text-[#1a1a1a] hover:underline">Schemas</a></li>
                <li><a href="/applications" className="text-[#666] hover:text-[#1a1a1a] hover:underline">Applications</a></li>
                <li><a href="/resources" className="text-[#666] hover:text-[#1a1a1a] hover:underline">Resources</a></li>
                <li><a href="/governance" className="text-[#666] hover:text-[#1a1a1a] hover:underline">Governance</a></li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
        <footer className="border-t border-[#eee] mt-20">
          <div className="max-w-3xl mx-auto px-6 py-10">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
              <div className="max-w-md">
                <p className="text-sm text-[#666] leading-relaxed">Canonical ESG Reference Architecture — Open Documentation</p>
                <p className="text-xs text-[#888] mt-2 leading-relaxed">Content licensed under CC BY 4.0. Machine-readable schemas licensed under MIT.</p>
              </div>
              <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
                <li><a href="/about" className="text-[#666] hover:text-[#1a1a1a] hover:underline">About</a></li>
                <li><a href="/contribute" className="text-[#666] hover:text-[#1a1a1a] hover:underline">Contribute</a></li>
                <li><a href="/framework-coverage" className="text-[#666] hover:text-[#1a1a1a] hover:underline">Coverage</a></li>
                <li><a href="/applications" className="text-[#666] hover:text-[#1a1a1a] hover:underline">Applications</a></li>
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
