import Link from "next/link";
import Image from "next/image";
import { site, withBasePath } from "@/lib/site";
import { services } from "@/lib/content";
import {
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  socialIcon,
  WhatsAppIcon,
} from "@/components/ui/icons";

export function Footer() {
  const year = new Date().getFullYear();
  const primary = site.phones[0];

  return (
    <footer className="border-t border-line bg-secondary">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 md:py-20 lg:grid-cols-12">
        {/* Brand + address */}
        <div className="lg:col-span-4">
          <Image
            src={withBasePath("/images/logo.webp")}
            alt="VIVAME Design"
            width={489}
            height={257}
            className="h-10 w-auto"
          />
          <p className="mt-6 max-w-sm text-sm leading-6 text-stone">
            Interior design, architecture, and 3D interior visualization —
            beautiful, functional, and timeless spaces.
          </p>
          <address className="mt-6 text-sm not-italic leading-6 text-stone">
            {site.location.line1}
            <br />
            {site.location.line2}
            <br />
            {site.location.city}, {site.location.country}
          </address>
        </div>

        {/* Explore */}
        <nav aria-label="Footer" className="lg:col-span-2">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-ink">
            Explore
          </p>
          <ul className="mt-5 space-y-2.5">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-stone transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services */}
        <nav aria-label="Services" className="lg:col-span-3">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-ink">
            Services
          </p>
          <ul className="mt-5 space-y-2.5">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href="/services"
                  className="text-sm text-stone transition-colors hover:text-ink"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact + social */}
        <div className="lg:col-span-3">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-ink">
            Contact
          </p>
          <ul className="mt-5 space-y-2.5 text-sm">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2.5 text-stone transition-colors hover:text-ink"
              >
                <MailIcon className="h-4 w-4 shrink-0 text-faint" />
                {site.email}
              </a>
            </li>
            {site.phones.map((phone) => (
              <li key={phone.tel}>
                <a
                  href={`tel:${phone.tel}`}
                  className="flex items-center gap-2.5 text-stone transition-colors hover:text-ink"
                >
                  <PhoneIcon className="h-4 w-4 shrink-0 text-faint" />
                  {phone.display}
                </a>
              </li>
            ))}
            <li>
              <a
                href={primary.wa}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-stone transition-colors hover:text-ink"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0 text-faint" />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={site.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-stone transition-colors hover:text-ink"
              >
                <MapPinIcon className="h-4 w-4 shrink-0 text-faint" />
                View on Google Maps
              </a>
            </li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {site.social.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                title={social.label}
                className="flex h-9 w-9 items-center justify-center border border-line text-stone transition-colors hover:border-ink hover:text-ink"
              >
                {socialIcon(social.label)}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-site flex flex-col gap-2 py-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
