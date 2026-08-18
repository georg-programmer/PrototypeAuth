import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Geist Sans als CSS-Variable laden (wird via Tailwind/className genutzt)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Geist Mono für Code-Elemente
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Seitenmetadaten für SEO und Browser-Tab
export const metadata: Metadata = {
  title: "Auth Prototype",
  description: "Authentifizierungsprototyp",
};

// RootLayout umschließt alle Seiten – hier werden globale Fonts und Styles gesetzt
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
