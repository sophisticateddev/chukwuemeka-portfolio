import { ImageResponse } from "next/og";

export const alt = "Chukwuemeka Iheonye: I design products. Then I build them with AI.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
        <div style={{ display: "flex", flexDirection: "column", fontSize: 80, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>
          <span>I design products.</span>
          <span style={{ color: "#C6F135" }}>Then I build them with AI.</span>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#A6A8AE" }}>
          Senior Product Designer · 7+ years · Fintech, SaaS and enterprise
        </div>
      </div>
    ),
    size,
  );
}
