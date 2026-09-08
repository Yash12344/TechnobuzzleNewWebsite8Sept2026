import type { Metadata, Viewport } from 'next';
import { Archivo_Black, Caveat, Permanent_Marker, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

/* Fat marker display — hero headline and the big editorial section titles. */
const marker = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-marker',
});

/* Heavy bold sans — card titles, metrics, eyebrow labels. */
const display = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

/* Handwriting — margin notes and doodle labels. */
const hand = Caveat({
  weight: ['500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-hand',
});

/* Clean UI sans — body copy, navigation, buttons. */
const sans = Plus_Jakarta_Sans({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const siteUrl = 'https://technobuzzle.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Technobuzzle — Brand Management Agency',
    template: '%s | Technobuzzle',
  },
  description:
    'Technobuzzle is a brand management agency helping ambitious businesses grow through strategy, creative, content, performance marketing and AI.',
  keywords: [
    'brand management agency',
    'brand strategy',
    'social media marketing',
    'performance marketing',
    'SEO',
    'content creation',
    'web development',
    'AI automation',
    'Technobuzzle',
  ],
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Technobuzzle',
    title: 'Technobuzzle — We build brands that grow.',
    description:
      'A brand management agency helping ambitious businesses grow through strategy, creative and AI.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technobuzzle — We build brands that grow.',
    description:
      'A brand management agency helping ambitious businesses grow through strategy, creative and AI.',
  },
  icons: {
    icon: '/brand/favicon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${marker.variable} ${display.variable} ${hand.variable} ${sans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
