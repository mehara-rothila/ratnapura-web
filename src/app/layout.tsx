import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Ratnapura Tourism | The Gem City of Sri Lanka",
  description: "Discover Ratnapura, Sri Lanka's legendary Gem City. Explore precious gemstone mines, stunning natural attractions, rich biodiversity, and cultural heritage in the heart of Sabaragamuwa Province.",
  keywords: "Ratnapura, Sri Lanka tourism, gem city, gemstones, sapphires, Adam's Peak, Sinharaja Forest, travel guide, tourist attractions",
  authors: [{ name: "Ratnapura Tourism Board" }],
  openGraph: {
    title: "Ratnapura Tourism | The Gem City of Sri Lanka",
    description: "Experience the magic of Sri Lanka's Gem City - home to precious stones, natural wonders, and rich cultural heritage.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ratnapura Tourism | The Gem City of Sri Lanka",
    description: "Experience the magic of Sri Lanka's Gem City",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0ea5e9" },
    { media: "(prefers-color-scheme: dark)", color: "#38bdf8" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}