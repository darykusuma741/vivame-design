/**
 * Portfolio project data.
 *
 * HONESTY NOTE: "Sawangan Permai Residential House" features the studio's real
 * project photography (imported from the client's gallery). The remaining
 * projects are ILLUSTRATIVE placeholders used to demonstrate layout and
 * typography — each maps to an abstract placeholder artwork. Replace their
 * `coverArt`/`gallery` with real images (via the `images` field) as photography
 * becomes available. The UI surfaces placeholder projects with an
 * "illustrative preview" notice.
 */

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Project {
  slug: string;
  title: string;
  category: "Residential" | "Commercial";
  location?: string; // short, for cards (omitted when unknown — never invent)
  description?: string;
  concept?: string[];
  scope?: string[];
  /** Placeholder-art projects (no real photography yet): cover variant, ratio, gallery variants */
  coverArt?: number;
  ratio?: string;
  gallery?: number[];
  /** Real project photography (first image = cover/hero) */
  images?: ProjectImage[];
  /** Extended metadata for real, built projects */
  year?: string;
  status?: string;
  client?: string;
  cost?: string;
  locationFull?: string;
  /** display label for category (e.g. "Commercial / Salon"); defaults to `category` */
  categoryLabel?: string;
  /** English SEO meta description (falls back to `description`) */
  seoDescription?: string;
}

export const categories = ["All", "Residential", "Commercial"] as const;

