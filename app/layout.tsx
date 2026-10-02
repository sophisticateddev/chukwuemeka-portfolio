import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";
import BackToTop from "@/components/BackToTop";
import { siteUrl } from "@/lib/site";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Chukwuemeka Iheonye — Product Designer who builds with AI",
  description:
    "Senior Product Designer with 7+ years across fintech, SaaS and enterprise. I design products, then build them with AI. Based in Nottingham, UK.",
  openGraph: {
    title: "Chukwuemeka Iheonye — Product Designer who builds with AI",
    description:
      "Senior Product Designer with 7+ years across fintech, SaaS and enterprise. I design products, then build them with AI.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0C0E",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-onaccent"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Nav />
          {children}
          <Footer />
          <BackToTop />
        </MotionProvider>
      </body>
    </html>
  );
}
