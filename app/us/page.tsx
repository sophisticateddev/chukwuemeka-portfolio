import type { Metadata } from "next";
import HomePage from "@/components/HomePage";

// Same page as the home page, so search engines should index "/" rather than this copy.
export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function UsHome() {
  return <HomePage region="us" />;
}
