/**
 * Verity design language for video: the locked daylight look (see .claude/skills/verity-design-language).
 * Measured from the five approved references. Sizes are expressed in `u` = 1% of the canvas WIDTH, so every
 * aspect (4:5, 8:9, 9:16, 1:1) uses the same ratios. Never re-type these values in a composition.
 */
import type {CSSProperties} from 'react';

export const DAY = {
  paper: '#fefefc',
  plasterLit: '#f0ece8',
  plasterShade: '#b9b9bd',
  skyTop: '#b5d8f9',
  skyHorizon: '#eff6fc',
  ink: '#0f1115',
  inkMuted: '#6b7078',
  /** The single blue: headline payoff, workflow path, selected state, logo on paper. Mirrors --accent in css/verity.css. */
  accent: '#0a84ff',
  /** Daylight shadow: cool and soft, never black. */
  shadow: 'rgba(60,90,130,0.14)',
} as const;

/** Type roles. size is in u (1% of canvas width). */
export const TYPE = {
  headline: {size: 10, weight: 300, tracking: '-0.045em', lineHeight: 1.02},
  headlineMinimal: {size: 9.4, weight: 200, tracking: '-0.045em', lineHeight: 1.1},
  headlineSquare: {size: 6.7, weight: 300, tracking: '-0.04em', lineHeight: 0.96},
  subline: {size: 2.1, weight: 300, tracking: '0.2em', lineHeight: 1.3},
  label: {size: 1.6, weight: 400, tracking: '0em', lineHeight: 1.25},
  step: {size: 1.5, weight: 400, tracking: '0.22em', lineHeight: 1},
  data: {size: 3.4, weight: 400, tracking: '-0.02em', lineHeight: 1},
} as const;

/** Logo proportions (public/logo.svg geometry). */
export const LOGO = {
  viewBox: '0 0 24 30',
  ratio: 24 / 30,
  wordmarkPerMarkHeight: 0.95,
  gapPerMarkWidth: 0.4,
  paths: [
    'M2.6 1.6h18.8a1.6 1.6 0 011.2 2.7L13.2 14a1.6 1.6 0 01-2.4 0L1.4 4.3A1.6 1.6 0 012.6 1.6z',
    'M10.8 16a1.6 1.6 0 012.4 0l9.4 9.7a1.6 1.6 0 01-1.2 2.7H2.6a1.6 1.6 0 01-1.2-2.7z',
  ],
} as const;

/** Daylight frosted glass. Needs real content behind it (a plate, or the paper world's planes) to read. */
export const glassDay = (u: number): CSSProperties => ({
  background: 'rgba(255,255,255,0.66)',
  backdropFilter: 'blur(20px) saturate(140%)',
  WebkitBackdropFilter: 'blur(20px) saturate(140%)',
  border: '1px solid rgba(255,255,255,0.85)',
  boxShadow: `inset 0 1px 0 rgba(255,255,255,0.9), 0 ${1.7 * u}px ${3.7 * u}px ${DAY.shadow}, 0 2px 6px rgba(60,90,130,0.10)`,
  borderRadius: 2 * u,
});

/** Easings. glide for arrivals, smooth for moves. No bounce. */
export const EASE = {glide: [0.22, 1, 0.36, 1], smooth: [0.45, 0, 0.15, 1]} as const;

/** Motion constants from the skill (seconds, px). */
export const MOTION = {textIn: 0.9, payoffDelay: 0.3, ruleDraw: 0.6, arcDraw: 0.8, countUp: 1.2, floatPeriod: 7, floatAmp: 6, endHold: 1.2};
