"use client";

import Link from "next/link";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function ProcessSection() {
  const { t, process } = useI18n();

  return (
    <section className="border-t border-line bg-secondary">
      <div className="container-site py-24 lg:py-32">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow={t("process.eyebrow")}
              title={
                <>
                  {t("process.title.1")}{" "}
                  <em className="italic">{t("process.title.em")}</em>{" "}
                  {t("process.title.2")}
                </>
              }
              lead={t("process.lead")}
            />
            <Link
              href="/process"
              className="link-underline shrink-0 text-sm font-medium text-ink"
            >
              {t("process.more")}
            </Link>
          </div>
        </Reveal>
        <Reveal delay={60}>
          <ol className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:grid-cols-7">
            {process.map((step) => (
              <li key={step.number} className="border-t border-ink/15 pt-6">
                <span className="font-display text-xl font-medium text-gold-deep">
                  {step.number}
                </span>
                <h3 className="mt-3 text-[0.82rem] font-medium uppercase tracking-[0.1em] text-ink">
                  {step.short}
                </h3>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
