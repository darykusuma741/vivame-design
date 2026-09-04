import type { Metadata } from "next";
import { PageIntro } from "@/components/site/PageIntro";
import { PlaceholderNote } from "@/components/site/PlaceholderNote";

export const metadata: Metadata = {
  title: "About",
  description:
    "About VIVAME Design — an interior design, architecture, and 3D visualization studio.",
};

export default function AboutPage() {
  return (
    <PageIntro
      eyebrow="The studio"
      title={
        <>
          Design with <em className="italic">intention</em>
        </>
      }
      lead="VIVAME Design is an interior design, architecture, and 3D visualization studio. We believe a space should be more than a composition of finishes — it should respond to the people who live in it, the light that moves through it, and the way it will be used every day."
    >
      <div className="mt-16 grid max-w-3xl gap-10">
        <div>
          <h2 className="eyebrow">Approach</h2>
          <p className="mt-4 text-base leading-7 text-stone">
            Every project starts with listening — then careful spatial thinking,
            honest materiality, and a clear visual language. We work
            iteratively, resolving design decisions early so the final result
            feels inevitable rather than assembled.
          </p>
        </div>
        <div>
          <h2 className="eyebrow">Process</h2>
          <p className="mt-4 text-base leading-7 text-stone">
            Concept and space planning come first; 3D visualization brings the
            idea to life so nothing is left to imagination. From the first
            sketch to the final render, the goal is the same: a space you can
            already feel at home in.
          </p>
        </div>
      </div>

      <PlaceholderNote>
        Studio story, team, and imagery in preparation
      </PlaceholderNote>
    </PageIntro>
  );
}
