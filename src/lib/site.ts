/**
 * Central site configuration for VIVAME Design.
 * All values here are real studio details provided by the client.
 */

/** Base path (e.g. "/repo" on a GitHub Pages project site); empty at a domain root. */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export interface NavItem {
  href: string;
  label: string;
}

export interface Phone {
  label: string;
  display: string;
  tel: string; // E.164 for tel: links
  wa: string; // wa.me deep link
}

export interface SocialLink {
  label: string;
  href: string;
}

interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  email: string;
  /** Public origin (scheme://host) — set NEXT_PUBLIC_SITE_URL at build time. */
  siteUrl: string;
  phones: Phone[];
  location: {
    line1: string;
    line2: string;
    city: string;
    country: string;
    mapsUrl: string;
  };
  social: SocialLink[];
  nav: NavItem[];
  cta: NavItem;
}

export const site: SiteConfig = {
  name: "VIVAME",
  legalName: "VIVAME Design",
  tagline: "Interior Design · Architecture · 3D Visualization",
  description:
    "VIVAME Design transforms ideas into beautiful, functional, and timeless interior spaces — residential and commercial interior design, architecture, and 3D interior visualization.",

  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  email: "vivameinteriordesign@gmail.com",

  phones: [
    {
      label: "Primary",
      display: "+62 857-7305-7532",
      tel: "+6285773057532",
      wa: "https://wa.me/6285773057532",
    },
    {
      label: "Secondary",
      display: "+62 882-4608-1309",
      tel: "+6288246081309",
      wa: "https://wa.me/6288246081309",
    },
  ],

  location: {
    line1: "Jl. Deposito No. A 19/20",
    line2: "Komplek BDN",
    city: "Sawangan, Depok",
    country: "Indonesia",
    mapsUrl: "https://maps.app.goo.gl/1mSXVdxCZ3Z6vzWFA",
  },

  social: [
    { label: "Instagram", href: "https://www.instagram.com/vivamedesign/" },
    {
      label: "Facebook",
      href: "https://www.facebook.com/p/Vivame-Interior-Design-100063437935234/",
    },
    { label: "Archify", href: "https://www.archify.com/id/vivame-design" },
    { label: "Arsitag", href: "https://www.arsitag.com/profile/vivame-design" },
    {
      label: "Homify",
      href: "https://www.homify.co.id/professionals/4815776/vivame-design",
    },
  ],

  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/process", label: "Process" },
    { href: "/contact", label: "Contact" },
  ],

  cta: { href: "/contact", label: "Start a project" },
};

/** Root-relative path with the base path prepended (e.g. "/repo/images/x.jpg"). */
export function withBasePath(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

/** Absolute public URL for a path (origin + base path + path). */
export function absoluteUrl(path = "/"): string {
  const origin = (site.siteUrl || "").replace(/\/+$/, "");
  return `${origin}${withBasePath(path)}`;
}
