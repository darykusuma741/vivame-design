"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const didOpen = useRef(false);

  // Body scroll lock + Escape-to-close while the mobile menu is open.
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
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/85 backdrop-blur-md">
      <div className="container-site flex h-16 items-center justify-between gap-6 md:h-20">
        <Link
          href="/"
          className="inline-flex items-baseline gap-[0.7em] text-ink"
          aria-label="VIVAME Design — home"
        >
          <span className="text-[0.95rem] font-semibold uppercase tracking-[0.34em]">
            {site.name}
          </span>
          <span className="hidden text-[0.62rem] font-medium uppercase tracking-[0.3em] text-faint sm:inline">
            Design
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-2 text-[0.8rem] font-medium uppercase tracking-[0.16em] transition-colors ${
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
          <Link href={site.cta.href} className="btn btn-dark">
            {site.cta.label}
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          ref={toggleRef}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink md:hidden"
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

      {/* Mobile navigation */}
      <nav
        id="mobile-menu"
        aria-label="Mobile"
        hidden={!open}
        className="border-t border-line bg-paper md:hidden"
      >
        <div className="container-site flex flex-col py-4">
          {site.nav.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                aria-current={active ? "page" : undefined}
                className={`border-b border-line/70 py-4 text-[0.95rem] font-medium uppercase tracking-[0.16em] ${
                  active ? "text-ink" : "text-stone"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href={site.cta.href}
            onClick={close}
            className="btn btn-dark mt-6"
          >
            {site.cta.label}
          </Link>
        </div>
      </nav>
    </header>
  );
}
