import Link from 'next/link';
import { navItems, socials } from '@/lib/content';
import { Logo } from '@/components/ui/Logo';
import { SocialIcon } from '@/components/ui/SocialIcon';

export function Footer() {
  return (
    <footer className="border-t border-ink/8 bg-white">
      <div className="shell flex flex-col gap-7 py-9 md:flex-row md:items-center md:justify-between md:gap-6 md:py-8">
        <Link href="#home" aria-label="Technobuzzle — home" className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-ink-muted transition-colors hover:text-blue"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <ul className="flex items-center gap-2">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={social.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-100 hover:text-blue"
                >
                  <SocialIcon name={social.icon} className="h-[1.15rem] w-[1.15rem]" />
                </a>
              </li>
            ))}
          </ul>

          <p className="text-[0.8125rem] text-ink-faint">
            © {new Date().getFullYear()} Technobuzzle. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
