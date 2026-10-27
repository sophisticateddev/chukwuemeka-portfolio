import Hero from "@/components/Hero";
import BuildWithAI from "@/components/BuildWithAI";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";
import type { Region } from "@/lib/region";

export default function HomePage({ region }: { region: Region }) {
  return (
    <main id="main" tabIndex={-1} className="outline-none">
      <Hero region={region} />
      <Work />
      <BuildWithAI />
      <Experience />
      <Testimonials />
      <About />
      <Writing />
      <Contact region={region} />
    </main>
  );
}
