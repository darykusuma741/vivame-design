"use client";

import { useI18n } from "@/components/i18n/LanguageProvider";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function WhySection() {
  const { t, why } = useI18n();

  return (
    <section className="border-t border-line">
      <div className="container-site py-24 lg:py-32">
        <Reveal>
          <SectionHeading
            eyebrow={t("why.eyebrow")}
            title={
              <>
                {t("why.title.1")} <em className="italic">{t("why.title.em")}</em>{" "}
                {t("why.title.2")}
              </>
            }
          />
        </Reveal>
        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {why.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 60}>
              <div>
                <h3 className="font-display text-[1.35rem] font-medium text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[40ch] text-sm leading-6 text-stone">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
