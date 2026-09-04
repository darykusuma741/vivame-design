import type { Metadata } from "next";
import { PageIntro } from "@/components/site/PageIntro";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Interior design, architecture, and 3D interior visualization services from VIVAME Design.",
};

const services = [
  {
    name: "Interior Design",
    scope: "Concept · Space planning · Materiality",
    description:
      "Interiors shaped around how you actually live and work — from spatial layout and lighting to furniture, finishes, and the details that make a room feel considered.",
  },
  {
    name: "Architecture",
    scope: "Design · Documentation · Coordination",
    description:
      "Architectural design and planning for residential and boutique commercial projects — clear, buildable ideas from concept through construction documentation.",
  },
  {
    name: "3D Interior Visualization",
    scope: "Photorealistic renders · Walkthroughs · Revisions",
    description:
      "High-fidelity 3D renders and visualizations that communicate a design with clarity — for client approvals, marketing, and decision-making before anything is built.",
  },
];

export default function ServicesPage() {
  return (
    <PageIntro
      eyebrow="Services"
      title={
        <>
          What we <em className="italic">do</em>
        </>
      }
      lead="Three disciplines, one intention: spaces that are beautiful, functional, and precisely resolved — communicated clearly at every stage of the project."
    >
      <div className="mt-16 grid divide-y divide-line border-y border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {services.map((service) => (
          <article
            key={service.name}
            className="py-10 sm:py-14 sm:pr-8"
          >
            <h2 className="font-display text-[1.7rem] font-medium leading-tight text-ink">
              {service.name}
            </h2>
            <p className="eyebrow mt-3 !text-[0.62rem]">{service.scope}</p>
            <p className="mt-5 max-w-[36ch] text-sm leading-6 text-stone">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </PageIntro>
  );
}
