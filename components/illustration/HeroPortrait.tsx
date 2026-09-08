'use client';

import { motion, useReducedMotion } from 'framer-motion';

/**
 * Hero figure: a creative strategist at a laptop, drawn as monoline art.
 *
 * Deliberately illustrated rather than photographed — it keeps the hero in the
 * same hand-drawn language as the rest of the page and avoids generic stock.
 * To swap in a real portrait later, replace this component's <svg> with a
 * <next/image> cut-out at the same aspect ratio; the blob, doodles and layout
 * around it in `components/sections/Hero.tsx` need no changes.
 */
export function HeroPortrait({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? undefined : { opacity: 0, y: 28, scale: 0.97 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg
          viewBox="0 0 560 640"
          fill="none"
          className="h-auto w-full"
          role="img"
          aria-label="Illustration of a Technobuzzle strategist working at a laptop"
        >
          {/* Ground shadow */}
          <ellipse cx="284" cy="602" rx="178" ry="14" fill="#0B0B0D" opacity="0.08" />

          {/* ---- Torso / sweatshirt ---------------------------------- */}
          {/* Shoulders spread wide before dropping, so the silhouette reads
              as a seated person rather than a cone. */}
          <path
            d="M104 604C98 500 102 400 132 336C150 304 194 284 238 264C252 290 308 290 322 262C366 284 410 304 428 336C458 400 462 500 456 604Z"
            fill="#0B0B0D"
          />
          {/* Sleeve seams */}
          <path
            d="M136 386C142 462 170 518 210 548"
            stroke="#FFFFFF"
            strokeOpacity="0.16"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M424 386C418 462 390 518 350 548"
            stroke="#FFFFFF"
            strokeOpacity="0.16"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Handwritten sweatshirt slogan */}
          <g
            transform="rotate(-4 282 362)"
            fill="#FFFFFF"
            fontFamily="var(--font-hand), cursive"
            fontWeight="700"
            fontSize="29"
            textAnchor="middle"
            letterSpacing="0.02em"
          >
            <text x="282" y="320">GOOD</text>
            <text x="282" y="350">IDEAS</text>
            <text x="282" y="380">BETTER</text>
            <text x="282" y="410">BRANDS</text>
          </g>

          {/* Neck — sits behind the head, disappears under the collar */}
          <path
            d="M259 178H305V244C305 257 294 266 282 266C270 266 259 257 259 244Z"
            fill="#FFFFFF"
            stroke="#0B0B0D"
            strokeWidth="4"
            strokeLinejoin="round"
          />

          {/* Collar */}
          <path
            d="M238 264C252 290 308 290 322 262"
            stroke="#FFFFFF"
            strokeOpacity="0.28"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* ---- Head ------------------------------------------------ */}
          <path
            d="M218 150C218 112 244 92 280 92C316 92 342 112 342 150C342 190 320 218 280 218C240 218 218 190 218 150Z"
            fill="#FFFFFF"
            stroke="#0B0B0D"
            strokeWidth="4"
          />
          {/* Ears */}
          <path
            d="M219 148C210 145 205 154 209 163C212 170 218 171 221 169"
            stroke="#0B0B0D"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M341 148C350 145 355 154 351 163C348 170 342 171 339 169"
            stroke="#0B0B0D"
            strokeWidth="4"
            strokeLinecap="round"
          />
          {/* Curly hair */}
          <path
            d="M212 156C204 134 208 112 218 100C222 84 236 76 248 78C258 66 276 62 288 68C302 60 320 66 326 78C340 78 352 90 352 104C362 114 362 138 356 158C350 134 338 118 326 114C308 124 272 128 246 118C230 112 218 132 212 156Z"
            fill="#0B0B0D"
          />
          {/* Brows */}
          <path d="M230 131C240 124 258 124 268 130" stroke="#0B0B0D" strokeWidth="4" strokeLinecap="round" />
          <path d="M292 130C302 124 320 124 330 131" stroke="#0B0B0D" strokeWidth="4" strokeLinecap="round" />
          {/* Glasses */}
          <rect x="228" y="141" width="46" height="36" rx="14" fill="#FFFFFF" stroke="#0B0B0D" strokeWidth="4" />
          <rect x="288" y="141" width="46" height="36" rx="14" fill="#FFFFFF" stroke="#0B0B0D" strokeWidth="4" />
          <path d="M274 154C278 150 284 150 288 154" stroke="#0B0B0D" strokeWidth="4" strokeLinecap="round" />
          <path d="M228 152L214 157" stroke="#0B0B0D" strokeWidth="4" strokeLinecap="round" />
          <path d="M334 152L347 157" stroke="#0B0B0D" strokeWidth="4" strokeLinecap="round" />
          {/* Eyes, looking up toward the headline */}
          <circle cx="257" cy="156" r="4.5" fill="#0B0B0D" />
          <circle cx="317" cy="156" r="4.5" fill="#0B0B0D" />
          {/* Nose + smile */}
          <path d="M277 172C272 184 275 190 283 190" stroke="#0B0B0D" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M256 198C268 211 296 211 308 197" stroke="#0B0B0D" strokeWidth="4" strokeLinecap="round" />
          {/* ---- Laptop ---------------------------------------------- */}
          <path
            d="M170 436H398C404 436 409 440 410.5 446L430 540C431.5 547.5 426 554 418.5 554H149.5C142 554 136.5 547.5 138 540L157.5 446C159 440 164 436 170 436Z"
            fill="#FFFFFF"
            stroke="#0B0B0D"
            strokeWidth="4.5"
            strokeLinejoin="round"
          />
          {/* Logo mark embossed on the lid */}
          <circle cx="284" cy="495" r="25" fill="#1155F5" />
          <path
            d="M275 482V508M275 482H288C292.4 482 296 485.1 296 489C296 492.9 292.4 496 288 496H275M275 496H290C294.4 496 298 499.1 298 503C298 506.9 294.4 510 290 510H275"
            stroke="#FFFFFF"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Base */}
          <path
            d="M132 554H436C444 554 450.5 559.5 451.5 567L453 577C454 584.5 448.5 590 441 590H127C119.5 590 114 584.5 115 577L116.5 567C117.5 559.5 124 554 132 554Z"
            fill="#E9F1FF"
            stroke="#0B0B0D"
            strokeWidth="4.5"
            strokeLinejoin="round"
          />
          <path d="M254 572H314" stroke="#0B0B0D" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </motion.div>
    </motion.div>
  );
}
