"use client";

import Link from "next/link";
import Image from "next/image";
import { site, withBasePath } from "@/lib/site";
import { useI18n } from "@/components/i18n/LanguageProvider";
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
  const { t, nav, services } = useI18n();

  return (
    <footer className="border-t border-line bg-secondary">
      <div className="container-site py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Brand + address */}
          <div className="lg:col-span-5">
            <Image
              src={withBasePath("/images/logo.webp")}
              alt="VIVAME Design"
              width={489}
              height={257}
              className="h-9 w-auto"
            />
            <p className="mt-5 max-w-sm text-sm leading-6 text-stone">
              {t("footer.about")}
            </p>
            <address className="mt-4 text-sm not-italic leading-6 text-stone">
              {site.location.line1}, {site.location.line2}
              <br />
              {site.location.city}, {site.location.country}
            </address>
          </div>

          {/* Explore + Services (side-by-side on mobile) */}
          <div className="grid grid-cols-2 gap-6 sm:gap-10 lg:col-span-4">
            <nav aria-label="Footer">
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.24em] text-ink">
                {t("footer.explore")}
              </p>
              <ul className="mt-4 space-y-2">
                {nav.map((item) => (
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
            <nav aria-label="Services">
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.24em] text-ink">
                {t("footer.services")}
              </p>
              <ul className="mt-4 space-y-2">
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
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.24em] text-ink">
              {t("footer.contact")}
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2.5 text-stone transition-colors hover:text-ink"
                >
                  <MailIcon className="h-4 w-4 shrink-0 text-faint" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${primary.tel}`}
                  className="flex items-center gap-2.5 text-stone transition-colors hover:text-ink"
                >
                  <PhoneIcon className="h-4 w-4 shrink-0 text-faint" />
                  {primary.display}
                </a>
              </li>
              <li>
                <a
                  href={primary.wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-stone transition-colors hover:text-ink"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0 text-faint" />
                  {t("footer.whatsapp")}
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
                  {t("footer.maps")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social */}
        <div className="mt-10 flex flex-wrap gap-2 border-t border-line pt-6">
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

      <div className="border-t border-line">
        <div className="container-site flex flex-col gap-2 py-5 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. {t("footer.rights")}
          </p>
          <p>{t("footer.tagline")}</p>
        </div>
      </div>
    </footer>
  );
}
