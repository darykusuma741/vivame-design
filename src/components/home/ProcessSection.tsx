import Link from "next/link";
import { processSteps } from "@/lib/content";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function ProcessSection() {
  return (
    <section className="border-t border-line bg-secondary">
      <div className="container-site py-24 lg:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="How we work"
            title={
              <>
                A clear, <em className="italic">considered</em> process
              </>
            }
            lead="From first conversation to final result, each stage is designed to keep you informed and the outcome faithful to the vision."
          />
        </Reveal>
        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={(i % 3) * 60}>
              <div className="border-t border-ink/15 pt-6">
                <span className="font-display text-3xl font-medium text-gold-deep">
                  {step.number}
                </span>
                <h3 className="mt-4 font-display text-2xl font-medium text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-stone">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <Link
            href="/process"
            className="link-underline mt-14 inline-block text-sm font-medium text-ink"
          >
            Explore the full process
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
