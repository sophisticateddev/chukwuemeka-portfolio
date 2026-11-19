import { homeImage, ogSize } from "@/lib/og";

export const alt = "Chukwuemeka Iheonye: I design products. Then I ship the code.";
export const size = ogSize;
export const contentType = "image/png";

export default function OpengraphImage() {
  return homeImage("I design products.", "Then I ship the code.", "Product Designer · 7+ years · Fintech, SaaS and enterprise");
}
