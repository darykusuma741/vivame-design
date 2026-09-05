"use client";

import { motion, MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/** Signature easing shared across all motion (Animate-UI-style). */
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Respect the user's OS reduced-motion preference globally. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

/** Fade + rise + de-blur on scroll into view (the "blur-fade" primitive). */
export function BlurFade({
  children,
  className,
  delay = 0,
  y = 24,
  duration = 0.8,
}: {
  children: ReactNode;
  className?: string;
  /** Seconds. */
  delay?: number;
  y?: number;
  duration?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
