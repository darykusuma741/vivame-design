import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import { ServicesContent } from "@/components/pages/ServicesContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Interior design, 3D interior visualization, residential design, commercial design, and custom design from VIVAME Design.",
  alternates: { canonical: absoluteUrl("/services") },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
