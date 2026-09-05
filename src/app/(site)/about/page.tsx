import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import { AboutContent } from "@/components/pages/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "About VIVAME Design — an interior design, architecture, and 3D visualization studio crafting considered, timeless spaces.",
  alternates: { canonical: absoluteUrl("/about") },
};

export default function AboutPage() {
  return <AboutContent />;
}
