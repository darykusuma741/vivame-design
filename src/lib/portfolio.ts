/**
 * Portfolio project data.
 *
 * HONESTY NOTE: VIVAME Design's real project photography is not yet available.
 * These are ILLUSTRATIVE placeholder projects used to demonstrate the layout,
 * typography, and image handling. Each entry maps to an abstract placeholder
 * artwork; when real photography arrives, replace `art`/`gallery` with real
 * image paths (public/...) and update the cover `src` accordingly. The UI
 * surfaces this via an "illustrative preview" notice.
 */

export interface Project {
  slug: string;
  title: string;
  category: "Residential" | "Commercial";
  location: string; // illustrative
  description: string;
  concept: string[];
  scope: string[];
  /** abstract artwork variant for the cover */
  coverArt: number;
  /** aspect ratio for the cover, as a CSS ratio string */
  ratio: string;
  /** artwork variants for the detail gallery */
  gallery: number[];
}

export const categories = ["All", "Residential", "Commercial"] as const;

export const projects: Project[] = [
  {
    slug: "the-calm-residence",
    title: "The Calm Residence",
    category: "Residential",
    location: "Jakarta",
    description:
      "A warm, pared-back family home that trades ornament for proportion, natural light, and a quiet material palette.",
    concept: [
      "The Calm Residence is built around a single idea: that a home should slow you down. Warm neutrals, honest materials, and generous daylight create rooms that feel serene without feeling sparse.",
      "Custom millwork and built-in storage keep the interiors uncluttered, while layered textures — limewash, oak, and soft textiles — add depth and warmth at every turn.",
    ],
    scope: ["Full interior design", "Custom millwork", "Lighting design", "3D visualization"],
    coverArt: 0,
    ratio: "3 / 4",
    gallery: [0, 3, 6],
  },
  {
    slug: "linear-loft",
    title: "Linear Loft",
    category: "Residential",
    location: "Depok",
    description:
      "A compact urban loft organized along a single clean axis, maximizing height and openness within a modest footprint.",
    concept: [
      "Linear Loft demonstrates how a small footprint can feel expansive. A continuous horizontal datum — from joinery to lighting — draws the eye through the space and unifies open living, dining, and work.",
      "Verticality is the hero: full-height storage and a mezzanine sleeping level free the floor plan while keeping every function close at hand.",
    ],
    scope: ["Space planning", "Mezzanine design", "Custom joinery", "3D visualization"],
    coverArt: 1,
    ratio: "4 / 3",
    gallery: [1, 5, 2],
  },
  {
    slug: "serene-villa",
    title: "Serene Villa",
    category: "Residential",
    location: "Bandung",
    description:
      "A hillside villa that opens itself to the landscape, framing views and greenery as the primary material.",
    concept: [
      "Serene Villa treats the surrounding landscape as its most valuable finish. Large openings and deep overhangs frame curated views while shading interiors from the afternoon sun.",
      "Inside, a restrained palette of stone, timber, and plaster lets the garden do the talking — each room oriented around a deliberate connection to the outdoors.",
    ],
    scope: ["Architectural concept", "Interior design", "Material specification", "3D visualization"],
    coverArt: 2,
    ratio: "4 / 5",
    gallery: [2, 0, 4],
  },
  {
    slug: "botanica-cafe",
    title: "Botanica Café",
    category: "Commercial",
    location: "Jakarta",
    description:
      "A daylight-filled café where planted greenery, natural materials, and a relaxed layout turn a morning coffee into an experience.",
    concept: [
      "Botanica Café is designed as an indoor garden — a place that feels calm and restorative in the middle of the city. Integrated planters, warm timber, and soft acoustics make the space inviting at any hour.",
      "The seating plan balances communal tables, quiet corners, and a long counter, guiding flow while giving every guest a place that feels their own.",
    ],
    scope: ["Interior concept", "Furniture layout", "Greenery integration", "Brand environment"],
    coverArt: 3,
    ratio: "1 / 1",
    gallery: [3, 1, 7],
  },
  {
    slug: "studio-north",
    title: "Studio North",
    category: "Commercial",
    location: "Jakarta",
    description:
      "A flexible creative workspace designed for focus and collaboration, with a gallery-like atmosphere and modular furniture.",
    concept: [
      "Studio North is a workspace that behaves like a gallery — white surfaces, clean lines, and flexible furniture that can be rearranged as the team grows and the work changes.",
      "Acoustic panels and layered lighting keep the open plan comfortable, while a warm communal kitchen anchors the space and draws people together.",
    ],
    scope: ["Workspace planning", "Modular furniture", "Acoustic design", "Lighting design"],
    coverArt: 4,
    ratio: "3 / 4",
    gallery: [4, 6, 1],
  },
  {
    slug: "warm-minimal-house",
    title: "Warm Minimal House",
    category: "Residential",
    location: "Depok",
    description:
      "A lesson in restraint: minimal forms warmed by natural oak, textured plaster, and carefully placed light.",
    concept: [
      "Warm Minimal House proves minimalism need not be cold. Crisp architectural forms are softened with oak joinery, limewash walls, and layered lighting that changes with the time of day.",
      "Storage is fully integrated, so the interiors read as calm, open volumes punctuated only by the objects that matter.",
    ],
    scope: ["Interior design", "Integrated storage", "Lighting design", "3D visualization"],
    coverArt: 5,
    ratio: "4 / 3",
    gallery: [5, 2, 0],
  },
  {
    slug: "the-atrium-office",
    title: "The Atrium Office",
    category: "Commercial",
    location: "Jakarta",
    description:
      "A light-flooded office organized around a central atrium, blending open collaboration with quiet focus zones.",
    concept: [
      "The Atrium Office uses a central void to bring daylight deep into the floor plate, around which open work areas, meeting rooms, and lounge zones are arranged.",
      "Material contrasts — polished concrete, timber, and greenery — define each zone while keeping the whole floor visually coherent.",
    ],
    scope: ["Workplace strategy", "Interior architecture", "Acoustic design", "3D visualization"],
    coverArt: 6,
    ratio: "1 / 1",
    gallery: [6, 3, 4],
  },
  {
    slug: "gallery-19",
    title: "Gallery 19",
    category: "Commercial",
    location: "Bandung",
    description:
      "A boutique retail space designed like a gallery, where product and architecture share the stage.",
    concept: [
      "Gallery 19 treats merchandise as art — neutral walls, focused lighting, and generous circulation turn the shop floor into a sequence of small exhibitions.",
      "A custom display system keeps the space flexible, so the layout can evolve with each collection without losing its calm, curated character.",
    ],
    scope: ["Retail concept", "Display system", "Lighting design", "Material palette"],
    coverArt: 7,
    ratio: "3 / 4",
    gallery: [7, 0, 5],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
