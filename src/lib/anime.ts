"use client";

import { useEffect, useRef } from "react";
import { animate, svg, utils } from "animejs";

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

export { animate, svg, utils };
