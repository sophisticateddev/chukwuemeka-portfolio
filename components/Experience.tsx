import DrawLine from "./DrawLine";
import FadeUp from "./FadeUp";
import SectionHeading from "./SectionHeading";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section aria-labelledby="experience-title" id="experience" className="border-t border-line py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          id="experience-title"
          index="03"
          label="Experience"
          title="Seven years, from research"
          titleMuted="to shipped product."
        />

        <ol className="relative">
          <DrawLine className="top-0" />
          {experience.map((item, i) => (
            <li key={item.id} className="group relative">
              <DrawLine />
              <FadeUp className="grid gap-2 py-8 md:grid-cols-[220px_1fr] md:gap-10">
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
      </div>
    </section>
  );
}
