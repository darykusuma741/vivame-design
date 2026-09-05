"use client";

import Image from "next/image";
import { PageIntro } from "@/components/site/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { withBasePath } from "@/lib/site";
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

      {/* Founder */}
      <section className="mt-24 border-t border-line pt-16 lg:mt-32 lg:pt-20">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -bottom-4 -right-4 h-full w-full border border-gold/50"
                />
                <Image
                  src={withBasePath("/images/founder/liska-yulianti.jpg")}
                  alt={t("aboutpage.founder.alt")}
                  width={1024}
                  height={1024}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="relative h-auto w-full"
                />
              </div>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="eyebrow">{t("aboutpage.founder.eyebrow")}</p>
              <h2 className="mt-5 font-display text-[clamp(2.4rem,5vw,3.6rem)] font-medium leading-[1.02] tracking-[-0.01em] text-ink">
                {t("aboutpage.founder.name")}
              </h2>
              <p className="mt-4 text-[0.72rem] font-medium uppercase tracking-[0.26em] text-gold">
                {t("aboutpage.founder.detail")}
              </p>
              <div className="mt-8 h-px w-10 bg-gold" aria-hidden="true" />
              <p className="mt-8 max-w-[46ch] text-base leading-7 text-stone sm:text-lg sm:leading-8">
                {t("aboutpage.founder.bio")}
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* What we value */}
      <div className="mt-24">
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
    </PageIntro>
  );
}
