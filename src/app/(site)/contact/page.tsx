import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import { ContactContent } from "@/components/pages/ContactContent";

export const metadata: Metadata = {
  title: "Start a Project",
  description:
    "Contact VIVAME Design for interior design, architecture, and 3D visualization — WhatsApp, phone, or visit our studio in Sawangan, Depok.",
  alternates: { canonical: absoluteUrl("/contact") },
};

export default function ContactPage() {
  return <ContactContent />;
}
