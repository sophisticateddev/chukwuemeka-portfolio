import Link from "next/link";
import { localeHref, t, type Locale } from "@/lib/i18n";

export default function Footer({ locale }: { locale: Locale }) {
  const dict = t(locale);
  const d = dict.footer;
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <p>© {new Date().getFullYear()} Chukwuemeka Iheonye</p>
          <ul className="flex gap-4" aria-label={dict.nav.label}>
            <li>
              <Link href={localeHref(locale, "/work")} className="link-grow hover:text-ink">
                {dict.nav.work}
              </Link>
            </li>
            <li>
              <Link href={localeHref(locale, "/writing")} className="link-grow hover:text-ink">
                {dict.nav.writing}
              </Link>
            </li>
          </ul>
        </div>
        <p>
          {d.builtWith}
          {d.translation && <span className="block sm:text-right">{d.translation}</span>}
        </p>
      </div>
    </footer>
  );
}
