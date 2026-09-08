'use client';

import Link from 'next/link';
import { projects } from '@/lib/content';
import { CaseStudyCard } from '@/components/cards/CaseStudyCard';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowGlyph } from '@/components/ui/Button';
import { MarkerUnderline, Ticks } from '@/components/doodles/Marks';
import { ArrowCurveDownRight } from '@/components/doodles/Arrows';

export function FeaturedWork() {
  return (
    <section id="work" className="scroll-mt-24 py-9 md:py-12">
      <div className="shell">
        <div className="grid gap-7 lg:grid-cols-[minmax(0,18.5rem)_minmax(0,1fr)] lg:gap-8">
          {/* -------- Heading column -------- */}
          <div className="relative">
            <Reveal y={16}>
              <span className="tilt-3 inline-block rounded-[0.9rem_0.7rem_1rem_0.6rem/0.7rem_1rem_0.6rem_0.9rem] bg-blue px-3.5 py-1.5 font-hand text-lg font-bold uppercase leading-none text-white">
                Featured Work
              </span>
            </Reveal>

            <Reveal y={18} delay={0.08}>
              <h2 className="marker mt-5 text-[2.1rem] leading-[0.92] text-ink sm:text-[2.4rem] lg:text-[1.95rem] xl:text-[2.2rem]">
                Real brands.
                <br />
                Real growth.
              </h2>
              <MarkerUnderline className="mt-2 h-3 w-[13rem] text-blue" delay={0.35} />
            </Reveal>

            <Ticks className="doodle -right-2 top-9 hidden h-10 w-7 text-ink lg:block" delay={0.5} />
            <ArrowCurveDownRight
              className="doodle -bottom-6 left-10 hidden h-16 w-24 text-ink xl:block"
              delay={0.6}
              width={2.8}
            />
          </div>

          {/* -------- Cards column -------- */}
          {/* min-w-0 lets this grid item shrink to its track so the mobile
              snap rail scrolls inside itself instead of widening the page. */}
          <div className="min-w-0">
            <Reveal y={12} className="mb-3.5 flex justify-start lg:justify-end">
              <Link
                href="#work"
                className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-blue"
              >
                View All Work
                <ArrowGlyph />
              </Link>
            </Reveal>

            {/* Mobile: swipeable rail. Tablet+: grid. */}
            <ul className="snap-rail -mx-[var(--shell-gutter)] px-[var(--shell-gutter)] sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 xl:grid-cols-4">
              {projects.map((project, i) => (
                <Reveal
                  as="li"
                  key={project.slug}
                  delay={0.07 * i}
                  y={26}
                  className="w-[68vw] max-w-[17rem] sm:w-auto sm:max-w-none"
                >
                  <CaseStudyCard project={project} priority={i === 0} />
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
