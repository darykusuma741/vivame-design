"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { site, withBasePath } from "@/lib/site";
import { EASE } from "@/components/ui/motion";

/**
 * Full-screen intro overlay: the wordmark blurs/scales in, a gold rule draws,
 * the tagline fades up, then the whole thing recedes to reveal the site.
 */
export function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 2200);
    return () => clearTimeout(t);
  }, []);

  // Lock scroll while the intro is on screen.
  useEffect(() => {
    if (!show) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="splash-screen fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: EASE }}
          >
            <Image
              src={withBasePath("/images/logo.webp")}
              alt="VIVAME Design"
              width={396}
              height={176}
              priority
              className="h-14 w-auto invert mix-blend-screen md:h-20"
            />
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.9, ease: EASE }}
            className="mt-7 h-px w-48 origin-center bg-gold"
            aria-hidden="true"
          />

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.6, ease: EASE }}
            className="mt-5 text-[0.62rem] font-medium uppercase tracking-[0.34em] text-paper/60"
          >
            {site.tagline}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
