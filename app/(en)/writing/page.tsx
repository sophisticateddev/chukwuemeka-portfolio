import WritingIndexPage, { writingIndexMetadata } from "@/components/pages/WritingIndexPage";

export const metadata = writingIndexMetadata("en");

export default function Page() {
  return <WritingIndexPage locale="en" />;
}
