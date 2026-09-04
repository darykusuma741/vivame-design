import type { Metadata } from "next";
import { PageIntro } from "@/components/site/PageIntro";
import { PlaceholderArt } from "@/components/site/PlaceholderArt";
import { PlaceholderNote } from "@/components/site/PlaceholderNote";
import { Reveal } from "@/components/ui/Reveal";
import { whyItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "About VIVAME Design — an interior design, architecture, and 3D visualization studio crafting considered, timeless spaces.",
  alternates: { canonical: "/about" },
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
      lead="VIVAME Design is an interior design, architecture, and 3D visualization studio. We believe a space should be more than a composition of finishes — it should respond to the people who live in it, the light that moves through it, and the way it is used every day."
    >
      {/* Philosophy */}
      <div className="mt-16 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <h2 className="eyebrow">Our approach</h2>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <Reveal delay={60}>
            <div className="space-y-6 text-base leading-7 text-stone sm:text-lg sm:leading-8">
              <p>
                Every project begins with listening — then careful spatial
                thinking, honest materiality, and a clear visual language. We
                work iteratively, resolving design decisions early so the final
                result feels inevitable rather than assembled.
              </p>
              <p>
                Concept and space planning come first; 3D visualization brings
                the idea to life so nothing is left to imagination. From the
                first sketch to the final render, the goal is the same: a space
                you can already feel at home in.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal>
        <div className="mt-16">
          <PlaceholderArt
            variant={5}
            label="Abstract studio composition"
            className="aspect-[16/9] w-full lg:aspect-[21/9]"
          />
        </div>
      </Reveal>

      {/* What we value */}
      <div className="mt-20">
        <Reveal>
          <h2 className="eyebrow">What we value</h2>
        </Reveal>
        <div className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {whyItems.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 60}>
              <div className="border-t border-ink/15 pt-5">
                <h3 className="font-display text-[1.3rem] font-medium text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[38ch] text-sm leading-6 text-stone">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <PlaceholderNote>
        Studio story, team, and photography in preparation
      </PlaceholderNote>
    </PageIntro>
  );
}
