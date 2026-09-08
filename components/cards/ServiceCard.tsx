'use client';

import Link from 'next/link';
import type { Service } from '@/lib/content';
import { ServiceIcon } from '@/components/doodles/Icons';
import { ArrowButton } from '@/components/ui/Button';

/**
 * One capability card. Alternating white / blue fills give the row its rhythm,
 * matching the reference's checkerboard of tones.
 */
export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const isBlue = service.tone === 'blue';

  return (
    <Link
      href="#contact"
      className={`group relative flex h-full flex-col items-center rounded-card px-4 pb-5 pt-8 text-center transition-all duration-300 ease-out hover:-translate-y-1.5 ${
        isBlue
          ? 'bg-blue text-white shadow-blue-lift hover:shadow-[0_26px_50px_-18px_rgba(17,85,245,0.65)]'
          : 'bg-white text-ink shadow-card ring-1 ring-ink/5 hover:shadow-lift'
      }`}
    >
      {/* Step number, set like a margin note */}
      <span
        className={`absolute left-4 top-3.5 font-hand text-lg font-bold leading-none ${
          isBlue ? 'text-white/55' : 'text-blue/45'
        }`}
      >
        {service.number}
      </span>

      <ServiceIcon
        name={service.icon}
        className={`h-12 w-14 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 ${
          isBlue ? 'text-white' : 'text-ink'
        }`}
        delay={0.15 + index * 0.08}
      />

      <h3 className="mt-4 font-display text-xl uppercase leading-none tracking-tight">
        {service.title}
      </h3>

      <p
        className={`mt-3 text-pretty text-[0.8125rem] leading-snug ${
          isBlue ? 'text-white/85' : 'text-ink-muted'
        }`}
      >
        {service.items.join(', ')}
      </p>

      <span className="mt-auto pt-6">
        <ArrowButton tone={isBlue ? 'white' : 'blue'} size="sm" />
      </span>
    </Link>
  );
}
