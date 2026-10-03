"use client";

import { useRef, useState } from "react";
import Arrow from "./Arrow";
import DrawLine from "./DrawLine";
import FadeUp from "./FadeUp";
import SectionHeading from "./SectionHeading";
import { experience } from "@/lib/data";

/** Most recent roles shown up front; the rest sit behind "Show all" so the page stays short. */
const VISIBLE = 3;

export default function Experience() {
  const [expanded, setExpanded] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const earlier = experience.slice(VISIBLE);
  const shortName = (company: string) => company.replace(/ \(.*\)$/, "");
  const shownCompanies = new Set(experience.slice(0, VISIBLE).map((e) => shortName(e.company)));
  // Name the role when the company already appears above, e.g. a second role at Carbon
  const earlierCompanies = Array.from(
    new Set(
      earlier.map((e) =>
        shownCompanies.has(shortName(e.company)) ? `${shortName(e.company)} (${e.role})` : shortName(e.company),
      ),
    ),
  );

  const toggle = () => {
    setExpanded((open) => {
      // Collapsing removes content above the button, so bring it back into view
      if (open) requestAnimationFrame(() => toggleRef.current?.scrollIntoView({ block: "center" }));
      return !open;
    });
  };

  return (
    <section aria-labelledby="experience-title" id="experience" className="border-t border-line py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          id="experience-title"
          label="Experience"
          title="Seven years, from research"
          titleMuted="to shipped product."
        />

        <ol id="experience-list" className="relative">
          <DrawLine className="top-0" />
          {experience.map((item, i) => (
            <li key={item.id} className="group relative" hidden={!expanded && i >= VISIBLE}>
              <DrawLine />
              {/* Rows revealed by "Show all" come in one after another */}
              <FadeUp animate={i >= VISIBLE} delay={(i - VISIBLE) * 0.05} className="grid gap-2 py-8 md:grid-cols-[220px_1fr] md:gap-10">
                <div className="font-mono text-sm text-muted">
                  <p className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                        i === 0 ? "bg-accent motion-safe:animate-pulse" : "bg-line group-hover:bg-accent"
                      }`}
                    />
                    {item.period}
                  </p>
                  <p className="pl-3.5">{item.location}</p>
                </div>
                <div className="transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-1">
                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    {item.role}{" "}
                    <span className="text-muted transition-colors duration-300 group-hover:text-ink">
                      · {item.company}
                    </span>
                  </h3>
                  <p className="mt-3 max-w-3xl text-muted">{item.description}</p>
                </div>
              </FadeUp>
            </li>
          ))}
        </ol>

        {earlier.length > 0 && (
          <FadeUp className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted">
              {expanded ? (
                <>Showing all {experience.length} roles.</>
              ) : (
                <>
                  Earlier: <span className="text-ink">{earlierCompanies.join(", ")}</span>
                </>
              )}
            </p>
            <button
              ref={toggleRef}
              type="button"
              onClick={toggle}
              aria-expanded={expanded}
              aria-controls="experience-list"
              className="btn-secondary group self-start sm:self-auto"
            >
              {expanded ? "Show fewer" : `Show all ${experience.length} roles`}
              <Arrow
                direction={expanded ? "up" : "down"}
                className={`transition-transform duration-300 ease-out ${expanded ? "motion-safe:group-hover:-translate-y-0.5" : "motion-safe:group-hover:translate-y-0.5"}`}
              />
            </button>
          </FadeUp>
        )}
      </div>
    </section>
  );
}
