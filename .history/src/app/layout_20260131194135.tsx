import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900`}
      >
        <header className="border-b border-slate-200 bg-white">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <nav className="flex items-center justify-between">
              <a href="/" className="text-lg font-semibold text-slate-900">
                canonicalesg.org
              </a>
              <ul className="flex gap-6 text-sm">
                <li><a href="/cerm" className="text-slate-600 hover:text-slate-900">CERM</a></li>
                <li><a href="/cdi" className="text-slate-600 hover:text-slate-900">CDI</a></li>
                <li><a href="/cmp" className="text-slate-600 hover:text-slate-900">CMP</a></li>
                <li><a href="/standards" className="text-slate-600 hover:text-slate-900">Standards</a></li>
                <li><a href="/governance" className="text-slate-600 hover:text-slate-900">Governance</a></li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
        <footer className="border-t border-slate-200 mt-20">
          <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-slate-500">
            <p>Canonical ESG Reference Architecture — Open Documentation</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
