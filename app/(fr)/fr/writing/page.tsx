import WritingIndexPage, { writingIndexMetadata } from "@/components/pages/WritingIndexPage";

export const metadata = writingIndexMetadata("fr");

export default function Page() {
  return <WritingIndexPage locale="fr" />;
}
