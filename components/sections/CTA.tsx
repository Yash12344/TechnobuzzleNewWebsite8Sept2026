'use client';

import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowCurveDownLeft, PaperPlane } from '@/components/doodles/Arrows';
import { Squiggle, Ticks } from '@/components/doodles/Marks';

export function CTA() {
  return (
    <section id="contact" className="scroll-mt-24 py-12 md:py-16">
      <div className="shell">
        <div className="relative grid items-center gap-9 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-10">
          {/* -------- Headline -------- */}
          <div className="relative">
            <Reveal y={22}>
              <h2 className="marker text-display-lg text-ink">
                Let&apos;s build
                <br />
                something <span className="highlight-blue text-white">bigger</span>.
              </h2>
            </Reveal>
            <Ticks className="doodle -left-3 top-4 hidden h-12 w-8 text-blue xl:block" delay={0.5} />
            <Squiggle className="doodle -bottom-7 left-1 h-5 w-32 text-blue/50" delay={0.6} />
          </div>

          {/* -------- Copy + action -------- */}
          <div className="relative">
            <Reveal y={20} delay={0.1}>
              <p className="text-pretty text-lg leading-relaxed text-ink-muted md:text-xl">
                Your brand has potential.
                <br className="hidden sm:block" /> Let&apos;s turn it into something extraordinary.
              </p>
            </Reveal>

            <Reveal y={20} delay={0.18} className="mt-7 flex items-center gap-5">
              <Button href="mailto:teamtechnobuzzle@gmail.com" variant="dark" size="lg" withArrow>
                Start a Project
              </Button>
              <PaperPlane className="h-8 w-9 shrink-0 text-ink" delay={0.6} />
            </Reveal>

            {/* Margin annotation */}
            <Reveal y={16} delay={0.26} className="mt-9 flex items-end gap-3 lg:mt-12 lg:justify-end">
              <ArrowCurveDownLeft
                className="h-14 w-20 shrink-0 text-blue lg:hidden"
                delay={0.5}
                width={2.8}
              />
              <p className="annotation-blue rotate-[-6deg] text-xl uppercase leading-[0.95] sm:text-2xl">
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
