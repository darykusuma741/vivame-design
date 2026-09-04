import Link from "next/link";
import type { Project } from "@/lib/portfolio";
import { PlaceholderArt } from "@/components/site/PlaceholderArt";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/portfolio/${project.slug}`} className="group block">
      <div
        className="relative overflow-hidden bg-beige"
        style={{ aspectRatio: project.ratio }}
      >
        <PlaceholderArt
          variant={project.coverArt}
          label={`${project.title} — ${project.category} project`}
          className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <span className="pointer-events-none absolute bottom-4 left-4 translate-y-2 bg-paper/95 px-3.5 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-ink opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          View project
        </span>
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-[1.3rem] font-medium leading-tight text-ink">
          {project.title}
        </h3>
        <span className="shrink-0 text-[0.66rem] font-medium uppercase tracking-[0.2em] text-faint">
          {project.category}
        </span>
      </div>
      <p className="mt-1 text-sm text-stone">{project.location}</p>
    </Link>
  );
}
