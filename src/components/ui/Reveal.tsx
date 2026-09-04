"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll-triggered reveal. Adds a subtle fade/rise once the element enters
 * the viewport. Honors prefers-reduced-motion via CSS (see globals.css).
 *
 * Initial state is `false` on BOTH server and client so the SSR HTML and the
 * first client render match exactly (avoids hydration mismatch). The element
 * is revealed on the client via IntersectionObserver (or a rAF fallback).
 */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      const id = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(id);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const classes = ["reveal", visible && "is-visible", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={ref}
      className={classes}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
