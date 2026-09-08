'use client';

import { Doodle, DrawnPath } from './Doodle';
import type { Service, ProcessStep } from '@/lib/content';

type IconProps = { className?: string; delay?: number };

const STROKE = 3.4;

/* ---------------------------------------------------------------- *
 * Service icons
 * ---------------------------------------------------------------- */

function Crown({ className, delay = 0 }: IconProps) {
  return (
    <Doodle viewBox="0 0 56 52" className={className}>
      <DrawnPath
        d="M6 42L3 11L17 23L28 5L39 23L53 11L50 42H6Z"
        width={STROKE}
        delay={delay}
        duration={1.1}
      />
      <DrawnPath d="M8 48H48" width={STROKE} delay={delay + 0.7} duration={0.35} />
    </Doodle>
  );
}

function Camera({ className, delay = 0 }: IconProps) {
  return (
    <Doodle viewBox="0 0 56 52" className={className}>
      <DrawnPath
        d="M5 17C5 14.8 6.8 13 9 13H17L21 6H35L39 13H47C49.2 13 51 14.8 51 17V42C51 44.2 49.2 46 47 46H9C6.8 46 5 44.2 5 42V17Z"
        width={STROKE}
        delay={delay}
        duration={1.1}
      />
      <DrawnPath
        d="M28 38C33.5 38 38 33.5 38 28C38 22.5 33.5 18 28 18C22.5 18 18 22.5 18 28C18 33.5 22.5 38 28 38Z"
        width={STROKE}
        delay={delay + 0.5}
        duration={0.7}
      />
      <DrawnPath d="M44 21H46.5" width={STROKE} delay={delay + 0.9} duration={0.2} />
    </Doodle>
  );
}

function Bars({ className, delay = 0 }: IconProps) {
  return (
    <Doodle viewBox="0 0 56 52" className={className}>
      <DrawnPath d="M6 46H50" width={STROKE} delay={delay} duration={0.35} />
      <DrawnPath d="M13 46V33" width={STROKE + 2.4} delay={delay + 0.15} duration={0.3} />
      <DrawnPath d="M24 46V24" width={STROKE + 2.4} delay={delay + 0.25} duration={0.3} />
      <DrawnPath d="M35 46V15" width={STROKE + 2.4} delay={delay + 0.35} duration={0.3} />
      <DrawnPath d="M46 46V6" width={STROKE + 2.4} delay={delay + 0.45} duration={0.3} />
    </Doodle>
  );
}

function Chip({ className, delay = 0 }: IconProps) {
  return (
    <Doodle viewBox="0 0 56 52" className={className}>
      <DrawnPath
        d="M13 11H43C44.7 11 46 12.3 46 14V38C46 39.7 44.7 41 43 41H13C11.3 41 10 39.7 10 38V14C10 12.3 11.3 11 13 11Z"
        width={STROKE}
        delay={delay}
        duration={0.9}
      />
      <DrawnPath
        d="M22 21H34C34.6 21 35 21.4 35 22V30C35 30.6 34.6 31 34 31H22C21.4 31 21 30.6 21 30V22C21 21.4 21.4 21 22 21Z"
        width={STROKE - 0.6}
        delay={delay + 0.45}
        duration={0.6}
      />
      <DrawnPath d="M19 11V5M28 11V5M37 11V5" width={STROKE - 0.6} delay={delay + 0.75} duration={0.3} />
      <DrawnPath d="M19 41V47M28 41V47M37 41V47" width={STROKE - 0.6} delay={delay + 0.85} duration={0.3} />
      <DrawnPath d="M10 20H4M10 32H4" width={STROKE - 0.6} delay={delay + 0.95} duration={0.3} />
      <DrawnPath d="M46 20H52M46 32H52" width={STROKE - 0.6} delay={delay + 1.05} duration={0.3} />
    </Doodle>
  );
}

const serviceIcons = { crown: Crown, camera: Camera, chart: Bars, chip: Chip } as const;

