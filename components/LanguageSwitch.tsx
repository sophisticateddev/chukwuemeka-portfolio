"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LANG_COOKIE, switchHref } from "@/lib/i18n";
import { useLocale } from "@/lib/useLocale";

/**
 * EN/FR switch. Saves the choice in a cookie so middleware.ts stops sending this visitor
 * to the language their browser asks for.
 */
export default function LanguageSwitch({ className = "" }: { className?: string }) {
  const pathname = usePathname() ?? "/";
  const { locale, dict } = useLocale();
  const to = locale === "fr" ? "en" : "fr";

  return (
    <Link
      href={switchHref(pathname, to)}
      hrefLang={to}
      lang={to}
      onClick={() => {
        document.cookie = `${LANG_COOKIE}=${to}; path=/; max-age=31536000; samesite=lax`;
      }}
      data-track="language-switch"
      data-track-to={to}
      aria-label={dict.nav.switchLabel}
      title={dict.nav.switchLabel}
      className={`flex h-11 min-w-11 items-center justify-center rounded-full px-2 font-mono text-xs font-medium text-muted transition-[background-color,color,transform] duration-150 ease-out hover:bg-surface hover:text-ink motion-safe:active:scale-95 ${className}`}
    >
      {dict.nav.switchShort}
    </Link>
  );
}
