import { t, type Locale } from "./i18n";

/**
 * The home page comes in three versions. Visitors in Canada and the US see the Calgary
 * version (chosen by middleware.ts from their location); everyone else sees the UK one.
 * /ca and /us (and /fr/ca, /fr/us) always show their version, wherever the visitor is.
 */
export type Region = "intl" | "ca" | "us";

type RegionCopy = {
  /** Shown after "Open to work" in the hero pill. */
  status: string;
  cv: { href: string; label: string };
  /** Extra line under the contact pitch. */
  contactNote?: string;
};

export function regionCopy(region: Region, locale: Locale): RegionCopy {
  const d = t(locale).region;
  const cv =
    region === "intl"
      ? { href: "/Chukwuemeka_Iheonye_Resume.pdf", label: d.cvUk }
      : { href: "/Chukwuemeka_Iheonye_Resume_Canada.pdf", label: d.cvCanada };
  return { ...d[region], cv };
}
