'use client';

import { processSteps } from '@/lib/content';
import { ProcessIcon } from '@/components/doodles/Icons';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowWobbleDown, ArrowWobbleRight } from '@/components/doodles/Arrows';
import { ScribbleUnderline } from '@/components/doodles/Marks';

export function Process() {
  return (
    <section id="insights" className="scroll-mt-24 py-9 md:py-12">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] lg:items-center lg:gap-8">
          {/* -------- Heading -------- */}
          <Reveal y={16}>
            <h2 className="marker text-[2rem] leading-[0.92] text-ink sm:text-[2.4rem] xl:text-[2.6rem]">
              How we work
              <br />
              together
            </h2>
            <ScribbleUnderline className="mt-2 h-4 w-40 text-blue" delay={0.25} />
          </Reveal>

          {/* -------- Steps -------- */}
          <ol className="relative flex flex-col gap-0 md:flex-row md:items-start md:justify-between md:gap-2">
            {processSteps.map((step, i) => (
              <li key={step.number} className="relative flex flex-1 items-start gap-4 md:block">
                {/* Rail (mobile): number + connecting arrow stacked vertically */}
                <div className="flex shrink-0 flex-col items-center md:block">
                  <Reveal delay={0.08 * i} y={18} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 font-display text-[0.8125rem] text-blue">
                      {step.number}
                    </span>
                    <ProcessIcon
                      name={step.icon}
                      className="h-8 w-8 text-ink"
                      delay={0.2 + i * 0.08}
                    />
                  </Reveal>

                  {i < processSteps.length - 1 ? (
                    <ArrowWobbleDown
                      className="my-1 h-14 w-7 text-ink/70 md:hidden"
                      delay={0.3 + i * 0.08}
                      width={2.6}
                    />
                  ) : null}
                </div>

                <Reveal delay={0.12 + 0.08 * i} y={18} className="pb-6 md:pb-0 md:pr-4 md:pt-4">
                  <h3 className="font-display text-base uppercase leading-none tracking-tight text-ink md:text-[1.0625rem]">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[13.5rem] text-sm leading-snug text-ink-muted">
                    {step.description}
                  </p>
                </Reveal>

                {/* Connector (desktop) */}
                {i < processSteps.length - 1 ? (
                  <ArrowWobbleRight
                    className="doodle right-1 top-0 hidden h-6 w-14 text-ink/70 md:block"
                    delay={0.35 + i * 0.08}
                    width={2.6}
                  />
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
