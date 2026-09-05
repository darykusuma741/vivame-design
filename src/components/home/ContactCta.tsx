"use client";

import Link from "next/link";
import { site } from "@/lib/site";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";

export function ContactCta() {
  const primary = site.phones[0];
  const { t } = useI18n();

  return (
    <section className="bg-ink text-paper">
      <div className="container-site py-24 text-center lg:py-32">
        <Reveal>
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-gold">
            {t("cta.eyebrow")}
          </p>
          <h2 className="mx-auto mt-6 max-w-[18ch] font-display text-[clamp(2.4rem,6vw,4.5rem)] font-medium leading-[1.04]">
            {t("cta.title")}
          </h2>
          <p className="mx-auto mt-6 max-w-[54ch] text-base leading-7 text-paper/70">
            {t("cta.lead")}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn btn-light">
              {t("cta.eyebrow")}
            </Link>
            <a
              href={primary.wa}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light"
            >
              {t("cta.whatsapp")}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
