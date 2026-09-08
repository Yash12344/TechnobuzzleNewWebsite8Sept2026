'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'dark' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  /** Renders the arrow that slides on hover. */
  withArrow?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  'aria-label'?: string;
};

const base =
  'group/btn inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-pill font-semibold ' +
  'transition-[transform,background-color,color,box-shadow] duration-200 ease-out ' +
  'will-change-transform hover:-translate-y-0.5 active:translate-y-0';

const variants: Record<Variant, string> = {
  primary: 'bg-blue text-white shadow-blue-lift hover:bg-blue-600',
  dark: 'bg-ink text-white shadow-lift hover:bg-ink-soft',
  outline: 'bg-white text-ink ring-[1.5px] ring-inset ring-ink/15 hover:ring-ink/40 shadow-card',
  ghost: 'bg-transparent text-ink hover:text-blue',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-[0.8125rem]',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-[0.95rem] md:px-8 md:py-4 md:text-base',
};

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  withArrow = false,
  className,
  onClick,
  type = 'button',
  ...rest
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className ?? ''}`;

  const content = (
    <>
      <span>{children}</span>
      {withArrow ? <ArrowGlyph /> : null}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {content}
    </button>
  );
}

/** The arrow that nudges right on hover. Shared by buttons and text links. */
export function ArrowGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 14"
      fill="none"
      className={`h-3.5 w-5 shrink-0 transition-transform duration-200 ease-out group-hover/btn:translate-x-1 ${className ?? ''}`}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M1 7h17M12.5 1.5L18.5 7l-6 5.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Circular arrow button used in the corner of cards. */
export function ArrowButton({
  className,
  tone = 'blue',
  size = 'md',
  as = 'span',
  label,
}: {
  className?: string;
  tone?: 'blue' | 'white' | 'ink';
  size?: 'sm' | 'md';
  as?: 'span' | 'div';
  label?: string;
}) {
  const tones = {
    blue: 'bg-blue text-white',
    white: 'bg-white text-blue',
    ink: 'bg-ink text-white',
  } as const;

  const dims = size === 'sm' ? 'h-9 w-9' : 'h-11 w-11';
  const Tag = as;

  return (
    <Tag
      className={`inline-flex ${dims} shrink-0 items-center justify-center rounded-full ${tones[tone]} transition-transform duration-300 ease-out group-hover:rotate-[-25deg] group-hover:scale-110 ${className ?? ''}`}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? 'img' : undefined}
    >
      <svg viewBox="0 0 20 14" fill="none" className="h-3.5 w-4" focusable="false" aria-hidden="true">
        <path
          d="M1 7h17M12.5 1.5L18.5 7l-6 5.5"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Tag>
  );
}
