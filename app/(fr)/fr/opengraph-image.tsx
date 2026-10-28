import { homeImage, ogSize } from "@/lib/og";

export const alt = "Chukwuemeka Iheonye : je conçois, puis je construis avec l’IA.";
export const size = ogSize;
export const contentType = "image/png";

export default function OpengraphImage() {
  return homeImage(
    "Je conçois.",
    "Puis je construis avec l’IA.",
    "Designer produit · plus de 7 ans · Fintech, SaaS et entreprise",
  );
}
