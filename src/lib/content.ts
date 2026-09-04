/**
 * Non-portfolio content: services, design process, and value propositions.
 * Copy is factual to VIVAME Design's actual offering; no invented metrics,
 * client names, or achievements.
 */

export interface Service {
  slug: string;
  title: string;
  short: string;
  description: string;
  scope: string[];
  /** index into the abstract PlaceholderArt variants */
  art: number;
}

export const services: Service[] = [
  {
    slug: "interior-design",
    title: "Interior Design",
    short: "Complete interiors, resolved end to end.",
    description:
      "Full interior design — from spatial planning and materiality to furniture, lighting, and finishing details. Every decision is made so the result feels considered rather than decorated.",
    scope: ["Concept & mood", "Space planning", "Material selection", "Furniture & lighting"],
    art: 0,
  },
  {
    slug: "3d-visualization",
    title: "3D Interior Visualization",
    short: "See the finished space before it exists.",
    description:
      "Photorealistic 3D renders and walkthroughs that communicate a design with total clarity — for client approvals, marketing, and confident decision-making long before construction begins.",
    scope: ["Photorealistic renders", "360° walkthroughs", "Lighting studies", "Revision rounds"],
    art: 1,
  },
  {
    slug: "residential-design",
    title: "Residential Design",
    short: "Homes shaped around how you live.",
    description:
      "Houses, apartments, and private rooms designed around real daily life — warm, functional, and personal, balancing aesthetics with the way a family actually uses its space.",
    scope: ["Whole homes", "Kitchens & baths", "Bedrooms & living", "Custom built-ins"],
    art: 2,
  },
  {
    slug: "commercial-design",
    title: "Commercial Design",
    short: "Spaces that strengthen a brand.",
    description:
      "Cafés, offices, retail, and hospitality environments that pair operational practicality with a distinct atmosphere — so the space itself becomes part of the brand experience.",
    scope: ["Cafés & restaurants", "Offices & studios", "Retail spaces", "Brand environments"],
    art: 3,
  },
  {
    slug: "custom-design",
    title: "Custom Design",
    short: "Bespoke pieces, tailored to you.",
    description:
      "Custom furniture, millwork, and detailing designed and documented for fabrication — one-of-a-kind elements that give a space its signature and make the most of every dimension.",
    scope: ["Custom furniture", "Millwork & joinery", "Detailing & drawings", "Fabrication support"],
    art: 4,
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We listen first — your needs, habits, and aspirations for the space. Together we define the brief, scope, and budget that will guide the project.",
  },
  {
    number: "02",
    title: "Concept Development",
    description:
      "Mood, materiality, and spatial direction take shape as an initial concept — a clear visual language tailored to you, before any detail is fixed.",
  },
  {
    number: "03",
    title: "3D Visualization",
    description:
      "The concept becomes photorealistic renders and walkthroughs, so you can see and feel the finished space — and refine it — before anything is built.",
  },
  {
    number: "04",
    title: "Design Development",
    description:
      "Approved ideas are resolved into precise drawings, specifications, and documentation ready for contractors, fabricators, and procurement.",
  },
  {
    number: "05",
    title: "Implementation",
    description:
      "We oversee the build and installation, coordinating details and materials on site to keep the result faithful to the approved design.",
  },
  {
    number: "06",
    title: "Final Result",
    description:
      "A completed space, styled and handed over — functional, beautiful, and ready to be lived in. We finish with a final review of every detail.",
  },
];

export interface WhyItem {
  title: string;
  description: string;
}

export const whyItems: WhyItem[] = [
  {
    title: "Thoughtful design",
    description:
      "Every layout, material, and detail is chosen with a reason — nothing decorative for its own sake.",
  },
  {
    title: "Personalized approach",
    description:
      "No templates. Each project begins with your life, your taste, and your space — then grows from there.",
  },
  {
    title: "Functional spaces",
    description:
      "Beauty that works: circulation, storage, and daily routine are designed in, not left as an afterthought.",
  },
  {
    title: "Visual consistency",
    description:
      "One clear language runs through concept, material, and detail — so the result feels inevitable, not assembled.",
  },
  {
    title: "Attention to detail",
    description:
      "From a reveal's width to the fall of a fabric, the small decisions are what make a space feel premium.",
  },
  {
    title: "Professional execution",
    description:
      "Clear documentation and careful coordination keep the built result faithful to the vision you approved.",
  },
];
