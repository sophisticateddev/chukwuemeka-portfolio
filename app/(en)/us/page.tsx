import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { alternates } from "@/lib/alternates";

// Same page as the home page, so search engines should index it rather than this copy.
export const metadata: Metadata = { alternates: alternates("en", "/") };

export default function UsHome() {
  return <HomePage region="us" locale="en" />;
}
