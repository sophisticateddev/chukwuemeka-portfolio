import SiteShell, { siteMetadata } from "@/components/SiteShell";

export const metadata = siteMetadata("en");
export { viewport } from "@/components/SiteShell";

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell locale="en">{children}</SiteShell>;
}
