'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Distance travelled during the reveal, in pixels. */
  y?: number;
  x?: number;
  duration?: number;
  as?: 'div' | 'li' | 'span' | 'section' | 'article' | 'figure';
};

/**
 * Fade-and-rise on scroll into view. Runs once, so scrolling back up doesn't
 * re-trigger the page. Collapses to a plain wrapper under reduced motion.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  x = 0,
  duration = 0.6,
  as = 'div',
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Tag = motion[as];

  if (reduceMotion) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-12% 0px' }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}

/**
 * Word-by-word reveal for the hero headline.
 *
 * Each word is wrapped in an overflow-clipped span so the line reads as if it
 * were written onto the page rather than faded in as a block.
 */
export function RevealWords({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.08,
}: {
  text: string;
  className?: string;
  wordClassName?: (word: string, index: number) => string;
  delay?: number;
  stagger?: number;
}) {
  const reduceMotion = useReducedMotion();
  const words = text.split(' ');

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.06em] align-bottom">
          <motion.span
            className={`inline-block ${wordClassName?.(word, i) ?? ''}`}
            initial={reduceMotion ? undefined : { y: '105%', opacity: 0 }}
            animate={reduceMotion ? undefined : { y: '0%', opacity: 1 }}
            transition={{ duration: 0.7, delay: delay + i * stagger, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? <span className="inline-block">&nbsp;</span> : null}
        </span>
      ))}
    </span>
  );
}
