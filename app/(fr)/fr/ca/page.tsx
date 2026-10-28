import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { alternates } from "@/lib/alternates";

// Same page as the home page, so search engines should index it rather than this copy.
export const metadata: Metadata = { alternates: alternates("fr", "/") };

export default function FrenchCanadaHome() {
  return <HomePage region="ca" locale="fr" />;
}
