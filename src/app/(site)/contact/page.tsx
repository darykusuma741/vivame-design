import type { Metadata } from "next";
import { PageIntro } from "@/components/site/PageIntro";
import { PlaceholderNote } from "@/components/site/PlaceholderNote";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Start a Project",
  description:
    "Tell VIVAME Design about your space — interior design, architecture, or 3D visualization.",
};

export default function ContactPage() {
  return (
    <PageIntro
      eyebrow="Contact"
      title={
        <>
          Start a <em className="italic">project</em>
        </>
      }
      lead="Tell us a little about your space — a home, a room, a commercial interior, or an idea you want to see rendered. We'll take it from there."
    >
      <div className="mt-14 max-w-xl">
        <PlaceholderNote>
          Contact form under construction — use the email below meanwhile
        </PlaceholderNote>
        {site.contact.email && (
          <p className="mt-10">
            <a
              href={`mailto:${site.contact.email}`}
              className="font-display text-[clamp(1.4rem,3.4vw,2rem)] font-medium text-ink underline decoration-line underline-offset-8 transition-colors hover:decoration-brass-deep"
            >
              {site.contact.email}
            </a>
          </p>
        )}
      </div>
    </PageIntro>
  );
}
