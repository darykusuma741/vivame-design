"use client";

import { motion } from "motion/react";
import { EASE } from "@/components/ui/motion";

/**
 * Page-transition wrapper. App Router re-mounts <template> on every
 * navigation (while <layout> persists), so this fades/rises the incoming page
 * content — keeping the Header/Footer stable. Honors prefers-reduced-motion
 * via the root <MotionProvider>.
 */
export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
