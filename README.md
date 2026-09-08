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

## Composition

The page is built as an editorial spread rather than a stack of centred
components — roughly structured with a deliberate margin of irregularity:

- The hero's two columns overlap: the figure's column pulls left under the
  headline and the blue blob overruns its own column on both sides.
- Display type varies scale, angle and line break within a single headline;
  "Brands" and "Bigger" are set far larger than their neighbours.
- Marks are placed to do work, not to decorate — arrows hand off from a
  heading to the content it introduces, the process is a single drawn trail
  that starts and stops on its step rings, and the growth figure is circled.
- Elements cross their own boundaries: the testimonials label sits over the
  band's top edge, and a blue shape bleeds off the left margin.
- Impact has exactly one growth idea: the figures step upward left to right and
  a single drawn line rises beneath them, touching down under each one. The
  stagger and the line say the same thing rather than competing.

The hero figure is drawn with a line-weight hierarchy — heavy silhouette,
medium features, fine detail — which is most of what separates a character
from a stock vector. Its pencil carries a black contour like everything else in
the drawing; without one the blue body disappears into the blob and only the
tip reads, turning it into an arrow.

Two utilities exist for the display type: `BrushBox` (a painted block behind a
highlighted word — filled and uneven, because a CSS rounded rectangle reads as
a button at display sizes) and `MarkerUnderline` (a tapered brush swipe that
wipes in from the left).

One layout trap worth knowing: an inline SVG is a replaced element, so `left` +
`right` do **not** bound it — it falls back to its viewBox ratio and can blow
past the container. Any absolutely positioned doodle needs an explicit width.

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
| Hero | headline first, figure below | stacked, full-width figure | overlapping spread |
| Services | vertical cards | 2 columns | 4 staggered, angled cards |
| Featured work | swipeable snap rail | 2 columns, uniform 4:3 | varied widths, DDIS leads |
| Impact | 2×2 metric grid | 4 across | 4 across, stepped baselines |
| Process | vertical timeline, drawn down-arrows | vertical timeline | horizontal, one drawn trail |
| Testimonials | stacked quotes | 2 columns | 3 hung quotes + label |

The asymmetry is desktop-only by design: offsets, rotations and varied aspect
ratios are gated behind `xl`, so tablet and mobile fall back to clean uniform
grids. A custom `xs` (360px) breakpoint governs where the compact nav CTA
appears — below it the wordmark keeps the space instead.

Four process steps across do not fit below `lg` without dropping the copy to
three cramped lines, so tablet gets the same vertical timeline as mobile. The
horizontal trail is an `lg`-and-up layout.

Verified with no horizontal overflow at 320, 360, 390, 430, 640, 768, 834,
1024, 1180, 1280, 1440, 1600 and 1920 px.

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
