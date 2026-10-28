import { articles, experience, testimonials, workProjects } from "./data";
import { articlesFr, experienceFr, projectsFr, testimonialMetaFr } from "./data.fr";
import type { Locale } from "./i18n";

/** Site content in the requested language. French text overrides English field by field. */
export function getProjects(locale: Locale) {
  return locale === "fr" ? workProjects.map((p) => ({ ...p, ...projectsFr[p.slug] })) : workProjects;
}

export function getArticles(locale: Locale) {
  return locale === "fr" ? articles.map((a) => ({ ...a, ...articlesFr[a.slug] })) : articles;
}

export function getExperience(locale: Locale) {
  return locale === "fr" ? experience.map((e) => ({ ...e, ...experienceFr[e.id] })) : experience;
}

export type ExperienceItem = ReturnType<typeof getExperience>[number];

export function getTestimonials(locale: Locale) {
  return locale === "fr" ? testimonials.map((x) => ({ ...x, ...testimonialMetaFr[x.name] })) : testimonials;
}
