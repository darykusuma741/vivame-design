"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { EASE } from "@/components/ui/motion";

function ArrowIcon({ dir }: { dir: "prev" | "next" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`h-5 w-5 ${dir === "prev" ? "" : "rotate-180"}`}
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

/**
 * Minimal, accessible slider. Fade + slide between slides, with prev/next
 * arrows, dots, optional autoplay, keyboard arrows, and touch swipe. Honors
 * prefers-reduced-motion via the root <MotionProvider>.
 */
export function Carousel({
  items,
  className,
  autoPlay = 6000,
  label = "Carousel",
}: {
  items: React.ReactNode[];
  className?: string;
  autoPlay?: number | false;
  label?: string;
}) {
  const count = items.length;
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const touchX = useRef<number | null>(null);

  const go = useCallback(
    (delta: number) => {
      setDir(delta >= 0 ? 1 : -1);
      setIndex((i) => (i + delta + count) % count);
    },
    [count],
  );

  const goTo = useCallback(
    (i: number) => {
      setDir(i > index ? 1 : -1);
      setIndex(i);
    },
    [index],
  );

  useEffect(() => {
    if (autoPlay === false || count <= 1) return;
    const id = window.setInterval(() => go(1), autoPlay);
    return () => window.clearInterval(id);
  }, [autoPlay, count, go]);

  return (
    <div
      className={className}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") go(-1);
        if (e.key === "ArrowRight") go(1);
      }}
    >
      <div
        className="relative overflow-hidden"
        onTouchStart={(e) => {
          touchX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchX.current == null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: dir * 48 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -48 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            {items[index]}
          </motion.div>
        </AnimatePresence>
      </div>

      {count > 1 && (
        <div className="mt-6 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous slide"
            className="flex h-10 w-10 items-center justify-center border border-line text-ink transition-colors hover:border-ink"
          >
            <ArrowIcon dir="prev" />
          </button>

          <div className="flex items-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-7 bg-gold" : "w-1.5 bg-line hover:bg-stone"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next slide"
            className="flex h-10 w-10 items-center justify-center border border-line text-ink transition-colors hover:border-ink"
          >
            <ArrowIcon dir="next" />
          </button>
        </div>
      )}
    </div>
  );
}
