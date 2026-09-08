'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Reveal, RevealWords } from '@/components/ui/Reveal';
import { Blob, BlobSmall } from '@/components/doodles/Blob';
import { ArrowCurveDownRight, ArrowLoop, PaperPlane } from '@/components/doodles/Arrows';
import {
  GrowthChart,
  Lightbulb,
  MarkerUnderline,
  Smiley,
  Ticks,
} from '@/components/doodles/Marks';
import { HeroPortrait } from '@/components/illustration/HeroPortrait';

const pillars = ['Strategy', 'Creative', 'Technology', 'Real Results'];

/**
 * The hero is composed as one spread, not two columns: the figure's column
 * pulls left under the headline, the blob bleeds past its own column, and the
 * annotations cross the seam between them. Everything still sits on the page
 * grid — it just doesn't line up with it.
 */
export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative isolate overflow-hidden pb-2 pt-5 md:pt-7 lg:pb-8">
      {/* Faint paper wash so the hero reads as a page, not a screen. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-[72%] bg-gradient-to-b from-blue-50 to-transparent"
      />
      {/* Blue shape bleeding in from the left margin, cropped by the viewport. */}
      <BlobSmall className="doodle -left-40 top-[48%] -z-10 hidden h-40 w-64 rotate-[24deg] text-blue-200 lg:block" />

      <div className="shell">
        <div className="grid items-center gap-y-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-x-0">
          {/* ---------------------------------------------------------- */}
          {/* Left — the headline spread                                  */}
          {/* ---------------------------------------------------------- */}
          <div className="relative z-20 pt-1 lg:pt-0 lg:pr-2">
            {/* "Hey there!" tag */}
            <Reveal delay={0.05} y={12} className="mb-3 flex items-center gap-3 md:mb-4">
              <span className="tilt-1 inline-block rounded-[1.1rem_0.9rem_1.2rem_0.8rem/0.9rem_1.2rem_0.8rem_1.1rem] bg-blue px-4 py-1.5 font-hand text-xl font-bold text-white shadow-blue-lift md:text-2xl">
                Hey there!
              </span>
              <PaperPlane className="h-6 w-7 -rotate-12 text-blue md:h-7 md:w-8" delay={0.4} />
            </Reveal>

            {/* Headline. Three lines, three scales, three angles — "Brands"
                is the focal point and the other two lean around it. */}
            <h1 className="marker leading-[0.84] text-ink">
              <span className="block origin-left -rotate-[1.2deg] text-[clamp(2.4rem,7.2vw,5.4rem)]">
                <RevealWords text="We Build" delay={0.15} />
              </span>
              <span className="-mt-[0.05em] block origin-left rotate-[0.8deg] text-[clamp(3.4rem,10.8vw,8rem)] text-blue">
                <RevealWords text="Brands" delay={0.3} />
              </span>
              <span className="-mt-[0.06em] block pl-[0.5em] text-[clamp(2rem,6vw,4.5rem)]">
                <span className="relative inline-block origin-left -rotate-[0.7deg]">
                  <RevealWords text="That Grow." delay={0.42} />
                  <MarkerUnderline
                    className="absolute -bottom-[0.12em] -left-[0.04em] h-[0.17em] w-[1.06em] min-w-full text-blue"
                    delay={1.05}
                  />
                </span>
              </span>
            </h1>

            {/* Pillars + supporting copy + CTAs */}
            <div className="mt-9 flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-7 md:mt-11">
              {/* Handwritten pillar list, sitting in the left margin */}
              <Reveal delay={0.75} y={16} className="relative shrink-0">
                <ul className="flex flex-wrap gap-x-5 gap-y-1 sm:block sm:space-y-1.5">
                  {pillars.map((pillar, i) => (
                    <li
                      key={pillar}
                      className="flex items-baseline gap-1.5"
                      // Each line drifts a little further right, like a list
                      // written by hand rather than set on a grid.
                      style={{ marginLeft: `${i * 5}px` }}
                    >
                      <span className="font-hand text-lg font-bold text-blue">&gt;</span>
                      <span className="annotation text-[1.3rem] uppercase leading-none md:text-[1.4rem]">
                        {pillar}
                      </span>
                    </li>
                  ))}
                </ul>
                <svg
                  viewBox="0 0 150 10"
                  fill="none"
                  className="ml-3 mt-1.5 hidden h-2.5 w-[9.5rem] text-blue sm:block"
                  aria-hidden="true"
                >
                  <path
                    d="M3 6C34 2 96 2 146 5"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
                {/* Margin smiley, tucked into the gutter beside the list */}
                <Smiley className="doodle -left-[3.6rem] top-3 hidden h-12 w-12 text-ink xl:block" delay={0.9} />
              </Reveal>

              <div className="max-w-lg">
                <Reveal delay={0.82} y={16}>
                  <p className="text-pretty text-[1.0625rem] leading-relaxed text-ink-muted md:text-lg">
                    A brand management agency helping ambitious businesses grow through
                    strategy, creative and AI.
                  </p>
                </Reveal>

                <Reveal delay={0.92} y={16} className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-4">
                  <Button href="#contact" variant="primary" size="lg" withArrow>
                    Let&apos;s Build Your Brand
                  </Button>

                  <a
                    href="#work"
                    className="group/btn inline-flex items-center gap-3 text-[0.95rem] font-semibold text-ink transition-colors hover:text-blue"
                  >
                    <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-full ring-[1.5px] ring-ink/20 transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:ring-blue">
                      <svg viewBox="0 0 14 16" fill="currentColor" className="ml-0.5 h-3.5 w-3" aria-hidden="true">
                        <path d="M1.5 1.2a.9.9 0 0 1 1.36-.77l9.2 5.6a.9.9 0 0 1 0 1.54l-9.2 5.6A.9.9 0 0 1 1.5 12.4V1.2Z" />
                      </svg>
                    </span>
                    Watch Our Work
                  </a>
                </Reveal>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------------------- */}
          {/* Right — the figure, pulled left so it shares space with the */}
          {/* headline instead of sitting in its own column.              */}
          {/* ---------------------------------------------------------- */}
          <div className="relative z-10 mx-auto w-full max-w-[34rem] lg:-ml-14 lg:max-w-none xl:-ml-20">
            <div className="relative px-[8%] pt-12 sm:pt-14 lg:px-0 lg:pt-4">
              {/* Blob deliberately overruns its column on both sides. */}
              <Blob className="doodle -left-[7%] top-[9%] h-[94%] w-[112%] text-blue" />

              {/* The figure */}
              <HeroPortrait className="relative z-10 mx-auto w-full max-w-[30rem]" />

              {/* --- Annotations that cross into the figure ---------- */}

              {/* "Ideas to impact": the arrow lands on the blob itself. */}
              <motion.div
                className="doodle -left-4 top-0 z-20 w-[9rem] sm:w-[11rem] lg:-left-20"
                initial={reduceMotion ? undefined : { opacity: 0, y: 10 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <p className="annotation tilt-3 text-xl uppercase leading-[0.95] sm:text-2xl">
                  Ideas
                  <br />
                  to impact
                </p>
                <ArrowCurveDownRight
                  className="mt-1 h-16 w-28 rotate-[6deg] text-ink sm:h-20 sm:w-36"
                  delay={1.2}
                  width={3.2}
                />
              </motion.div>

              {/* Lightbulb, tucked against the blob's top edge */}
              <Lightbulb
                className="doodle right-[48%] top-[2%] z-20 h-14 w-12 text-ink sm:right-[30%] sm:h-16 sm:w-14"
                delay={1.35}
              />
              <Ticks className="doodle right-[45%] top-[1%] z-20 h-8 w-6 text-blue sm:right-[27%]" delay={1.55} />

              {/* Sticky note, pinned over the blob's shoulder */}
              <motion.div
                className="doodle -right-2 top-[6%] z-20 w-[9rem] rotate-[5deg] rounded-sm note-paper px-3 py-2.5 sm:w-[10.5rem]"
                initial={reduceMotion ? undefined : { opacity: 0, scale: 0.85, rotate: 13 }}
                animate={reduceMotion ? undefined : { opacity: 1, scale: 1, rotate: 5 }}
                transition={{ delay: 1, duration: 0.5, ease: [0.34, 1.4, 0.64, 1] }}
              >
                <p className="annotation text-lg uppercase leading-[0.95] text-ink sm:text-xl">
                  Brands
                  <br />
                  people
                  <br />
                  remember
                </p>
              </motion.div>

              {/* Growth chart + "more than marketing", straddling the blob edge */}
              <div className="doodle -right-6 top-[48%] z-20 hidden w-[8rem] sm:block">
                <GrowthChart className="ml-auto h-14 w-16 text-ink" delay={1.5} />
                <p className="annotation mt-2 text-right text-lg uppercase leading-[0.95] sm:text-xl">
                  More
                  <br />
                  than
                  <br />
                  marketing
                </p>
              </div>

              {/* Energy ticks flicking off the figure's head — the one mark
                  that sits on the blob, and it reads as a thought landing. */}
              <Ticks
                className="doodle left-[27%] top-[15%] z-20 hidden h-10 w-7 -scale-x-100 text-white lg:block"
                delay={1.6}
                width={3.2}
              />

              {/* Flourish */}
              <ArrowLoop
                className="doodle -bottom-3 right-[10%] z-20 hidden h-16 w-14 text-blue lg:block"
                delay={1.7}
                width={2.6}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
