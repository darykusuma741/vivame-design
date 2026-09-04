import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageIntro } from "@/components/site/PageIntro";
import { ContactForm } from "@/components/contact/ContactForm";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Start a Project",
  description:
    "Contact VIVAME Design for interior design, architecture, and 3D visualization — WhatsApp, phone, or visit our studio in Sawangan, Depok.",
  alternates: { canonical: "/contact" },
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
      lead="Tell us about your space and how you'd like to reach you — we'll take it from there."
    >
      <div className="mt-16 grid gap-14 lg:grid-cols-12">
        {/* Contact details */}
        <Reveal className="lg:col-span-5">
          <div className="space-y-10">
            <div>
              <h2 className="eyebrow">WhatsApp</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {site.phones.map((phone) => (
                  <a
                    key={phone.tel}
                    href={phone.wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark"
                  >
                    WhatsApp {phone.label.toLowerCase()}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h2 className="eyebrow">Phone</h2>
              <ul className="mt-4 space-y-1.5">
                {site.phones.map((phone) => (
                  <li key={phone.tel}>
                    <a
                      href={`tel:${phone.tel}`}
                      className="text-base text-ink underline-offset-4 hover:underline"
                    >
                      {phone.display}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="eyebrow">Studio</h2>
              <address className="mt-4 text-base not-italic leading-7 text-stone">
                {site.location.line1}
                <br />
                {site.location.line2}
                <br />
                {site.location.city}, {site.location.country}
              </address>
              <a
                href={site.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline mt-4 inline-block text-sm font-medium text-ink"
              >
                View on Google Maps
              </a>
            </div>

            <div>
              <h2 className="eyebrow">Follow</h2>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                {site.social.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-stone transition-colors hover:text-ink"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={80} className="lg:col-span-7">
          <div className="border-t border-line pt-10 lg:border-t-0 lg:pt-0">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </PageIntro>
  );
}
