"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { ComponentProps, ReactNode } from "react";

type Motion = {
  /** Offset the element starts from before animating in. */
  x?: number;
  y?: number;
  scale?: number;
  delay?: number;
  duration?: number;
  /** `true` = animate on mount, `false` (default) = animate when scrolled into view. */
  onMount?: boolean;
  margin?: string;
};

function motionProps({
  x = 0,
  y = 20,
  scale,
  delay = 0,
  duration = 0.5,
  onMount = false,
  margin,
}: Motion) {
  const initial = {
    opacity: 0,
    x,
    y,
    ...(scale !== undefined ? { scale } : {}),
  };
  const target = {
    opacity: 1,
    x: 0,
    y: 0,
    ...(scale !== undefined ? { scale: 1 } : {}),
  };
  return {
    initial,
    ...(onMount
      ? { animate: target }
      : { whileInView: target, viewport: { once: true, margin } }),
    transition: { duration, delay, ease: "easeOut" as const },
  };
}

/**
 * Client-only animation wrapper. Server Components wrap static markup in
 * <Reveal> so only the animation (not the whole section) ships as client JS.
 */
export function Reveal({
  children,
  className,
  id,
  ...motionOptions
}: Motion & { children: ReactNode; className?: string; id?: string }) {
  return (
    <motion.div id={id} className={className} {...motionProps(motionOptions)}>
      {children}
    </motion.div>
  );
}

const MotionLink = motion.create(Link);

/** Same as <Reveal>, but the animated element itself is a Next.js <Link>. */
export function RevealLink({
  children,
  className,
  href,
  id,
  ...motionOptions
}: Motion & {
  children: ReactNode;
  className?: string;
  href: ComponentProps<typeof Link>["href"];
  id?: string;
}) {
  return (
    <MotionLink
      id={id}
      href={href}
      className={className}
      {...motionProps(motionOptions)}
    >
      {children}
    </MotionLink>
  );
}
