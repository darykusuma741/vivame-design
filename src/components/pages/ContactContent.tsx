"use client";

import { site } from "@/lib/site";
import { PageIntro } from "@/components/site/PageIntro";
import { ContactForm } from "@/components/contact/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { socialIcon, WhatsAppIcon } from "@/components/ui/icons";
import { useI18n } from "@/components/i18n/LanguageProvider";

export function ContactContent() {
  const { t } = useI18n();

  const whatsappLabel = (label: string) =>
    label === "Primary"
      ? t("contact.whatsapp.primary")
      : t("contact.whatsapp.secondary");

  return (
    <PageIntro
      eyebrow={t("contact.eyebrow")}
      title={
        <>
          {t("contact.title.1")} <em className="italic">{t("contact.title.em")}</em>
        </>
      }
      lead={t("contact.lead")}
    >
      <div className="mt-16 grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="space-y-10">
            <div>
              <h2 className="eyebrow">{t("contact.whatsapp")}</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {site.phones.map((phone) => (
                  <a
                    key={phone.tel}
                    href={phone.wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    {t("contact.whatsapp")} {whatsappLabel(phone.label)}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h2 className="eyebrow">{t("contact.phone")}</h2>
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
              <h2 className="eyebrow">{t("contact.email")}</h2>
              <a
                href={`mailto:${site.email}`}
                className="mt-4 inline-block text-base text-ink underline-offset-4 hover:underline"
              >
                {site.email}
              </a>
            </div>

            <div>
              <h2 className="eyebrow">{t("contact.studio")}</h2>
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
                {t("contact.maps")}
              </a>
            </div>

            <div>
              <h2 className="eyebrow">{t("contact.follow")}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {site.social.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className="flex h-10 w-10 items-center justify-center border border-line text-stone transition-colors hover:border-ink hover:text-ink"
                  >
                    {socialIcon(social.label)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80} className="lg:col-span-7">
          <div className="border-t border-line pt-10 lg:border-t-0 lg:pt-0">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </PageIntro>
  );
}
