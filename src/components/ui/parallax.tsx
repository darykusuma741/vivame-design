"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

/**
 * Scroll-linked parallax. Wraps children and shifts/scales them as they move
 * through the viewport (tracked against window scroll). Use inside an
 * `overflow-hidden` container so the effect never reveals gaps.
 */
export function Parallax({
  children,
  className,
  scale = 1,
  y = 0,
}: {
  children: React.ReactNode;
  className?: string;
  /** Max scroll-linked scale (1 = none). e.g. 1.08 for a subtle zoom-parallax. */
  scale?: number;
  /** Max scroll-linked vertical drift in px (positive = enters low, exits high). */
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const s = useTransform(scrollYProgress, [0, 1], [1, scale]);
  const ty = useTransform(scrollYProgress, [0, 1], [y, -y]);

  return (
    <motion.div ref={ref} style={{ scale: s, y: ty }} className={className}>
      {children}
    </motion.div>
  );
}
