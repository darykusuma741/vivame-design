import Link from "next/link";
import Image from "next/image";
import { withBasePath } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-site grid min-h-[80vh] items-center gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-20">
        <div className="lg:col-span-6">
          <p className="eyebrow animate-fade-up" style={{ animationDelay: "0ms" }}>
            Interior Design Studio
          </p>
          <h1
            className="mt-6 font-display text-[clamp(2.9rem,8.5vw,5.75rem)] font-medium leading-[1.01] tracking-[-0.01em] text-ink animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            Designing Spaces,
            <br />
            Creating <em className="italic text-gold-deep">Experiences.</em>
          </h1>
          <p
            className="mt-7 max-w-[52ch] text-base leading-7 text-stone sm:text-lg sm:leading-8 animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            VIVAME Design transforms ideas into beautiful, functional, and
            timeless interior spaces.
          </p>
          <div
            className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            <Link href="/portfolio" className="btn btn-dark">
              View Our Projects
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Start Your Project
            </Link>
          </div>
        </div>

        <div
          className="lg:col-span-6 animate-fade-up"
          style={{ animationDelay: "160ms" }}
        >
          <div className="relative aspect-[3/2] w-full overflow-hidden">
            <Image
              src={withBasePath(
                "/images/hero/luxurious-pantry-diningroom-livingroom.webp",
              )}
              alt="3D visualization of a luxurious pantry, dining room, and living room by VIVAME Design"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
