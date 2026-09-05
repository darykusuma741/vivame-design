"use client";

import { PageIntro } from "@/components/site/PageIntro";
import { PlaceholderArt } from "@/components/site/PlaceholderArt";
import { Reveal } from "@/components/ui/Reveal";
import { useI18n } from "@/components/i18n/LanguageProvider";

export function ServicesContent() {
  const { t, services } = useI18n();

  return (
    <PageIntro
      eyebrow={t("services.eyebrow")}
      title={
        <>
          {t("servicespage.title.1")} <em className="italic">{t("servicespage.title.em")}</em>
        </>
      }
      lead={t("servicespage.lead")}
    >
      <div className="mt-16 space-y-20">
        {services.map((service, i) => {
          const flip = i % 2 === 1;
          return (
            <Reveal key={service.slug}>
              <article
                id={service.slug}
                className="grid gap-8 lg:grid-cols-12 lg:items-center"
              >
                <div className={`lg:col-span-5 ${flip ? "lg:order-2" : ""}`}>
                  <PlaceholderArt
                    variant={service.art}
                    label={service.title}
                    className="aspect-[4/3] w-full"
                  />
                </div>
                <div
                  className={`lg:col-span-7 ${
                    flip ? "lg:order-1 lg:pr-16" : "lg:pl-16"
                  }`}
                >
                  <p className="eyebrow">0{i + 1}</p>
                  <h2 className="mt-4 font-display text-[clamp(1.8rem,4vw,3rem)] font-medium leading-tight text-ink">
                    {service.title}
                  </h2>
                  <p className="mt-5 max-w-[56ch] text-base leading-7 text-stone">
                    {service.description}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {service.scope.map((tag) => (
                      <li
                        key={tag}
                        className="border border-line px-3 py-1.5 text-[0.66rem] uppercase tracking-[0.14em] text-stone"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </PageIntro>
  );
}
