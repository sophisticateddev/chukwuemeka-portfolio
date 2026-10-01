import FadeUp from "./FadeUp";
import SectionHeading from "./SectionHeading";
import WorkCard from "./WorkCard";
import { workProjects } from "@/lib/data";

export default function Work() {
  return (
    <section aria-labelledby="work-title" id="work" className="border-t border-line py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          id="work-title"
          index="02"
          label="Selected work"
          title="Products used by millions,"
          titleMuted="designed to be understood."
          intro={`${workProjects.length} case studies across fintech, sustainability, logistics and Web3.`}
        />

        <ul className="grid gap-4 md:grid-cols-2">
          {workProjects.map((project, i) => (
            <li key={project.id}>
              <FadeUp delay={(i % 2) * 0.08} className="h-full">
                <WorkCard project={project} index={i} />
              </FadeUp>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
