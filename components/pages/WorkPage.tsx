import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CaseStudyView from "@/components/case-study/CaseStudyView";
import { alternates } from "@/lib/alternates";
import { getProjects } from "@/lib/content";
import { t, type Locale } from "@/lib/i18n";

/** A case study page, shared by /work/<slug> and /fr/work/<slug>. */
export const workParams = () =>
  getProjects("en")
    .filter((p) => p.caseStudy)
    .map((p) => ({ slug: p.slug }));

export function workMetadata(locale: Locale, slug: string): Metadata {
  const project = getProjects(locale).find((p) => p.slug === slug);
  if (!project) return {};
  const title = `${project.title} — Chukwuemeka Iheonye`;
  const description = project.caseStudy?.headline ?? project.description;
  const shareImage = project.cover
    ? { url: `/og/work/${project.slug}.jpg`, width: 1200, height: 630, alt: t(locale).caseStudy.shareAlt(project.title) }
    : "/opengraph-image";
  return {
    title,
    description: project.description,
    alternates: alternates(locale, `/work/${slug}`),
    // Each case study shares with its own cover (made by scripts/og-images.py); the site-wide image is the fallback.
    openGraph: { title, description, type: "article", locale: t(locale).ogLocale, images: [shareImage] },
    twitter: { card: "summary_large_image", title, description, images: [shareImage] },
  };
}

export default function WorkPage({ locale, slug }: { locale: Locale; slug: string }) {
  const projects = getProjects(locale);
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  if (!project?.caseStudy) notFound();
  const next = projects[(index + 1) % projects.length];
  return <CaseStudyView project={project} cs={project.caseStudy} next={next} locale={locale} />;
}
