import Link from "next/link";
import Arrow from "./Arrow";
import CountUp from "./CountUp";
import FadeUp from "./FadeUp";
import HeroGlow from "./HeroGlow";
import Magnetic from "./Magnetic";
import RevealWords from "./RevealWords";

const stats = [
  { value: "7+", label: "years designing digital products" },
  { value: "3M+", label: "users served at Carbon MFB" },
  { value: "1 min", label: "Africhange transfers, down from 2 hours" },
  { value: "+25%", label: "accessibility & engagement at albert" },
];

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate">
      <HeroGlow />
      <div className="container-page pb-20 pt-32 md:pb-28 md:pt-44">
        <FadeUp>
          <p className="eyebrow mb-8 flex items-center gap-3">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Senior Product Designer · Open to remote &amp; hybrid
          </p>
        </FadeUp>

        <h1
          id="hero-title"
          className="max-w-5xl font-display text-[2.75rem] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          <span className="sr-only">I design products. Then I build them with AI.</span>
          <span aria-hidden="true" className="block">
            <RevealWords text="I design products." trigger="mount" delay={0.1} />
          </span>
          <span aria-hidden="true" className="block text-accent">
            <RevealWords text="Then I build them with AI." trigger="mount" delay={0.35} />
          </span>
        </h1>

        <FadeUp delay={0.7}>
          <p className="mt-8 max-w-2xl text-lg text-muted md:text-xl md:leading-relaxed">
            7+ years across fintech, SaaS and enterprise. I take ideas from research to Figma
            to working code, using AI to prototype faster, test sooner and ship products that
            hold up for real people.
          </p>
        </FadeUp>

        <FadeUp delay={0.8}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Magnetic className="[&>a]:w-full">
              <Link href="/#work" className="btn-primary group">
                View selected work
                <Arrow className="transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-1" />
              </Link>
            </Magnetic>
            <a
              href="/Chukwuemeka_Iheonye_Resume.pdf"
              download="Chukwuemeka_Iheonye_Resume.pdf"
              className="btn-secondary group"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M8 2v8M5 7l3 3 3-3M3 13h10"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 ease-out motion-safe:group-hover:translate-y-0.5"
                />
              </svg>
              Download CV <span className="sr-only">(PDF)</span>
            </a>
          </div>
        </FadeUp>

        <FadeUp delay={0.9}>
          <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="group flex flex-col-reverse gap-2 bg-canvas p-5 transition-colors duration-300 hover:bg-surface md:p-6"
              >
                <dt className="text-sm text-muted">{s.label}</dt>
                <dd className="font-display text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-accent md:text-3xl">
                  <CountUp value={s.value} />
                </dd>
              </div>
            ))}
          </dl>
        </FadeUp>
      </div>
    </section>
  );
}
