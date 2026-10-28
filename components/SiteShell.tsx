import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import "@/app/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";
import BackToTop from "@/components/BackToTop";
import PageReader from "@/components/PageReader";
import Analytics from "@/components/Analytics";
import { t, type Locale } from "@/lib/i18n";
import { siteUrl, umamiWebsiteId } from "@/lib/site";

// The <html> and <body> for both languages. Each language has its own root layout
// (app/(en)/layout.tsx and app/(fr)/fr/layout.tsx) so the lang attribute is right from the server.

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

// Count visits on the main domain with or without "www", whichever one Vercel treats as primary
const bareHost = new URL(siteUrl).hostname.replace(/^www\./, "");
const analyticsDomains = `${bareHost},www.${bareHost}`;

export function siteMetadata(locale: Locale): Metadata {
  const m = t(locale).meta;
  return {
    metadataBase: new URL(siteUrl),
    title: m.title,
    description: m.description,
    openGraph: {
      title: m.title,
      description: m.ogDescription,
      type: "website",
      locale: t(locale).ogLocale,
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F6F6F2" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0C0E" },
  ],
};

// Runs before first paint so a saved theme choice never flashes the other theme.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export default function SiteShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const d = t(locale);
  return (
    <html lang={d.htmlLang} className={`${display.variable} ${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-onaccent"
        >
          {d.skip}
        </a>
        <MotionProvider>
          {/* Early in the tab order, right after the skip link; shown bottom-left */}
          <PageReader />
          <Nav />
          {children}
          <Footer locale={locale} />
          <BackToTop />
          <Analytics websiteId={umamiWebsiteId} domain={analyticsDomains} />
        </MotionProvider>
      </body>
    </html>
  );
}
