"use client";

import { useEffect, useState } from "react";

/** Sticky "On this page" list that highlights the section in view. */
export default function Toc({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-30% 0px -65% 0px" }
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="On this page" className="sticky top-28">
      <p className="eyebrow mb-4">On this page</p>
      <ol className="space-y-1 border-l border-line">
        {items.map((item, i) => {
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`-ml-px flex gap-3 border-l-2 py-1.5 pl-4 text-sm transition-colors duration-200 ${
                  isActive ? "border-accent text-ink" : "border-transparent text-muted hover:text-ink"
                }`}
              >
                <span className="font-mono text-xs leading-5 text-muted">{String(i + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