export function ServiceIcon({
  name,
  className,
  delay,
}: {
  name: Service['icon'];
  className?: string;
  delay?: number;
}) {
  const Component = serviceIcons[name];
  return <Component className={className} delay={delay} />;
}

/* ---------------------------------------------------------------- *
 * Process icons
 * ---------------------------------------------------------------- */

function Magnifier({ className, delay = 0 }: IconProps) {
  return (
    <Doodle viewBox="0 0 48 48" className={className}>
      <DrawnPath
        d="M21 36C29.3 36 36 29.3 36 21C36 12.7 29.3 6 21 6C12.7 6 6 12.7 6 21C6 29.3 12.7 36 21 36Z"
        width={STROKE}
        delay={delay}
        duration={0.9}
      />
      <DrawnPath d="M32 32L43 43" width={STROKE + 0.6} delay={delay + 0.55} duration={0.3} />
    </Doodle>
  );
}

function Bulb({ className, delay = 0 }: IconProps) {
  return (
    <Doodle viewBox="0 0 48 48" className={className}>
      <DrawnPath
        d="M24 6C16.3 6 10 12.1 10 19.6C10 24.9 13.7 28 15.2 32.5H32.8C34.3 28 38 24.9 38 19.6C38 12.1 31.7 6 24 6Z"
        width={STROKE}
        delay={delay}
        duration={0.9}
      />
      <DrawnPath d="M17 38H31" width={STROKE} delay={delay + 0.55} duration={0.2} />
      <DrawnPath d="M20 44H28" width={STROKE} delay={delay + 0.65} duration={0.2} />
    </Doodle>
  );
}

function Gear({ className, delay = 0 }: IconProps) {
  return (
    <Doodle viewBox="0 0 48 48" className={className}>
      <DrawnPath
        d="M24 38C31.7 38 38 31.7 38 24C38 16.3 31.7 10 24 10C16.3 10 10 16.3 10 24C10 31.7 16.3 38 24 38Z"
        width={STROKE}
        delay={delay}
        duration={0.8}
      />
      <DrawnPath
        d="M24 30C27.3 30 30 27.3 30 24C30 20.7 27.3 18 24 18C20.7 18 18 20.7 18 24C18 27.3 20.7 30 24 30Z"
        width={STROKE - 0.8}
        delay={delay + 0.45}
        duration={0.5}
      />
      {/* Teeth — short and stubby, otherwise the mark reads as a sun. */}
      <DrawnPath d="M24 10V4M24 44V38" width={STROKE + 1.6} delay={delay + 0.6} duration={0.25} />
      <DrawnPath d="M10 24H4M44 24H38" width={STROKE + 1.6} delay={delay + 0.68} duration={0.25} />
      <DrawnPath d="M14.1 14.1L9.9 9.9M38.1 38.1L33.9 33.9" width={STROKE + 1.6} delay={delay + 0.76} duration={0.25} />
      <DrawnPath d="M33.9 14.1L38.1 9.9M9.9 38.1L14.1 33.9" width={STROKE + 1.6} delay={delay + 0.84} duration={0.25} />
    </Doodle>
  );
}

function TrendBars({ className, delay = 0 }: IconProps) {
  return (
    <Doodle viewBox="0 0 48 48" className={className}>
      <DrawnPath d="M6 42H42" width={STROKE} delay={delay} duration={0.3} />
      <DrawnPath d="M13 42V30" width={STROKE + 2} delay={delay + 0.15} duration={0.25} />
      <DrawnPath d="M24 42V21" width={STROKE + 2} delay={delay + 0.25} duration={0.25} />
      <DrawnPath d="M35 42V10" width={STROKE + 2} delay={delay + 0.35} duration={0.25} />
    </Doodle>
  );
}

const processIcons = { search: Magnifier, bulb: Bulb, gear: Gear, bars: TrendBars } as const;

export function ProcessIcon({
  name,
  className,
  delay,
}: {
  name: ProcessStep['icon'];
  className?: string;
  delay?: number;
}) {
  const Component = processIcons[name];
  return <Component className={className} delay={delay} />;
}
