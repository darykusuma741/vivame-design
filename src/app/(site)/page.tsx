import type { Metadata } from "next";
import { absoluteUrl, site } from "@/lib/site";
import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { WhySection } from "@/components/home/WhySection";
import { ContactCta } from "@/components/home/ContactCta";

export const metadata: Metadata = {
  title: "Premium Interior Design, Architecture & 3D Visualization",
  description: site.description,
  alternates: { canonical: absoluteUrl("/") },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <WhySection />
      <ContactCta />
    </>
  );
}
