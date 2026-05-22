"use client";

import { motion } from "framer-motion";
import FadeUp from "./FadeUp";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto"
    >
      <div className="rounded-3xl bg-ink text-bg p-10 md:p-16 relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-8 right-12 w-64 h-64 rounded-full border border-bg" />
          <div className="absolute bottom-4 right-32 w-40 h-40 rounded-full border border-bg" />
          <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full border border-bg" />
        </div>

        <div className="relative z-10 max-w-lg">
          <FadeUp>
            <p className="text-xs text-accent tracking-widest uppercase mb-4">
              Get in touch
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-bg mb-6 leading-[1.1]">
              Let's build something
              <br />
              <span className="italic text-bg/60">worth using.</span>
            </h2>
            <p className="text-sm text-bg/60 leading-relaxed mb-10">
              Whether you have a project in mind, a role to fill, or just want
              to talk design — my inbox is always open.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="mailto:kingsleyiheonye@gmail.com"
                className="inline-flex items-center justify-center gap-2 bg-accent text-bg text-sm font-medium px-6 py-3.5 rounded-full hover:bg-accent/90 transition-colors duration-200"
              >
                Say hello →
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://linkedin.com/in/chukwuemeka-iheonye"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-bg text-sm font-medium px-6 py-3.5 rounded-full border border-bg/20 hover:border-bg/40 transition-colors duration-200"
              >
                LinkedIn
              </motion.a>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10 flex items-center justify-between text-xs text-muted">
        <span>© {new Date().getFullYear()} Chukwuemeka Iheonye</span>
        <span>Designed & built with intention</span>
      </div>
    </section>
  );
}
