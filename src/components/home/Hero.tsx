import Link from "next/link";
import Image from "next/image";
import { withBasePath } from "@/lib/site";
import { BlurFade } from "@/components/ui/motion";
import { Parallax } from "@/components/ui/parallax";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-site grid min-h-[80vh] items-center gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-20">
        <div className="lg:col-span-6">
          <BlurFade y={16}>
            <p className="eyebrow">Interior Design Studio</p>
          </BlurFade>
          <BlurFade delay={0.08}>
            <h1 className="mt-6 font-display text-[clamp(2.9rem,8.5vw,5.75rem)] font-medium leading-[1.01] tracking-[-0.01em] text-ink">
              Designing Spaces,
              <br />
              Creating <em className="italic text-gold-deep">Experiences.</em>
            </h1>
          </BlurFade>
          <BlurFade delay={0.16}>
            <p className="mt-7 max-w-[52ch] text-base leading-7 text-stone sm:text-lg sm:leading-8">
              VIVAME Design transforms ideas into beautiful, functional, and
              timeless interior spaces.
            </p>
          </BlurFade>
          <BlurFade delay={0.24} y={16}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/portfolio" className="btn btn-dark">
                View Our Projects
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Start Your Project
              </Link>
            </div>
          </BlurFade>
        </div>

        <BlurFade className="lg:col-span-6" delay={0.16}>
          <div className="relative">
            {/* Offset hairline frame — gallery-mat treatment */}
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 h-full w-full border border-gold/50"
            />
            <div className="group relative aspect-[3/2] w-full overflow-hidden bg-beige">
              <Parallax scale={1.08} className="relative h-full w-full">
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
              {/* subtle depth + brand warmth */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent"
              />
            </div>
          </div>

          {/* Editorial caption */}
          <div className="mt-5 flex items-center gap-3">
            <span className="h-px w-10 bg-gold" aria-hidden="true" />
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.22em] text-ink">
              Pantry · Dining · Living
            </p>
            <p className="text-[0.68rem] uppercase tracking-[0.22em] text-faint">
              3D Visualization
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
