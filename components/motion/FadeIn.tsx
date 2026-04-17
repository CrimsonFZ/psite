"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";

interface FadeInProps extends Omit<HTMLMotionProps<"div">, "initial" | "animate" | "whileInView" | "viewport" | "transition"> {
  children: ReactNode;
  /** Vertical offset in px before entering. Default 14. */
  y?: number;
  /** Delay in seconds. */
  delay?: number;
  /** Duration in seconds. Default 0.6. */
  duration?: number;
  /** If true, animate on mount instead of on scroll-into-view. */
  onMount?: boolean;
  className?: string;
}

/**
 * Unified entrance animation — fade + short slide-up.
 * Respects prefers-reduced-motion (skips translation entirely).
 * Keep usage restrained: one FadeIn per section, no chained stagger for headings.
 */
export function FadeIn({
  children,
  y = 14,
  delay = 0,
  duration = 0.6,
  onMount = false,
  className,
  ...rest
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();
  const offset = prefersReducedMotion ? 0 : y;

  const initial = { opacity: 0, y: offset };
  const visible = { opacity: 1, y: 0 };
  const transition = {
    duration,
    delay,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  if (onMount) {
    return (
      <motion.div
        className={className}
        initial={initial}
        animate={visible}
        transition={transition}
        {...rest}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={visible}
      viewport={{ once: true, amount: 0.2 }}
      transition={transition}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
