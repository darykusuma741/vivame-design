import type { Metadata } from "next";
import Link from "next/link";
import { processSteps } from "@/lib/content";
import { PageIntro } from "@/components/site/PageIntro";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "How VIVAME Design works — from consultation and concept through 3D visualization, design development, implementation, and final result.",
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <PageIntro
      eyebrow="Process"
      title={
        <>
          How we <em className="italic">work</em>
        </>
      }
      lead="A clear, six-stage journey keeps every project focused and you informed — so the result stays faithful to the vision from first conversation to final reveal."
    >
      <div className="relative mt-20">
        {/* vertical rail */}
        <span
          aria-hidden="true"
          className="absolute bottom-4 left-[1.35rem] top-2 hidden w-px bg-line sm:block"
        />
        <ol className="space-y-16 sm:space-y-0">
          {processSteps.map((step, i) => (
            <li key={step.number}>
              <Reveal delay={(i % 3) * 60}>
                <div className="grid gap-6 sm:grid-cols-[3rem_1fr] sm:gap-10 sm:pb-16">
                  <div className="relative flex items-center sm:justify-center">
                    <span className="font-display text-[2.1rem] font-medium leading-none text-gold-deep">
                      {step.number}
                    </span>
                  </div>
                  <div className="sm:border-b sm:border-line sm:pb-16">
                    <h2 className="font-display text-[clamp(1.7rem,3.5vw,2.6rem)] font-medium leading-tight text-ink">
                      {step.title}
                    </h2>
                    <p className="mt-4 max-w-[58ch] text-base leading-7 text-stone">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-4 text-center">
        <Link href="/contact" className="btn btn-dark">
          Start your project
        </Link>
      </div>
    </PageIntro>
  );
}
