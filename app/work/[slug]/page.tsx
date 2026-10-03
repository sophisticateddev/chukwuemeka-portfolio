import Arrow from "@/components/Arrow";
import CountUp from "@/components/CountUp";
import FadeUp from "@/components/FadeUp";
import RevealWords from "@/components/RevealWords";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { workProjects } from "@/lib/data";
import CaseStudyView from "@/components/case-study/CaseStudyView";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return workProjects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = workProjects.find((p) => p.slug === params.slug);
  if (!project) return {};
  const title = `${project.title} — Chukwuemeka Iheonye`;
  const description = project.caseStudy?.headline ?? project.description;
  return {
    title,
    description: project.description,
    // Setting openGraph here replaces the root one, so re-attach the shared preview image.
    openGraph: { title, description, type: "article", images: ["/opengraph-image"] },
    twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
  };
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={item}>
          <FadeUp delay={i * 0.05} className="flex gap-4 text-muted">
            <span
              aria-hidden="true"
              className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
            />
            {item}
          </FadeUp>
        </li>
      ))}
    </ul>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-line">
      <FadeUp className="grid gap-4 py-12 md:grid-cols-[200px_1fr] md:gap-10">
        <h2 className="font-display text-xl font-semibold tracking-tight">
          {title}
        </h2>
        <div className="text-lg">{children}</div>
      </FadeUp>
    </section>
  );
}

export default function CaseStudyPage({ params }: Props) {
  const project = workProjects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const d = project.details;
  const currentIndex = workProjects.findIndex((p) => p.slug === params.slug);
  const next = workProjects[(currentIndex + 1) % workProjects.length];

  if (project.caseStudy) return <CaseStudyView project={project} cs={project.caseStudy} next={next} />;

  const meta = [
    { label: "Role", value: d?.role },
    { label: "Team", value: d?.team },
    { label: "Timeline", value: d?.timeline },
    { label: "Focus", value: project.tags.join(" · ") },
  ].filter((m): m is { label: string; value: string } => Boolean(m.value));

  return (
    <main id="main" tabIndex={-1} className="outline-none">
      <header className="container-page pb-12 pt-28 md:pt-36">
        <Link
          href="/#work"
          className="group inline-flex min-h-[44px] items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
        >
          <Arrow
            direction="left"
            className="transition-transform duration-300 ease-out motion-safe:group-hover:-translate-x-1"
          />{" "}
          All work
        </Link>

        <p className="eyebrow mt-10">{project.category}</p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-[1.02] tracking-[-0.025em] md:text-6xl lg:text-7xl">
          <span className="sr-only">{project.title}</span>
          <span aria-hidden="true">
            <RevealWords text={project.title} trigger="mount" delay={0.05} />
          </span>
        </h1>
        <FadeUp delay={0.3}>
          <p className="mt-6 max-w-3xl text-lg text-muted md:text-xl md:leading-relaxed">
            {project.description}
          </p>
        </FadeUp>

        <FadeUp delay={0.4}>
          <dl className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {meta.map((m) => (
              <div key={m.label} className="bg-canvas p-5">
                <dt className="eyebrow">{m.label}</dt>
                <dd className="mt-2 text-sm">{m.value}</dd>
              </div>
            ))}
          </dl>
        </FadeUp>
      </header>

      {/* Cover — real image when provided, headline metric otherwise */}
      <FadeUp delay={0.5} className="container-page">
        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-line bg-surface md:aspect-[21/9]">
          {d?.hero ? (
            <Image
              src={d.hero}
              alt={`${project.title} cover`}
              fill
              priority
              sizes="(min-width: 1152px) 1152px, 100vw"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full flex-col justify-end p-6 md:p-12">
              <p className="font-display text-5xl font-semibold tracking-[-0.025em] text-accent md:text-8xl">
                <CountUp value={project.highlight.value} />
              </p>
              <p className="mt-2 text-lg text-muted">
                {project.highlight.label}
              </p>
            </div>
          )}
        </div>
      </FadeUp>

      {d && (
        <article className="container-page py-16 md:py-24">
          <div className="mx-auto max-w-5xl">
            <Block title="Overview">
              <p className="text-muted">{d.overview}</p>
            </Block>

            {d.problems && d.problems.length > 0 && (
              <Block title="The problem">
                <BulletList items={d.problems} />
              </Block>
            )}

            {d.goals && d.goals.length > 0 && (
              <Block title="Goals">
                <BulletList items={d.goals} />
              </Block>
            )}

            {d.process && (
              <Block title="Process">
                <p className="text-muted">{d.process}</p>
              </Block>
            )}

            {d.researchFindings && d.researchFindings.length > 0 && (
              <Block title="Research findings">
                <ul className="grid gap-3 sm:grid-cols-2">
                  {d.researchFindings.map((f, i) => (
                    <li
                      key={f}
                      className="rounded-2xl border border-line bg-surface p-5 text-base"
                    >
                      <span className="font-mono text-xs text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="mt-2 text-muted">{f}</p>
                    </li>
                  ))}
                </ul>
              </Block>
            )}

            {d.images && d.images.length > 0 && (
              <Block title="Design">
                <div className="grid gap-4 sm:grid-cols-2">
                  {d.images.map((img) => (
                    <figure
                      key={img.src}
                      className={`overflow-hidden rounded-2xl border border-line bg-surface${img.wide ? " sm:col-span-2" : ""}`}
                    >
                      <div
                        className={`relative w-full ${img.wide ? "aspect-[16/7]" : "aspect-[4/3]"}`}
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover"
                          sizes={
                            img.wide
                              ? "100vw"
                              : "(min-width: 640px) 50vw, 100vw"
                          }
                        />
                      </div>
                      {img.caption && (
                        <figcaption className="border-t border-line px-5 py-3 text-sm text-muted">
                          {img.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              </Block>
            )}

            {d.outcomes && d.outcomes.length > 0 && (
              <Block title="Outcomes">
                <ul className="space-y-3">
                  {d.outcomes.map((o) => (
                    <li key={o} className="flex gap-4">
                      <span
                        aria-hidden="true"
                        className="font-mono text-accent"
                      >
                        ✓
                      </span>
                      {o}
                    </li>
                  ))}
                </ul>
              </Block>
            )}
          </div>
        </article>
      )}

      <nav aria-label="Next case study" className="container-page pb-24">
        <Link
          href={`/work/${next.slug}`}
          className="group flex flex-col gap-3 rounded-3xl border border-line bg-surface p-8 transition-[border-color,transform] duration-300 ease-out hover:border-control motion-safe:hover:-translate-y-1 md:flex-row md:items-center md:justify-between md:p-12"
        >
          <span>
            <span className="eyebrow block">Next case study</span>
            <span className="mt-3 block font-display text-3xl font-semibold tracking-tight md:text-4xl">
              {next.title}
            </span>
          </span>
          <span
            aria-hidden="true"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-xl transition-[background-color,border-color,color,transform] duration-300 ease-out group-hover:border-accent group-hover:bg-accent group-hover:text-onaccent motion-safe:group-hover:-rotate-45 group-focus-visible:border-accent group-focus-visible:bg-accent group-focus-visible:text-onaccent"
          >
            <Arrow size={20} />
          </span>
        </Link>
      </nav>
    </main>
  );
}
