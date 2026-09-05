"use client";

import Link from "next/link";
import { PageIntro } from "@/components/site/PageIntro";
import { DesignProcess } from "@/components/process/DesignProcess";
import { useI18n } from "@/components/i18n/LanguageProvider";

export function ProcessContent() {
  const { t } = useI18n();

  return (
    <PageIntro
      eyebrow={t("processpage.eyebrow")}
      title={
        <>
          {t("processpage.title.1")} <em className="italic">{t("processpage.title.em")}</em>
        </>
      }
      lead={t("processpage.lead")}
    >
      <div className="mt-16">
        <DesignProcess />
      </div>

      <div className="mt-20 text-center">
        <Link href="/contact" className="btn btn-dark">
          {t("project.cta.start")}
        </Link>
      </div>
    </PageIntro>
  );
}
