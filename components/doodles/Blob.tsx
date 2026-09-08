'use client';

import { motion, useReducedMotion } from 'framer-motion';

/**
 * The organic blue shape that sits behind the hero portrait.
 *
 * It breathes very slightly — enough to feel alive, not enough to distract
 * from the headline sitting next to it.
 */
export function Blob({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.svg
      viewBox="0 0 600 620"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
      initial={reduceMotion ? undefined : { scale: 0.86, opacity: 0 }}
      animate={reduceMotion ? undefined : { scale: 1, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.path
        d="M302 14C424 6 542 74 570 184C598 292 552 358 574 452C594 540 512 604 392 610C272 616 162 598 90 540C14 478 2 378 26 282C50 184 122 88 202 46C232 30 266 18 302 14Z"
        fill="currentColor"
        animate={
          reduceMotion
            ? undefined
            : { borderRadius: undefined, scale: [1, 1.02, 0.99, 1], rotate: [0, 1.2, -0.6, 0] }
        }
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '300px 310px' }}
      />
    </motion.svg>
  );
}

/** Smaller companion blob used behind section labels. */
export function BlobSmall({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 140" fill="none" className={className} aria-hidden="true" focusable="false">
      <path
        d="M96 4C142 0 186 20 194 56C202 92 172 126 118 134C64 142 18 128 6 96C-6 64 14 26 56 12C68 8 82 5 96 4Z"
        fill="currentColor"
      />
    </svg>
  );
}
