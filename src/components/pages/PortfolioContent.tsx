"use client";

import { PageIntro } from "@/components/site/PageIntro";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { PlaceholderNote } from "@/components/site/PlaceholderNote";
import { useI18n } from "@/components/i18n/LanguageProvider";

export function PortfolioContent() {
  const { t } = useI18n();

  return (
    <PageIntro
      eyebrow={t("portfolio.eyebrow")}
      title={
        <>
          {t("portfolio.title.1")} <em className="italic">{t("portfolio.title.em")}</em>
        </>
      }
      lead={t("portfolio.lead")}
    >
      <div className="mt-14">
        <PortfolioGrid />
      </div>
      <PlaceholderNote>{t("portfolio.note")}</PlaceholderNote>
    </PageIntro>
  );
}
