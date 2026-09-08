/**
 * Technobuzzle logo lockup: circular badge mark + wordmark + descriptor.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * PLACEHOLDER NOTICE
 * No official logo file was present in the repository when this was built, so
 * the lockup below is drawn to match the brand badge in the design reference.
 * When the official asset lands, drop it at `public/brand/technobuzzle-logo.svg`
 * and replace the <svg> here with:
 *
 *   <Image src="/brand/technobuzzle-logo.svg" alt="Technobuzzle" width={220}
 *          height={44} priority className={className} />
 *
 * Every usage across the site (navbar, footer, mobile menu) renders through
 * this one component, so that is a single-file swap.
 * ─────────────────────────────────────────────────────────────────────────
 */

type LogoProps = {
  className?: string;
  /** Hide the "Brand Management Agency" descriptor in tight spaces. */
  showDescriptor?: boolean;
  /** Extra classes on the descriptor — used to hide it at small widths. */
  descriptorClassName?: string;
  /** Extra classes on the wordmark — used to trim it at small widths. */
  wordmarkClassName?: string;
};

export function Logo({
  className,
  showDescriptor = true,
  descriptorClassName,
  wordmarkClassName,
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 sm:gap-2.5 ${className ?? ''}`}>
      <LogoMark className="h-8 w-8 shrink-0 sm:h-9 sm:w-9 md:h-10 md:w-10" />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[0.95rem] uppercase leading-none tracking-[-0.01em] text-ink md:text-[1.05rem] ${wordmarkClassName ?? ''}`}
        >
          Technobuzzle
        </span>
        {showDescriptor ? (
          <span
            className={`mt-[3px] text-[0.5rem] font-semibold uppercase leading-none tracking-[0.2em] text-ink-muted md:text-[0.54rem] ${descriptorClassName ?? ''}`}
          >
            Brand Management Agency
          </span>
        ) : null}
      </span>
    </span>
  );
}

/** The badge on its own — used as a standalone bug in tight spots. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true" focusable="false">
      <circle cx="32" cy="32" r="30" fill="#FFFFFF" stroke="#1155F5" strokeWidth="3.5" />
      <circle cx="32" cy="32" r="24.5" fill="#1155F5" fillOpacity="0.08" />
      <path
        d="M25 16V48M25 16H37C41.4 16 45 19.6 45 24C45 28.4 41.4 32 37 32H25M25 32H39C43.4 32 47 35.6 47 40C47 44.4 43.4 48 39 48H25"
        stroke="#1155F5"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.5 20L14 30H18.5L16 39"
        stroke="#1155F5"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
