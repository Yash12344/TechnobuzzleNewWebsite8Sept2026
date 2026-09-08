'use client';

import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowCurveDownLeft, ArrowWobbleRight, PaperPlane } from '@/components/doodles/Arrows';
import { BrushBox, Squiggle, Ticks } from '@/components/doodles/Marks';

/**
 * The closing signature. "Bigger" is set larger than everything around it and
 * carries the blue brush, so the page ends on one word rather than trailing
 * off into the footer.
 */
export function CTA() {
  return (
    <section id="contact" className="scroll-mt-24 pb-10 pt-12 md:pb-12 md:pt-16">
      <div className="shell">
        <div className="relative grid items-center gap-7 lg:grid-cols-[minmax(0,1.18fr)_minmax(0,0.82fr)] lg:gap-6">
          {/* One long stroke carrying the eye from the sign-off to the button. */}
          <ArrowWobbleRight
            className="doodle left-[47%] top-[44%] z-0 hidden h-14 w-40 -rotate-[12deg] text-blue lg:block"
            delay={0.7}
            width={3}
          />
          {/* -------- Headline -------- */}
          <div className="relative">
            <Reveal y={22}>
              <h2 className="marker leading-[0.82] text-ink">
                <span className="block origin-left -rotate-[1.2deg] text-[clamp(2.4rem,7vw,5.2rem)]">
                  Let&apos;s build
                </span>
                <span className="-mt-[0.04em] block origin-left rotate-[0.5deg] text-[clamp(2.2rem,6.4vw,4.8rem)]">
                  something
                </span>
                {/* The one word the whole page has been building toward. */}
                <span className="mt-[0.06em] block pl-[0.16em] text-[clamp(3.2rem,10.4vw,7.8rem)]">
                  <span className="relative inline-block -rotate-[1.6deg] px-[0.16em] leading-[1.06] text-white">
                    <BrushBox
                      className="absolute -inset-x-[0.05em] -bottom-[0.02em] -top-[0.03em] -z-10 h-[calc(100%+0.05em)] w-[calc(100%+0.1em)] text-blue"
                      delay={0.35}
                    />
                    bigger
                  </span>
                  <span className="ml-[0.09em] text-blue">.</span>
                </span>
              </h2>
            </Reveal>
            <Ticks className="doodle -left-4 top-2 hidden h-14 w-9 text-blue xl:block" delay={0.5} />
            <Squiggle className="doodle -bottom-6 left-2 h-5 w-40 text-blue/50" delay={0.7} />
          </div>

          {/* -------- Copy + action -------- */}
          <div className="relative lg:pt-2">
            <Reveal y={20} delay={0.1}>
              <p className="text-pretty text-lg leading-relaxed text-ink-muted md:text-xl">
                Your brand has potential.
                <br className="hidden sm:block" /> Let&apos;s turn it into something extraordinary.
              </p>
            </Reveal>

            <Reveal y={20} delay={0.18} className="mt-6 flex items-center gap-5">
              <Button href="mailto:teamtechnobuzzle@gmail.com" variant="dark" size="lg" withArrow>
                Start a Project
              </Button>
              <PaperPlane className="h-9 w-10 shrink-0 -rotate-12 text-ink" delay={0.6} />
            </Reveal>

            {/* Margin annotation, angled hard so it signs off the page */}
            <Reveal y={16} delay={0.26} className="mt-8 flex items-end gap-3 lg:mt-10">
              <ArrowCurveDownLeft
                className="h-14 w-20 shrink-0 rotate-[8deg] text-blue"
                delay={0.5}
                width={2.8}
              />
              <p className="annotation-blue rotate-[-7deg] text-xl uppercase leading-[0.95] sm:text-2xl">
                Higher brands.
                <br />
                Brighter tomorrows.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
