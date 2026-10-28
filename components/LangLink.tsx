"use client";

import Link from "next/link";
import { LANG_COOKIE, type Locale } from "@/lib/i18n";

/** A link to the other language that also saves the choice, so middleware.ts doesn't send the visitor back. */
export default function LangLink({ to, href, className, children }: { to: Locale; href: string; className?: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      hrefLang={to}
      onClick={() => {
        document.cookie = `${LANG_COOKIE}=${to}; path=/; max-age=31536000; samesite=lax`;
      }}
      className={className}
    >
      {children}
    </Link>
  );
}
