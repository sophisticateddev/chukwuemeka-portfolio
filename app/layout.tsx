import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chukwuemeka Iheonye — Senior Product Designer",
  description:
    "Senior Product Designer based in the UK. Crafting purposeful digital products with clarity and intention.",
  openGraph: {
    title: "Chukwuemeka Iheonye — Senior Product Designer",
    description:
      "Senior Product Designer based in the UK. Crafting purposeful digital products with clarity and intention.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${dmSans.variable}`}>
      <body className="bg-bg text-ink font-sans">{children}</body>
    </html>
  );
}
