"use client";

import { motion } from "framer-motion";
import FadeUp from "./FadeUp";
import { workProjects } from "@/lib/data";

export default function Work() {
  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto">
      {/* Section header */}
      <FadeUp className="mb-14">
        <div className="flex items-baseline justify-between">
          <div>
            <p className="text-xs text-accent tracking-widest uppercase mb-2">Selected Work</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">
              Projects
            </h2>
          </div>
          <span className="hidden md:block text-sm text-muted">{workProjects.length} case studies</span>
        </div>
        <div className="mt-6 h-px bg-border" />
      </FadeUp>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {workProjects.map((project, i) => (
          <FadeUp key={project.id} delay={i * 0.07}>
            <motion.article
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-border bg-white hover:border-ink/20 hover:shadow-sm transition-all duration-300"
            >
              {/* Thumbnail */}
              <div
                className="h-52 w-full relative flex items-end p-5"
                style={{ backgroundColor: project.color }}
              >
                {/* Abstract geometry placeholder */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <div className="w-24 h-24 rounded-full border-2 border-ink/40" />
                  <div className="w-16 h-16 rounded-full border border-ink/30 absolute translate-x-8 translate-y-4" />
                </div>
                <span className="relative z-10 text-[11px] font-sans font-medium text-ink/50 tracking-widest uppercase">
                  {project.year}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-[11px] text-accent tracking-widest uppercase mb-1.5">
                  {project.category}
                </p>
                <h3 className="font-serif text-xl text-ink mb-2 leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-bg text-muted border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
