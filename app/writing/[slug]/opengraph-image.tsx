import { ImageResponse } from "next/og";
import { articles } from "@/lib/data";

export const alt = "Article by Chukwuemeka Iheonye";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return articles.filter((a) => !a.url).map((a) => ({ slug: a.slug }));
}

/** Link preview for an article: its title, in the same style as the site-wide image. */
export default function ArticleImage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);
  const title = article?.title ?? "Writing";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "radial-gradient(circle at 80% 20%, #1f2610 0%, #0B0C0E 55%)",
          color: "#F4F4F1",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 32,
              background: "#C6F135",
              color: "#0B0C0E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            CI
          </div>
          <div style={{ fontSize: 30, fontWeight: 600 }}>Chukwuemeka Iheonye</div>
        </div>
        <div style={{ display: "flex", fontSize: title.length > 60 ? 58 : 68, fontWeight: 700, lineHeight: 1.08, letterSpacing: -1.5 }}>
          {title}
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#A6A8AE" }}>
          {article ? `${article.tag} · ${article.readTime}` : "Writing"}
        </div>
      </div>
    ),
    size,
  );
}
