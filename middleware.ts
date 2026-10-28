import { NextResponse, type NextRequest } from "next/server";

// Visitors in these countries get their version of the home page; everyone else gets the UK one.
const byCountry: Record<string, "ca" | "us"> = { CA: "ca", US: "us" };
const REGION_COOKIE = "region";
// Set by the EN/FR switch (components/LanguageSwitch.tsx); must match LANG_COOKIE in lib/i18n.ts
const LANG_COOKIE = "lang";

/** True when French is the language the browser ranks highest, e.g. "fr-CA,fr;q=0.9,en;q=0.8". */
function prefersFrench(header: string | null) {
  if (!header) return false;
  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().toLowerCase().split(";");
      const q = params.map((p) => p.trim()).find((p) => p.startsWith("q="));
      return { tag, q: q ? Number(q.slice(2)) : 1 };
    })
    .filter((l) => l.tag && l.tag !== "*")
    .sort((a, b) => b.q - a.q);
  return ranked[0]?.tag.startsWith("fr") ?? false;
}

/**
 * Send someone to French when they chose it, or when they haven't chosen and their browser
 * prefers French. Only on arrival: once they're browsing the site, links decide.
 */
function wantsFrench(req: NextRequest) {
  const chosen = req.cookies.get(LANG_COOKIE)?.value;
  if (chosen === "fr") return true;
  if (chosen === "en") return false;
  const referer = req.headers.get("referer");
  try {
    if (referer && new URL(referer).host === req.nextUrl.host) return false;
  } catch {
    // malformed referer: treat as arriving from elsewhere
  }
  return prefersFrench(req.headers.get("accept-language"));
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname.includes("opengraph-image")) return NextResponse.next();

  const isFrench = pathname === "/fr" || pathname.startsWith("/fr/");
  if (!isFrench && wantsFrench(req)) {
    const url = req.nextUrl.clone();
    url.pathname = pathname === "/" ? "/fr" : `/fr${pathname}`;
    return NextResponse.redirect(url);
  }

  const prefix = isFrench ? "/fr" : "";
  const bare = isFrench ? pathname.slice(3) || "/" : pathname;

  // Opening /ca or /us directly picks that version for the rest of the visit, so links
  // back to the home page (nav, case studies) don't switch to the visitor's location.
  // A session cookie: it ends when the browser closes.
  if (bare === "/ca" || bare === "/us") {
    const res = NextResponse.next();
    res.cookies.set(REGION_COOKIE, bare.slice(1), { path: "/", sameSite: "lax" });
    return res;
  }

  if (bare === "/") {
    const chosen = req.cookies.get(REGION_COOKIE)?.value;
    const region =
      chosen === "ca" || chosen === "us" ? chosen : byCountry[req.headers.get("x-vercel-ip-country") ?? ""];
    if (region) return NextResponse.rewrite(new URL(`${prefix}/${region}`, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/ca", "/us", "/work/:path*", "/writing/:path*", "/fr", "/fr/:path*"],
};
