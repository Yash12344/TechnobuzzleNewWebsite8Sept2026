'use client';

import { services } from '@/lib/content';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowBendLeft, ArrowWobbleRight } from '@/components/doodles/Arrows';
import { ScribbleUnderline, Sparkle, Ticks } from '@/components/doodles/Marks';

/** Each card sits at its own slight angle and height, like four pieces of card
 *  laid on a desk rather than four cells of a grid. */
const cardPose = [
  'rotate-[-1deg] xl:mt-0',
  'rotate-[0.8deg] xl:mt-6',
  'rotate-[-0.6deg] xl:mt-1',
  'rotate-[1deg] xl:mt-7',
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-6 md:py-8">
      <div className="shell">
        <div className="relative rounded-section bg-blue-100 px-5 py-10 sm:px-8 md:px-10 md:py-12 xl:px-12 xl:pb-16">
          <div className="grid gap-8 lg:grid-cols-[12.5rem_minmax(0,1fr)] lg:gap-7 xl:grid-cols-[13.5rem_minmax(0,1fr)_8rem] xl:gap-8">
            {/* -------- Section title -------- */}
            <Reveal className="relative self-start xl:pt-6" y={18}>
              <h2 className="marker -rotate-[2deg] text-[2.6rem] leading-[0.86] text-ink sm:text-[3.2rem] xl:text-[3.6rem]">
                What
                <br />
                We Do
              </h2>
              <ScribbleUnderline className="ml-2 mt-3 h-4 w-36 -rotate-1 text-blue" delay={0.25} />
              {/* Arrow running from the title across to the first card. */}
              <ArrowWobbleRight
                className="ml-4 mt-4 hidden h-8 w-28 rotate-[10deg] text-ink lg:block"
                delay={0.5}
                width={2.8}
              />
              <Sparkle className="doodle -top-4 right-6 h-6 w-6 text-blue lg:right-2" delay={0.4} />
              <Ticks className="doodle -left-4 top-10 hidden h-9 w-6 text-blue xl:block" delay={0.55} />
            </Reveal>

            {/* -------- Cards -------- */}
            <ul className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4 xl:items-start">
              {services.map((service, i) => (
                <Reveal
                  as="li"
                  key={service.number}
                  delay={0.08 * i}
                  y={26}
                  className={`h-full ${cardPose[i]}`}
                >
                  <ServiceCard service={service} index={i} />
                </Reveal>
              ))}
            </ul>

            {/* -------- Margin annotation -------- */}
            <Reveal
              className="relative flex items-center gap-3 lg:col-span-2 lg:justify-center xl:col-span-1 xl:block xl:self-end xl:pb-8"
              delay={0.3}
              y={16}
            >
              <ArrowBendLeft
                className="h-12 w-16 shrink-0 rotate-180 text-ink xl:mb-1 xl:ml-1 xl:rotate-0"
                delay={0.5}
                width={2.8}
              />
              <p className="annotation tilt-2 text-xl uppercase leading-[0.95] sm:text-2xl">
                One partner.
                <br />
                All you need.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
