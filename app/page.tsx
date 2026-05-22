import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import About from "@/components/About";
import Writing from "@/components/Writing";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Work />
      <About />
      <Writing />
      <Experience />
      <Contact />
    </main>
  );
}
