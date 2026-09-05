"use client";

import { motion } from "motion/react";
import { EASE } from "@/components/ui/motion";

/**
 * Scroll-triggered reveal — now Motion-powered (blur-fade). Keeps the exact
 * same API (`children`, `className`, `delay`) so every existing <Reveal> call
 * site upgrades automatically. Honors prefers-reduced-motion via the root
 * <MotionProvider reducedMotion="user">.
 */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  /** Milliseconds (backward-compatible with the old CSS transition-delay). */
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.7, delay: delay / 1000, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
