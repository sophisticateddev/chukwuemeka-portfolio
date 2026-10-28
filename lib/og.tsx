import { ImageResponse } from "next/og";

// Link-preview images in the site's dark style, shared by both languages.
export const ogSize = { width: 1200, height: 630 };

function Frame({ children, footer }: { children: React.ReactNode; footer: string }) {
  return (
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
      {children}
      <div style={{ display: "flex", fontSize: 28, color: "#A6A8AE" }}>{footer}</div>
    </div>
  );
}

/** The site-wide image: the hero line and a one-line summary. */
export function homeImage(line1: string, line2: string, footer: string) {
  return new ImageResponse(
    (
      <Frame footer={footer}>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 80, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>
          <span>{line1}</span>
          <span style={{ color: "#C6F135" }}>{line2}</span>
        </div>
      </Frame>
    ),
    ogSize,
  );
}

/** An article's title, in the same style as the site-wide image. */
export function articleImage(title: string, footer: string) {
  return new ImageResponse(
    (
      <Frame footer={footer}>
        <div style={{ display: "flex", fontSize: title.length > 60 ? 58 : 68, fontWeight: 700, lineHeight: 1.08, letterSpacing: -1.5 }}>
          {title}
        </div>
      </Frame>
    ),
    ogSize,
  );
}
