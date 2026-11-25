import { NextResponse, type NextRequest } from "next/server";

// Visitors in these countries get their version of the home page; everyone else gets the UK one.
const byCountry: Record<string, "ca" | "us"> = { CA: "ca", US: "us" };
const REGION_COOKIE = "region";
// Set by the EN/FR switch (components/LanguageSwitch.tsx); must match LANG_COOKIE in lib/i18n.ts
const LANG_COOKIE = "lang";

/**
 * Send someone to French only when they chose it with the EN/FR switch (or the offer bar).
 * The browser's language is never enough: the French is a translation, and a wrong guess
 * (for example a bilingual visitor whose browser lists French first) shows them the wrong site.
 * Visitors whose browser prefers French are offered it instead (components/LanguageOffer.tsx).
 */
function wantsFrench(req: NextRequest) {
  return req.cookies.get(LANG_COOKIE)?.value === "fr";
}

/** True when the visitor followed a link on this site, rather than typing the address or arriving from elsewhere. */
function fromThisSite(req: NextRequest) {
  const referer = req.headers.get("referer");
  try {
    return !!referer && new URL(referer).host === req.nextUrl.host;
  } catch {
    // malformed referer: treat as arriving from elsewhere
    return false;
  }
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
    // The cookie only counts while browsing the site. Typing the address or arriving from a link
    // elsewhere goes by location again: browsers that restore sessions keep "session" cookies for weeks.
    const chosen = fromThisSite(req) ? req.cookies.get(REGION_COOKIE)?.value : undefined;
    const region =
      chosen === "ca" || chosen === "us" ? chosen : byCountry[req.headers.get("x-vercel-ip-country") ?? ""];
    // Canada gets a visible /ca address (and /fr/ca in French) so the page can be shared as it is seen.
    if (region === "ca") {
      const url = req.nextUrl.clone();
      url.pathname = `${prefix}/ca`;
      return NextResponse.redirect(url);
    }
    if (region) return NextResponse.rewrite(new URL(`${prefix}/${region}`, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/ca", "/us", "/work/:path*", "/writing/:path*", "/fr", "/fr/:path*"],
};
