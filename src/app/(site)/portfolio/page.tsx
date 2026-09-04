import type { Metadata } from "next";
import { PageIntro } from "@/components/site/PageIntro";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { PlaceholderNote } from "@/components/site/PlaceholderNote";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "An editorial selection of VIVAME Design interior and architecture projects — residential and commercial spaces, concept to render.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <PageIntro
      eyebrow="Portfolio"
      title={
        <>
          Selected <em className="italic">work</em>
        </>
      }
      lead="A curated look at the spaces VIVAME Design has shaped — residential interiors, commercial environments, and the renders that bring each idea to life."
    >
      <div className="mt-14">
        <PortfolioGrid />
      </div>
      <PlaceholderNote>
        Select projects feature real photography — others are illustrative
        previews
      </PlaceholderNote>
    </PageIntro>
  );
}
