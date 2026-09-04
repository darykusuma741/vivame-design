import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper">
      <div className="container-site grid gap-12 py-16 md:grid-cols-12 md:py-20">
        {/* Brand */}
        <div className="md:col-span-5">
          <p className="font-display text-4xl font-medium tracking-wide">
            {site.name}
          </p>
          <p className="mt-2 text-[0.65rem] font-medium uppercase tracking-[0.34em] text-paper/50">
            Design Studio
          </p>
          <p className="mt-6 max-w-sm text-sm leading-6 text-paper/70">
            Interior design, architecture, and 3D interior visualization —
            refined, intentional spaces from first sketch to final render.
          </p>
        </div>

        {/* Sitemap */}
        <nav aria-label="Footer" className="md:col-span-3">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-paper/50">
            Explore
          </p>
          <ul className="mt-5 space-y-1">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-block py-1 text-sm text-paper/80 transition-colors hover:text-paper"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact — values only render once real details are configured */}
        <div className="md:col-span-4">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-paper/50">
            Contact
          </p>
          <ul className="mt-5 space-y-1 text-sm">
            {site.contact.email && (
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="inline-block py-1 text-paper/80 underline-offset-4 transition-colors hover:text-paper hover:underline"
                >
                  {site.contact.email}
                </a>
              </li>
            )}
            {site.contact.instagram && (
              <li>
                <a
                  href={site.contact.instagram}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="inline-block py-1 text-paper/80 transition-colors hover:text-paper"
                >
                  Instagram
                </a>
              </li>
            )}
            {site.contact.whatsapp && (
              <li>
                <a
                  href={`https://wa.me/${site.contact.whatsapp.replace(/\D/g, "")}`}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="inline-block py-1 text-paper/80 transition-colors hover:text-paper"
                >
                  WhatsApp
                </a>
              </li>
            )}
          </ul>
          <p className="mt-6 max-w-xs text-xs leading-5 text-paper/40">
            Development preview — contact details and portfolio imagery are
            placeholders until the studio&apos;s real content is added.
          </p>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="container-site flex flex-col gap-2 py-6 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p className="text-paper/35">
            Interior design · Architecture · 3D Visualization
          </p>
        </div>
      </div>
    </footer>
  );
}
