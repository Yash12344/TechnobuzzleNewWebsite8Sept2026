'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/content';
import { ArrowButton } from '@/components/ui/Button';

/**
 * Featured-work card: full-bleed artwork with the client details resting on a
 * dark scrim. Hovering zooms the artwork, lifts the card and swings the arrow.
 */
export function CaseStudyCard({
  project,
  priority = false,
  /** Aspect utilities. Featured work varies these per project so the set reads
   *  as selected pieces rather than four identical cells. */
  aspectClassName = 'aspect-[4/3]',
}: {
  project: Project;
  priority?: boolean;
  aspectClassName?: string;
}) {
  return (
    <Link
      href={`#work`}
      aria-label={`${project.client} — ${project.description}`}
      className={`group relative block w-full overflow-hidden rounded-card bg-blue-100 shadow-card ring-1 ring-ink/5 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-lift ${aspectClassName}`}
    >
      <Image
        src={project.image}
        alt={project.imageAlt}
        fill
        sizes="(min-width: 1280px) 26vw, (min-width: 768px) 44vw, 72vw"
        priority={priority}
        className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.07]"
      />

      {/* Scrim: a soft fade above a solid plate. The plate is what guarantees
          the white type stays legible over pale artwork or a light photo. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[48%] bg-gradient-to-t from-ink/60 via-ink/18 to-transparent"
      />

      {/* Tag row, revealed on hover */}
      <div className="absolute left-3.5 right-3.5 top-3.5 flex flex-wrap gap-1.5 opacity-0 transition-all duration-300 group-hover:opacity-100">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-pill bg-white/95 px-2.5 py-1 text-[0.6875rem] font-semibold text-ink"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between min-h-[3.9rem] gap-2 bg-ink/85 px-3 py-2.5 backdrop-blur-[3px]">
        <div className="min-w-0">
          <h3 className="font-display text-[0.75rem] uppercase leading-tight tracking-tight text-white">
            {project.client}
          </h3>
          <p className="mt-0.5 text-[0.6875rem] leading-snug text-white/80">{project.description}</p>
        </div>
        <ArrowButton tone="blue" size="sm" />
      </div>
    </Link>
  );
}
