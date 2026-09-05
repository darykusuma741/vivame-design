"use client";

import Link from "next/link";
import Image from "next/image";
import { withBasePath } from "@/lib/site";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { BlurFade, Float, WordReveal } from "@/components/ui/motion";
import { Parallax } from "@/components/ui/parallax";
import {
  FloorPlanSketch,
  SofaSketch,
  LampSketch,
  PlantSketch,
} from "@/components/ui/sketch";

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden">
      {/* Architectural floor-plan backdrop — slow parallax + drift */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <Parallax y={52} className="h-full w-full">
          <Float distance={26} duration={18} className="h-full w-full">
            <FloorPlanSketch className="h-full w-full text-ink/[0.05]" />
          </Float>
        </Parallax>
      </div>

      {/* Floating furniture sketches — multi-layer parallax + float */}
      <Parallax
        y={-68}
        className="pointer-events-none absolute left-[2%] top-[12%] z-0 hidden lg:block"
      >
        <Float distance={18} duration={9} delay={0.3}>
          <SofaSketch className="h-24 w-32 text-gold/40" />
        </Float>
      </Parallax>
      <Parallax
        y={92}
        className="pointer-events-none absolute right-[3%] top-[8%] z-0 hidden lg:block"
      >
        <Float distance={22} duration={12} delay={0.8}>
          <LampSketch className="h-40 w-[4.5rem] text-gold/35" />
        </Float>
      </Parallax>
      <Parallax
        y={-52}
        className="pointer-events-none absolute bottom-[10%] left-[6%] z-0 hidden lg:block"
      >
        <Float distance={16} duration={10} delay={1.2}>
          <PlantSketch className="h-28 w-[5.5rem] text-gold/35" />
        </Float>
      </Parallax>

      <div className="container-site relative z-10 grid min-h-[80vh] items-center gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-20">
        <div className="lg:col-span-6">
          <BlurFade y={16}>
            <p className="eyebrow">{t("hero.eyebrow")}</p>
          </BlurFade>
          <h1 className="mt-6 font-display text-[clamp(2.9rem,8.5vw,5.75rem)] font-medium leading-[1.01] tracking-[-0.01em] text-ink">
            <WordReveal text={t("hero.title.1")} delay={0.15} />
            <br />
            <WordReveal text={t("hero.title.2")} delay={0.42} />{" "}
            <em className="italic text-gold-deep">
              <WordReveal text={t("hero.title.em")} delay={0.66} />
            </em>
          </h1>
          <BlurFade delay={0.9}>
            <p className="mt-7 max-w-[52ch] text-base leading-7 text-stone sm:text-lg sm:leading-8">
              {t("hero.lead")}
            </p>
          </BlurFade>
          <BlurFade delay={1.05} y={16}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/portfolio" className="btn btn-dark">
                {t("hero.viewProjects")}
              </Link>
              <Link href="/contact" className="btn btn-outline">
                {t("hero.startProject")}
              </Link>
            </div>
          </BlurFade>
        </div>

        <BlurFade className="lg:col-span-6" delay={0.25}>
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 h-full w-full border border-gold/50"
            />
            <div className="group relative aspect-[3/2] w-full overflow-hidden bg-beige">
              <Parallax scale={1.12} className="relative h-full w-full">
                <Image
                  src={withBasePath(
                    "/images/hero/luxurious-pantry-diningroom-livingroom.webp",
                  )}
                  alt="3D visualization of a luxurious pantry, dining room, and living room by VIVAME Design"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.05]"
                />
              </Parallax>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent"
              />
            </div>
          </div>

          <div className="mt-5 flex items-center gap-3">
            <span className="h-px w-10 bg-gold" aria-hidden="true" />
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.22em] text-ink">
              {t("hero.caption")}
            </p>
            <p className="text-[0.68rem] uppercase tracking-[0.22em] text-faint">
              {t("hero.captionTag")}
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