export const projects: Project[] = [
  {
    slug: "monic-house",
    title: "Law Firm Office",
    category: "Commercial",
    categoryLabel: "Commercial / Law Firm",
    year: "2020",
    images: [
      {
        src: "/images/projects/monic-house/monic-house-01.jpg",
        alt: "Interior of Law Firm Office",
        width: 2000,
        height: 1179,
      },
      {
        src: "/images/projects/monic-house/monic-house-02.jpg",
        alt: "Law Firm Office interior, second view",
        width: 1889,
        height: 1200,
      },
      {
        src: "/images/projects/monic-house/monic-house-03.jpg",
        alt: "Law Firm Office interior, third view",
        width: 1958,
        height: 1200,
      },
      {
        src: "/images/projects/monic-house/monic-house-04.jpg",
        alt: "Law Firm Office interior, fourth view",
        width: 1958,
        height: 1200,
      },
      {
        src: "/images/projects/monic-house/monic-house-05.jpg",
        alt: "Lobby of Law Firm Office",
        width: 3000,
        height: 1354,
      },
      {
        src: "/images/projects/monic-house/monic-house-06.jpg",
        alt: "Lobby of Law Firm Office, second view",
        width: 3000,
        height: 1354,
      },
      {
        src: "/images/projects/monic-house/monic-house-07.jpg",
        alt: "Lobby of Law Firm Office, third view",
        width: 3000,
        height: 1354,
      },
      {
        src: "/images/projects/monic-house/monic-house-08.jpg",
        alt: "Meeting area of Law Firm Office",
        width: 3000,
        height: 1354,
      },
      {
        src: "/images/projects/monic-house/monic-house-09.jpg",
        alt: "Meeting area of Law Firm Office, second view",
        width: 3000,
        height: 1354,
      },
      {
        src: "/images/projects/monic-house/monic-house-10.jpg",
        alt: "Meeting area of Law Firm Office, third view",
        width: 3000,
        height: 1302,
      },
      {
        src: "/images/projects/monic-house/monic-house-11.jpg",
        alt: "Meeting area of Law Firm Office, fourth view",
        width: 3000,
        height: 1354,
      },
      {
        src: "/images/projects/monic-house/monic-house-12.jpg",
        alt: "Kitchen render of Law Firm Office",
        width: 1800,
        height: 1800,
      },
      {
        src: "/images/projects/monic-house/monic-house-13.jpg",
        alt: "Kitchen render of Law Firm Office, second view",
        width: 1800,
        height: 1800,
      },
      {
        src: "/images/projects/monic-house/monic-house-14.jpg",
        alt: "Kitchen render of Law Firm Office, third view",
        width: 1800,
        height: 1800,
      },
      {
        src: "/images/projects/monic-house/monic-house-15.jpg",
        alt: "Law Firm Office interior, fifth view",
        width: 2000,
        height: 1200,
      },
      {
        src: "/images/projects/monic-house/monic-house-16.jpg",
        alt: "Law Firm Office interior, sixth view",
        width: 2000,
        height: 1500,
      },
      {
        src: "/images/projects/monic-house/monic-house-17.jpg",
        alt: "Law Firm Office interior, seventh view",
        width: 2000,
        height: 1500,
      },
      {
        src: "/images/projects/monic-house/monic-house-18.jpg",
        alt: "Law Firm Office interior, eighth view",
        width: 2000,
        height: 1500,
      },
      {
        src: "/images/projects/monic-house/monic-house-19.jpg",
        alt: "Law Firm Office render",
        width: 2000,
        height: 1500,
      },
    ],
  },
  {
    slug: "sawangan-permai-residential-house",
    title: "Sawangan Permai Residential House",
    category: "Residential",
    location: "Sawangan, Depok",
    locationFull: "Sawangan, Kota Depok, Jawa Barat, Indonesia",
    year: "2019",
    status: "Terbangun",
    client: "Ibu Budi Astuti",
    cost: "IDR 76 juta – 100 juta",
    description:
      "A complete residential interior in Sawangan Permai, Depok — an open living, dining, and kitchen core flowing into calm private bedrooms, finished with custom wardrobe joinery in the master suite.",
    concept: [
      "Sawangan Permai Residential House is a full-family-home interior, carried as one cohesive scheme from the open living, dining, and kitchen areas through to the private bedrooms.",
      "Shared spaces are kept open and connected, while each bedroom holds its own quiet character — with tailored wardrobe joinery bringing considered storage to the master suite.",
    ],
    scope: [
      "Interior design",
      "Open living & dining",
      "Kitchen design",
      "Bedroom design",
      "Custom wardrobe joinery",
    ],
    images: [
      {
        src: "/images/projects/sawangan-permai-residential-house/sawangan-permai-residential-house-01.jpg",
        alt: "Dining room and kitchen — Sawangan Permai Residential House",
        width: 1400,
        height: 850,
      },
      {
        src: "/images/projects/sawangan-permai-residential-house/sawangan-permai-residential-house-02.jpg",
        alt: "Dining room and kitchen interior, second view",
        width: 1400,
        height: 850,
      },
      {
        src: "/images/projects/sawangan-permai-residential-house/sawangan-permai-residential-house-03.jpg",
        alt: "Dining room and kitchen interior, third view",
        width: 1400,
        height: 850,
      },
      {
        src: "/images/projects/sawangan-permai-residential-house/sawangan-permai-residential-house-04.jpg",
        alt: "Dining room and kitchen interior, fourth view",
        width: 1364,
        height: 850,
      },
      {
        src: "/images/projects/sawangan-permai-residential-house/sawangan-permai-residential-house-05.jpg",
        alt: "Dining room and kitchen interior, fifth view",
        width: 1364,
        height: 850,
      },
      {
        src: "/images/projects/sawangan-permai-residential-house/sawangan-permai-residential-house-06.jpg",
        alt: "Bedroom interior",
        width: 1126,
        height: 800,
      },
      {
        src: "/images/projects/sawangan-permai-residential-house/sawangan-permai-residential-house-07.jpg",
        alt: "Second bedroom interior",
        width: 1200,
        height: 740,
      },
      {
        src: "/images/projects/sawangan-permai-residential-house/sawangan-permai-residential-house-08.jpg",
        alt: "Third bedroom interior",
        width: 1027,
        height: 800,
      },
      {
        src: "/images/projects/sawangan-permai-residential-house/sawangan-permai-residential-house-09.jpg",
        alt: "Master bedroom",
        width: 741,
        height: 559,
      },
      {
        src: "/images/projects/sawangan-permai-residential-house/sawangan-permai-residential-house-10.jpg",
        alt: "Master bedroom wardrobe joinery",
        width: 1200,
        height: 800,
      },
    ],
  },
  {
    slug: "evergreen-salon-south-jakarta",
    title: "Evergreen Salon South Jakarta",
    category: "Commercial",
    categoryLabel: "Commercial / Salon",
    location: "Jakarta Selatan",
    locationFull:
      "Jakarta Selatan, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta, Indonesia",
    year: "2022",
    status: "Terbangun",
    cost: "IDR 10 juta – 25 juta",
    description:
      "Desain salon kecantikan ini dikerjakan pada akhir tahun 2022, dengan dominasi nuansa hijau, abu dan putih.",
    seoDescription:
      "Commercial salon interior design in South Jakarta, completed in late 2022 with a dominant palette of green, grey, and white.",
    concept: [
      "Evergreen Salon is a beauty-salon interior completed in late 2022, built around a calm, natural palette of green, grey, and white.",
    ],
    scope: ["Interior design", "Salon interior design"],
    images: [
      {
        src: "/images/projects/evergreen-salon-south-jakarta/evergreen-salon-south-jakarta-01.jpg",
        alt: "Evergreen Salon interior — South Jakarta",
        width: 2000,
        height: 1200,
      },
      {
        src: "/images/projects/evergreen-salon-south-jakarta/evergreen-salon-south-jakarta-02.jpg",
        alt: "Evergreen Salon interior, second view",
        width: 2000,
        height: 1200,
      },
      {
        src: "/images/projects/evergreen-salon-south-jakarta/evergreen-salon-south-jakarta-03.jpg",
        alt: "Evergreen Salon interior, third view",
        width: 2000,
        height: 1200,
      },
      {
        src: "/images/projects/evergreen-salon-south-jakarta/evergreen-salon-south-jakarta-04.jpg",
        alt: "Evergreen Salon interior, fourth view",
        width: 2000,
        height: 1200,
      },
      {
        src: "/images/projects/evergreen-salon-south-jakarta/evergreen-salon-south-jakarta-05.jpg",
        alt: "Evergreen Salon interior, fifth view",
        width: 2000,
        height: 1200,
      },
      {
        src: "/images/projects/evergreen-salon-south-jakarta/evergreen-salon-south-jakarta-06.jpg",
        alt: "Evergreen Salon interior, sixth view",
        width: 2000,
        height: 1200,
      },
      {
        src: "/images/projects/evergreen-salon-south-jakarta/evergreen-salon-south-jakarta-07.jpg",
        alt: "Evergreen Salon interior, seventh view",
        width: 2000,
        height: 1200,
      },
      {
        src: "/images/projects/evergreen-salon-south-jakarta/evergreen-salon-south-jakarta-08.jpg",
        alt: "Evergreen Salon interior, eighth view",
        width: 2000,
        height: 1200,
      },
    ],
  },
  {
    slug: "cafe-cake",
    title: "Cafe Cake",
    category: "Commercial",
    categoryLabel: "Commercial / Cafe",
    location: "Malang",
    locationFull: "Malang, Kota Malang, Jawa Timur, Indonesia",
    year: "2019",
    status: "Terbangun",
    cost: "IDR 101 juta - 250 juta",
    seoDescription:
      "Commercial café interior design by VIVAME Design in Malang, Jawa Timur — completed in 2019.",
    images: [
      {
        src: "/images/projects/cafe-cake/cafe-cake-01.jpg",
        alt: "Café interior of Cafe Cake — Malang, Jawa Timur",
        width: 1800,
        height: 1200,
      },
      {
        src: "/images/projects/cafe-cake/cafe-cake-02.jpg",
        alt: "Cafe Cake café interior, second view",
        width: 1710,
        height: 1200,
      },
      {
        src: "/images/projects/cafe-cake/cafe-cake-03.jpg",
        alt: "Cafe Cake café interior, third view",
        width: 1800,
        height: 1200,
      },
      {
        src: "/images/projects/cafe-cake/cafe-cake-04.jpg",
        alt: "Cafe Cake café interior, fourth view",
        width: 1800,
        height: 1200,
      },
      {
        src: "/images/projects/cafe-cake/cafe-cake-05.jpg",
        alt: "Cafe Cake café interior, fifth view",
        width: 1800,
        height: 1200,
      },
      {
        src: "/images/projects/cafe-cake/cafe-cake-06.jpg",
        alt: "Cafe Cake café interior, sixth view",
        width: 1800,
        height: 1200,
      },
      {
        src: "/images/projects/cafe-cake/cafe-cake-07.jpg",
        alt: "Cafe Cake café interior, seventh view",
        width: 1800,
        height: 1200,
      },
    ],
  },
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
