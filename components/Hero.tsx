import Image from "next/image";
import Link from "next/link";
import Arrow from "./Arrow";
import RevealWords from "./RevealWords";
import { regionCopy, type Region } from "@/lib/region";
import { localeHref, t, type Locale } from "@/lib/i18n";

// Official marks, shown as uniform white silhouettes so four brands read as one quiet row.
// Heights are tuned by eye so each logo carries similar visual weight.
const shippedAt = [
  {
    name: "BAFTA",
    src: "/images/logos/bafta.svg",
    width: 185,
    height: 58,
    className: "h-7",
  },
  {
    name: "Carbon",
    src: "/images/logos/carbon.png",
    width: 1124,
    height: 268,
    className: "h-[1.375rem]",
  },
  {
    name: "Writesea",
    src: "/images/logos/writesea.png",
    width: 242,
    height: 99,
    className: "h-8",
  },
  {
    name: "Softcom",
    src: "/images/logos/softcom.svg",
    width: 97,
    height: 20,
    className: "h-5",
  },
];

export default function Hero({
  region,
  locale,
}: {
  region: Region;
  locale: Locale;
}) {
  const { status, cv } = regionCopy(region, locale);
  const d = t(locale).hero;
  return (
    <section aria-labelledby="hero-title" className="relative isolate">
      <div className="container-page pb-16 pt-28 md:pb-20 md:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(0,31rem)]">
          <div>
            {/* Availability as a plain line of type, not a badge */}
            <p className="mb-7 flex items-start gap-2.5 font-mono text-[0.8125rem] leading-5 text-ink">
              <span aria-hidden="true" className="flex h-[1lh] shrink-0 items-center">
                <span className="h-2 w-2 rounded-full bg-accent" />
              </span>
              <span>
                {d.openToWork} <span className="text-muted">· {status}</span>
              </span>
            </p>

            <h1
              id="hero-title"
              // French runs longer, so it steps down a size to keep the headline to three lines
              className={`font-serif text-[2.75rem] font-medium leading-[1.02] tracking-[-0.02em] sm:text-6xl ${
                locale === "fr"
                  ? "md:text-6xl lg:text-[3.5rem] xl:text-[3.875rem]"
                  : "md:text-7xl lg:text-[3.75rem] xl:text-[4.125rem]"
              }`}
            >
              <span className="sr-only">
                {d.line1} {d.line2}
              </span>
              <span aria-hidden="true" className="block">
                <RevealWords text={d.line1} trigger="mount" delay={0.05} />
              </span>
              <span aria-hidden="true" className="block text-accent">
                <RevealWords text={d.line2} trigger="mount" delay={0.2} />
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted md:text-xl md:leading-relaxed">
              {d.subhead}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={localeHref(locale, "/#work")}
                className="btn-primary group"
              >
                {d.viewWork}
                <Arrow className="transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-1" />
              </Link>
              <a
                href={cv.href}
                download={cv.href.slice(1)}
                className="btn-secondary group"
                data-track="cv-download"
                data-track-where="hero"
                data-track-version={region}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M8 2v8M5 7l3 3 3-3M3 13h10"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 ease-out motion-safe:group-hover:translate-y-0.5"
                  />
                </svg>
                {cv.label} <span className="sr-only">(PDF)</span>
              </a>
            </div>

            <div className="mt-10">
              <p className="eyebrow">{d.shippedAt}</p>
              <ul className="mt-4 grid grid-cols-2 items-center gap-x-8 gap-y-5 sm:flex sm:flex-wrap">
                {shippedAt.map((logo) => (
                  <li key={logo.name}>
                    {/* eslint-disable-next-line @next/next/no-img-element -- static SVG/PNG marks, no optimisation needed */}
                    <img
                      src={logo.src}
                      alt={logo.name}
                      width={logo.width}
                      height={logo.height}
                      className={`${logo.className} w-auto opacity-60 transition-opacity duration-300 [filter:var(--logo-filter)] hover:opacity-100`}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Portrait */}
          <div className="mx-auto w-full max-w-md lg:-my-10 lg:max-w-none">
            <figure className="relative">
              {/* Transparent, feathered cut-outs: no frame, so they melt into the page and the glow behind.
                  The colour version is pixel-aligned with the B&W one and fades in on hover. */}
              <div className="group/portrait relative aspect-[8/9]">
                <Image
                  src="/images/portrait.webp"
                  alt={d.portraitAlt}
                  fill
                  priority
                  sizes="(min-width: 1280px) 496px, (min-width: 1024px) 416px, 448px"
                  className="object-contain object-bottom"
                />
                <Image
                  src="/images/portrait-colour.webp"
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="(min-width: 1280px) 496px, (min-width: 1024px) 416px, 448px"
                  className="object-contain object-bottom opacity-0 transition-opacity duration-700 ease-out group-hover/portrait:opacity-100 motion-reduce:transition-none"
                />
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
