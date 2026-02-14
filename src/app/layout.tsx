import type { Metadata } from "next";
import "./globals.css";
import { Source_Serif_4 } from 'next/font/google';

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

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
    <html lang="en" className={sourceSerif.variable}>
      <body className="antialiased bg-white text-[#1a1a1a]" style={{ fontFamily: 'var(--font-serif), Georgia, "Times New Roman", serif' }}>
        <header className="bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-6xl mx-auto px-6 py-5">
            <nav className="flex items-center justify-between">
              <a href="/" className="flex items-center group">
                <img 
                  src="/logo-v2.png" 
                  alt="Canonical ESG Reference Architecture - Home" 
                  className="h-10 w-auto transition-transform group-hover:scale-105"
                />
              </a>
              <ul className="flex gap-8 text-sm font-medium">
                <li><a href="/cerm" className="text-gray-600 hover:text-blue-600 hover:underline transition-colors">CERM</a></li>
                <li><a href="/cdi" className="text-gray-600 hover:text-blue-600 hover:underline transition-colors">CDI</a></li>
                <li><a href="/cmp" className="text-gray-600 hover:text-blue-600 hover:underline transition-colors">CMP</a></li>
                <li><a href="/reference/explorer" className="text-gray-600 hover:text-blue-600 hover:underline transition-colors">Explorer</a></li>
                <li><a href="/whitepapers" className="text-gray-600 hover:text-blue-600 hover:underline transition-colors">Whitepapers</a></li>
                <li><a href="/governance" className="text-gray-600 hover:text-blue-600 hover:underline transition-colors">Governance</a></li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
        <footer className="bg-gradient-to-br from-gray-50 to-gray-100 border-t border-gray-200 mt-20">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Canonical ESG</h3>
                  <p className="text-sm text-gray-600">Architecture for Sustainability Reporting</p>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mt-2">
                  An independent, not-for-profit, non-regulatory technical initiative operating in the public interest. Supporting interoperability, transparency, and structural coherence in sustainability reporting.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <ul className="space-y-3">
                  <li><a href="/about" className="text-gray-600 hover:text-blue-600 hover:underline transition-colors">About</a></li>
                  <li><a href="/reference/explorer" className="text-gray-600 hover:text-blue-600 hover:underline transition-colors">Explorer</a></li>
                  <li><a href="/schemas" className="text-gray-600 hover:text-blue-600 hover:underline transition-colors">Schemas</a></li>
                  <li><a href="/resources" className="text-gray-600 hover:text-blue-600 hover:underline transition-colors">Resources</a></li>
                  <li><a href="/contribute" className="text-gray-600 hover:text-blue-600 hover:underline transition-colors">Contribute</a></li>
                </ul>
              </div>

              {/* Framework Coverage */}
              <div>
                <ul className="space-y-3">
                  <li><a href="/framework-coverage" className="text-gray-600 hover:text-blue-600 hover:underline transition-colors">Coverage</a></li>
                  <li><a href="/applications" className="text-gray-600 hover:text-blue-600 hover:underline transition-colors">Applications</a></li>
                  <li><a href="/contact" className="text-gray-600 hover:text-blue-600 hover:underline transition-colors">Contact</a></li>
                  <li><a href="/licensing" className="text-gray-600 hover:text-blue-600 hover:underline transition-colors">Licensing</a></li>
                </ul>
              </div>
            </div>
            
            {/* Legal & Info */}
            <div className="mt-8 border-t border-gray-200 pt-8">
              <p className="text-xs text-gray-500 whitespace-nowrap">
                Content licensed under CC BY 4.0; Schemas licensed under MIT
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
