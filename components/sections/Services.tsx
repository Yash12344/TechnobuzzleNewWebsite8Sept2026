'use client';

import { services } from '@/lib/content';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowBendLeft, ArrowWobbleRight } from '@/components/doodles/Arrows';
import { ScribbleUnderline, Sparkle } from '@/components/doodles/Marks';

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-6 md:py-8">
      <div className="shell">
        <div className="relative overflow-hidden rounded-section bg-blue-100 px-5 py-9 sm:px-8 md:px-10 md:py-11 xl:px-12">
          <div className="grid gap-8 lg:grid-cols-[12rem_minmax(0,1fr)] lg:items-center lg:gap-7 xl:grid-cols-[12.5rem_minmax(0,1fr)_8.5rem] xl:gap-8">
            {/* -------- Section title -------- */}
            <Reveal className="relative" y={18}>
              <h2 className="marker text-[2.3rem] leading-[0.88] text-ink sm:text-[2.9rem] xl:text-[3.25rem]">
                What
                <br />
                We Do
              </h2>
              <ScribbleUnderline className="mt-2.5 h-4 w-36 text-blue" delay={0.25} />
              {/* Arrow pointing across to the cards */}
              <ArrowWobbleRight
                className="mt-3 hidden h-7 w-24 text-ink lg:block"
                delay={0.5}
                width={2.8}
              />
              <Sparkle className="doodle -top-3 right-2 h-5 w-5 text-blue lg:right-auto lg:left-32" delay={0.4} />
            </Reveal>

            {/* -------- Cards -------- */}
            <ul className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">
              {services.map((service, i) => (
                <Reveal as="li" key={service.number} delay={0.08 * i} y={26} className="h-full">
                  <ServiceCard service={service} index={i} />
                </Reveal>
              ))}
            </ul>

            {/* -------- Margin annotation -------- */}
            <Reveal
              className="relative flex items-center gap-3 lg:col-span-2 lg:justify-center xl:col-span-1 xl:block"
              delay={0.3}
              y={16}
            >
              <ArrowBendLeft
                className="h-11 w-16 shrink-0 rotate-180 text-ink xl:mb-1 xl:ml-1 xl:rotate-0"
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
