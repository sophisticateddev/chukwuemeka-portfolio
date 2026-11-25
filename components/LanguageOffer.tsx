"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LANG_COOKIE, switchHref } from "@/lib/i18n";

const DISMISSED = "lang-offer-dismissed";

/**
 * Offers the French version to visitors whose browser prefers French, instead of redirecting them.
 * Shown on English pages only, in French, once: it stays away after "Non merci" or after any
 * choice made with the EN/FR switch.
 */
export default function LanguageOffer() {
  const pathname = usePathname() ?? "/";
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const prefersFrench = (navigator.languages?.[0] ?? navigator.language ?? "").toLowerCase().startsWith("fr");
      const chose = document.cookie.split("; ").some((c) => c.startsWith(`${LANG_COOKIE}=`));
      if (prefersFrench && !chose && !localStorage.getItem(DISMISSED)) setShow(true);
    } catch {
      /* storage blocked: stay quiet */
    }
  }, []);

  if (!show) return null;

  const dismiss = () => {
    try {
      localStorage.setItem(DISMISSED, "1");
    } catch {
      /* ignore */
    }
    setShow(false);
  };

  return (
    <aside
      lang="fr"
      aria-label="Langue"
      className="fixed inset-x-4 bottom-20 z-40 mx-auto flex max-w-md items-center gap-3 rounded-2xl border border-line bg-surface p-3 pl-4 shadow-[0_20px_50px_-20px_var(--elev)] sm:bottom-6"
    >
      <p className="min-w-0 flex-1 text-sm">Ce site est aussi offert en français.</p>
      <Link
        href={switchHref(pathname, "fr")}
        hrefLang="fr"
        onClick={() => {
          document.cookie = `${LANG_COOKIE}=fr; path=/; max-age=31536000; samesite=lax`;
        }}
        data-track="language-offer-accept"
        className="flex h-11 shrink-0 items-center rounded-full bg-accent px-4 text-sm font-semibold text-onaccent"
      >
        Voir en français
      </Link>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Non merci, fermer"
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-muted hover:bg-raised hover:text-ink"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>
      </button>
    </aside>
  );
}
