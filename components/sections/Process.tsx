'use client';

import { processSteps } from '@/lib/content';
import { ProcessIcon } from '@/components/doodles/Icons';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowWobbleDown, ProcessTrail } from '@/components/doodles/Arrows';
import { HandRing, ScribbleUnderline } from '@/components/doodles/Marks';

/** Text blocks drop to different depths so the row never settles onto one
 *  baseline; the icons stay level so the drawn trail can run through them. */
const stepPose = ['lg:mt-0', 'lg:mt-5', 'lg:mt-1', 'lg:mt-6'];

export function Process() {
  return (
    <section id="insights" className="scroll-mt-24 py-9 md:py-12">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] lg:items-center lg:gap-8">
          {/* -------- Heading -------- */}
          <Reveal y={16}>
            <h2 className="marker -rotate-[2deg] text-[2rem] leading-[0.9] text-ink sm:text-[2.4rem] xl:text-[2.5rem]">
              How we work
              <br />
              together
            </h2>
            <ScribbleUnderline className="ml-2 mt-2.5 h-4 w-40 -rotate-1 text-blue" delay={0.25} />
          </Reveal>

          {/* -------- Steps -------- */}
          <div className="relative">
            {/* The trail is drawn once, straight across the icons. */}
            <ProcessTrail
              className="doodle left-4 top-3 hidden h-14 w-[calc(100%-2rem)] text-ink/55 lg:block"
              delay={0.3}
              width={2.8}
            />

            <ol className="relative flex flex-col gap-0 lg:flex-row lg:items-start lg:gap-3">
              {processSteps.map((step, i) => (
                <li key={step.number} className="flex flex-1 items-start gap-5 lg:block">
                  {/* Icon in its sketched ring, with the step number pinned on */}
                  <div className="flex shrink-0 flex-col items-center lg:block">
                    <Reveal delay={0.08 * i} y={18} className="relative inline-block">
                      <span className="relative inline-flex h-[3.4rem] w-[3.4rem] items-center justify-center">
                        {/* Occludes the trail so the line stops at each ring. */}
                        <span aria-hidden="true" className="absolute inset-0 rounded-full bg-white" />
                        <HandRing
                          className="absolute inset-0 h-full w-full text-blue"
                          delay={0.25 + i * 0.1}
                          width={2.6}
                        />
                        <ProcessIcon
                          name={step.icon}
                          className="relative h-7 w-7 text-ink"
                          delay={0.35 + i * 0.1}
                        />
                      </span>
                      <span className="absolute -left-3 -top-2 font-hand text-lg font-bold leading-none text-blue">
                        {step.number}
                      </span>
                    </Reveal>

                    {i < processSteps.length - 1 ? (
                      <ArrowWobbleDown
                        className="my-1.5 h-16 w-7 text-ink/70 lg:hidden"
                        delay={0.3 + i * 0.08}
                        width={2.6}
                      />
                    ) : null}
                  </div>

                  <Reveal
                    delay={0.12 + 0.08 * i}
                    y={18}
                    className={`pb-8 lg:pb-0 lg:pr-4 lg:pt-5 ${stepPose[i]}`}
                  >
                    <h3 className="font-display text-base uppercase leading-none tracking-tight text-ink md:text-[1.0625rem]">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-[26rem] text-sm leading-relaxed text-ink-muted lg:max-w-[13.5rem] lg:leading-snug">
                      {step.description}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
