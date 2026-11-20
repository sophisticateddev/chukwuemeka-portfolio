import { homeImage, ogSize } from "@/lib/og";

export const alt = "Chukwuemeka Iheonye : je conçois, puis je livre le code.";
export const size = ogSize;
export const contentType = "image/png";

export default function OpengraphImage() {
  return homeImage(
    "Je conçois.",
    "Puis je livre le code.",
    "Designer produit · plus de 7 ans · Fintech, SaaS et entreprise",
  );
}
