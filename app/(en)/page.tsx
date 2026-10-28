import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { alternates } from "@/lib/alternates";

export const metadata: Metadata = { alternates: alternates("en", "/") };

export default function Home() {
  return <HomePage region="intl" locale="en" />;
}
