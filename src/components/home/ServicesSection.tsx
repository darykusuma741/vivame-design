"use client";

import Link from "next/link";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function ServicesSection() {
  const { t, services } = useI18n();

  return (
    <section className="border-t border-line bg-secondary">
      <div className="container-site py-24 lg:py-32">
        <Reveal>
          <SectionHeading
            eyebrow={t("services.eyebrow")}
            title={
              <>
                {t("services.title.1")} <em className="italic">{t("services.title.em")}</em>
              </>
            }
          />
        </Reveal>
        <div className="mt-14 border-t border-line">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 4) * 40}>
              <Link
                href="/services"
                className="group grid gap-3 border-b border-line py-8 transition-colors md:grid-cols-[4rem_1fr_auto] md:items-center"
              >
                <span className="font-display text-lg font-medium text-gold-deep">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-[clamp(1.5rem,3vw,2.2rem)] font-medium leading-tight text-ink transition-colors group-hover:text-gold-deep">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-sm text-stone md:max-w-[46ch]">
                    {service.short}
                  </p>
                </div>
                <span className="hidden items-center gap-2 text-sm font-medium text-ink transition-transform duration-300 group-hover:translate-x-1 md:inline-flex">
                  {t("services.explore")} <span aria-hidden="true">→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
