"use client";

import Link from "next/link";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";

export function AboutSection() {
  const { t } = useI18n();

  return (
    <section className="border-t border-line">
      <div className="container-site grid gap-12 py-24 lg:grid-cols-12 lg:py-32">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow">{t("about.eyebrow")}</p>
            <h2 className="mt-5 font-display text-[clamp(2.2rem,4.5vw,3.4rem)] font-medium leading-[1.05] tracking-[-0.01em] text-ink">
              {t("about.title.1")} <em className="italic">{t("about.title.em")}</em>{" "}
              {t("about.title.2")}
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <Reveal delay={80}>
            <div className="space-y-6 text-base leading-7 text-stone sm:text-lg sm:leading-8">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-8">
              {[t("about.residential"), t("about.commercial"), t("about.viz")].map(
                (label) => (
                  <span
                    key={label}
                    className="text-[0.72rem] font-medium uppercase tracking-[0.24em] text-ink"
                  >
                    {label}
                  </span>
                ),
              )}
            </div>
            <Link
              href="/about"
              className="link-underline mt-10 inline-block text-sm font-medium text-ink"
            >
              {t("about.more")}
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
