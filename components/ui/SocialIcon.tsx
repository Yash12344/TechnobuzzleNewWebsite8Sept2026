import type { Social } from '@/lib/content';

const paths: Record<Social['icon'], React.ReactNode> = {
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.15" fill="currentColor" stroke="none" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M8 10.5V17M8 7.4v.1" strokeLinecap="round" />
      <path d="M12 17v-3.6a2.4 2.4 0 0 1 4.8 0V17" strokeLinecap="round" />
    </>
  ),
  youtube: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="4.5" />
      <path d="M10.4 9.4l5 2.6-5 2.6z" strokeLinejoin="round" />
    </>
  ),
};

export function SocialIcon({ name, className }: { name: Social['icon']; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
