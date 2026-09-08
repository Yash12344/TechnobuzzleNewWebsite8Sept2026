'use client';

import { testimonials } from '@/lib/content';
import { Reveal } from '@/components/ui/Reveal';
import { Confetti, Heart, ThumbsUp } from '@/components/doodles/Marks';

export function Testimonials() {
  return (
    <section className="py-6 md:py-8">
      <div className="shell">
        <div className="relative overflow-hidden rounded-section bg-blue px-5 py-9 sm:px-8 md:px-10 md:py-11 xl:px-12">
          {/* Brush texture: two very soft shapes, no gradient wash. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-16 -top-20 h-56 w-56 rounded-full bg-white/[0.07]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 right-1/3 h-64 w-64 rounded-full bg-white/[0.06]"
          />

          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,13rem)_minmax(0,1fr)_minmax(0,5.5rem)] lg:items-center lg:gap-8">
            {/* -------- Label -------- */}
            <Reveal y={16} className="flex items-start gap-3">
              <div className="tilt-3 inline-block rounded-[1rem_0.8rem_1.1rem_0.7rem/0.8rem_1.1rem_0.7rem_1rem] bg-ink px-4 py-3">
                <h2 className="annotation text-xl uppercase leading-[0.95] text-white sm:text-2xl">
                  Kind words
                  <br />
                  Big impact
                </h2>
              </div>
              <Heart className="mt-1 h-6 w-6 shrink-0 text-white" delay={0.35} width={3.2} />
            </Reveal>

            {/* -------- Quotes -------- */}
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-0">
              {testimonials.map((testimonial, i) => (
                <Reveal
                  as="li"
                  key={testimonial.author}
                  delay={0.08 * i}
                  y={20}
                  className={`lg:px-6 ${i > 0 ? 'lg:border-l lg:border-white/25' : ''}`}
                >
                  <blockquote>
                    <p className="text-pretty text-[0.9375rem] leading-relaxed text-white md:text-base">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <footer className="mt-3 font-display text-xs uppercase tracking-[0.1em] text-white/70">
                      — {testimonial.author}
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </ul>

            {/* -------- Decoration -------- */}
            <Reveal y={16} delay={0.2} className="relative hidden justify-self-center lg:block">
              <Confetti className="doodle -top-8 left-2 h-10 w-10 text-white/80" delay={0.5} />
              <ThumbsUp className="h-14 w-14 text-white" delay={0.4} width={3.2} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
