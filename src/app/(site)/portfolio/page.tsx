import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import { PortfolioContent } from "@/components/pages/PortfolioContent";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "An editorial selection of VIVAME Design interior and architecture projects — residential and commercial spaces, concept to render.",
  alternates: { canonical: absoluteUrl("/portfolio") },
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
