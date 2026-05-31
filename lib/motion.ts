import type { Variants } from "framer-motion";

export const EASE = [0.4, 0, 0.2, 1] as const;
export const DUR = { fast: 0.15, base: 0.3, slow: 0.5, enter: 0.6 } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: DUR.base, ease: EASE } },
};

export const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export const heroWord: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: DUR.enter, ease: EASE } },
};

export const pageTransition: Variants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: DUR.base, ease: EASE } },
  exit: { opacity: 0, y: -12, transition: { duration: DUR.fast, ease: EASE } },
};

export const hoverLift = { scale: 1.015, transition: { duration: DUR.fast, ease: EASE } };

export const VIEWPORT_ONCE = { once: true, margin: "-100px" } as const;
