import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { getExperience } from "@/lib/content";
import { regionCopy, type Region } from "@/lib/region";
import type { Locale } from "@/lib/i18n";

export default function HomePage({ region, locale }: { region: Region; locale: Locale }) {
  return (
    <main id="main" tabIndex={-1} className="outline-none">
      <Hero region={region} locale={locale} />
      <Work locale={locale} />
      <Testimonials locale={locale} />
      <Experience items={getExperience(locale)} cv={regionCopy(region, locale).cv} locale={locale} />
      <About locale={locale} />
      <Contact region={region} locale={locale} />
    </main>
  );
}
