import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import { ProcessContent } from "@/components/pages/ProcessContent";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "How VIVAME Design works — from consultation and concept through 3D visualization, review, final design, and project completion.",
  alternates: { canonical: absoluteUrl("/process") },
};

export default function ProcessPage() {
  return <ProcessContent />;
}
