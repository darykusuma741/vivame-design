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

/** Continuous slow vertical float (loops) — for "breathing" background/decoration. */
export function Float({
  children,
  className,
  distance = 16,
  duration = 10,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
  duration?: number;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -distance, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

/** Word-by-word mask reveal — each word slides up out of an overflow-hidden clip. */
export function WordReveal({
  text,
  className,
  delay = 0,
  stagger = 0.055,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          aria-hidden="true"
          className="inline-block overflow-hidden align-bottom pb-[0.18em] -mb-[0.18em]"
        >
          <motion.span
            className="inline-block will-change-transform"
            initial={{ y: "115%", opacity: 0.001 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ delay: delay + i * stagger, duration: 0.7, ease: EASE }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
