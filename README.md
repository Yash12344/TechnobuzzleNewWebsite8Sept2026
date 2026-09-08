# Technobuzzle — Brand Management Agency

Marketing site for **Technobuzzle**, built as a single art-directed homepage:
white paper, one strong brand blue, black editorial typography, and hand-drawn
marks (arrows, marker underlines, doodles, sticky notes) placed to guide the
eye rather than decorate at random.

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19**
- **TypeScript** (strict)
- **Tailwind CSS 3.4** — design tokens live in `tailwind.config.ts`
- **Framer Motion 11** — scroll reveals, self-drawing strokes, count-ups

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
npm run typecheck
```

## Project structure

```
app/
  layout.tsx            fonts, metadata, <html> font variables
  page.tsx              section composition + skip link
  globals.css           base layer, .shell grid, doodle/annotation utilities
components/
  layout/               Navbar (with animated mobile sheet), Footer
  sections/             Hero, Services, FeaturedWork, Impact,
                        Process, Testimonials, CTA
  cards/                ServiceCard, CaseStudyCard
  ui/                   Button + ArrowButton, Logo, Reveal/RevealWords,
                        CountUp, SocialIcon
  doodles/              Doodle primitive (self-drawing stroke), Arrows,
                        Marks, Blob, Icons
  illustration/         HeroPortrait (monoline hero figure)
lib/
  content.ts            all homepage copy, services, projects, metrics
public/
  brand/                logo lockup, standalone mark, favicon
  work/                 project artwork
```

## Design system

Tokens are defined once in `tailwind.config.ts`:

| Token | Value | Use |
| --- | --- | --- |
| `blue` / `blue-500` | `#1155F5` | primary brand accent |
| `blue-600` | `#0B45D6` | hover / pressed |
| `blue-100` | `#E9F1FF` | light section grounds |
| `blue-200` | `#CBDEFF` | sticky notes |
| `ink` | `#0B0B0D` | headings, figure line art |
| `ink-muted` | `#5A6070` | body copy |

Four type roles, wired through CSS variables in `app/layout.tsx`:

- `font-marker` — Permanent Marker, the big editorial headlines
- `font-display` — Archivo Black, card titles / metrics / eyebrows
- `font-hand` — Caveat, margin annotations and doodle labels
- `font-sans` — Plus Jakarta Sans, body and UI

No purple, pink, orange, gold or green appears anywhere in the system.

## Editing content

All homepage copy lives in `lib/content.ts` — navigation, services, projects,
metrics, process steps, testimonials and social links. Sections read from it,
so wording and ordering change without touching layout code.

## Replacing placeholder assets

Three things are stand-ins, each isolated to one place:

1. **Logo** — `components/ui/Logo.tsx` draws the lockup inline because no
   official asset file was in the repository. Drop the real file at
   `public/brand/technobuzzle-logo.svg` and follow the notice at the top of
   that component to switch it to `<Image>`. Navbar, footer and mobile menu all
   render through it, so it is a single-file swap.
2. **Project artwork** — `public/work/*.svg` are first-party illustrations at
   4:3. Replace them with real photography at the same paths (or edit the
   `image` field in `lib/content.ts`); the cards crop with `object-cover` and
   the text sits on a solid plate, so any artwork stays legible.
3. **Hero figure** — `components/illustration/HeroPortrait.tsx` is monoline
   line art rather than stock photography. To use a real cut-out portrait,
   replace that component's `<svg>` with a `next/image` at the same aspect
   ratio; the blob, doodles and hero layout around it need no changes.

`next.config.mjs` enables `dangerouslyAllowSVG` (with the documented
locked-down CSP) so the optimizer can serve the SVG artwork. It can be removed
once the artwork is raster.

## Responsive behaviour

Not a shrunken desktop — each breakpoint is composed:

| Section | Mobile | Tablet | Desktop |
| --- | --- | --- | --- |
| Hero | headline first, figure below | stacked, full-width figure | two columns |
| Services | vertical cards | 2 columns | 4 columns + margin note |
| Featured work | swipeable snap rail | 2 columns | 4 columns |
| Impact | 2×2 metric grid | 4 across | 4 across + scribbled note |
| Process | vertical timeline, drawn down-arrows | horizontal | horizontal |
| Testimonials | stacked quotes | 2 columns | 3 columns + label |

Verified with no horizontal overflow at 360, 390, 834 and 1440 px.

## Motion & accessibility

- Every animation is gated on `prefers-reduced-motion`; with it enabled all
  content renders immediately and nothing is hidden behind a scroll trigger.
- Skip-to-content link is the first tab stop.
- Decorative SVGs are `aria-hidden`; the hero illustration carries a label.
- Count-ups expose the final value to assistive tech rather than a running
  tally.
- Mobile menu traps nothing but locks page scroll, closes on Escape, and
  reports state via `aria-expanded` / `aria-controls`.

## Notes

The single-page navigation maps `About` to the impact section and `Insights` to
the process section. When those become real pages, update `navItems` in
`lib/content.ts`.
