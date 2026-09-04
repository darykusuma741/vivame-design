import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function AboutSection() {
  return (
    <section className="border-t border-line">
      <div className="container-site grid gap-12 py-24 lg:grid-cols-12 lg:py-32">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow">About VIVAME Design</p>
            <h2 className="mt-5 font-display text-[clamp(2.2rem,4.5vw,3.4rem)] font-medium leading-[1.05] tracking-[-0.01em] text-ink">
              A studio for considered, <em className="italic">timeless</em>{" "}
              interiors.
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <Reveal delay={80}>
            <div className="space-y-6 text-base leading-7 text-stone sm:text-lg sm:leading-8">
              <p>
                VIVAME Design is an interior design, architecture, and 3D
                visualization studio. We believe great interiors are not
                decorated — they are designed: around the people who live in
                them, the light that moves through them, and the life that
                happens within them.
              </p>
              <p>
                From residential homes to commercial spaces, we carry every
                project from first concept to final render and built result —
                balancing function with a quiet, enduring beauty.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-8">
              {["Residential", "Commercial", "3D Visualization"].map((t) => (
                <span
                  key={t}
                  className="text-[0.72rem] font-medium uppercase tracking-[0.24em] text-ink"
                >
                  {t}
                </span>
              ))}
            </div>
            <Link
              href="/about"
              className="link-underline mt-10 inline-block text-sm font-medium text-ink"
            >
              More about the studio
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
