/**
 * Canonical site URL, used for absolute links in metadata, the sitemap and robots.txt.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://yourdomain.com). On Vercel it
 * falls back to the project's production domain.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
