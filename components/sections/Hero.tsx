'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Reveal, RevealWords } from '@/components/ui/Reveal';
import { Blob } from '@/components/doodles/Blob';
import { ArrowCurveDownRight, ArrowLoop, PaperPlane } from '@/components/doodles/Arrows';
import { GrowthChart, Lightbulb, MarkerUnderline, Smiley, Ticks } from '@/components/doodles/Marks';
import { HeroPortrait } from '@/components/illustration/HeroPortrait';

const pillars = ['Strategy', 'Creative', 'Technology', 'Real Results'];

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative isolate pb-2 pt-5 md:pt-7 lg:pb-6">
      {/* Faint paper wash so the hero reads as a page, not a screen. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-[70%] bg-gradient-to-b from-blue-50 to-transparent"
      />

      <div className="shell">
        <div className="grid items-center gap-y-3 lg:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)] lg:gap-x-3">
          {/* ---------------------------------------------------------- */}
          {/* Left column — the headline block                            */}
          {/* ---------------------------------------------------------- */}
          <div className="relative z-10 pt-1 lg:pt-0">
            {/* "Hey there!" tag */}
            <Reveal delay={0.05} y={12} className="mb-4 flex items-center gap-3">
              <span className="tilt-1 inline-block rounded-[1.1rem_0.9rem_1.2rem_0.8rem/0.9rem_1.2rem_0.8rem_1.1rem] bg-blue px-4 py-1.5 font-hand text-xl font-bold text-white shadow-blue-lift md:text-2xl">
                Hey there!
              </span>
              <PaperPlane className="h-6 w-7 text-blue md:h-7 md:w-8" delay={0.4} />
            </Reveal>

            {/* Headline. Three lines, three sizes — "Brands" carries the most
                weight, exactly as in the reference composition. */}
            <h1 className="marker leading-[0.86] text-ink">
              <span className="block text-[clamp(2.6rem,7.9vw,5.9rem)]">
                <RevealWords text="We Build" delay={0.15} />
              </span>
              <span className="block text-[clamp(3.1rem,9.5vw,7.1rem)] text-blue">
                <RevealWords text="Brands" delay={0.3} />
              </span>
              <span className="block pl-[0.06em] text-[clamp(2.25rem,6.8vw,5.1rem)]">
                <span className="relative inline-block">
                  <RevealWords text="That Grow." delay={0.42} />
                  <MarkerUnderline
                    className="absolute -bottom-[0.09em] left-0 h-[0.15em] w-full text-blue"
                    delay={1.05}
                  />
                </span>
              </span>
            </h1>

            {/* Pillars + supporting copy + CTAs */}
            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-7 md:mt-10">
              {/* Handwritten pillar list, sitting in the left margin */}
              <Reveal delay={0.75} y={16} className="relative shrink-0">
                <ul className="flex flex-wrap gap-x-5 gap-y-1 sm:block sm:space-y-1.5">
                  {pillars.map((pillar) => (
                    <li key={pillar} className="flex items-baseline gap-1.5">
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
                  className="mt-1.5 hidden h-2.5 w-[9.5rem] text-blue sm:block"
                  aria-hidden="true"
                >
                  <path
                    d="M3 6C34 2 96 2 146 5"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
                {/* Margin smiley, tucked to the left of the pillar list */}
                <Smiley
                  className="doodle -left-14 top-4 hidden h-11 w-11 text-ink 2xl:block"
                  delay={0.9}
                />
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
          {/* Right column — portrait, blob and margin annotations        */}
          {/* ---------------------------------------------------------- */}
          <div className="relative mx-auto w-full max-w-[32rem] lg:max-w-none">
            {/* Top padding reserves room for the annotations ringing the figure. */}
            <div className="relative px-[9%] pt-12 sm:pt-14 lg:px-[7%] lg:pt-8">
              {/* Blue organic blob */}
              <Blob className="doodle left-[4%] top-[14%] h-[88%] w-[92%] text-blue" />

              {/* The figure */}
              <HeroPortrait className="relative z-10 mx-auto w-full max-w-[26.5rem]" />

              {/* --- Annotations ------------------------------------ */}

              {/* "Ideas to impact" + arrow pointing at the figure */}
              <motion.div
                className="doodle -left-1 top-0 z-20 w-[8.5rem] sm:w-[10rem]"
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
                  className="mt-1 h-11 w-16 text-ink sm:h-12 sm:w-20"
                  delay={1.2}
                  width={3.2}
                />
              </motion.div>

              {/* Lightbulb */}
              <Lightbulb
                className="doodle right-[30%] top-[1%] z-20 h-12 w-11 text-ink sm:h-14 sm:w-12"
                delay={1.35}
              />
              <Ticks className="doodle right-[27%] top-0 z-20 h-7 w-5 text-blue" delay={1.55} />

              {/* Sticky note */}
              <motion.div
                className="doodle right-0 top-[7%] z-20 w-[8.5rem] rotate-[4deg] rounded-sm note-paper px-3 py-2.5 sm:w-[9.5rem]"
                initial={reduceMotion ? undefined : { opacity: 0, scale: 0.85, rotate: 12 }}
                animate={reduceMotion ? undefined : { opacity: 1, scale: 1, rotate: 4 }}
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

              {/* Growth chart + "more than marketing" */}
              <div className="doodle right-0 top-[50%] z-20 hidden w-[7rem] sm:block">
                <GrowthChart className="ml-auto h-12 w-14 text-ink" delay={1.5} />
                <p className="annotation mt-2 text-right text-lg uppercase leading-[0.95]">
                  More
                  <br />
                  than
                  <br />
                  marketing
                </p>
              </div>

              {/* Flourish */}
              <ArrowLoop
                className="doodle -bottom-2 right-[6%] z-20 hidden h-14 w-12 text-blue lg:block"
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
