'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode, SVGProps } from 'react';

type DoodleProps = {
  /** Positioning + colour. Doodles inherit their stroke from `currentColor`. */
  className?: string;
  viewBox: string;
  children: ReactNode;
  /** Decorative by default; pass a label only if the mark carries meaning. */
  label?: string;
} & Omit<SVGProps<SVGSVGElement>, 'viewBox' | 'children' | 'className'>;

/**
 * Wrapper for every hand-drawn mark on the page.
 *
 * Marks are decorative: they are hidden from assistive tech and never
 * intercept pointer events, so they can be positioned freely over content.
 */
export function Doodle({ className, viewBox, children, label, ...rest }: DoodleProps) {
  return (
    <svg
      viewBox={viewBox}
      fill="none"
      className={className}
      role={label ? 'img' : 'presentation'}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable="false"
      {...rest}
    >
      {label ? <title>{label}</title> : null}
      {children}
    </svg>
  );
}

type DrawnPathProps = {
  d: string;
  /** Stroke weight. Hand-drawn marks read best between 2 and 6. */
  width?: number;
  /** Seconds before the stroke starts drawing itself. */
  delay?: number;
  duration?: number;
  fill?: string;
  strokeLinecap?: 'round' | 'butt' | 'square';
  className?: string;
  /** Draw on scroll-into-view instead of on mount. */
  inView?: boolean;
};

/**
 * A stroke that draws itself, the way a marker would.
 *
 * Falls back to a plain static stroke when the visitor prefers reduced motion.
 */
export function DrawnPath({
  d,
  width = 3,
  delay = 0,
  duration = 0.9,
  fill = 'none',
  strokeLinecap = 'round',
  className,
  inView = true,
}: DrawnPathProps) {
  const reduceMotion = useReducedMotion();

  const shared = {
    d,
    fill,
    stroke: 'currentColor',
    strokeWidth: width,
    strokeLinecap,
    strokeLinejoin: 'round' as const,
    className,
  };

  if (reduceMotion) {
    return <path {...shared} />;
  }

  const animation = { pathLength: 1, opacity: 1 };

  return (
    <motion.path
      {...shared}
      initial={{ pathLength: 0, opacity: 0 }}
      {...(inView
        ? { whileInView: animation, viewport: { once: true, margin: '-10% 0px' } }
        : { animate: animation })}
      transition={{
        pathLength: { duration, delay, ease: [0.22, 1, 0.36, 1] },
        opacity: { duration: 0.01, delay },
      }}
    />
  );
}
