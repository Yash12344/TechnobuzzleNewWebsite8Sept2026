'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Doodle, DrawnPath } from './Doodle';

type MarkProps = { className?: string; delay?: number; width?: number };

/**
 * Thick brush swipe that sits under a headline word.
 *
 * Filled rather than stroked — a marker stroke tapers, a stroked line can't.
 * It wipes in from the left so it reads as being drawn.
 */
export function MarkerUnderline({ className, delay = 0 }: { className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.svg
      viewBox="0 0 300 22"
      preserveAspectRatio="none"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
      initial={reduceMotion ? undefined : { scaleX: 0, opacity: 0 }}
      whileInView={reduceMotion ? undefined : { scaleX: 1, opacity: 1 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ originX: 0 }}
    >
      <path
        d="M3 12C68 4 178 1 296 5C298 5 298 11 294 11.6C196 9 82 11 9 20C4 20.6 1 16 3 12Z"
        fill="currentColor"
      />
    </motion.svg>
  );
}

/** Two quick pen strokes under a small heading. */
export function ScribbleUnderline({ className, delay = 0, width = 3 }: MarkProps) {
  return (
    <Doodle viewBox="0 0 180 22" className={className}>
      <DrawnPath d="M4 8C46 3 118 3 172 7" width={width} delay={delay} duration={0.5} />
      <DrawnPath d="M14 17C56 12 116 13 158 16" width={width - 0.8} delay={delay + 0.18} duration={0.5} />
    </Doodle>
  );
}

/** Loose oval scribbled around a word or number. */
export function ScribbleCircle({ className, delay = 0, width = 2.6 }: MarkProps) {
  return (
    <Doodle viewBox="0 0 200 112" className={className} preserveAspectRatio="none">
      <DrawnPath
        d="M104 8C54 4 11 26 7 54C3 82 44 104 104 104C164 104 195 80 192 52C189 26 150 6 100 9"
        width={width}
        delay={delay}
        duration={1.2}
      />
      <DrawnPath
        d="M192 52C198 84 148 108 90 105"
        width={width - 0.6}
        delay={delay + 0.6}
        duration={0.6}
      />
    </Doodle>
  );
}

/** Four-point sparkle — the "this matters" mark. */
export function Sparkle({ className, delay = 0 }: { className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
      initial={reduceMotion ? undefined : { scale: 0, rotate: -45, opacity: 0 }}
      whileInView={reduceMotion ? undefined : { scale: 1, rotate: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.5, delay, ease: [0.34, 1.56, 0.64, 1] }}
    >
      <path
        d="M24 1.5C26.2 13.8 34.2 21.8 46.5 24C34.2 26.2 26.2 34.2 24 46.5C21.8 34.2 13.8 26.2 1.5 24C13.8 21.8 21.8 13.8 24 1.5Z"
        fill="currentColor"
      />
    </motion.svg>
  );
}

/** Five-point outline star. */
export function Star({ className, delay = 0, width = 2.6 }: MarkProps) {
  return (
    <Doodle viewBox="0 0 48 48" className={className}>
      <DrawnPath
        d="M24 4L29.8 18.6L45.5 19.6L33.4 29.8L37.2 45L24 36.4L10.8 45L14.6 29.8L2.5 19.6L18.2 18.6L24 4Z"
        width={width}
        delay={delay}
        duration={1}
      />
    </Doodle>
  );
}

/** Little smiley — one per page, in the hero margin. */
export function Smiley({ className, delay = 0, width = 3 }: MarkProps) {
  return (
    <Doodle viewBox="0 0 64 64" className={className}>
      <DrawnPath
        d="M32 4C16.5 4 4 16.5 4 32C4 47.5 16.5 60 32 60C47.5 60 60 47.5 60 32C60 16.5 47.5 4 32 4Z"
        width={width}
        delay={delay}
        duration={1.1}
      />
      <DrawnPath d="M22 24V28" width={width + 0.5} delay={delay + 0.7} duration={0.2} />
      <DrawnPath d="M42 24V28" width={width + 0.5} delay={delay + 0.8} duration={0.2} />
      <DrawnPath d="M20 38C24 46 40 46 44 38" width={width} delay={delay + 0.9} duration={0.4} />
    </Doodle>
  );
}

/** Lightning bolt — outline, never filled neon. */
export function Bolt({ className, delay = 0, width = 2.8 }: MarkProps) {
  return (
    <Doodle viewBox="0 0 48 64" className={className}>
      <DrawnPath
        d="M28 3L8 35H21L17 61L40 27H26L28 3Z"
        width={width}
        delay={delay}
        duration={1}
      />
    </Doodle>
  );
}

