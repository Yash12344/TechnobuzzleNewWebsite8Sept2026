'use client';

import { metrics } from '@/lib/content';
import { CountUp } from '@/components/ui/CountUp';
import { Reveal } from '@/components/ui/Reveal';
import { GrowthChart, RisingTrend, ScribbleCircle, Sparkle, Star, Ticks } from '@/components/doodles/Marks';

/** The figures step upward left to right, so the stagger reinforces the rising
 *  trend drawn beneath them; each leans a fraction off vertical. */
const numberPose = [
  { offset: 'md:mt-9', tilt: '-rotate-[1.5deg]' },
  { offset: 'md:mt-6', tilt: 'rotate-[1deg]' },
  { offset: 'md:mt-3', tilt: '-rotate-[0.8deg]' },
  { offset: 'md:mt-0', tilt: 'rotate-[1.6deg]' },
];

export function Impact() {
  return (
    <section id="about" className="scroll-mt-24 py-6 md:py-8">
      <div className="shell">
        <div className="relative rounded-section bg-blue-100 px-5 py-10 sm:px-8 md:px-10 md:py-11 xl:px-12">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,12rem)_minmax(0,1fr)_minmax(0,12rem)] lg:gap-8">
            {/* -------- Heading -------- */}
            <Reveal y={16} className="relative">
              <div className="flex items-center gap-2.5">
                <p className="eyebrow text-blue">Our Impact</p>
                <GrowthChart className="h-7 w-8 shrink-0 text-blue" delay={0.3} />
              </div>
              <h2 className="marker mt-1.5 -rotate-[2deg] text-[2rem] leading-[0.9] text-ink sm:text-[2.35rem]">
                In Numbers
              </h2>
              <Ticks className="doodle -left-9 top-7 hidden h-9 w-6 text-blue xl:block" delay={0.45} />
            </Reveal>

            {/* -------- Metrics -------- */}
            <div className="relative">
            <ul className="grid grid-cols-2 gap-y-8 md:grid-cols-4 md:items-start">
              {metrics.map((metric, i) => (
                <Reveal
                  as="li"
                  key={metric.label}
                  delay={0.08 * i}
                  y={20}
                  className={`relative px-2 text-center md:px-3 ${numberPose[i].offset}`}
                >
                  {/* On mobile the 2x2 grid still needs a divider; from md up
                      the rising trend below carries the connection instead. */}
                  {i > 0 ? (
                    <svg
                      viewBox="0 0 6 64"
                      fill="none"
                      aria-hidden="true"
                      className={`doodle -left-1 top-1 h-16 w-1.5 text-blue/40 md:hidden ${
                        i % 2 === 1 ? 'block' : 'hidden'
                      }`}
                    >
                      <path
                        d="M3 2C4.6 16 1.4 34 3.6 50C4 55 3.4 59 3 62"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                      />
                    </svg>
                  ) : null}

                  <CountUp
                    value={metric.value}
                    suffix={metric.suffix}
                    prefix={metric.prefix}
                    className={`block font-display text-[2.7rem] leading-none tracking-tight text-blue sm:text-5xl xl:text-[3.6rem] ${numberPose[i].tilt}`}
                  />
                  <span className="mt-2.5 block text-[0.8125rem] font-medium text-ink-muted md:text-sm">
                    {metric.label}
                  </span>

                  {/* The growth figure gets circled, the way you'd ring the
                      number that actually matters. */}
                  {i === 1 ? (
                    <>
                      <ScribbleCircle
                        className="doodle -top-4 left-1/2 h-[4.4rem] w-[7.5rem] -translate-x-1/2 text-ink/70"
                        delay={0.5}
                        width={2.2}
                      />
                      <Star className="doodle -top-6 right-3 h-5 w-5 text-blue" delay={0.7} width={2.4} />
                    </>
                  ) : null}
                </Reveal>
              ))}
            </ul>

              {/* One growth gesture, touching down on each figure. */}
              <RisingTrend
                className="mt-4 hidden h-[4.5rem] w-full text-blue md:block"
                delay={0.35}
                width={3.4}
              />
            </div>

            {/* -------- Handwritten statement -------- */}
            <Reveal y={16} delay={0.2} className="relative mx-auto w-full max-w-[16rem] lg:mx-0">
              <div className="relative px-7 py-7 text-center">
                <ScribbleCircle className="doodle inset-0 h-full w-full text-ink" delay={0.4} width={2.4} />
                <p className="annotation relative rotate-[-2deg] text-xl uppercase leading-[0.95]">
                  Good brands
                  <br />
                  create real change.
                </p>
              </div>
              <Sparkle className="doodle -left-1 -top-2 h-6 w-6 text-blue" delay={0.6} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
