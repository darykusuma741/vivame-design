"use client";

import Link from "next/link";
import { projects } from "@/lib/portfolio";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PlaceholderNote } from "@/components/site/PlaceholderNote";
import { useI18n } from "@/components/i18n/LanguageProvider";

export function PortfolioSection() {
  const { t } = useI18n();
  const featured = projects.slice(0, 6);

  return (
    <section className="border-t border-line">
      <div className="container-site py-24 lg:py-32">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow={t("portfolio.eyebrow")}
              title={
                <>
                  {t("portfolio.title.1")}{" "}
                  <em className="italic">{t("portfolio.title.em")}</em>
                </>
              }
            />
            <Link
              href="/portfolio"
              className="link-underline text-sm font-medium text-ink"
            >
              {t("portfolio.viewAll")}
            </Link>
          </div>
        </Reveal>
        <Reveal delay={60}>
          <div className="mt-14 columns-1 gap-8 sm:columns-2 lg:columns-3">
            {featured.map((project) => (
              <div key={project.slug} className="mb-8 break-inside-avoid">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </Reveal>
        <PlaceholderNote>{t("portfolio.note")}</PlaceholderNote>
      </div>
    </section>
  );
}
