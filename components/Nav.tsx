"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import Magnetic from "./Magnetic";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Work", href: "/#work", id: "work" },
  { label: "AI practice", href: "/#ai", id: "ai" },
  { label: "Experience", href: "/#experience", id: "experience" },
  { label: "About", href: "/#about", id: "about" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // Highlight the section currently in the middle of the viewport.
  useEffect(() => {
    if (pathname !== "/") return setActive(null);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ["work", "ai", "experience", "about", "writing", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-canvas/85 backdrop-blur-md">
      <nav aria-label="Main" className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="group flex items-center gap-3 rounded-full">
          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-accent font-mono text-xs font-medium text-onaccent transition-transform duration-500 ease-out motion-safe:group-hover:rotate-[360deg]"
          >
            CI
          </span>
          <span className="font-display text-sm font-semibold tracking-tight">
            Chukwuemeka Iheonye
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.href} className="relative">
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full bg-surface ring-1 ring-line"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <Link
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative block rounded-full px-4 py-2 text-sm transition-colors hover:text-ink ${
                    isActive ? "text-ink" : "text-muted"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li className="ml-1">
            <ThemeToggle />
          </li>
          <li className="ml-2">
            <Magnetic>
              <Link href="/#contact" className="btn-primary min-h-[40px] px-5">
                Get in touch
              </Link>
            </Magnetic>
          </li>
        </ul>

        <div className="flex items-center md:hidden">
          <ThemeToggle />
        <button
          type="button"
          className="relative flex h-11 w-11 items-center justify-center rounded-full"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {/* Three bars that morph into a cross */}
          <span aria-hidden="true" className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 top-0 h-[1.75px] w-5 rounded-full bg-current transition-transform duration-300 ease-out ${
                menuOpen ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[6px] h-[1.75px] w-5 rounded-full bg-current transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-3 h-[1.75px] w-5 rounded-full bg-current transition-transform duration-300 ease-out ${
                menuOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
        </div>
      </nav>

      {/* Reading progress */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="absolute inset-x-0 -bottom-px h-[2px] origin-left bg-accent"
      />

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-canvas md:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="shown"
              transition={{ staggerChildren: 0.05, delayChildren: 0.05 }}
              className="container-page flex flex-col py-4"
            >
              {[...navLinks, { label: "Get in touch", href: "/#contact", id: "contact" }].map((link) => (
                <motion.li
                  key={link.href}
                  variants={{ hidden: { opacity: 0, x: -12 }, shown: { opacity: 1, x: 0 } }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between py-3 font-display text-lg font-medium"
                  >
                    {link.label}
                    {active === link.id && (
                      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
                    )}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
