"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { site, withBasePath } from "@/lib/site";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { LanguageToggle } from "@/components/i18n/LanguageToggle";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const { t, nav } = useI18n();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const didOpen = useRef(false);

  // Scroll-aware header: solid + shadow once the page is scrolled.
  const { scrollY, scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => setScrolled(latest > 12));

  // Body scroll lock + Escape-to-close while the menu is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Return focus to the toggle when the menu closes.
  useEffect(() => {
    if (!open && didOpen.current) toggleRef.current?.focus();
  }, [open]);

  const close = () => {
    didOpen.current = true;
    setOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 border-b backdrop-blur-md transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled
          ? "border-line bg-paper/95 shadow-[0_8px_30px_rgba(26,26,26,0.07)]"
          : "border-transparent bg-paper/0"
      }`}
    >
      <motion.div
        aria-hidden="true"
        style={{ scaleX: scrollYProgress }}
        className="absolute inset-x-0 top-0 h-[2px] origin-left bg-gold"
      />
      <div className="container-site flex h-16 items-center justify-between gap-6 md:h-20">
        <Link
          href="/"
          className="inline-flex items-center"
          aria-label="VIVAME Design — home"
        >
          <Image
            src={withBasePath("/images/logo.webp")}
            alt="VIVAME Design"
            width={489}
            height={257}
            priority
            className="h-8 w-auto md:h-9"
          />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden items-center gap-7 xl:flex">
          {nav.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-2 text-[0.78rem] font-medium uppercase tracking-[0.14em] transition-colors ${
                  active ? "text-ink" : "text-stone hover:text-ink"
                }`}
              >
                {item.label}
                {active && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-0.5 h-px bg-ink"
                  />
                )}
              </Link>
            );
          })}
          <LanguageToggle className="text-ink" />
          <Link href={site.cta.href} className="btn btn-dark btn-sm ml-1">
            {t("cta.startProject")}
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          ref={toggleRef}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => {
            didOpen.current = true;
            setOpen((v) => !v);
          }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile navigation — animated height + visibility */}
      <nav
        id="mobile-menu"
        aria-label="Mobile"
        className={`overflow-hidden border-line transition-all duration-300 ease-in-out xl:hidden ${
          open
            ? "visible max-h-[640px] border-t opacity-100"
            : "invisible max-h-0 opacity-0"
        }`}
      >
        <div className="container-site flex flex-col py-4">
          {nav.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                aria-current={active ? "page" : undefined}
                className={`border-b border-line py-4 text-[0.95rem] font-medium uppercase tracking-[0.14em] ${
                  active ? "text-ink" : "text-stone"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="flex items-center justify-between py-4">
            <span className="text-[0.7rem] uppercase tracking-[0.2em] text-faint">
              Language
            </span>
            <LanguageToggle className="text-ink" />
          </div>
          <Link href={site.cta.href} onClick={close} className="btn btn-dark mt-2">
            {t("cta.startProject")}
          </Link>
        </div>
      </nav>
    </header>
  );
}
