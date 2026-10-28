import type { MetadataRoute } from "next";
import { articles, workProjects } from "@/lib/data";
import { siteUrl } from "@/lib/site";

// Every page in English, with its French version at /fr/… listed alongside.
const paths = [
  { path: "", priority: 1 },
  ...workProjects.map((p) => ({ path: `/work/${p.slug}`, priority: 0.8 })),
  ...articles.filter((a) => !a.url).map((a) => ({ path: `/writing/${a.slug}`, priority: 0.5 })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.flatMap(({ path, priority }) => {
    const languages = { en: `${siteUrl}${path}`, fr: `${siteUrl}/fr${path}` };
    return [
      { url: languages.en, priority, alternates: { languages } },
      { url: languages.fr, priority: priority * 0.9, alternates: { languages } },
    ];
  });
}
