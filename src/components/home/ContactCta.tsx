import Link from "next/link";
import { site } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";

export function ContactCta() {
  const primary = site.phones[0];

  return (
    <section className="bg-ink text-paper">
      <div className="container-site py-24 text-center lg:py-32">
        <Reveal>
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-gold">
            Start your project
          </p>
          <h2 className="mx-auto mt-6 max-w-[18ch] font-display text-[clamp(2.4rem,6vw,4.5rem)] font-medium leading-[1.04]">
            Let&apos;s create your space.
          </h2>
          <p className="mx-auto mt-6 max-w-[54ch] text-base leading-7 text-paper/70">
            Tell us about your project and we&apos;ll take it from first
            conversation to a space that feels unmistakably yours.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn btn-light">
              Start a project
            </Link>
            <a
              href={primary.wa}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light"
            >
              WhatsApp us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
