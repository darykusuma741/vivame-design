import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/portfolio";
import { withBasePath } from "@/lib/site";
import { Carousel } from "@/components/ui/carousel";
import { SectionHeading } from "@/components/site/SectionHeading";
import { BlurFade } from "@/components/ui/motion";

/**
 * Featured real projects in a full-width editorial carousel. Only projects
 * with real photography are shown (the rest are illustrative placeholders).
 */
export function FeaturedCarousel() {
  const featured = projects.filter((p) => p.images && p.images.length > 0);

  const slides = featured.map((project) => {
    const cover = project.images![0];
    return (
      <Link
        key={project.slug}
        href={`/portfolio/${project.slug}`}
        className="group block"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-beige sm:aspect-[16/9]">
          <Image
            src={withBasePath(cover.src)}
            alt={cover.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 80vw"
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent"
          />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <p className="text-[0.66rem] font-medium uppercase tracking-[0.22em] text-gold">
              {project.categoryLabel ?? project.category}
            </p>
            <h3 className="mt-2 font-display text-2xl font-medium leading-tight text-paper sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-paper/70">
              {project.location}
              {project.year ? ` · ${project.year}` : ""}
            </p>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <section className="border-t border-line">
      <div className="container-site py-24 lg:py-32">
        <BlurFade>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Featured"
              title={
                <>
                  Signature <em className="italic">projects</em>
                </>
              }
            />
            <Link
              href="/portfolio"
              className="link-underline text-sm font-medium text-ink"
            >
              View all projects
            </Link>
          </div>
        </BlurFade>
        <BlurFade delay={0.08}>
          <div className="mt-14">
            <Carousel items={slides} label="Featured projects" />
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