/** Wavy line used as a section divider or margin flourish. */
export function Squiggle({ className, delay = 0, width = 3 }: MarkProps) {
  return (
    <Doodle viewBox="0 0 160 24" className={className}>
      <DrawnPath
        d="M4 14C16 2 28 22 40 12C52 2 64 22 76 12C88 2 100 22 112 12C124 2 136 22 156 10"
        width={width}
        delay={delay}
        duration={1.1}
      />
    </Doodle>
  );
}

/** Three emphasis ticks — the marks that fly off something in motion. */
export function Ticks({ className, delay = 0, width = 3 }: MarkProps) {
  return (
    <Doodle viewBox="0 0 40 56" className={className}>
      <DrawnPath d="M4 12L20 5" width={width} delay={delay} duration={0.25} />
      <DrawnPath d="M2 27L22 26" width={width} delay={delay + 0.1} duration={0.25} />
      <DrawnPath d="M5 44L22 48" width={width} delay={delay + 0.2} duration={0.25} />
    </Doodle>
  );
}

/** Small heart, for the testimonials label. */
export function Heart({ className, delay = 0, width = 3 }: MarkProps) {
  return (
    <Doodle viewBox="0 0 48 48" className={className}>
      <DrawnPath
        d="M24 42C24 42 4 30.5 4 17.5C4 10.6 9.2 5.5 15.4 5.5C19.2 5.5 22.3 7.5 24 10.4C25.7 7.5 28.8 5.5 32.6 5.5C38.8 5.5 44 10.6 44 17.5C44 30.5 24 42 24 42Z"
        width={width}
        delay={delay}
        duration={1}
      />
    </Doodle>
  );
}

/** Rising bar chart with a trend arrow — the growth mark. */
export function GrowthChart({ className, delay = 0, width = 3 }: MarkProps) {
  return (
    <Doodle viewBox="0 0 76 64" className={className}>
      <DrawnPath d="M8 56H70" width={width} delay={delay} duration={0.4} />
      <DrawnPath d="M16 56V44" width={width + 2} delay={delay + 0.2} duration={0.3} />
      <DrawnPath d="M32 56V34" width={width + 2} delay={delay + 0.3} duration={0.3} />
      <DrawnPath d="M48 56V24" width={width + 2} delay={delay + 0.4} duration={0.3} />
      <DrawnPath d="M64 56V12" width={width + 2} delay={delay + 0.5} duration={0.3} />
      <DrawnPath d="M10 32C22 26 34 20 52 6" width={width - 0.6} delay={delay + 0.7} duration={0.5} />
      <DrawnPath d="M40 6H53V19" width={width - 0.6} delay={delay + 1} duration={0.3} />
    </Doodle>
  );
}

/** Lightbulb with a burst of rays — the idea mark. */
export function Lightbulb({ className, delay = 0, width = 2.8 }: MarkProps) {
  return (
    <Doodle viewBox="0 0 64 76" className={className}>
      <DrawnPath
        d="M32 14C21 14 13 22 13 32C13 39 18 43 20 49H44C46 43 51 39 51 32C51 22 43 14 32 14Z"
        width={width}
        delay={delay}
        duration={0.9}
      />
      <DrawnPath d="M22 56H42" width={width} delay={delay + 0.5} duration={0.2} />
      <DrawnPath d="M25 64H39" width={width} delay={delay + 0.6} duration={0.2} />
      <DrawnPath d="M32 6V0.5" width={width} delay={delay + 0.7} duration={0.2} />
      <DrawnPath d="M9 14L5 10" width={width} delay={delay + 0.78} duration={0.2} />
      <DrawnPath d="M55 14L59 10" width={width} delay={delay + 0.86} duration={0.2} />
      <DrawnPath d="M4 34H0" width={width} delay={delay + 0.94} duration={0.2} />
      <DrawnPath d="M60 34H64" width={width} delay={delay + 1.02} duration={0.2} />
    </Doodle>
  );
}

