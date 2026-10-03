import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";
import BackToTop from "@/components/BackToTop";
import PageReader from "@/components/PageReader";
import Analytics from "@/components/Analytics";
import { siteUrl, umamiWebsiteId } from "@/lib/site";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz"],
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
    "Product Designer with 7+ years across fintech, SaaS and enterprise. I design products, then build them with AI. Based in the UK.",
  openGraph: {
    title: "Chukwuemeka Iheonye — Product Designer who builds with AI",
    description:
      "Product Designer with 7+ years across fintech, SaaS and enterprise. I design products, then build them with AI.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F6F6F2" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0C0E" },
  ],
};

// Runs before first paint so a saved theme choice never flashes the other theme.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${display.variable} ${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-onaccent"
        >
          Skip to content
        </a>
        <MotionProvider>
          {/* Early in the tab order, right after the skip link; shown bottom-left */}
          <PageReader />
          <Nav />
          {children}
          <Footer />
          <BackToTop />
          <Analytics websiteId={umamiWebsiteId} domain={new URL(siteUrl).hostname} />
        </MotionProvider>
      </body>
    </html>
  );
}
