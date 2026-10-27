import { NextResponse, type NextRequest } from "next/server";

// Visitors in these countries get their version of the home page; everyone else gets the UK one.
const byCountry: Record<string, "ca" | "us"> = { CA: "ca", US: "us" };
const COOKIE = "region";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Opening /ca or /us directly picks that version for the rest of the visit, so links
  // back to the home page (nav, case studies) don't switch to the visitor's location.
  // A session cookie: it ends when the browser closes.
  if (pathname !== "/") {
    const res = NextResponse.next();
    res.cookies.set(COOKIE, pathname.slice(1), { path: "/", sameSite: "lax" });
    return res;
  }

  const chosen = req.cookies.get(COOKIE)?.value;
  const region =
    chosen === "ca" || chosen === "us" ? chosen : byCountry[req.headers.get("x-vercel-ip-country") ?? ""];
  return region ? NextResponse.rewrite(new URL(`/${region}`, req.url)) : NextResponse.next();
}

export const config = { matcher: ["/", "/ca", "/us"] };
