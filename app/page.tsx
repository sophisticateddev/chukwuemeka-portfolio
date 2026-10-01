import Hero from "@/components/Hero";
import BuildWithAI from "@/components/BuildWithAI";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main id="main" tabIndex={-1} className="outline-none">
      <Hero />
      <BuildWithAI />
      <Work />
      <Experience />
      <About />
      <Writing />
      <Contact />
    </main>
  );
}
