'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { navItems } from '@/lib/content';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock the page while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Escape closes the sheet.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'border-b border-ink/8 bg-white/85 backdrop-blur-md' : 'border-b border-transparent bg-white'
      }`}
    >
      <nav className="shell flex h-[4.5rem] items-center justify-between gap-4 md:h-20" aria-label="Main">
        <Link href="#home" className="shrink-0" aria-label="Technobuzzle — home">
          <Logo
            descriptorClassName="hidden sm:block"
            wordmarkClassName="text-[0.75rem] sm:text-[0.95rem]"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group relative inline-block px-3.5 py-2 text-[0.9375rem] font-medium text-ink-soft transition-colors hover:text-ink"
              >
                {item.label}
                {/* Hand-drawn underline that draws in on hover. */}
                <svg
                  viewBox="0 0 60 8"
                  preserveAspectRatio="none"
                  fill="none"
                  className="pointer-events-none absolute inset-x-3 bottom-1 h-[6px] w-[calc(100%-1.75rem)] origin-left scale-x-0 text-blue transition-transform duration-300 ease-out group-hover:scale-x-100"
                  aria-hidden="true"
                >
                  <path
                    d="M1 5C14 2 34 1.5 59 3.5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* Two renderings so the phone gets a CTA that still leaves room for
              the logo and the menu button. */}
          <Button href="#contact" variant="primary" size="sm" className="hidden px-3.5 xs:inline-flex sm:hidden">
            Let&apos;s Talk
          </Button>
          <Button href="#contact" variant="primary" size="md" withArrow className="hidden sm:inline-flex">
            Let&apos;s Talk
          </Button>

          {/* Mobile trigger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full ring-[1.5px] ring-inset ring-ink/15 transition-colors hover:ring-ink/40 sm:h-11 sm:w-11 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <span aria-hidden="true" className="flex h-4 w-5 flex-col justify-between">
              <motion.span
                className="block h-[2.5px] w-full rounded-full bg-ink"
                animate={open ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.25 }}
              />
              <motion.span
                className="block h-[2.5px] w-full rounded-full bg-ink"
                animate={open ? { opacity: 0, scaleX: 0.4 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: reduceMotion ? 0 : 0.2 }}
              />
              <motion.span
                className="block h-[2.5px] w-full rounded-full bg-ink"
                animate={open ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.25 }}
              />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            className="overflow-hidden border-t border-ink/8 bg-white lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.34, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="shell flex flex-col gap-1 py-5">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: reduceMotion ? 0 : 0.06 + i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-ink/6 py-3.5 font-display text-xl uppercase tracking-tight text-ink"
                  >
                    {item.label}
                    <span className="font-sans text-xs font-semibold text-blue">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </Link>
                </motion.li>
              ))}
              <li className="pt-4">
                <Button
                  href="#contact"
                  variant="primary"
                  size="lg"
                  withArrow
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Let&apos;s Talk
                </Button>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
