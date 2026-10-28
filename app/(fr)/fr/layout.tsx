import SiteShell, { siteMetadata } from "@/components/SiteShell";

export const metadata = siteMetadata("fr");
export { viewport } from "@/components/SiteShell";

export default function FrenchLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell locale="fr">{children}</SiteShell>;
}
