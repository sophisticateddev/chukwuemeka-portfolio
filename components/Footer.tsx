import { t, type Locale } from "@/lib/i18n";

export default function Footer({ locale }: { locale: Locale }) {
  const d = t(locale).footer;
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-2 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Chukwuemeka Iheonye</p>
        <p>
          {d.builtWith}
          {d.translation && <span className="block sm:text-right">{d.translation}</span>}
        </p>
      </div>
    </footer>
  );
}
