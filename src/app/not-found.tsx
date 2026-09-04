import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex flex-1 items-center">
        <div className="container-site flex flex-col items-center py-24 text-center">
          <p className="eyebrow">404</p>
          <h1 className="mt-5 font-display text-[clamp(2.5rem,7vw,5rem)] font-medium leading-tight text-ink">
            This space is unfurnished.
          </h1>
          <p className="mt-5 max-w-[46ch] text-base leading-7 text-stone">
            The page you&apos;re looking for doesn&apos;t exist or has moved.
            Let&apos;s get you back to somewhere beautiful.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/" className="btn btn-dark">
              Back to home
            </Link>
            <Link href="/portfolio" className="btn btn-outline">
              View portfolio
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Contact us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
