import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/portfolio";
import { withBasePath } from "@/lib/site";
import { PlaceholderArt } from "@/components/site/PlaceholderArt";

export function ProjectCard({ project }: { project: Project }) {
  const cover = project.images?.[0];

  return (
    <Link href={`/portfolio/${project.slug}`} className="group block">
      <div
        className="relative overflow-hidden bg-beige"
        style={cover ? undefined : { aspectRatio: project.ratio ?? "3 / 4" }}
      >
        {cover ? (
          <Image
            src={withBasePath(cover.src)}
            alt={cover.alt}
            width={cover.width}
            height={cover.height}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <PlaceholderArt
            variant={project.coverArt ?? 0}
            label={`${project.title} — ${project.category} project`}
            className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        )}

        {/* subtle mat + hover depth */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 border border-ink/10"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {project.status && (
          <span className="pointer-events-none absolute right-4 top-4 bg-ink/80 px-3 py-1 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-paper backdrop-blur-sm">
            {project.status}
          </span>
        )}

        <span className="pointer-events-none absolute bottom-4 left-4 translate-y-2 bg-paper/95 px-3.5 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-ink opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          View project
        </span>
      </div>

      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-[1.3rem] font-medium leading-tight text-ink">
          {project.title}
        </h3>
        <span className="shrink-0 text-[0.66rem] font-medium uppercase tracking-[0.2em] text-faint">
          {project.categoryLabel ?? project.category}
        </span>
      </div>
      <p className="mt-1 text-sm text-stone">
        {project.location}
        {project.year ? ` · ${project.year}` : ""}
      </p>
    </Link>
  );
}
