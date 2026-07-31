"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, type ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = Boolean(prefersReducedMotion);

  useEffect(() => {
    if (window.location.hash) return;
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={
          reduceMotion
            ? { opacity: 0 }
            : { opacity: 0, y: 12 }
        }
        animate={
          reduceMotion
            ? { opacity: 1, transition: { duration: 0.01 } }
            : { opacity: 1, y: 0, transition: { duration: 0.28, ease: EASE } }
        }
        exit={
          reduceMotion
            ? { opacity: 0, transition: { duration: 0.01 } }
            : { opacity: 0, y: -6, transition: { duration: 0.18, ease: EASE } }
        }
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
