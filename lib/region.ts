/**
 * The home page comes in three versions. Visitors in Canada and the US see the Calgary
 * version (chosen by middleware.ts from their location); everyone else sees the UK one.
 * /ca and /us always show their version, wherever the visitor is.
 */
export type Region = "intl" | "ca" | "us";

type RegionCopy = {
  /** Shown after "Open to work" in the hero pill. */
  status: string;
  cv: { href: string; label: string };
  /** Extra line under the contact pitch. */
  contactNote?: string;
};

const ukCv = { href: "/Chukwuemeka_Iheonye_Resume.pdf", label: "Download CV" };
const canadaCv = { href: "/Chukwuemeka_Iheonye_Resume_Canada.pdf", label: "Download résumé" };

export const regionCopy: Record<Region, RegionCopy> = {
  intl: {
    status: "UK · Full right to work",
    cv: ukCv,
  },
  ca: {
    status: "Relocating to Calgary · Mid 2027",
    cv: canadaCv,
    contactNote:
      "I’m relocating to Calgary in mid 2027 and will be working on Mountain time. I also speak intermediate French (Duolingo Score 106).",
  },
  us: {
    status: "US remote · Calgary, mid 2027",
    cv: canadaCv,
    contactNote:
      "I’m relocating to Calgary in mid 2027, on Mountain time, and open to remote roles with US teams.",
  },
};
