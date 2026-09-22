import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "Auth Prototype",
  description: "Authentifizierungsprototyp",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav className="sticky flex bg-main text-white w-full text-lg p-1 justify-between">
          <div className="flex gap-1">
            <Link href="/">Auth Prototype</Link>
          </div>
        </nav>
        <main className="p-1.5">
          {children}
        </main>
      </body>
    </html>
  );
}
