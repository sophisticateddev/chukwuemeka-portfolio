"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FadeUp from "./FadeUp";
import { workProjects } from "@/lib/data";

export default function Work() {
  return (
    <section id="work" className="pt-4 pb-24 md:pb-32 px-6 md:px-10 max-w-6xl mx-auto">
      <FadeUp className="mb-10">
        <div className="flex items-baseline justify-between">
          <h2 className="font-serif text-3xl md:text-4xl text-ink">Work</h2>
          <span className="text-sm text-muted">{workProjects.length} case studies</span>
        </div>
        <div className="mt-5 h-px bg-rim" />
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
        {workProjects.map((project, i) => (
          <FadeUp key={project.id} delay={i * 0.07} className="h-full">
            <Link href={`/work/${project.slug}`} className="block group h-full">
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="flex flex-col rounded-2xl overflow-hidden border border-rim bg-white hover:border-ink/20 hover:shadow-sm transition-all duration-300 h-full"
              >
                {/* Thumbnail — fixed height */}
                <div
                  className="h-52 w-full shrink-0 relative flex items-end p-5"
                  style={{ backgroundColor: project.color }}
                >
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <div className="w-24 h-24 rounded-full border-2 border-ink/40" />
                    <div className="w-16 h-16 rounded-full border border-ink/30 absolute translate-x-8 translate-y-4" />
                  </div>
                  <span className="relative z-10 text-[11px] font-sans font-medium text-ink/50 tracking-widest uppercase">
                    {project.year}
                  </span>
                </div>

                {/* Content — grows to fill, tags pinned to bottom */}
                <div className="flex flex-col flex-1 p-5">
                  <p className="text-[11px] text-accent tracking-widest uppercase mb-1.5">
                    {project.category}
                  </p>
                  <h3 className="font-serif text-xl text-ink mb-2 leading-snug group-hover:text-accent transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-2.5 py-1 rounded-full bg-paper text-muted border border-rim"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-3 shrink-0">
                      View →
                    </span>
                  </div>
                </div>
              </motion.article>
            </Link>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
