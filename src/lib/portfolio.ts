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
  /** Homepage "Signature projects" — the studio's built flagship work. */
  featured?: boolean;
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    slug: "interior-house-5",
    title: "Interior House 5",
    category: "Residential",
    description:
      "Interior 3D visualization — SketchUp + V-Ray.",
    images: [
      {
        src: "https://img-new.cgtrader.com/items/1994888/37ac69d131/interior-house-5-sketchup-file-3d-model-37ac69d131.webp",
        alt: "Interior House 5 interior — 3D visualization",
        width: 1800,
        height: 900,
      },
      {
        src: "https://img-new.cgtrader.com/items/1994888/456cdb5d16/interior-house-5-sketchup-file-3d-model-456cdb5d16.jpg",
        alt: "Interior House 5 interior, view 1",
        width: 1096,
        height: 800,
      },
      {
        src: "https://img-new.cgtrader.com/items/1994888/a42573e4d6/interior-house-5-sketchup-file-3d-model-a42573e4d6.jpg",
        alt: "Interior House 5 interior, view 2",
        width: 1800,
        height: 900,
      },
      {
        src: "https://img-new.cgtrader.com/items/1994888/24b265a528/interior-house-5-sketchup-file-3d-model-24b265a528.jpg",
        alt: "Interior House 5 interior, view 3",
        width: 1600,
        height: 800,
      },
      {
        src: "https://img-new.cgtrader.com/items/1994888/43397168ae/interior-house-5-sketchup-file-3d-model-43397168ae.jpg",
        alt: "Interior House 5 interior, view 4",
        width: 1448,
        height: 850,
      },
    ],
  },
  {
    slug: "livingroom-walking-closet",
    title: "Living, Closet, Master & Guest",
    category: "Residential",
    description:
      "Interior 3D visualization — SketchUp + V-Ray.",
    images: [
      {
        src: "https://img-new.cgtrader.com/items/1999165/c93afc1821/livingroom-walking-closet-master-bedroom-guest-room-3d-model-c93afc1821.webp",
        alt: "Living, Closet, Master & Guest interior — 3D visualization",
        width: 1555,
        height: 1200,
      },
      {
        src: "https://img-new.cgtrader.com/items/1999165/ee6623f911/livingroom-walking-closet-master-bedroom-guest-room-3d-model-ee6623f911.jpg",
        alt: "Living, Closet, Master & Guest interior, view 1",
        width: 1600,
        height: 1200,
      },
      {
        src: "https://img-new.cgtrader.com/items/1999165/06122eb8fd/livingroom-walking-closet-master-bedroom-guest-room-3d-model-06122eb8fd.jpg",
        alt: "Living, Closet, Master & Guest interior, view 2",
        width: 1318,
        height: 1158,
      },
      {
        src: "https://img-new.cgtrader.com/items/1999165/33b53a791c/livingroom-walking-closet-master-bedroom-guest-room-3d-model-33b53a791c.jpg",
        alt: "Living, Closet, Master & Guest interior, view 3",
        width: 1600,
        height: 1172,
      },
      {
        src: "https://img-new.cgtrader.com/items/1999165/2c03f24a8c/livingroom-walking-closet-master-bedroom-guest-room-3d-model-2c03f24a8c.jpg",
        alt: "Living, Closet, Master & Guest interior, view 4",
        width: 1600,
        height: 1200,
      },
      {
        src: "https://img-new.cgtrader.com/items/1999165/84a8add144/livingroom-walking-closet-master-bedroom-guest-room-3d-model-84a8add144.jpg",
        alt: "Living, Closet, Master & Guest interior, view 5",
        width: 1600,
        height: 1164,
      },
    ],
  },
  {
    slug: "livingroom-kitchen-dining-bedroom",
    title: "Living, Kitchen, Dining & Bedroom",
    category: "Residential",
    description:
      "Interior 3D visualization — SketchUp + V-Ray.",
    images: [
      {
        src: "https://img-new.cgtrader.com/items/2000028/28f37cf2b7/livingroom-kitchen-diningroom-bedroom-3d-model-28f37cf2b7.webp",
        alt: "Living, Kitchen, Dining & Bedroom interior — 3D visualization",
        width: 2000,
        height: 1125,
      },
      {
        src: "https://img-new.cgtrader.com/items/2000028/3928bd9377/livingroom-kitchen-diningroom-bedroom-3d-model-3928bd9377.jpg",
        alt: "Living, Kitchen, Dining & Bedroom interior, view 1",
        width: 1600,
        height: 1100,
      },
      {
        src: "https://img-new.cgtrader.com/items/2000028/20ae0130e9/livingroom-kitchen-diningroom-bedroom-3d-model-20ae0130e9.jpg",
        alt: "Living, Kitchen, Dining & Bedroom interior, view 2",
        width: 952,
        height: 800,
      },
      {
        src: "https://img-new.cgtrader.com/items/2000028/bc27cb1b4a/livingroom-kitchen-diningroom-bedroom-3d-model-bc27cb1b4a.jpg",
        alt: "Living, Kitchen, Dining & Bedroom interior, view 3",
        width: 1000,
        height: 800,
      },
      {
        src: "https://img-new.cgtrader.com/items/2000028/88d47626a3/livingroom-kitchen-diningroom-bedroom-3d-model-88d47626a3.jpg",
        alt: "Living, Kitchen, Dining & Bedroom interior, view 4",
        width: 1436,
        height: 900,
      },
      {
        src: "https://img-new.cgtrader.com/items/2000028/f74d4a1ad2/livingroom-kitchen-diningroom-bedroom-3d-model-f74d4a1ad2.jpg",
        alt: "Living, Kitchen, Dining & Bedroom interior, view 5",
        width: 1600,
        height: 1100,
      },
    ],
  },
  {
    slug: "apartement-studio",
    title: "Apartment Studio",
    category: "Residential",
    description:
      "Interior 3D visualization — SketchUp + V-Ray.",
    images: [
      {
        src: "https://img-new.cgtrader.com/items/1855679/32ca35505a/apartement-studio-3d-model-32ca35505a.webp",
        alt: "Apartment Studio interior — 3D visualization",
        width: 1200,
        height: 800,
      },
      {
        src: "https://img-new.cgtrader.com/items/1855679/eaa78f4819/apartement-studio-3d-model-eaa78f4819.jpg",
        alt: "Apartment Studio interior, view 1",
        width: 1131,
        height: 800,
      },
    ],
  },
  {
    slug: "classic-livingroom-diningroom",
    title: "Classic Living & Dining",
    category: "Residential",
    description:
      "Interior 3D visualization — SketchUp + V-Ray.",
    images: [
      {
        src: "https://img-new.cgtrader.com/items/4074457/3ec839be18/classic-livingroom-and-diningroom-3d-model-3ec839be18.webp",
        alt: "Classic Living & Dining interior — 3D visualization",
        width: 2000,
        height: 1125,
      },
      {
        src: "https://img-new.cgtrader.com/items/4074457/531f35decb/classic-livingroom-and-diningroom-3d-model-531f35decb.jpg",
        alt: "Classic Living & Dining interior, view 1",
        width: 3000,
        height: 1357,
      },
      {
        src: "https://img-new.cgtrader.com/items/4074457/763147b1c5/classic-livingroom-and-diningroom-3d-model-763147b1c5.jpg",
        alt: "Classic Living & Dining interior, view 2",
        width: 1521,
        height: 1104,
      },
      {
        src: "https://img-new.cgtrader.com/items/4074457/ad17899c70/classic-livingroom-and-diningroom-3d-model-ad17899c70.jpg",
        alt: "Classic Living & Dining interior, view 3",
        width: 1800,
        height: 1271,
      },
      {
        src: "https://img-new.cgtrader.com/items/4074457/26128357c5/classic-livingroom-and-diningroom-3d-model-26128357c5.jpg",
        alt: "Classic Living & Dining interior, view 4",
        width: 1800,
        height: 1271,
      },
      {
        src: "https://img-new.cgtrader.com/items/4074457/7df1e120c6/classic-livingroom-and-diningroom-3d-model-7df1e120c6.jpg",
        alt: "Classic Living & Dining interior, view 5",
        width: 2000,
        height: 1412,
      },
    ],
  },
  {
    slug: "3-bedroom-modern",
    title: "3-Bedroom Modern",
    category: "Residential",
    description:
      "Interior 3D visualization — SketchUp + V-Ray.",
    images: [
      {
        src: "https://img-new.cgtrader.com/items/1874100/ed3bf329f8/3-bedroom-modern-with-wood-flooring-and-walls-3d-model-ed3bf329f8.webp",
        alt: "3-Bedroom Modern interior — 3D visualization",
        width: 1500,
        height: 800,
      },
      {
        src: "https://img-new.cgtrader.com/items/1874100/5b2ea36d3e/3-bedroom-modern-with-wood-flooring-and-walls-3d-model-5b2ea36d3e.jpg",
        alt: "3-Bedroom Modern interior, view 1",
        width: 6000,
        height: 2572,
      },
      {
        src: "https://img-new.cgtrader.com/items/1874100/8304e8bbfe/3-bedroom-modern-with-wood-flooring-and-walls-3d-model-8304e8bbfe.jpg",
        alt: "3-Bedroom Modern interior, view 2",
        width: 1500,
        height: 800,
      },
      {
        src: "https://img-new.cgtrader.com/items/1874100/fb78f65872/3-bedroom-modern-with-wood-flooring-and-walls-3d-model-fb78f65872.jpg",
        alt: "3-Bedroom Modern interior, view 3",
        width: 1353,
        height: 800,
      },
      {
        src: "https://img-new.cgtrader.com/items/1874100/fc335e0325/3-bedroom-modern-with-wood-flooring-and-walls-3d-model-fc335e0325.jpg",
        alt: "3-Bedroom Modern interior, view 4",
        width: 1395,
        height: 800,
      },
    ],
  },
  {
    slug: "apartement-one-bedroom-modern",
    title: "Apartment One Bedroom Modern",
    category: "Residential",
    description:
      "Interior 3D visualization — SketchUp + V-Ray.",
    images: [
      {
        src: "https://img-new.cgtrader.com/items/1868936/5a0febec93/apartement-one-bedroom-modern-3d-model-5a0febec93.webp",
        alt: "Apartment One Bedroom Modern interior — 3D visualization",
        width: 1044,
        height: 773,
      },
      {
        src: "https://img-new.cgtrader.com/items/1868936/f84dbf5e30/apartement-one-bedroom-modern-3d-model-f84dbf5e30.webp",
        alt: "Apartment One Bedroom Modern interior, view 1",
        width: 1840,
        height: 1286,
      },
      {
        src: "https://img-new.cgtrader.com/items/1868936/304b06f451/apartement-one-bedroom-modern-3d-model-304b06f451.webp",
        alt: "Apartment One Bedroom Modern interior, view 2",
        width: 1200,
        height: 800,
      },
      {
        src: "https://img-new.cgtrader.com/items/1868936/50c9d9d700/apartement-one-bedroom-modern-3d-model-50c9d9d700.webp",
        alt: "Apartment One Bedroom Modern interior, view 3",
        width: 996,
        height: 800,
      },
      {
        src: "https://img-new.cgtrader.com/items/1868936/1828fcea65/apartement-one-bedroom-modern-3d-model-1828fcea65.webp",
        alt: "Apartment One Bedroom Modern interior, view 4",
        width: 2000,
        height: 1125,
      },
      {
        src: "https://img-new.cgtrader.com/items/1868936/7c3aa87573/apartement-one-bedroom-modern-3d-model-7c3aa87573.webp",
        alt: "Apartment One Bedroom Modern interior, view 5",
        width: 2000,
        height: 1125,
      },
      {
        src: "https://img-new.cgtrader.com/items/1868936/e09b262965/apartement-one-bedroom-modern-3d-model-e09b262965.webp",
        alt: "Apartment One Bedroom Modern interior, view 6",
        width: 2000,
        height: 1125,
      },
      {
        src: "https://img-new.cgtrader.com/items/1868936/5dddbd513a/apartement-one-bedroom-modern-3d-model-5dddbd513a.webp",
        alt: "Apartment One Bedroom Modern interior, view 7",
        width: 2000,
        height: 1125,
      },
      {
        src: "https://img-new.cgtrader.com/items/1868936/2879bd10fc/apartement-one-bedroom-modern-3d-model-2879bd10fc.webp",
        alt: "Apartment One Bedroom Modern interior, view 8",
        width: 2000,
        height: 1125,
      },
      {
        src: "https://img-new.cgtrader.com/items/1868936/29e1813d82/apartement-one-bedroom-modern-3d-model-29e1813d82.webp",
        alt: "Apartment One Bedroom Modern interior, view 9",
        width: 2000,
        height: 1125,
      },
      {
        src: "https://img-new.cgtrader.com/items/1868936/405b9131b2/apartement-one-bedroom-modern-3d-model-405b9131b2.webp",
        alt: "Apartment One Bedroom Modern interior, view 10",
        width: 2000,
        height: 1125,
      },
      {
        src: "https://img-new.cgtrader.com/items/1868936/fa4bc98de4/apartement-one-bedroom-modern-3d-model-fa4bc98de4.webp",
        alt: "Apartment One Bedroom Modern interior, view 11",
        width: 2000,
        height: 1125,
      },
    ],
  },
  {
    slug: "apartement",
    title: "Apartment",
    category: "Residential",
    description:
      "Interior 3D visualization — SketchUp + V-Ray.",
    images: [
      {
        src: "https://img-new.cgtrader.com/items/1855971/31c6d46ee8/apartement-3d-model-31c6d46ee8.webp",
        alt: "Apartment interior — 3D visualization",
        width: 825,
        height: 800,
      },
      {
        src: "https://img-new.cgtrader.com/items/1855971/710ae8d1eb/apartement-3d-model-skp.jpg",
        alt: "Apartment interior, view 1",
        width: 855,
        height: 800,
      },
      {
        src: "https://img-new.cgtrader.com/items/1855971/5b10a6aa07/apartement-3d-model-skp.jpg",
        alt: "Apartment interior, view 2",
        width: 1200,
        height: 800,
      },
    ],
  },
  {
    slug: "luxurious-pantry-diningroom-livingroom",
    title: "Luxurious Pantry, Dining & Living",
    category: "Residential",
    description:
      "Interior 3D visualization — SketchUp + V-Ray.",
    images: [
      {
        src: "https://img-new.cgtrader.com/items/4025541/ca5cdb7ef0/luxurious-pantry-diningroom-and-livingroom-3d-model-ca5cdb7ef0.jpg",
        alt: "Luxurious Pantry, Dining & Living interior — 3D visualization",
        width: 2200,
        height: 1444,
      },
      {
        src: "https://img-new.cgtrader.com/items/4025541/57052b0096/luxurious-pantry-diningroom-and-livingroom-3d-model-57052b0096.jpg",
        alt: "Luxurious Pantry, Dining & Living interior, view 1",
        width: 2200,
        height: 1500,
      },
      {
        src: "https://img-new.cgtrader.com/items/4025541/ac569d4a72/luxurious-pantry-diningroom-and-livingroom-3d-model-ac569d4a72.webp",
        alt: "Luxurious Pantry, Dining & Living interior, view 2",
        width: 2000,
        height: 1125,
      },
      {
        src: "https://img-new.cgtrader.com/items/4025541/0f36ee25ab/luxurious-pantry-diningroom-and-livingroom-3d-model-0f36ee25ab.jpg",
        alt: "Luxurious Pantry, Dining & Living interior, view 3",
        width: 2200,
        height: 1500,
      },
      {
        src: "https://img-new.cgtrader.com/items/4025541/18a9c1603c/luxurious-pantry-diningroom-and-livingroom-3d-model-18a9c1603c.jpg",
        alt: "Luxurious Pantry, Dining & Living interior, view 4",
        width: 2190,
        height: 1400,
      },
      {
        src: "https://img-new.cgtrader.com/items/4025541/bff723e0df/luxurious-pantry-diningroom-and-livingroom-3d-model-bff723e0df.jpg",
        alt: "Luxurious Pantry, Dining & Living interior, view 5",
        width: 2200,
        height: 1500,
      },
      {
        src: "https://img-new.cgtrader.com/items/4025541/fa2680bfdb/luxurious-pantry-diningroom-and-livingroom-3d-model-fa2680bfdb.jpg",
        alt: "Luxurious Pantry, Dining & Living interior, view 6",
        width: 2200,
        height: 1500,
      },
    ],
  },
  {
    slug: "japandi-interior",
    title: "Japandi Interior",
    category: "Residential",
    description:
      "Interior 3D visualization — SketchUp + V-Ray.",
    images: [
      {
        src: "https://img-new.cgtrader.com/items/4868716/eca779b2a2/japandi-interior-3d-model-eca779b2a2.jpg",
        alt: "Japandi Interior interior — 3D visualization",
        width: 2000,
        height: 1500,
      },
      {
        src: "https://img-new.cgtrader.com/items/4868716/57a256ad29/japandi-interior-3d-model-57a256ad29.jpg",
        alt: "Japandi Interior interior, view 1",
        width: 2200,
        height: 1500,
      },
      {
        src: "https://img-new.cgtrader.com/items/4868716/484a0784d1/japandi-interior-3d-model-484a0784d1.webp",
        alt: "Japandi Interior interior, view 2",
        width: 2000,
        height: 1125,
      },
      {
        src: "https://img-new.cgtrader.com/items/4868716/f7fcc51d8a/japandi-interior-3d-model-f7fcc51d8a.jpg",
        alt: "Japandi Interior interior, view 3",
        width: 2200,
        height: 1500,
      },
      {
        src: "https://img-new.cgtrader.com/items/4868716/719f539562/japandi-interior-3d-model-719f539562.jpg",
        alt: "Japandi Interior interior, view 4",
        width: 2200,
        height: 1500,
      },
      {
        src: "https://img-new.cgtrader.com/items/4868716/306ae51e7f/japandi-interior-3d-model-306ae51e7f.jpg",
        alt: "Japandi Interior interior, view 5",
        width: 2200,
        height: 1500,
      },
      {
        src: "https://img-new.cgtrader.com/items/4868716/85978bde0c/japandi-interior-3d-model-85978bde0c.jpg",
        alt: "Japandi Interior interior, view 6",
        width: 2200,
        height: 1500,
      },
      {
        src: "https://img-new.cgtrader.com/items/4868716/6cca0eaeea/japandi-interior-3d-model-6cca0eaeea.jpg",
        alt: "Japandi Interior interior, view 7",
        width: 2200,
        height: 1500,
      },
      {
        src: "https://img-new.cgtrader.com/items/4868716/0d8ba87433/japandi-interior-3d-model-0d8ba87433.jpg",
        alt: "Japandi Interior interior, view 8",
        width: 2000,
        height: 1500,
      },
      {
        src: "https://img-new.cgtrader.com/items/4868716/88ff7625fe/japandi-interior-3d-model-88ff7625fe.jpg",
        alt: "Japandi Interior interior, view 9",
        width: 2000,
        height: 1500,
      },
      {
        src: "https://img-new.cgtrader.com/items/4868716/aa64483db0/japandi-interior-3d-model-aa64483db0.jpg",
        alt: "Japandi Interior interior, view 10",
        width: 1816,
        height: 1500,
      },
      {
        src: "https://img-new.cgtrader.com/items/4868716/aa18a166d1/japandi-interior-3d-model-aa18a166d1.jpg",
        alt: "Japandi Interior interior, view 11",
        width: 1699,
        height: 1500,
      },
      {
        src: "https://img-new.cgtrader.com/items/4868716/7175791756/japandi-interior-3d-model-7175791756.jpg",
        alt: "Japandi Interior interior, view 12",
        width: 2000,
        height: 1500,
      },
      {
        src: "https://img-new.cgtrader.com/items/4868716/c9a10213b4/japandi-interior-3d-model-c9a10213b4.jpg",
        alt: "Japandi Interior interior, view 13",
        width: 2000,
        height: 1500,
      },
      {
        src: "https://img-new.cgtrader.com/items/4868716/e2c4eb4676/japandi-interior-3d-model-e2c4eb4676.jpg",
        alt: "Japandi Interior interior, view 14",
        width: 2000,
        height: 1500,
      },
      {
        src: "https://img-new.cgtrader.com/items/4868716/1a164798aa/japandi-interior-3d-model-1a164798aa.jpg",
        alt: "Japandi Interior interior, view 15",
        width: 2000,
        height: 1500,
      },
      {
        src: "https://img-new.cgtrader.com/items/4868716/a0afa956bc/japandi-interior-3d-model-a0afa956bc.jpg",
        alt: "Japandi Interior interior, view 16",
        width: 2000,
        height: 1500,
      },
      {
        src: "https://img-new.cgtrader.com/items/4868716/66112548ad/japandi-interior-3d-model-66112548ad.jpg",
        alt: "Japandi Interior interior, view 17",
        width: 2000,
        height: 1500,
      },
      {
        src: "https://img-new.cgtrader.com/items/4868716/04458a8117/japandi-interior-3d-model-04458a8117.jpg",
        alt: "Japandi Interior interior, view 18",
        width: 2200,
        height: 1500,
      },
      {
        src: "https://img-new.cgtrader.com/items/4868716/21c28971fe/japandi-interior-3d-model-21c28971fe.jpg",
        alt: "Japandi Interior interior, view 19",
        width: 2200,
        height: 1500,
      },
    ],
  },
  {
    slug: "toraja-restaurant",
    title: "Toraja Restaurant",
    category: "Commercial",
    description:
      "Interior 3D visualization — SketchUp + V-Ray.",
    images: [
      {
        src: "https://img-new.cgtrader.com/items/2128162/7ca3fe4880/toraja-restaurant-3d-model-7ca3fe4880.webp",
        alt: "Toraja Restaurant interior — 3D visualization",
        width: 2000,
        height: 1125,
      },
      {
        src: "https://img-new.cgtrader.com/items/2128162/accf1c7d37/toraja-restaurant-3d-model-accf1c7d37.jpg",
        alt: "Toraja Restaurant interior, view 1",
        width: 1956,
        height: 737,
      },
      {
        src: "https://img-new.cgtrader.com/items/2128162/c433c3c51b/toraja-restaurant-3d-model-c433c3c51b.jpg",
        alt: "Toraja Restaurant interior, view 2",
        width: 2000,
        height: 1100,
      },
      {
        src: "https://img-new.cgtrader.com/items/2128162/412a1e566c/toraja-restaurant-3d-model-412a1e566c.jpg",
        alt: "Toraja Restaurant interior, view 3",
        width: 1908,
        height: 1100,
      },
      {
        src: "https://img-new.cgtrader.com/items/2128162/a637f2f7d1/toraja-restaurant-3d-model-a637f2f7d1.jpg",
        alt: "Toraja Restaurant interior, view 4",
        width: 1949,
        height: 1000,
      },
    ],
  },
  {
    slug: "traditional-shopping-store",
    title: "Traditional Shopping Store",
    category: "Commercial",
    description:
      "Interior 3D visualization — SketchUp + V-Ray.",
    images: [
      {
        src: "https://img-new.cgtrader.com/items/1866923/81a9827c63/traditional-shopping-store-3d-model-81a9827c63.webp",
        alt: "Traditional Shopping Store interior — 3D visualization",
        width: 1200,
        height: 697,
      },
      {
        src: "https://img-new.cgtrader.com/items/1866923/97355c8d37/traditional-shopping-store-3d-model-97355c8d37.jpg",
        alt: "Traditional Shopping Store interior, view 1",
        width: 1200,
        height: 697,
      },
      {
        src: "https://img-new.cgtrader.com/items/1866923/87e249d565/traditional-shopping-store-3d-model-87e249d565.jpg",
        alt: "Traditional Shopping Store interior, view 2",
        width: 1200,
        height: 697,
      },
      {
        src: "https://img-new.cgtrader.com/items/1866923/70c3f6b109/traditional-shopping-store-3d-model-70c3f6b109.jpg",
        alt: "Traditional Shopping Store interior, view 3",
        width: 1200,
        height: 697,
      },
      {
        src: "https://img-new.cgtrader.com/items/1866923/0d3e4627a8/traditional-shopping-store-3d-model-0d3e4627a8.jpg",
        alt: "Traditional Shopping Store interior, view 4",
        width: 1200,
        height: 697,
      },
      {
        src: "https://img-new.cgtrader.com/items/1866923/a98fcef921/traditional-shopping-store-3d-model-a98fcef921.jpg",
        alt: "Traditional Shopping Store interior, view 5",
        width: 1200,
        height: 697,
      },
      {
        src: "https://img-new.cgtrader.com/items/1866923/d0ee458186/traditional-shopping-store-3d-model-d0ee458186.jpg",
        alt: "Traditional Shopping Store interior, view 6",
        width: 1200,
        height: 697,
      },
      {
        src: "https://img-new.cgtrader.com/items/1866923/773f2071b3/traditional-shopping-store-3d-model-773f2071b3.jpg",
        alt: "Traditional Shopping Store interior, view 7",
        width: 1200,
        height: 697,
      },
      {
        src: "https://img-new.cgtrader.com/items/1866923/5fa9089229/traditional-shopping-store-3d-model-5fa9089229.jpg",
        alt: "Traditional Shopping Store interior, view 8",
        width: 1200,
        height: 697,
      },
      {
        src: "https://img-new.cgtrader.com/items/1866923/05465b4616/traditional-shopping-store-3d-model-05465b4616.jpg",
        alt: "Traditional Shopping Store interior, view 9",
        width: 1200,
        height: 697,
      },
      {
        src: "https://img-new.cgtrader.com/items/1866923/6f6871d878/traditional-shopping-store-3d-model-6f6871d878.jpg",
        alt: "Traditional Shopping Store interior, view 10",
        width: 1200,
        height: 697,
      },
    ],
  },
  {
    slug: "hulala-waffleicious-booth",
    title: "Hulala & Waffleicious Booth",
    category: "Commercial",
    description:
      "Interior 3D visualization — SketchUp + V-Ray.",
    images: [
      {
        src: "https://img-new.cgtrader.com/items/1973743/ac62c3e8f4/hulala-dan-waffleicious-booth-design-for-ice-cream-and-waffle-3d-model-ac62c3e8f4.webp",
        alt: "Hulala & Waffleicious Booth interior — 3D visualization",
        width: 1200,
        height: 967,
      },
      {
        src: "https://img-new.cgtrader.com/items/1973743/4a14a39745/hulala-dan-waffleicious-booth-design-for-ice-cream-and-waffle-3d-model-4a14a39745.jpg",
        alt: "Hulala & Waffleicious Booth interior, view 1",
        width: 1200,
        height: 1000,
      },
      {
        src: "https://img-new.cgtrader.com/items/1973743/f775db3917/hulala-dan-waffleicious-booth-design-for-ice-cream-and-waffle-3d-model-f775db3917.jpg",
        alt: "Hulala & Waffleicious Booth interior, view 2",
        width: 1200,
        height: 1000,
      },
      {
        src: "https://img-new.cgtrader.com/items/1973743/a24b89e127/hulala-dan-waffleicious-booth-design-for-ice-cream-and-waffle-3d-model-a24b89e127.jpg",
        alt: "Hulala & Waffleicious Booth interior, view 3",
        width: 1200,
        height: 958,
      },
    ],
  },
  {
    slug: "interior-make-up-artist",
    title: "Make-Up Artist Interior",
    category: "Commercial",
    description:
      "Interior 3D visualization — SketchUp + V-Ray.",
    images: [
      {
        src: "https://img-new.cgtrader.com/items/1869034/14fdbcd78c/interior-make-up-artist-3d-model-14fdbcd78c.webp",
        alt: "Make-Up Artist Interior interior — 3D visualization",
        width: 1204,
        height: 672,
      },
      {
        src: "https://img-new.cgtrader.com/items/1869034/c76f0a8321/interior-make-up-artist-3d-model-c76f0a8321.webp",
        alt: "Make-Up Artist Interior interior, view 1",
        width: 2000,
        height: 1125,
      },
      {
        src: "https://img-new.cgtrader.com/items/1869034/6da8785322/interior-make-up-artist-3d-model-6da8785322.webp",
        alt: "Make-Up Artist Interior interior, view 2",
        width: 2000,
        height: 1125,
      },
      {
        src: "https://img-new.cgtrader.com/items/1869034/9f799afd80/interior-make-up-artist-3d-model-9f799afd80.webp",
        alt: "Make-Up Artist Interior interior, view 3",
        width: 1400,
        height: 850,
      },
      {
        src: "https://img-new.cgtrader.com/items/1869034/ca9efcce4d/interior-make-up-artist-3d-model-ca9efcce4d.webp",
        alt: "Make-Up Artist Interior interior, view 4",
        width: 1028,
        height: 577,
      },
      {
        src: "https://img-new.cgtrader.com/items/1869034/2fcbfc1900/interior-make-up-artist-3d-model-2fcbfc1900.jpg",
        alt: "Make-Up Artist Interior interior, view 5",
        width: 3000,
        height: 1247,
      },
      {
        src: "https://img-new.cgtrader.com/items/1869034/93252e7c39/interior-make-up-artist-3d-model-93252e7c39.webp",
        alt: "Make-Up Artist Interior interior, view 6",
        width: 2000,
        height: 1125,
      },
      {
        src: "https://img-new.cgtrader.com/items/1869034/7405ed4723/interior-make-up-artist-3d-model-7405ed4723.webp",
        alt: "Make-Up Artist Interior interior, view 7",
        width: 2000,
        height: 1125,
      },
    ],
  },
  {
    slug: "beauty-clinic",
    title: "Beauty Clinic",
    category: "Commercial",
    description:
      "Interior 3D visualization — SketchUp + V-Ray.",
    images: [
      {
        src: "https://img-new.cgtrader.com/items/2153168/0ddb48d418/beauty-clinic-3d-model-0ddb48d418.webp",
        alt: "Beauty Clinic interior — 3D visualization",
        width: 2000,
        height: 1125,
      },
      {
        src: "https://img-new.cgtrader.com/items/2153168/0357da7fb5/beauty-clinic-3d-model-0357da7fb5.jpg",
        alt: "Beauty Clinic interior, view 1",
        width: 1256,
        height: 1354,
      },
      {
        src: "https://img-new.cgtrader.com/items/2153168/abd14ce146/beauty-clinic-3d-model-abd14ce146.jpg",
        alt: "Beauty Clinic interior, view 2",
        width: 2000,
        height: 1212,
      },
      {
        src: "https://img-new.cgtrader.com/items/2153168/99b95c9578/beauty-clinic-3d-model-99b95c9578.jpg",
        alt: "Beauty Clinic interior, view 3",
        width: 3000,
        height: 1354,
      },
      {
        src: "https://img-new.cgtrader.com/items/2153168/14e241a796/beauty-clinic-3d-model-14e241a796.jpg",
        alt: "Beauty Clinic interior, view 4",
        width: 3000,
        height: 1354,
      },
      {
        src: "https://img-new.cgtrader.com/items/2153168/8c0f22c482/beauty-clinic-3d-model-8c0f22c482.jpg",
        alt: "Beauty Clinic interior, view 5",
        width: 3000,
        height: 1825,
      },
      {
        src: "https://img-new.cgtrader.com/items/2153168/2f1c1411fd/beauty-clinic-3d-model-2f1c1411fd.jpg",
        alt: "Beauty Clinic interior, view 6",
        width: 2276,
        height: 1270,
      },
      {
        src: "https://img-new.cgtrader.com/items/2153168/95319b239b/beauty-clinic-3d-model-95319b239b.jpg",
        alt: "Beauty Clinic interior, view 7",
        width: 1360,
        height: 1354,
      },
      {
        src: "https://img-new.cgtrader.com/items/2153168/43c8cba9ed/beauty-clinic-3d-model-43c8cba9ed.jpg",
        alt: "Beauty Clinic interior, view 8",
        width: 2804,
        height: 1354,
      },
    ],
  },
  {
    slug: "beauty-salon-ever-green",
    title: "Beauty Salon Ever Green",
    category: "Commercial",
    description:
      "Interior 3D visualization — SketchUp + V-Ray.",
    images: [
      {
        src: "https://img-new.cgtrader.com/items/4158571/c35b8125e8/beauty-salon-ever-green-3d-model-c35b8125e8.webp",
        alt: "Beauty Salon Ever Green interior — 3D visualization",
        width: 2000,
        height: 1200,
      },
      {
        src: "https://img-new.cgtrader.com/items/4158571/b3334046e9/beauty-salon-ever-green-3d-model-b3334046e9.jpg",
        alt: "Beauty Salon Ever Green interior, view 1",
        width: 2000,
        height: 1200,
      },
      {
        src: "https://img-new.cgtrader.com/items/4158571/29b65a11e7/beauty-salon-ever-green-3d-model-29b65a11e7.jpg",
        alt: "Beauty Salon Ever Green interior, view 2",
        width: 2000,
        height: 1200,
      },
      {
        src: "https://img-new.cgtrader.com/items/4158571/b06e0466e5/beauty-salon-ever-green-3d-model-b06e0466e5.jpg",
        alt: "Beauty Salon Ever Green interior, view 3",
        width: 2000,
        height: 1200,
      },
      {
        src: "https://img-new.cgtrader.com/items/4158571/041b454d57/beauty-salon-ever-green-3d-model-041b454d57.jpg",
        alt: "Beauty Salon Ever Green interior, view 4",
        width: 2000,
        height: 1200,
      },
      {
        src: "https://img-new.cgtrader.com/items/4158571/25c1be7a8c/beauty-salon-ever-green-3d-model-25c1be7a8c.jpg",
        alt: "Beauty Salon Ever Green interior, view 5",
        width: 2000,
        height: 1200,
      },
      {
        src: "https://img-new.cgtrader.com/items/4158571/9ea8a8af33/beauty-salon-ever-green-3d-model-9ea8a8af33.jpg",
        alt: "Beauty Salon Ever Green interior, view 6",
        width: 2000,
        height: 1200,
      },
      {
        src: "https://img-new.cgtrader.com/items/4158571/77eb50d651/beauty-salon-ever-green-3d-model-77eb50d651.jpg",
        alt: "Beauty Salon Ever Green interior, view 7",
        width: 2000,
        height: 1200,
      },
    ],
  },
  {
    slug: "apartement-one-bedroom",
    title: "Apartment One Bedroom",
    category: "Residential",
    description:
      "Interior 3D visualization — SketchUp + V-Ray.",
    images: [
      {
        src: "https://img-new.cgtrader.com/items/1866971/5649d57cdc/apartement-one-bedroom-3d-model-5649d57cdc.webp",
        alt: "Apartment One Bedroom interior — 3D visualization",
        width: 1110,
        height: 800,
      },
      {
        src: "https://img-new.cgtrader.com/items/1866971/6219b14a5a/apartement-one-bedroom-3d-model-6219b14a5a.jpg",
        alt: "Apartment One Bedroom interior, view 1",
        width: 1648,
        height: 1286,
      },
      {
        src: "https://img-new.cgtrader.com/items/1866971/143b3f1e55/apartement-one-bedroom-3d-model-143b3f1e55.jpg",
        alt: "Apartment One Bedroom interior, view 2",
        width: 1083,
        height: 800,
      },
      {
        src: "https://img-new.cgtrader.com/items/1866971/830f08b9dd/apartement-one-bedroom-3d-model-830f08b9dd.jpg",
        alt: "Apartment One Bedroom interior, view 3",
        width: 1122,
        height: 749,
      },
      {
        src: "https://img-new.cgtrader.com/items/1866971/1f2cee1ce5/apartement-one-bedroom-3d-model-1f2cee1ce5.jpg",
        alt: "Apartment One Bedroom interior, view 4",
        width: 1280,
        height: 1286,
      },
    ],
  },
  {
    slug: "interior-exterior-layout-house",
    title: "Interior & Exterior Layout House",
    category: "Residential",
    description:
      "Interior 3D visualization — SketchUp + V-Ray.",
    images: [
      {
        src: "https://img-new.cgtrader.com/items/1902105/e0969a7da7/interior-exterior-and-layout-house-3d-model-e0969a7da7.jpg",
        alt: "Interior & Exterior Layout House interior — 3D visualization",
        width: 1724,
        height: 1000,
      },
      {
        src: "https://img-new.cgtrader.com/items/1902105/2f06f9e1dd/interior-exterior-and-layout-house-3d-model-2f06f9e1dd.jpg",
        alt: "Interior & Exterior Layout House interior, view 1",
        width: 2000,
        height: 823,
      },
      {
        src: "https://img-new.cgtrader.com/items/1902105/c9d601f44a/interior-exterior-and-layout-house-3d-model-c9d601f44a.webp",
        alt: "Interior & Exterior Layout House interior, view 2",
        width: 2000,
        height: 1125,
      },
      {
        src: "https://img-new.cgtrader.com/items/1902105/0128fb727d/interior-exterior-and-layout-house-3d-model-0128fb727d.jpg",
        alt: "Interior & Exterior Layout House interior, view 3",
        width: 2000,
        height: 1000,
      },
      {
        src: "https://img-new.cgtrader.com/items/1902105/e4f4ce30bf/interior-exterior-and-layout-house-3d-model-e4f4ce30bf.jpg",
        alt: "Interior & Exterior Layout House interior, view 4",
        width: 2000,
        height: 1000,
      },
      {
        src: "https://img-new.cgtrader.com/items/1902105/8e40467d9d/interior-exterior-and-layout-house-3d-model-8e40467d9d.jpg",
        alt: "Interior & Exterior Layout House interior, view 5",
        width: 1784,
        height: 1000,
      },
      {
        src: "https://img-new.cgtrader.com/items/1902105/f3c7a643dd/interior-exterior-and-layout-house-3d-model-f3c7a643dd.jpg",
        alt: "Interior & Exterior Layout House interior, view 6",
        width: 1748,
        height: 1000,
      },
      {
        src: "https://img-new.cgtrader.com/items/1902105/ef5177bea1/interior-exterior-and-layout-house-3d-model-ef5177bea1.jpg",
        alt: "Interior & Exterior Layout House interior, view 7",
        width: 1820,
        height: 1000,
      },
      {
        src: "https://img-new.cgtrader.com/items/1902105/24a8130be3/interior-exterior-and-layout-house-3d-model-24a8130be3.jpg",
        alt: "Interior & Exterior Layout House interior, view 8",
        width: 1808,
        height: 2684,
      },
      {
        src: "https://img-new.cgtrader.com/items/1902105/a22cc94a2e/interior-exterior-and-layout-house-3d-model-a22cc94a2e.jpg",
        alt: "Interior & Exterior Layout House interior, view 9",
        width: 1808,
        height: 2684,
      },
      {
        src: "https://img-new.cgtrader.com/items/1902105/4a95ed64ad/interior-exterior-and-layout-house-3d-model-4a95ed64ad.jpg",
        alt: "Interior & Exterior Layout House interior, view 10",
        width: 2000,
        height: 823,
      },
    ],
  },
  {
    slug: "colonial-bedroom",
    title: "Colonial Bedroom",
    category: "Residential",
    description:
      "Interior 3D visualization — SketchUp + V-Ray.",
    images: [
      {
        src: "https://img-new.cgtrader.com/items/1855982/038cbe7494/colonial-bedroom-3d-model-038cbe7494.webp",
        alt: "Colonial Bedroom interior — 3D visualization",
        width: 2000,
        height: 1125,
      },
      {
        src: "https://img-new.cgtrader.com/items/1855982/a86b2dde67/colonial-bedroom-3d-model-a86b2dde67.jpg",
        alt: "Colonial Bedroom interior, view 1",
        width: 1468,
        height: 1100,
      },
    ],
  },
  {
    slug: "modern-man-cave",
    title: "Modern Man Cave",
    category: "Residential",
    description:
      "Interior 3D visualization — SketchUp + V-Ray.",
    images: [
      {
        src: "https://img-new.cgtrader.com/items/2739430/dc3019638c/modern-man-cave-3d-model-dc3019638c.webp",
        alt: "Modern Man Cave interior — 3D visualization",
        width: 2000,
        height: 1125,
      },
      {
        src: "https://img-new.cgtrader.com/items/2739430/ab061eb155/modern-man-cave-3d-model-ab061eb155.jpg",
        alt: "Modern Man Cave interior, view 1",
        width: 1680,
        height: 1218,
      },
      {
        src: "https://img-new.cgtrader.com/items/2739430/273fb59505/modern-man-cave-3d-model-273fb59505.jpg",
        alt: "Modern Man Cave interior, view 2",
        width: 1592,
        height: 1500,
      },
      {
        src: "https://img-new.cgtrader.com/items/2739430/f1cffc9ffa/modern-man-cave-3d-model-f1cffc9ffa.jpg",
        alt: "Modern Man Cave interior, view 3",
        width: 1904,
        height: 1500,
      },
      {
        src: "https://img-new.cgtrader.com/items/2739430/d3f997e708/modern-man-cave-3d-model-d3f997e708.jpg",
        alt: "Modern Man Cave interior, view 4",
        width: 1812,
        height: 1500,
      },
    ],
  },
  {
    slug: "simple-classic-house",
    title: "Simple Classic House",
    category: "Residential",
    description:
      "Interior 3D visualization — SketchUp + V-Ray.",
    images: [
      {
        src: "https://img-new.cgtrader.com/items/4452135/0e3f9a6f23/simple-classic-house-3d-model-0e3f9a6f23.webp",
        alt: "Simple Classic House interior — 3D visualization",
        width: 2000,
        height: 1125,
      },
      {
        src: "https://img-new.cgtrader.com/items/4452135/784d403ea7/simple-classic-house-3d-model-784d403ea7.jpg",
        alt: "Simple Classic House interior, view 1",
        width: 2200,
        height: 1400,
      },
      {
        src: "https://img-new.cgtrader.com/items/4452135/1c23c2c730/simple-classic-house-3d-model-1c23c2c730.jpg",
        alt: "Simple Classic House interior, view 2",
        width: 2200,
        height: 1400,
      },
      {
        src: "https://img-new.cgtrader.com/items/4452135/56bcfffc37/simple-classic-house-3d-model-56bcfffc37.jpg",
        alt: "Simple Classic House interior, view 3",
        width: 2200,
        height: 1400,
      },
      {
        src: "https://img-new.cgtrader.com/items/4452135/9106f5bbeb/simple-classic-house-3d-model-9106f5bbeb.jpg",
        alt: "Simple Classic House interior, view 4",
        width: 2200,
        height: 1400,
      },
      {
        src: "https://img-new.cgtrader.com/items/4452135/2ac35424c5/simple-classic-house-3d-model-2ac35424c5.jpg",
        alt: "Simple Classic House interior, view 5",
        width: 2200,
        height: 1400,
      },
      {
        src: "https://img-new.cgtrader.com/items/4452135/fa5a304fb4/simple-classic-house-3d-model-fa5a304fb4.jpg",
        alt: "Simple Classic House interior, view 6",
        width: 2158,
        height: 1400,
      },
      {
        src: "https://img-new.cgtrader.com/items/4452135/6dfa4a0b64/simple-classic-house-3d-model-6dfa4a0b64.jpg",
        alt: "Simple Classic House interior, view 7",
        width: 2200,
        height: 1400,
      },
      {
        src: "https://img-new.cgtrader.com/items/4452135/6f897fdf29/simple-classic-house-3d-model-6f897fdf29.jpg",
        alt: "Simple Classic House interior, view 8",
        width: 2200,
        height: 1400,
      },
      {
        src: "https://img-new.cgtrader.com/items/4452135/67fed41eca/simple-classic-house-3d-model-67fed41eca.jpg",
        alt: "Simple Classic House interior, view 9",
        width: 2200,
        height: 1384,
      },
      {
        src: "https://img-new.cgtrader.com/items/4452135/276a299a1b/simple-classic-house-3d-model-276a299a1b.jpg",
        alt: "Simple Classic House interior, view 10",
        width: 2200,
        height: 1400,
      },
      {
        src: "https://img-new.cgtrader.com/items/4452135/d35f03ed35/simple-classic-house-3d-model-d35f03ed35.jpg",
        alt: "Simple Classic House interior, view 11",
        width: 2200,
        height: 1400,
      },
      {
        src: "https://img-new.cgtrader.com/items/4452135/1cd0ebb1e9/simple-classic-house-3d-model-1cd0ebb1e9.jpg",
        alt: "Simple Classic House interior, view 12",
        width: 2200,
        height: 1400,
      },
      {
        src: "https://img-new.cgtrader.com/items/4452135/8378befaad/simple-classic-house-3d-model-8378befaad.jpg",
        alt: "Simple Classic House interior, view 13",
        width: 2200,
        height: 1400,
      },
      {
        src: "https://img-new.cgtrader.com/items/4452135/e21421805b/simple-classic-house-3d-model-e21421805b.jpg",
        alt: "Simple Classic House interior, view 14",
        width: 2116,
        height: 1400,
      },
      {
        src: "https://img-new.cgtrader.com/items/4452135/1db18559c8/simple-classic-house-3d-model-1db18559c8.jpg",
        alt: "Simple Classic House interior, view 15",
        width: 2044,
        height: 1400,
      },
      {
        src: "https://img-new.cgtrader.com/items/4452135/af119d0a64/simple-classic-house-3d-model-af119d0a64.jpg",
        alt: "Simple Classic House interior, view 16",
        width: 2200,
        height: 1400,
      },
      {
        src: "https://img-new.cgtrader.com/items/4452135/6b34f9c6e2/simple-classic-house-3d-model-6b34f9c6e2.jpg",
        alt: "Simple Classic House interior, view 17",
        width: 2120,
        height: 1400,
      },
      {
        src: "https://img-new.cgtrader.com/items/4452135/c6104c435a/simple-classic-house-3d-model-c6104c435a.jpg",
        alt: "Simple Classic House interior, view 18",
        width: 2104,
        height: 1400,
      },
      {
        src: "https://img-new.cgtrader.com/items/4452135/1cd0c64c31/simple-classic-house-3d-model-1cd0c64c31.jpg",
        alt: "Simple Classic House interior, view 19",
        width: 2200,
        height: 1400,
      },
      {
        src: "https://img-new.cgtrader.com/items/4452135/8d5793a413/simple-classic-house-3d-model-8d5793a413.jpg",
        alt: "Simple Classic House interior, view 20",
        width: 2200,
        height: 1400,
      },
    ],
  },
  {
    slug: "master-bedroom-ii",
    title: "Master Bedroom II",
    category: "Residential",
    description:
      "Interior 3D visualization — SketchUp + V-Ray.",
    images: [
      {
        src: "https://img-new.cgtrader.com/items/1879633/f8bfcca510/master-bedroom-3d-model-f8bfcca510.webp",
        alt: "Master Bedroom II interior — 3D visualization",
        width: 2000,
        height: 1125,
      },
      {
        src: "https://img-new.cgtrader.com/items/1879633/cc45f0a751/master-bedroom-3d-model-cc45f0a751.jpg",
        alt: "Master Bedroom II interior, view 1",
        width: 6000,
        height: 2572,
      },
      {
        src: "https://img-new.cgtrader.com/items/1879633/45a9e06387/master-bedroom-3d-model-45a9e06387.jpg",
        alt: "Master Bedroom II interior, view 2",
        width: 1762,
        height: 1152,
      },
      {
        src: "https://img-new.cgtrader.com/items/1879633/a1d867b824/master-bedroom-3d-model-a1d867b824.jpg",
        alt: "Master Bedroom II interior, view 3",
        width: 1786,
        height: 1200,
      },
      {
        src: "https://img-new.cgtrader.com/items/1879633/68f5c2c99d/master-bedroom-3d-model-68f5c2c99d.jpg",
        alt: "Master Bedroom II interior, view 4",
        width: 1900,
        height: 1200,
      },
      {
        src: "https://img-new.cgtrader.com/items/1879633/02e7de4920/master-bedroom-3d-model-02e7de4920.jpg",
        alt: "Master Bedroom II interior, view 5",
        width: 2806,
        height: 2143,
      },
      {
        src: "https://img-new.cgtrader.com/items/1879633/f76d9df8d0/master-bedroom-3d-model-f76d9df8d0.jpg",
        alt: "Master Bedroom II interior, view 6",
        width: 4532,
        height: 2143,
      },
      {
        src: "https://img-new.cgtrader.com/items/1879633/509df968f9/master-bedroom-3d-model-509df968f9.jpg",
        alt: "Master Bedroom II interior, view 7",
        width: 3993,
        height: 2143,
      },
      {
        src: "https://img-new.cgtrader.com/items/1879633/de357096a4/master-bedroom-3d-model-de357096a4.jpg",
        alt: "Master Bedroom II interior, view 8",
        width: 3873,
        height: 2143,
      },
      {
        src: "https://img-new.cgtrader.com/items/1879633/0b5ecf921f/master-bedroom-3d-model-0b5ecf921f.jpg",
        alt: "Master Bedroom II interior, view 9",
        width: 4424,
        height: 2143,
      },
      {
        src: "https://img-new.cgtrader.com/items/1879633/d273f26afc/master-bedroom-3d-model-d273f26afc.jpg",
        alt: "Master Bedroom II interior, view 10",
        width: 6000,
        height: 2572,
      },
    ],
  },
  {
    slug: "simple-house",
    title: "Simple House",
    category: "Residential",
    description:
      "Interior 3D visualization — SketchUp + V-Ray.",
    images: [
      {
        src: "https://img-new.cgtrader.com/items/1856292/fa201cb91d/simple-house-3d-model-fa201cb91d.webp",
        alt: "Simple House interior — 3D visualization",
        width: 1200,
        height: 600,
      },
      {
        src: "https://img-new.cgtrader.com/items/1856292/0b471a16be/simple-house-3d-model-0b471a16be.webp",
        alt: "Simple House interior, view 1",
        width: 1200,
        height: 600,
      },
      {
        src: "https://img-new.cgtrader.com/items/1856292/c1dd1c8e08/simple-house-3d-model-c1dd1c8e08.webp",
        alt: "Simple House interior, view 2",
        width: 2000,
        height: 1125,
      },
      {
        src: "https://img-new.cgtrader.com/items/1856292/09e6ea0870/simple-house-3d-model-09e6ea0870.webp",
        alt: "Simple House interior, view 3",
        width: 1176,
        height: 600,
      },
    ],
  },
  {
    slug: "guest-room",
    title: "Guest Room",
    category: "Residential",
    description:
      "Interior 3D visualization — SketchUp + V-Ray.",
    images: [
      {
        src: "https://img-new.cgtrader.com/items/1856924/51b52347fb/guest-room-3d-model-51b52347fb.webp",
        alt: "Guest Room interior — 3D visualization",
        width: 1291,
        height: 900,
      },
      {
        src: "https://img-new.cgtrader.com/items/1856924/c833ca3c91/guest-room-3d-model-c833ca3c91.jpg",
        alt: "Guest Room interior, view 1",
        width: 5000,
        height: 2030,
      },
      {
        src: "https://img-new.cgtrader.com/items/1856924/f996e56f9b/guest-room-3d-model-f996e56f9b.jpg",
        alt: "Guest Room interior, view 2",
        width: 2242,
        height: 2030,
      },
      {
        src: "https://img-new.cgtrader.com/items/1856924/8c0c03e853/guest-room-3d-model-8c0c03e853.jpg",
        alt: "Guest Room interior, view 3",
        width: 5000,
        height: 2143,
      },
      {
        src: "https://img-new.cgtrader.com/items/1856924/274ede68cf/guest-room-3d-model-274ede68cf.jpg",
        alt: "Guest Room interior, view 4",
        width: 2242,
        height: 1975,
      },
      {
        src: "https://img-new.cgtrader.com/items/1856924/6c7517be34/guest-room-3d-model-6c7517be34.jpg",
        alt: "Guest Room interior, view 5",
        width: 5000,
        height: 2143,
      },
      {
        src: "https://img-new.cgtrader.com/items/1856924/e549c43d4f/guest-room-3d-model-e549c43d4f.jpg",
        alt: "Guest Room interior, view 6",
        width: 5000,
        height: 2030,
      },
    ],
  },
  {
    slug: "master-bedroom-i",
    title: "Master Bedroom I",
    category: "Residential",
    description:
      "Interior 3D visualization — SketchUp + V-Ray.",
    images: [
      {
        src: "https://img-new.cgtrader.com/items/1994299/990fab4ebb/master-bedroom-3d-model-990fab4ebb.jpg",
        alt: "Master Bedroom I interior — 3D visualization",
        width: 1200,
        height: 700,
      },
      {
        src: "https://img-new.cgtrader.com/items/1994299/addd8c6543/master-bedroom-3d-model-addd8c6543.webp",
        alt: "Master Bedroom I interior, view 1",
        width: 2000,
        height: 1125,
      },
      {
        src: "https://img-new.cgtrader.com/items/1994299/6918ca46fa/master-bedroom-3d-model-6918ca46fa.jpg",
        alt: "Master Bedroom I interior, view 2",
        width: 1362,
        height: 591,
      },
      {
        src: "https://img-new.cgtrader.com/items/1994299/1d72f1283b/master-bedroom-3d-model-1d72f1283b.jpg",
        alt: "Master Bedroom I interior, view 3",
        width: 1362,
        height: 591,
      },
      {
        src: "https://img-new.cgtrader.com/items/1994299/48ea0b7d7b/master-bedroom-3d-model-48ea0b7d7b.jpg",
        alt: "Master Bedroom I interior, view 4",
        width: 1362,
        height: 591,
      },
      {
        src: "https://img-new.cgtrader.com/items/1994299/f1243006cb/master-bedroom-3d-model-f1243006cb.jpg",
        alt: "Master Bedroom I interior, view 5",
        width: 1362,
        height: 591,
      },
      {
        src: "https://img-new.cgtrader.com/items/1994299/c93536a81f/master-bedroom-3d-model-c93536a81f.jpg",
        alt: "Master Bedroom I interior, view 6",
        width: 1362,
        height: 591,
      },
      {
        src: "https://img-new.cgtrader.com/items/1994299/976c56c2c8/master-bedroom-3d-model-976c56c2c8.jpg",
        alt: "Master Bedroom I interior, view 7",
        width: 1362,
        height: 591,
      },
      {
        src: "https://img-new.cgtrader.com/items/1994299/9a9f85bfd9/master-bedroom-3d-model-9a9f85bfd9.jpg",
        alt: "Master Bedroom I interior, view 8",
        width: 1362,
        height: 591,
      },
      {
        src: "https://img-new.cgtrader.com/items/1994299/a6e25c511e/master-bedroom-3d-model-a6e25c511e.jpg",
        alt: "Master Bedroom I interior, view 9",
        width: 1290,
        height: 553,
      },
    ],
  },
  {
    slug: "master-bedroom-iii",
    title: "Master Bedroom III",
    category: "Residential",
    description:
      "Interior 3D visualization — SketchUp + V-Ray.",
    images: [
      {
        src: "https://img-new.cgtrader.com/items/1855668/8e82751405/master-bedroom-3d-model-8e82751405.webp",
        alt: "Master Bedroom III interior — 3D visualization",
        width: 1600,
        height: 800,
      },
      {
        src: "https://img-new.cgtrader.com/items/1855668/0117f34783/master-bedroom-3d-model-0117f34783.jpg",
        alt: "Master Bedroom III interior, view 1",
        width: 1600,
        height: 800,
      },
      {
        src: "https://img-new.cgtrader.com/items/1855668/3c41387083/master-bedroom-3d-model-3c41387083.jpg",
        alt: "Master Bedroom III interior, view 2",
        width: 1600,
        height: 800,
      },
    ],
  },
  {
    slug: "kids-room",
    title: "Kids Room",
    category: "Residential",
    description:
      "Interior 3D visualization — SketchUp + V-Ray.",
    images: [
      {
        src: "https://img-new.cgtrader.com/items/1854951/c28ecfd0f1/kids-room-3d-model-c28ecfd0f1.webp",
        alt: "Kids Room interior — 3D visualization",
        width: 1200,
        height: 600,
      },
      {
        src: "https://img-new.cgtrader.com/items/1854951/fb382b0cb8/kids-room-3d-model-fb382b0cb8.jpg",
        alt: "Kids Room interior, view 1",
        width: 1200,
        height: 600,
      },
      {
        src: "https://img-new.cgtrader.com/items/1854951/5c9cb9d8ef/kids-room-3d-model-5c9cb9d8ef.jpg",
        alt: "Kids Room interior, view 2",
        width: 1200,
        height: 500,
      },
      {
        src: "https://img-new.cgtrader.com/items/1854951/02a9ccaaf3/kids-room-3d-model-02a9ccaaf3.jpg",
        alt: "Kids Room interior, view 3",
        width: 1200,
        height: 500,
      },
      {
        src: "https://img-new.cgtrader.com/items/1854951/c9f393b9d3/kids-room-3d-model-c9f393b9d3.jpg",
        alt: "Kids Room interior, view 4",
        width: 1200,
        height: 600,
      },
    ],
  },
  {
    slug: "bathroom-design",
    title: "Bathroom Design",
    category: "Residential",
    description:
      "Interior 3D visualization — SketchUp + V-Ray.",
    images: [
      {
        src: "https://img-new.cgtrader.com/items/1991524/2a01e4df8b/bathroom-design-3d-model-2a01e4df8b.webp",
        alt: "Bathroom Design interior — 3D visualization",
        width: 874,
        height: 1356,
      },
      {
        src: "https://img-new.cgtrader.com/items/1991524/3368c71867/bathroom-design-3d-model-3368c71867.jpg",
        alt: "Bathroom Design interior, view 1",
        width: 780,
        height: 1364,
      },
    ],
  },
  {
    slug: "bathroom-luxury",
    title: "Bathroom Luxury",
    category: "Residential",
    description:
      "Interior 3D visualization — SketchUp + V-Ray.",
    images: [
      {
        src: "https://img-new.cgtrader.com/items/1866496/5b2a0a5b31/bathroom-luxury-3d-model-5b2a0a5b31.webp",
        alt: "Bathroom Luxury interior — 3D visualization",
        width: 2000,
        height: 1125,
      },
      {
        src: "https://img-new.cgtrader.com/items/1866496/d45a8a8d47/bathroom-3d-model-skp.jpg",
        alt: "Bathroom Luxury interior, view 1",
        width: 1800,
        height: 1000,
      },
      {
        src: "https://img-new.cgtrader.com/items/1866496/9174410dd1/bathroom-3d-model-skp.jpg",
        alt: "Bathroom Luxury interior, view 2",
        width: 1800,
        height: 1000,
      },
      {
        src: "https://img-new.cgtrader.com/items/1866496/f499973da1/bathroom-3d-model-skp.jpg",
        alt: "Bathroom Luxury interior, view 3",
        width: 1800,
        height: 1000,
      },
    ],
  },
  {
    slug: "store-design",
    title: "Store Design",
    category: "Commercial",
    description:
      "Interior 3D visualization — SketchUp + V-Ray.",
    images: [
      {
        src: "https://img-new.cgtrader.com/items/1860216/4c54a97138/store-design-3d-model-4c54a97138.webp",
        alt: "Store Design interior — 3D visualization",
        width: 1200,
        height: 600,
      },
      {
        src: "https://img-new.cgtrader.com/items/1860216/77dd4dcc68/store-design-3d-model-77dd4dcc68.jpg",
        alt: "Store Design interior, view 1",
        width: 1200,
        height: 600,
      },
      {
        src: "https://img-new.cgtrader.com/items/1860216/843b6cc05f/store-design-3d-model-843b6cc05f.jpg",
        alt: "Store Design interior, view 2",
        width: 1200,
        height: 600,
      },
      {
        src: "https://img-new.cgtrader.com/items/1860216/1d619c5a9a/store-design-3d-model-1d619c5a9a.jpg",
        alt: "Store Design interior, view 3",
        width: 1200,
        height: 600,
      },
    ],
  },
  {
    slug: "office-room",
    title: "Office Room",
    category: "Commercial",
    description:
      "Interior 3D visualization — SketchUp + V-Ray.",
    images: [
      {
        src: "https://img-new.cgtrader.com/items/1855957/5dabd39c33/office-room-3d-model-5dabd39c33.webp",
        alt: "Office Room interior — 3D visualization",
        width: 1200,
        height: 800,
      },
      {
        src: "https://img-new.cgtrader.com/items/1855957/f090a56cb6/office-room-3d-model-f090a56cb6.jpg",
        alt: "Office Room interior, view 1",
        width: 1200,
        height: 800,
      },
      {
        src: "https://img-new.cgtrader.com/items/1855957/3d16000687/office-room-3d-model-3d16000687.jpg",
        alt: "Office Room interior, view 2",
        width: 1200,
        height: 800,
      },
      {
        src: "https://img-new.cgtrader.com/items/1855957/7b16379061/office-room-3d-model-7b16379061.jpg",
        alt: "Office Room interior, view 3",
        width: 1200,
        height: 800,
      },
      {
        src: "https://img-new.cgtrader.com/items/1855957/a9c9edecf7/office-room-3d-model-a9c9edecf7.jpg",
        alt: "Office Room interior, view 4",
        width: 1200,
        height: 800,
      },
      {
        src: "https://img-new.cgtrader.com/items/1855957/39642c0b63/office-room-3d-model-39642c0b63.jpg",
        alt: "Office Room interior, view 5",
        width: 1200,
        height: 800,
      },
      {
        src: "https://img-new.cgtrader.com/items/1855957/538f400081/office-room-3d-model-538f400081.jpg",
        alt: "Office Room interior, view 6",
        width: 1200,
        height: 800,
      },
      {
        src: "https://img-new.cgtrader.com/items/1855957/579ee6c942/office-room-3d-model-579ee6c942.jpg",
        alt: "Office Room interior, view 7",
        width: 1200,
        height: 800,
      },
      {
        src: "https://img-new.cgtrader.com/items/1855957/33c1316710/office-room-3d-model-33c1316710.jpg",
        alt: "Office Room interior, view 8",
        width: 1200,
        height: 800,
      },
      {
        src: "https://img-new.cgtrader.com/items/1855957/f4e77789ca/office-room-3d-model-f4e77789ca.jpg",
        alt: "Office Room interior, view 9",
        width: 1200,
        height: 800,
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
