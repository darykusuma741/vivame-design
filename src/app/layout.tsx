import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { absoluteUrl, site } from "@/lib/site";
import { MotionProvider } from "@/components/ui/motion";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const metadataBase = new URL(absoluteUrl("/"));

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: `${site.legalName} — Interior Design & 3D Visualization`,
    template: `%s — ${site.legalName}`,
  },
  description: site.description,
  applicationName: site.legalName,
  keywords: [
    "interior design",
    "architecture",
    "3D visualization",
    "interior design Depok",
    "interior design Indonesia",
    "VIVAME Design",
  ],
  openGraph: {
    type: "website",
    siteName: site.legalName,
    title: `${site.legalName} — Interior Design & 3D Visualization`,
    description: site.description,
    url: absoluteUrl("/"),
    locale: "en_ID",
  },
  twitter: {
    card: "summary",
    title: `${site.legalName} — Interior Design & 3D Visualization`,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

// Structured data: factual studio details only (no invented ratings/stats).
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.legalName,
  description: site.description,
  url: absoluteUrl("/"),
  email: site.email,
  telephone: site.phones.map((p) => p.tel),
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.location.line1}, ${site.location.line2}`,
    addressLocality: site.location.city,
    addressCountry: site.location.country,
  },
  sameAs: site.social.map((s) => s.href),
  areaServed: "Indonesia",
  image: absoluteUrl("/icon.svg"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${cormorant.variable} antialiased`}
    >
      <body>
        <noscript>
          <style>{`.reveal,.process-node{opacity:1 !important;transform:none !important}.process-rail-line,.process-rail-line-v{transform:none !important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
