import WorkIndexPage, { workIndexMetadata } from "@/components/pages/WorkIndexPage";

export const metadata = workIndexMetadata("fr");

export default function Page() {
  return <WorkIndexPage locale="fr" />;
}
