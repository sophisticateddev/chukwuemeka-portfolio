import WorkIndexPage, { workIndexMetadata } from "@/components/pages/WorkIndexPage";

export const metadata = workIndexMetadata("en");

export default function Page() {
  return <WorkIndexPage locale="en" />;
}
