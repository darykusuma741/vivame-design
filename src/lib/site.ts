/**
 * Central site configuration for VIVAME Design.
 *
 * NOTE ON PLACEHOLDERS: Real contact details / social handles are not yet
 * available. Values marked PLACEHOLDER below must be replaced before launch —
 * they use reserved `.example` domains or empty strings so nothing fake is
 * presented to visitors. Empty values are not rendered.
 */

export interface NavItem {
  href: string;
  label: string;
}

interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  contact: {
    email: string; // PLACEHOLDER — reserved .example domain
    instagram: string; // PLACEHOLDER — e.g. "https://instagram.com/vivame.design"
    whatsapp: string; // PLACEHOLDER — e.g. "+62 812 0000 0000"
  };
  nav: NavItem[];
  cta: NavItem;
}

export const site: SiteConfig = {
  name: "VIVAME",
  legalName: "VIVAME Design",
  tagline: "Interior Design · Architecture · 3D Visualization",
  description:
    "VIVAME Design is an interior design, architecture, and 3D interior visualization studio crafting refined, intentional spaces — from first sketch to final render.",

  // PLACEHOLDER — replace with the real studio contact details before launch.
  contact: {
    email: "hello@vivame-design.example", // PLACEHOLDER — reserved .example domain
    instagram: "", // PLACEHOLDER — e.g. "https://instagram.com/vivame.design"
    whatsapp: "", // PLACEHOLDER — e.g. "+62 812 0000 0000"
  },

  nav: [
    { href: "/portfolio", label: "Work" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],

  cta: { href: "/contact", label: "Start a project" },
};
