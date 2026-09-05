import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/portfolio";
import { absoluteUrl, site } from "@/lib/site";
import { ProjectDetail } from "@/components/pages/ProjectDetail";

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
  const cover = project.images?.[0];
  const description = project.seoDescription ?? project.description;
  const canonicalUrl = absoluteUrl(`/portfolio/${project.slug}`);
  const shareTitle = `${project.title} — ${site.legalName}`;
  const image = cover
    ? {
        url: absoluteUrl(cover.src),
        width: cover.width,
        height: cover.height,
        alt: cover.alt,
      }
    : undefined;

  return {
    title: project.title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: "article",
      url: canonicalUrl,
      siteName: site.legalName,
      title: shareTitle,
      description,
      ...(image ? { images: [image] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      ...(image ? { images: [image.url] } : {}),
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      {
        "@type": "ListItem",
        position: 2,
        name: "Portfolio",
        item: absoluteUrl("/portfolio"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: absoluteUrl(`/portfolio/${project.slug}`),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <ProjectDetail project={project} related={related} />
    </>
  );
}
