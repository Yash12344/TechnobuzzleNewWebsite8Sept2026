'use client';

import { testimonials } from '@/lib/content';
import { Reveal } from '@/components/ui/Reveal';
import { Confetti, Heart, Star, ThumbsUp } from '@/components/doodles/Marks';

/** Quotes hang at different depths and lean a little, like three notes pinned
 *  to a board rather than three columns of a table. */
const quotePose = [
  { offset: 'lg:mt-0', tilt: '-rotate-[0.6deg]' },
  { offset: 'lg:mt-8', tilt: 'rotate-[0.5deg]' },
  { offset: 'lg:mt-2', tilt: '-rotate-[0.4deg]' },
];

export function Testimonials() {
  return (
    <section className="py-6 md:py-8">
      <div className="shell">
        <div className="relative rounded-section bg-blue px-5 py-11 sm:px-8 md:px-10 md:py-12 xl:px-12">
          {/* Two very soft shapes for depth — no gradient wash. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-16 -top-20 h-56 w-56 rounded-full bg-white/[0.07]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 right-1/3 h-64 w-64 rounded-full bg-white/[0.06]"
          />

          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,13rem)_minmax(0,1fr)_minmax(0,5.5rem)] lg:items-start lg:gap-8">
            {/* -------- Label, tilted off the band's own axis -------- */}
            <Reveal y={16} className="relative flex items-start gap-3 lg:-mt-14">
              <div className="inline-block -rotate-[3.5deg] rounded-[1rem_0.8rem_1.1rem_0.7rem/0.8rem_1.1rem_0.7rem_1rem] bg-ink px-4 py-3 shadow-lift">
                <h2 className="annotation text-xl uppercase leading-[0.95] text-white sm:text-2xl">
                  Kind words
                  <br />
                  Big impact
                </h2>
              </div>
              <Heart className="mt-2 h-6 w-6 shrink-0 rotate-12 text-white" delay={0.35} width={3.2} />
              <Star className="doodle -bottom-7 left-6 hidden h-6 w-6 text-white/70 lg:block" delay={0.6} width={2.4} />
            </Reveal>

            {/* -------- Quotes -------- */}
            <ul className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:items-start lg:gap-x-1">
              {testimonials.map((testimonial, i) => (
                <Reveal
                  as="li"
                  key={testimonial.author}
                  delay={0.08 * i}
                  y={20}
                  className={`relative lg:px-5 ${quotePose[i].offset} ${quotePose[i].tilt}`}
                >
                  {/* Oversized hand-set quote mark, half off the text block. */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-1 -top-6 select-none font-marker text-5xl leading-none text-white/25 lg:left-1"
                  >
                    &ldquo;
                  </span>
                  <blockquote className="relative">
                    <p className="text-pretty text-[0.9375rem] leading-relaxed text-white md:text-base">
                      {testimonial.quote}
                    </p>
                    <footer className="mt-3 font-display text-xs uppercase tracking-[0.1em] text-white/70">
                      — {testimonial.author}
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </ul>

            {/* -------- Decoration -------- */}
            <Reveal y={16} delay={0.2} className="relative hidden justify-self-center lg:block lg:mt-6">
              <Confetti className="doodle -top-8 left-2 h-10 w-10 text-white/80" delay={0.5} />
              <ThumbsUp className="h-16 w-16 -rotate-6 text-white" delay={0.4} width={3.2} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
