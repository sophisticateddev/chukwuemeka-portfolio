/**
 * Makes the Motion toolbar real for components that call framer-motion's useReducedMotion().
 * That hook reads the browser's prefers-reduced-motion media query, not MotionConfig, so the
 * toolbar has to answer that query itself. Only the JS query is faked; CSS `motion-safe:` rules
 * still follow the real OS setting.
 */
const QUERY = /prefers-reduced-motion/;
let reduced = false;
const listeners = new Set<(e: MediaQueryListEvent) => void>();

if (typeof window !== "undefined" && !(window as any).__reducedMotionPatched) {
  (window as any).__reducedMotionPatched = true;
  const real = window.matchMedia.bind(window);
  window.matchMedia = (query: string) => {
    if (!QUERY.test(query)) return real(query);
    const mql = {
      media: query,
      get matches() {
        return reduced;
      },
      onchange: null,
      addListener: (cb: any) => listeners.add(cb),
      removeListener: (cb: any) => listeners.delete(cb),
      addEventListener: (_: string, cb: any) => listeners.add(cb),
      removeEventListener: (_: string, cb: any) => listeners.delete(cb),
      dispatchEvent: () => false,
    };
    return mql as unknown as MediaQueryList;
  };
}

export function setReducedMotion(value: boolean) {
  reduced = value;
  listeners.forEach((cb) => cb({ matches: value } as MediaQueryListEvent));
}
