import DrawLine from "./DrawLine";
import FadeUp from "./FadeUp";
import SectionHeading from "./SectionHeading";
import { articles } from "@/lib/data";

export default function Writing() {
  return (
    <section aria-labelledby="writing-title" id="writing" className="border-t border-line py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          id="writing-title"
          index="05"
          label="Writing"
          title="Notes on AI,"
          titleMuted="accessibility and craft."
        />

        <ul className="relative">
          <DrawLine className="top-0" />
          {articles.map((article, i) => (
            <li key={article.id} className="group relative">
              <DrawLine />
              <FadeUp delay={i * 0.04}>
                <article className="grid gap-3 py-8 md:grid-cols-[220px_1fr_auto] md:gap-10">
                  <p className="font-mono text-sm text-muted">
                    <time>{article.date}</time>
                  </p>
                  <div className="transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-1">
                    <h3 className="font-display text-xl font-semibold tracking-tight">
                      {article.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-muted">{article.excerpt}</p>
                  </div>
                  <p className="font-mono text-xs text-muted transition-colors duration-300 group-hover:text-accent md:text-right">
                    {article.tag} · {article.readTime}
                  </p>
                </article>
              </FadeUp>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
