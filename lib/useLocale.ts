"use client";

import { usePathname } from "next/navigation";
import { localeFromPath, t } from "./i18n";

/** The language of the current page, for client components. */
export function useLocale() {
  const locale = localeFromPath(usePathname());
  return { locale, dict: t(locale) };
}
