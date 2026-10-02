import type { MetadataRoute } from "next";
import { articles, workProjects } from "@/lib/data";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, priority: 1 },
    ...workProjects.map((p) => ({ url: `${siteUrl}/work/${p.slug}`, priority: 0.8 })),
    ...articles.filter((a) => !a.url).map((a) => ({ url: `${siteUrl}/writing/${a.slug}`, priority: 0.5 })),
  ];
}
