import Hero from "@/components/Hero";
import BuildWithAI from "@/components/BuildWithAI";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";
import { getArticles, getExperience } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import type { Region } from "@/lib/region";

export default function HomePage({ region, locale }: { region: Region; locale: Locale }) {
  return (
    <main id="main" tabIndex={-1} className="outline-none">
      <Hero region={region} locale={locale} />
      <Work locale={locale} />
      <BuildWithAI locale={locale} />
      <Experience items={getExperience(locale)} />
      <Testimonials locale={locale} />
      <About locale={locale} />
      <Writing items={getArticles(locale)} />
      <Contact region={region} locale={locale} />
    </main>
  );
}
