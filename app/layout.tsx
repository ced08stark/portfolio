import type { Metadata, Viewport } from "next";
import Analytics from "@/components/analytics";
import { LangProvider, langBootScript } from "@/components/lang";
import "./globals.css";

const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Unbounded:wght@500;700;800&family=Figtree:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap";

export const metadata: Metadata = {
  title: "Cédric Kaze Ngangue — Portfolio",
  description:
    "Développeur logiciel full-stack à Montréal : systèmes temps réel, paiements mobile money, agents IA, applications web et mobiles.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Cédric Kaze Ngangue — Portfolio",
    description: "Développeur full-stack TypeScript à Montréal : temps réel, paiements mobile money, agents IA, web et mobile.",
    type: "website",
    locale: "fr_CA",
  },
};

export const viewport: Viewport = {
  themeColor: "#0e1a33",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="fr-on" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: langBootScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href={FONTS_URL} />
      </head>
      <body>
        <LangProvider>{children}</LangProvider>
        <Analytics />
      </body>
    </html>
  );
}
