'use client';

import { Doodle, DrawnPath } from './Doodle';

type MarkProps = { className?: string; delay?: number; width?: number };

/** Sweeping arrow that curves down and to the right. */
export function ArrowCurveDownRight({ className, delay = 0, width = 3 }: MarkProps) {
  return (
    <Doodle viewBox="0 0 130 100" className={className}>
      <DrawnPath d="M8 12C46 4 89 25 106 66" width={width} delay={delay} />
      <DrawnPath d="M93 56L106 67L109 50" width={width} delay={delay + 0.45} duration={0.35} />
    </Doodle>
  );
}

/** Sweeping arrow that curves down and to the left. */
export function ArrowCurveDownLeft({ className, delay = 0, width = 3 }: MarkProps) {
  return (
    <Doodle viewBox="0 0 130 100" className={className}>
      <DrawnPath d="M122 12C84 4 41 25 24 66" width={width} delay={delay} />
      <DrawnPath d="M37 56L24 67L21 50" width={width} delay={delay + 0.45} duration={0.35} />
    </Doodle>
  );
}

/** Long horizontal arrow with a hand-drawn wobble — connects process steps. */
export function ArrowWobbleRight({ className, delay = 0, width = 3 }: MarkProps) {
  return (
    <Doodle viewBox="0 0 108 32" className={className}>
      <DrawnPath d="M3 21C17 8 32 26 48 16C61 8 74 12 92 15" width={width} delay={delay} />
      <DrawnPath d="M82 7L93 15L82 23" width={width} delay={delay + 0.45} duration={0.3} />
    </Doodle>
  );
}

/** Vertical wobble arrow — the mobile counterpart of ArrowWobbleRight. */
export function ArrowWobbleDown({ className, delay = 0, width = 3 }: MarkProps) {
  return (
    <Doodle viewBox="0 0 32 88" className={className}>
      <DrawnPath d="M20 3C8 16 26 30 16 45C9 56 13 66 15 76" width={width} delay={delay} />
      <DrawnPath d="M7 66L15 77L24 67" width={width} delay={delay + 0.45} duration={0.3} />
    </Doodle>
  );
}

/** Tight arrow that bends left and points back at the element beside it. */
export function ArrowBendLeft({ className, delay = 0, width = 3 }: MarkProps) {
  return (
    <Doodle viewBox="0 0 110 70" className={className}>
      <DrawnPath d="M104 8C92 34 68 50 20 52" width={width} delay={delay} />
      <DrawnPath d="M36 41L19 52L36 62" width={width} delay={delay + 0.45} duration={0.35} />
    </Doodle>
  );
}

/** Loop-the-loop flourish — used sparingly, once per page at most. */
export function ArrowLoop({ className, delay = 0, width = 3 }: MarkProps) {
  return (
    <Doodle viewBox="0 0 90 96" className={className}>
      <DrawnPath
        d="M14 6C42 2 62 18 58 38C56 51 40 56 33 47C26 38 36 26 50 28C68 30 78 48 76 88"
        width={width}
        delay={delay}
        duration={1.3}
      />
      <DrawnPath d="M67 76L76 90L86 78" width={width} delay={delay + 0.9} duration={0.3} />
    </Doodle>
  );
}

/** Small paper-plane mark, drawn rather than filled. */
export function PaperPlane({ className, delay = 0, width = 2.6 }: MarkProps) {
  return (
    <Doodle viewBox="0 0 64 56" className={className}>
      <DrawnPath d="M4 26L58 4L40 52L29 34L4 26Z" width={width} delay={delay} duration={1} />
      <DrawnPath d="M29 34L58 4" width={width} delay={delay + 0.6} duration={0.4} />
    </Doodle>
  );
}

/**
 * One continuous line drawn straight across the process row, with arrowheads
 * where it passes between steps — so the sequence reads as a single gesture
 * rather than three separate connectors.
 */
export function ProcessTrail({ className, delay = 0, width = 2.8 }: MarkProps) {
  return (
    <Doodle viewBox="0 0 1000 60" className={className} preserveAspectRatio="none">
      <DrawnPath
        d="M25 34C88 12 142 50 205 32C285 12 345 48 425 30C505 12 575 46 652 30C702 20 742 36 772 30"
        width={width}
        delay={delay}
        duration={1.9}
      />
      <DrawnPath d="M126 22L144 32L126 42" width={width} delay={delay + 0.55} duration={0.25} />
      <DrawnPath d="M376 20L394 30L376 40" width={width} delay={delay + 1.05} duration={0.25} />
      <DrawnPath d="M626 20L644 30L626 40" width={width} delay={delay + 1.5} duration={0.25} />
    </Doodle>
  );
}
