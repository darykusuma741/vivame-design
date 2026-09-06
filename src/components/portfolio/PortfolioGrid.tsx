"use client";

import { useState } from "react";
import { categories, projects } from "@/lib/portfolio";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { useStaggerIn } from "@/lib/anime";

export function PortfolioGrid() {
  const { t } = useI18n();
  const [active, setActive] = useState<string>("All");
  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);
  const { ref: gridRef, inView } = useStaggerIn<HTMLDivElement>({}, active);

  const labelFor = (category: string) =>
    category === "All"
      ? t("portfolio.filter.all")
      : category === "Residential"
        ? t("portfolio.filter.residential")
        : t("portfolio.filter.commercial");

  return (
    <div>
      <div
        role="group"
        aria-label={t("portfolio.filter.aria")}
        className="flex flex-wrap gap-2"
      >
        {categories.map((category) => {
          const selected = active === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={selected}
              className={`border px-5 py-2.5 text-[0.72rem] font-medium uppercase tracking-[0.16em] transition-colors ${
                selected
                  ? "border-ink bg-ink text-paper"
                  : "border-line text-stone hover:border-ink hover:text-ink"
              }`}
            >
              {labelFor(category)}
            </button>
          );
        })}
      </div>

      <div
        ref={gridRef}
        className={`stagger-reveal ${
          inView ? "is-visible" : ""
        } mt-10 columns-1 gap-8 sm:columns-2 lg:columns-3`}
      >
        {filtered.map((project, i) => (
          <div
            key={project.slug}
            className="mb-8 break-inside-avoid"
            style={{ transitionDelay: `${(i % 6) * 60}ms` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
