import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/site/PageIntro";
import { DesignProcess } from "@/components/process/DesignProcess";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "How VIVAME Design works — from consultation and concept through 3D visualization, review, final design, and project completion.",
  alternates: { canonical: absoluteUrl("/process") },
};

export default function ProcessPage() {
  return (
    <PageIntro
      eyebrow="Process"
      title={
        <>
          How we <em className="italic">work</em>
        </>
      }
      lead="Seven considered stages carry every project from first conversation to final handover — keeping you informed and the outcome faithful to the vision."
    >
      <div className="mt-16">
        <DesignProcess />
      </div>

      <div className="mt-20 text-center">
        <Link href="/contact" className="btn btn-dark">
          Start your project
        </Link>
      </div>
    </PageIntro>
  );
}
