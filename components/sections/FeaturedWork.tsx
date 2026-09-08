'use client';

import Link from 'next/link';
import { projects } from '@/lib/content';
import { CaseStudyCard } from '@/components/cards/CaseStudyCard';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowGlyph } from '@/components/ui/Button';
import { MarkerUnderline, Ticks } from '@/components/doodles/Marks';
import { ArrowCurveDownRight } from '@/components/doodles/Arrows';

/**
 * Presentational layout per project. Widths, proportions and vertical offsets
 * differ on purpose: DDIS leads as the widest landscape piece, the two
 * portraits break the horizon line, and nothing shares a top edge.
 *
 * Below xl every card falls back to one uniform 4:3 so the responsive grid and
 * the mobile snap rail stay clean.
 */
const layout = [
  { grow: 'xl:flex-[1.34_1_0%]', aspect: 'aspect-[4/3]', offset: '' },
  { grow: 'xl:flex-[1_1_0%]', aspect: 'aspect-[4/3] xl:aspect-[3/4]', offset: 'xl:mt-10' },
  { grow: 'xl:flex-[1.16_1_0%]', aspect: 'aspect-[4/3]', offset: 'xl:mt-3' },
  { grow: 'xl:flex-[0.96_1_0%]', aspect: 'aspect-[4/3] xl:aspect-[3/4]', offset: 'xl:mt-14' },
];

export function FeaturedWork() {
  return (
    <section id="work" className="scroll-mt-24 py-9 md:py-12">
      <div className="shell">
        <div className="grid gap-7 lg:grid-cols-[minmax(0,18.5rem)_minmax(0,1fr)] lg:gap-8">
          {/* -------- Heading column -------- */}
          <div className="relative lg:pt-2">
            <Reveal y={16}>
              <span className="tilt-3 inline-block rounded-[0.9rem_0.7rem_1rem_0.6rem/0.7rem_1rem_0.6rem_0.9rem] bg-blue px-3.5 py-1.5 font-hand text-lg font-bold uppercase leading-none text-white">
                Featured Work
              </span>
            </Reveal>

            <Reveal y={18} delay={0.08}>
              <h2 className="marker mt-5 -rotate-[1.4deg] text-[2.1rem] leading-[0.9] text-ink sm:text-[2.4rem] lg:text-[1.85rem] xl:text-[2.15rem]">
                Real brands.
                <br />
                <span className="relative inline-block pl-[0.25em]">
                  Real growth.
                  <MarkerUnderline
                    className="absolute -bottom-[0.14em] left-[0.25em] h-[0.16em] w-[calc(100%-0.25em)] text-blue"
                    delay={0.35}
                  />
                </span>
              </h2>
            </Reveal>

            <Ticks className="doodle -right-1 top-10 hidden h-10 w-7 text-ink lg:block" delay={0.5} />
            {/* Arrow handing off from the heading to the lead project. */}
            <ArrowCurveDownRight
              className="mt-8 hidden h-16 w-28 rotate-[10deg] text-ink lg:block"
              delay={0.6}
              width={2.8}
            />
          </div>

          {/* -------- Projects -------- */}
          <div className="min-w-0">
            <Reveal y={12} className="mb-4 flex justify-start lg:justify-end">
              <Link
                href="#work"
                className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-blue"
              >
                View All Work
                <ArrowGlyph />
              </Link>
            </Reveal>

            {/* Mobile: swipeable rail. Tablet: 2 up. Desktop: the varied row. */}
            <ul className="snap-rail -mx-[var(--shell-gutter)] px-[var(--shell-gutter)] sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 xl:flex xl:items-start xl:gap-4">
              {projects.map((project, i) => (
                <Reveal
                  as="li"
                  key={project.slug}
                  delay={0.07 * i}
                  y={26}
                  className={`w-[68vw] max-w-[17rem] sm:w-auto sm:max-w-none xl:min-w-0 ${layout[i].grow} ${layout[i].offset}`}
                >
                  <CaseStudyCard
                    project={project}
                    priority={i === 0}
                    aspectClassName={layout[i].aspect}
                  />
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
