"use client";

import { motion } from "framer-motion";
import FadeUp from "./FadeUp";

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/chukwuemeka-iheonye/" },
  { label: "Figma", href: "https://figma.com/@kingsleyiheonye" },
  { label: "ADPList", href: "https://adplist.org/mentors/chukwuemeka-iheonye" },
  { label: "Twitter", href: "https://twitter.com" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto"
    >
      <div className="rounded-3xl bg-ink text-paper p-10 md:p-16 relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-8 right-12 w-64 h-64 rounded-full border border-paper" />
          <div className="absolute bottom-4 right-32 w-40 h-40 rounded-full border border-paper" />
          <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full border border-paper" />
        </div>

        <div className="relative z-10 max-w-lg">
          <FadeUp>
            <p className="text-xs text-accent tracking-widest uppercase mb-4">
              Get in touch
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-paper mb-6 leading-[1.1]">
              Let's build something
              <br />
              <span className="italic text-paper/60">worth using.</span>
            </h2>
            <p className="text-sm text-paper/60 leading-relaxed mb-10">
              Have a project in mind? Whether you need a new product designed,
              a design system built, or a senior designer to embed in your team
              — I'd love to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="mailto:kingsleyiheonye@gmail.com"
                className="inline-flex items-center justify-center gap-2 bg-accent text-paper text-sm font-medium px-6 py-3.5 rounded-full hover:bg-accent/90 transition-colors duration-200"
              >
                kingsleyiheonye@gmail.com
              </motion.a>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-paper/50 border border-paper/15 rounded-full px-4 py-2 hover:border-paper/30 hover:text-paper/80 transition-colors duration-200"
                >
                  {s.label}
                </motion.a>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10 flex items-center justify-between text-xs text-muted">
        <span>© {new Date().getFullYear()} Chukwuemeka Iheonye</span>
        <span>Nottingham, UK · Open to remote</span>
      </div>
    </section>
  );
}
