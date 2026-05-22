import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import BackgroundFloats from "@/components/BackgroundFloats";

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
    "Senior Product Designer with 6+ years of experience. Based in Nottingham, UK. Open to remote and hybrid opportunities.",
  openGraph: {
    title: "Chukwuemeka Iheonye — Senior Product Designer",
    description:
      "Senior Product Designer with 6+ years of experience across fintech, SaaS, and enterprise — currently at albert (BAFTA).",
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
      <body className="bg-paper text-ink font-sans">
          <CustomCursor />
          <BackgroundFloats />
          {children}
        </body>
    </html>
  );
}
