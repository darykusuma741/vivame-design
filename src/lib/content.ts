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
  /** concise label for compact rails/columns */
  short: string;
  description: string;
  /** index into the abstract PlaceholderArt variants */
  art: number;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Consultation",
    short: "Consultation",
    description:
      "We begin with a conversation — your needs, lifestyle, preferences, and aspirations for the space. Together we define the brief, scope, and goals that will guide the entire project.",
    art: 0,
  },
  {
    number: "02",
    title: "Site & Requirement Analysis",
    short: "Site & Requirement",
    description:
      "We study the existing space — its dimensions, conditions, and constraints — and translate them into clear functional requirements that the design must answer.",
    art: 1,
  },
  {
    number: "03",
    title: "Concept Development",
    short: "Concept",
    description:
      "The design direction takes shape: mood, spatial concept, materials, color, and furniture — a cohesive visual identity that is uniquely yours.",
    art: 2,
  },
  {
    number: "04",
    title: "3D Visualization",
    short: "3D Visualization",
    description:
      "The approved concept becomes photorealistic 3D visualizations, so you can clearly imagine the finished space — and refine it — long before anything is built.",
    art: 3,
  },
  {
    number: "05",
    title: "Design Review & Revision",
    short: "Review & Revision",
    description:
      "We present the design, listen carefully to your feedback, and refine it — adjusting details until every element feels exactly right.",
    art: 4,
  },
  {
    number: "06",
    title: "Final Design",
    short: "Final Design",
    description:
      "Approved ideas are resolved into final drawings, details, materials, and specifications — a complete, build-ready design package.",
    art: 5,
  },
  {
    number: "07",
    title: "Project Completion",
    short: "Completion",
    description:
      "We deliver the final design package and support the handover, ensuring the project is ready for implementation and the result matches the vision.",
    art: 6,
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
