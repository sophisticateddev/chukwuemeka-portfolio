import type { Metadata } from "next";
import { localeHref, type Locale } from "./i18n";

/** Canonical address plus its English and French versions, for search engines. */
export function alternates(locale: Locale, path: string): Metadata["alternates"] {
  return {
    canonical: localeHref(locale, path),
    languages: { en: path, fr: localeHref("fr", path), "x-default": path },
  };
}
