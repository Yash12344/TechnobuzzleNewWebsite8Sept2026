import type { Config } from 'tailwindcss';

/**
 * Technobuzzle design tokens.
 *
 * The palette is deliberately narrow: white paper, one strong brand blue,
 * near-black ink and a couple of very light blue tints for section grounds.
 * No purple, pink, orange, gold or green anywhere in the system.
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        // Narrow phones (320px) can't fit the wordmark, a CTA and the menu
        // button at once; this is where the compact nav CTA starts.
        xs: '360px',
      },
      colors: {
        blue: {
          DEFAULT: '#1155F5',
          50: '#F4F8FF',
          100: '#E9F1FF',
          200: '#CBDEFF',
          300: '#9DC0FF',
          400: '#5B8DFA',
          500: '#1155F5',
          600: '#0B45D6',
          700: '#0836A8',
        },
        ink: {
          DEFAULT: '#0B0B0D',
          soft: '#2A2D34',
          muted: '#5A6070',
          faint: '#9AA1B1',
        },
        paper: '#FFFFFF',
        cyan: {
          DEFAULT: '#35C6F4',
          soft: '#D6F2FD',
        },
      },
      fontFamily: {
        // Fat marker display type — hero + big editorial section headings.
        marker: ['var(--font-marker)', 'Impact', 'sans-serif'],
        // Heavy bold sans — card titles, metrics, eyebrow labels.
        display: ['var(--font-display)', 'Arial Black', 'sans-serif'],
        // Handwriting — page annotations, doodle labels, margin notes.
        hand: ['var(--font-hand)', 'Comic Sans MS', 'cursive'],
        // Clean UI sans — body copy, nav, buttons.
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Fluid display scale, clamped so nothing overflows on small screens.
        'display-xl': ['clamp(3rem, 10.5vw, 7.75rem)', { lineHeight: '0.88', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.5rem, 7vw, 5rem)', { lineHeight: '0.92', letterSpacing: '-0.015em' }],
        'display-md': ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '0.95', letterSpacing: '-0.01em' }],
        'display-sm': ['clamp(1.5rem, 3.4vw, 2.25rem)', { lineHeight: '1', letterSpacing: '-0.01em' }],
      },
      borderRadius: {
        card: '1.5rem',
        section: '2.25rem',
        pill: '999px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(11,11,13,0.04), 0 10px 30px -12px rgba(11,11,13,0.12)',
        lift: '0 18px 40px -16px rgba(11,11,13,0.28)',
        'blue-lift': '0 18px 40px -16px rgba(17,85,245,0.5)',
        ring: '0 0 0 1px rgba(11,11,13,0.06)',
      },
      spacing: {
        section: 'clamp(3.5rem, 8vw, 7rem)',
      },
      maxWidth: {
        shell: '84rem',
      },
      keyframes: {
        'draw-line': {
          from: { strokeDashoffset: 'var(--dash, 400)' },
          to: { strokeDashoffset: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) rotate(var(--tilt, 0deg))' },
          '50%': { transform: 'translateY(-6px) rotate(var(--tilt, 0deg))' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'draw-line': 'draw-line 1s ease forwards',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        wiggle: 'wiggle 3s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
