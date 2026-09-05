"use client";

import { PageIntro } from "@/components/site/PageIntro";
import { PlaceholderArt } from "@/components/site/PlaceholderArt";
import { PlaceholderNote } from "@/components/site/PlaceholderNote";
import { Reveal } from "@/components/ui/Reveal";
import { useI18n } from "@/components/i18n/LanguageProvider";

export function AboutContent() {
  const { t, why } = useI18n();

  return (
    <PageIntro
      eyebrow={t("aboutpage.eyebrow")}
      title={
        <>
          {t("aboutpage.title.1")} <em className="italic">{t("aboutpage.title.em")}</em>
        </>
      }
      lead={t("aboutpage.lead")}
    >
      {/* Philosophy */}
      <div className="mt-16 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <h2 className="eyebrow">{t("aboutpage.approach")}</h2>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <Reveal delay={60}>
            <div className="space-y-6 text-base leading-7 text-stone sm:text-lg sm:leading-8">
              <p>{t("aboutpage.a1")}</p>
              <p>{t("aboutpage.a2")}</p>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal>
        <div className="mt-16">
          <PlaceholderArt
            variant={5}
            label="Abstract studio composition"
            className="aspect-[16/9] w-full lg:aspect-[21/9]"
          />
        </div>
      </Reveal>

      {/* What we value */}
      <div className="mt-20">
        <Reveal>
          <h2 className="eyebrow">{t("aboutpage.values")}</h2>
        </Reveal>
        <div className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {why.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 60}>
              <div className="border-t border-ink/15 pt-5">
                <h3 className="font-display text-[1.3rem] font-medium text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[38ch] text-sm leading-6 text-stone">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <PlaceholderNote>{t("aboutpage.note")}</PlaceholderNote>
    </PageIntro>
  );
}
