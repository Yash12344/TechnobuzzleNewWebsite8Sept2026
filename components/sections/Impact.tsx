'use client';

import { metrics } from '@/lib/content';
import { CountUp } from '@/components/ui/CountUp';
import { Reveal } from '@/components/ui/Reveal';
import { GrowthChart, ScribbleCircle, Sparkle } from '@/components/doodles/Marks';

export function Impact() {
  return (
    <section id="about" className="scroll-mt-24 py-6 md:py-8">
      <div className="shell">
        <div className="rounded-section bg-blue-100 px-5 py-9 sm:px-8 md:px-10 md:py-10 xl:px-12">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,12rem)_minmax(0,1fr)_minmax(0,12rem)] lg:gap-8">
            {/* -------- Heading -------- */}
            <Reveal y={16}>
              <div className="flex items-center gap-2.5">
                <p className="eyebrow text-blue">Our Impact</p>
                <GrowthChart className="h-7 w-8 shrink-0 text-blue" delay={0.3} />
              </div>
              <h2 className="marker mt-1.5 text-[1.9rem] leading-[0.9] text-ink sm:text-[2.2rem]">
                In Numbers
              </h2>
            </Reveal>

            {/* -------- Metrics -------- */}
            <ul className="grid grid-cols-2 gap-y-7 md:grid-cols-4">
              {metrics.map((metric, i) => (
                <Reveal
                  as="li"
                  key={metric.label}
                  delay={0.08 * i}
                  y={20}
                  className={`px-2 text-center md:px-4 ${
                    i % 2 === 1 ? 'border-l border-blue/20' : ''
                  } ${i > 0 ? 'md:border-l md:border-blue/20' : 'md:border-l-0'}`}
                >
                  <CountUp
                    value={metric.value}
                    suffix={metric.suffix}
                    prefix={metric.prefix}
                    className="block font-display text-[2.6rem] leading-none tracking-tight text-blue sm:text-5xl xl:text-[3.4rem]"
                  />
                  <span className="mt-2 block text-[0.8125rem] font-medium text-ink-muted md:text-sm">
                    {metric.label}
                  </span>
                </Reveal>
              ))}
            </ul>

            {/* -------- Handwritten statement -------- */}
            <Reveal y={16} delay={0.2} className="relative mx-auto w-full max-w-[16rem] lg:mx-0">
              <div className="relative px-7 py-7 text-center">
                <ScribbleCircle className="doodle inset-0 h-full w-full text-ink" delay={0.4} width={2.4} />
                <p className="annotation relative text-xl uppercase leading-[0.95]">
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
