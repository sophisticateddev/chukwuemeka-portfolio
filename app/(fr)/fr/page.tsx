import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { alternates } from "@/lib/alternates";

export const metadata: Metadata = { alternates: alternates("fr", "/") };

export default function FrenchHome() {
  return <HomePage region="intl" locale="fr" />;
}
