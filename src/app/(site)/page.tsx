import Link from "next/link";
import { site } from "@/lib/site";

const disciplines = [
  {
    name: "Interior Design",
    description:
      "Residential and boutique commercial interiors, tailored to how you live and work.",
  },
  {
    name: "Architecture",
    description:
      "Thoughtful spatial planning and built form, carried from concept through construction.",
  },
  {
    name: "3D Visualization",
    description:
      "Photorealistic interior renders that let you see the finished space before it exists.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section>
        <div className="container-site pt-[clamp(4.5rem,13vh,9rem)] pb-[clamp(4rem,11vh,8rem)]">
          <p className="eyebrow">{site.tagline}</p>
          <h1 className="mt-9 font-display text-[clamp(2.9rem,9vw,7.25rem)] font-medium leading-[0.97] tracking-[-0.01em] text-ink">
            <span className="block">Considered interiors,</span>
            <span className="block italic">from first sketch</span>
            <span className="block">to final render.</span>
          </h1>
          <p className="mt-10 max-w-[62ch] text-base leading-7 text-stone sm:text-lg sm:leading-8">
            {site.description}
          </p>
          <div className="mt-11 flex flex-wrap items-center gap-4">
            <Link href="/portfolio" className="btn btn-dark">
              View the work
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Start a project
            </Link>
          </div>
        </div>
      </section>

      {/* Disciplines */}
      <section
        aria-label="What we do"
        className="border-y border-line bg-surface"
      >
        <div className="container-site grid sm:grid-cols-3 sm:divide-x sm:divide-line">
          {disciplines.map((discipline) => (
            <article
              key={discipline.name}
              className="border-b border-line py-10 last:border-b-0 sm:border-b-0 sm:py-14 sm:pr-8 sm:last:border-b-0"
            >
              <h2 className="font-display text-[1.7rem] font-medium leading-tight text-ink">
                {discipline.name}
              </h2>
              <p className="mt-3 max-w-[34ch] text-sm leading-6 text-stone">
                {discipline.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Closing invitation */}
      <section className="container-site py-[clamp(4.5rem,11vh,8rem)] text-center">
        <h2 className="mx-auto max-w-[16ch] font-display text-[clamp(2.2rem,5.5vw,4.25rem)] font-medium leading-[1.05] text-ink">
          Have a space in mind?
        </h2>
        <p className="mx-auto mt-6 max-w-[52ch] text-base leading-7 text-stone">
          Tell us about your project and we&apos;ll take it from first
          conversation to a space that feels unmistakably yours.
        </p>
        <Link href="/contact" className="btn btn-dark mt-10">
          Start a project
        </Link>
      </section>
    </>
  );
}
