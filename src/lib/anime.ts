"use client";

import { useEffect, useRef, useState } from "react";
import { animate, svg } from "animejs";

/**
 * Anime.js integration — used for SVG line-drawing and timeline orchestration
 * where it adds value over the existing Motion-based system. Motion (Framer
 * Motion) continues to own scroll reveals, parallax, floats, and page
 * transitions; Anime.js handles stroke "draw-in" effects and precise
 * timelines.
 */

/** True when the user prefers reduced motion (matchMedia on the client). */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export interface DrawInOptions {
  /** Draw duration in ms. */
  duration?: number;
  /** Per-element stagger in ms. */
  stagger?: number;
  /** Initial delay in ms (e.g. to play after the splash screen). */
  delay?: number;
  /** IntersectionObserver threshold. */
  threshold?: number;
  /** Easing name. */
  ease?: string;
}

/**
 * Draws the SVG line-art (path / line / rect / circle / polyline / polygon)
 * inside the referenced element when it enters the viewport — a one-shot,
 * scroll-triggered stroke "sketch" reveal. Skips when reduced motion is
 * preferred. Returns a ref to attach to the container.
 */
export function useDrawIn<T extends HTMLElement = HTMLDivElement>(
  options: DrawInOptions = {},
) {
  const ref = useRef<T | null>(null);
  const {
    duration = 1400,
    stagger = 55,
    delay = 0,
    threshold = 0.2,
    ease = "inOutSine",
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const targets = el.querySelectorAll<SVGGeometryElement>(
      "path, line, rect, circle, polyline, polygon",
    );
    if (!targets.length) return;

    let instance: ReturnType<typeof animate> | undefined;

    const run = () => {
      const drawable = svg.createDrawable(Array.from(targets));
      instance = animate(drawable, {
        draw: ["0 0", "0 1"],
        duration,
        ease,
        delay: (_el, i) => delay + (i ?? 0) * stagger,
      });
    };

    // Fall back to drawing immediately when IntersectionObserver is absent.
    if (typeof IntersectionObserver === "undefined") {
      run();
      return () => {
        instance?.pause();
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            run();
            observer.disconnect();
            break;
          }
        }
      },
      { threshold },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      instance?.pause();
    };
  }, [duration, stagger, delay, threshold, ease]);

  return ref;
}

export interface StaggerInOptions {
  /** IntersectionObserver threshold. Keep 0 for tall containers — a % threshold
   *  can never be met when the container is taller than the viewport (e.g. the
   *  mobile single-column portfolio grid). */
  threshold?: number;
}

/**
 * Scroll-triggered staggered reveal for the direct children of the referenced
 * container. Pair with the `.stagger-reveal` class on the container and add the
 * returned `inView` as an `.is-visible` class; a CSS transition (plus a
 * per-child `transition-delay`) does the reveal. CSS transitions are used
 * instead of a JS animation so the reveal is reliable and never leaves content
 * stuck hidden. Returns `{ ref, inView }`.
 */
export function useStaggerIn<T extends HTMLElement = HTMLDivElement>(
  options: StaggerInOptions = {},
  trigger?: unknown,
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  const { threshold = 0 } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      const id = requestAnimationFrame(() => setInView(true));
      return () => cancelAnimationFrame(id);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold },
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold, trigger]);

  return { ref, inView };
}
