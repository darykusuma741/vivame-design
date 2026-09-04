import Link from "next/link";
import { processSteps } from "@/lib/content";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function ProcessSection() {
  return (
    <section className="border-t border-line bg-secondary">
      <div className="container-site py-24 lg:py-32">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="How we work"
              title={
                <>
                  A clear, <em className="italic">considered</em> process
                </>
              }
              lead="From first conversation to final handover — seven stages that keep you informed and the outcome faithful to the vision."
            />
            <Link
              href="/process"
              className="link-underline shrink-0 text-sm font-medium text-ink"
            >
              Explore the full process
            </Link>
          </div>
        </Reveal>
        <Reveal delay={60}>
          <ol className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:grid-cols-7">
            {processSteps.map((step) => (
              <li key={step.number} className="border-t border-ink/15 pt-6">
                <span className="font-display text-xl font-medium text-gold-deep">
                  {step.number}
                </span>
                <h3 className="mt-3 text-[0.82rem] font-medium uppercase tracking-[0.1em] text-ink">
                  {step.short}
                </h3>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