/** Thumbs up — sits beside the testimonial strip. */
export function ThumbsUp({ className, delay = 0, width = 3 }: MarkProps) {
  return (
    <Doodle viewBox="0 0 64 68" className={className}>
      <DrawnPath
        d="M17 30H7C4.8 30 3 31.8 3 34V60C3 62.2 4.8 64 7 64H17V30Z"
        width={width}
        delay={delay}
        duration={0.8}
      />
      <DrawnPath
        d="M17 30L28 8C30 4 37 5 38 11L36 28H52C56.4 28 59.6 32 58.6 36.3L53.6 58C52.8 61.5 49.8 64 46.2 64H17V30Z"
        width={width}
        delay={delay + 0.35}
        duration={1}
      />
    </Doodle>
  );
}

/** Confetti flecks — small, used once, near the testimonials. */
export function Confetti({ className, delay = 0, width = 3 }: MarkProps) {
  return (
    <Doodle viewBox="0 0 56 56" className={className}>
      <DrawnPath d="M6 44L14 20" width={width} delay={delay} duration={0.3} />
      <DrawnPath d="M20 48L26 14" width={width} delay={delay + 0.1} duration={0.3} />
      <DrawnPath d="M34 46L38 18" width={width} delay={delay + 0.2} duration={0.3} />
      <DrawnPath d="M46 42L50 24" width={width} delay={delay + 0.3} duration={0.3} />
    </Doodle>
  );
}

/** Irregular ring — drawn around step icons so they read as sketched, not iconed. */
export function HandRing({ className, delay = 0, width = 2.6 }: MarkProps) {
  return (
    <Doodle viewBox="0 0 80 80" className={className}>
      <DrawnPath
        d="M42 5C61 4 76 21 75 41C74 60 58 76 39 75C20 74 5 58 5 39C5 20 21 6 42 5"
        width={width}
        delay={delay}
        duration={1.1}
      />
    </Doodle>
  );
}

/**
 * Rough painted block that sits behind a highlighted word.
 *
 * Filled rather than stroked, with deliberately uneven edges — at display
 * sizes a CSS rounded rectangle reads as a button, this reads as a brush.
 */
export function BrushBox({ className, delay = 0 }: { className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.svg
      viewBox="0 0 400 120"
      preserveAspectRatio="none"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
      initial={reduceMotion ? undefined : { scaleX: 0, opacity: 0 }}
      whileInView={reduceMotion ? undefined : { scaleX: 1, opacity: 1 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ originX: 0 }}
    >
      <path
        d="M9 22C88 9 206 3 332 9C374 11 393 15 396 28C399 49 395 83 390 101C387 113 369 118 329 116C207 110 94 115 25 111C10 110 3 102 4 85C5 62 2 36 9 22Z"
        fill="currentColor"
      />
    </motion.svg>
  );
}

/**
 * A single rising line drawn under the impact numbers, touching down at each
 * one. It is the section's one growth idea: the figures stop being four
 * separate stats and become a trend.
 *
 * The viewBox aspect is deliberately close to the rendered box so the dots and
 * arrowhead barely distort when it stretches to the metrics row.
 */
function TrendPoints({ delay }: { delay: number }) {
  const reduceMotion = useReducedMotion();
  const points: Array<[number, number]> = [
    [100, 75],
    [300, 58],
    [500, 33],
    [700, 13],
  ];

  return (
    <>
      {points.map(([cx, cy], i) => (
        <motion.circle
          key={cx}
          cx={cx}
          cy={cy}
          r="6"
          fill="currentColor"
          initial={reduceMotion ? undefined : { opacity: 0 }}
          whileInView={reduceMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.25, delay: delay + 0.35 + i * 0.3 }}
        />
      ))}
    </>
  );
}

export function RisingTrend({ className, delay = 0, width = 2.8 }: MarkProps) {
  return (
    <Doodle viewBox="0 0 800 82" className={className} preserveAspectRatio="none">
      <DrawnPath
        d="M30 77C130 76 200 69 270 60C350 49 410 41 480 33C560 24 660 16 760 8"
        width={width}
        delay={delay}
        duration={1.6}
      />
      {/* Ghost pass, slightly off-register. */}
      <DrawnPath
        className="opacity-30"
        d="M34 81C132 80 204 73 272 64C352 53 412 45 482 37C562 28 662 20 758 12"
        width={width - 1}
        delay={delay + 0.15}
        duration={1.6}
      />
      <DrawnPath d="M747 16L761 8L745 3" width={width} delay={delay + 1.3} duration={0.3} />
      {/* Touch-down points sit under each metric column. Driven by the same
          motion primitive as every other doodle so they honour reduced motion
          and fire on scroll rather than page load. */}
      <TrendPoints delay={delay} />
    </Doodle>
  );
}
