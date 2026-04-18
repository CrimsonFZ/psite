"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

interface StaggerProps
  extends Omit<
    HTMLMotionProps<"div">,
    "initial" | "animate" | "whileInView" | "viewport" | "variants"
  > {
  children: ReactNode;
  stagger?: number;
  delayChildren?: number;
  onMount?: boolean;
  className?: string;
}

interface StaggerItemProps
  extends Omit<HTMLMotionProps<"div">, "variants"> {
  children: ReactNode;
  y?: number;
  className?: string;
}

export function Stagger({
  children,
  stagger = 0.08,
  delayChildren = 0,
  onMount = false,
  className,
  ...rest
}: StaggerProps) {
  const prefersReducedMotion = useReducedMotion();

  const variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : stagger,
        delayChildren,
      },
    },
  };

  if (onMount) {
    return (
      <motion.div
        className={className}
        variants={variants}
        initial="hidden"
        animate="visible"
        {...rest}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  y = 16,
  className,
  ...rest
}: StaggerItemProps) {
  const prefersReducedMotion = useReducedMotion();

  const variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <motion.div className={className} variants={variants} {...rest}>
      {children}
    </motion.div>
  );
}
