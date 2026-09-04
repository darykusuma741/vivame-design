import type { Metadata } from "next";
import { PageIntro } from "@/components/site/PageIntro";
import { PlaceholderNote } from "@/components/site/PlaceholderNote";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "An editorial selection of VIVAME Design interior and architecture projects — concept notes, photography, and renders.",
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
      lead="A curated look at the spaces VIVAME Design has shaped — residential interiors, architectural projects, and the renders that brought them to life. Each project will open into its own story: concept, materiality, and process."
    >
      <PlaceholderNote>
        Project gallery in preparation — real VIVAME photography & renders
        coming soon
      </PlaceholderNote>
    </PageIntro>
  );
}
