import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/portfolio";
import { site } from "@/lib/site";
import { PlaceholderArt } from "@/components/site/PlaceholderArt";
import { PlaceholderNote } from "@/components/site/PlaceholderNote";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/portfolio/ProjectCard";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/portfolio/${project.slug}` },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 2);
  const primary = site.phones[0];

  return (
    <article>
      {/* Hero */}
      <section className="container-site pt-[clamp(2rem,6vw,4rem)]">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow">
              {project.category} · {project.location}
            </p>
            <h1 className="mt-5 font-display text-[clamp(2.6rem,6vw,5rem)] font-medium leading-[1.02] tracking-[-0.01em] text-ink">
              {project.title}
            </h1>
          </div>
          <div className="lg:col-span-5 lg:justify-self-end">
            <p className="max-w-[46ch] text-base leading-7 text-stone">
              {project.description}
            </p>
          </div>
        </div>
        <Reveal>
          <div className="mt-12">
            <PlaceholderArt
              variant={project.coverArt}
              label={`${project.title} — project image`}
              className="aspect-[16/10] w-full lg:aspect-[21/10]"
            />
          </div>
        </Reveal>
      </section>

      {/* Info + concept */}
      <section className="container-site grid gap-12 py-20 lg:grid-cols-12 lg:py-28">
        <aside className="lg:col-span-4">
          <dl className="space-y-7 border-t border-line pt-8">
            <div>
              <dt className="eyebrow">Category</dt>
              <dd className="mt-2 text-sm text-ink">{project.category}</dd>
            </div>
            <div>
              <dt className="eyebrow">Location</dt>
              <dd className="mt-2 text-sm text-ink">{project.location}</dd>
            </div>
            <div>
              <dt className="eyebrow">Scope</dt>
              <dd className="mt-2">
                <ul className="space-y-1.5 text-sm text-ink">
                  {project.scope.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </aside>
        <div className="lg:col-span-8">
          <h2 className="eyebrow">Design concept</h2>
          <div className="mt-6 space-y-5 text-base leading-7 text-stone sm:text-lg sm:leading-8">
            {project.concept.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="container-site pb-24">
        <h2 className="eyebrow">Gallery</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {project.gallery.map((variant, i) => (
            <PlaceholderArt
              key={i}
              variant={variant}
              label={`${project.title} — gallery image ${i + 1}`}
              className={`aspect-[4/3] w-full ${
                i === 0 ? "sm:col-span-2 sm:aspect-[16/9]" : ""
              }`}
            />
          ))}
        </div>
        <PlaceholderNote>
          Illustrative placeholder imagery — real photography coming soon
        </PlaceholderNote>
      </section>

      {/* Related */}
      <section className="border-t border-line bg-secondary">
        <div className="container-site py-20">
          <h2 className="eyebrow">More projects</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {related.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-site py-24 text-center">
        <h2 className="mx-auto max-w-[16ch] font-display text-[clamp(1.9rem,4.5vw,3rem)] font-medium leading-tight text-ink">
          Have a project in mind?
        </h2>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact" className="btn btn-dark">
            Start your project
          </Link>
          <a
            href={primary.wa}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            WhatsApp us
          </a>
        </div>
      </section>
    </article>
  );
}
