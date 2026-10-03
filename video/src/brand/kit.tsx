import React from 'react';
import {Easing, interpolate, useVideoConfig} from 'remotion';
import './fonts';
import {DAY, EASE, LOGO, MOTION, TYPE, glassDay} from './language';

/** Verity daylight primitives. Everything is sized in `u` (1% of canvas width), so it holds on any aspect ratio. */
export const useU = () => useVideoConfig().width / 100;

const glide = Easing.bezier(...EASE.glide);
const prog = (t: number, a: number, dur: number) => interpolate(t, [a, a + dur], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: glide});

export type Tone = 'ink' | 'blue' | 'white';
const toneColor = (tone: Tone) => (tone === 'blue' ? DAY.accent : tone === 'white' ? '#ffffff' : DAY.ink);

/** The hourglass mark. */
export const Mark: React.FC<{height: number; tone?: Tone}> = ({height, tone = 'ink'}) => (
  <svg height={height} width={height * LOGO.ratio} viewBox={LOGO.viewBox} style={{display: 'block'}}>
    {LOGO.paths.map((d) => (
      <path key={d} d={d} fill={toneColor(tone)} />
    ))}
  </svg>
);

/** Mark + lowercase wordmark. Proportions are locked: wordmark = 0.95 x mark height, gap = 0.4 x mark width. */
export const Lockup: React.FC<{markHeight: number; tone?: Tone; weight?: 200 | 300; style?: React.CSSProperties}> = ({markHeight, tone = 'ink', weight = 300, style}) => {
  const markWidth = markHeight * LOGO.ratio;
  return (
    <div style={{display: 'flex', alignItems: 'center', gap: markWidth * LOGO.gapPerMarkWidth, ...style}}>
      <Mark height={markHeight} tone={tone} />
      <span style={{fontFamily: 'Inter', fontSize: markHeight * LOGO.wordmarkPerMarkHeight, fontWeight: weight, letterSpacing: '-0.03em', lineHeight: 1, color: toneColor(tone === 'blue' ? 'ink' : tone), marginTop: -markHeight * 0.04}}>verity</span>
    </div>
  );
};

export type HeadlineLine = {text: string; blue?: boolean};

/** The two-tone headline: ink setup, blue payoff (always last). Masked line rise with the blur clearing. */
export const Headline: React.FC<{lines: HeadlineLine[]; t: number; at?: number; role?: 'headline' | 'headlineMinimal' | 'headlineSquare'; align?: 'left' | 'center'; sizeU?: number; out?: number}> = ({lines, t, at = 0, role = 'headline', align = 'left', sizeU, out}) => {
  const u = useU();
  const r = TYPE[role];
  const size = (sizeU ?? r.size) * u;
  return (
    <div style={{textAlign: align, fontFamily: 'Inter', color: DAY.ink}}>
      {lines.map((l, i) => {
        const start = at + i * 0.18 + (l.blue ? MOTION.payoffDelay : 0);
        const p = prog(t, start, MOTION.textIn);
        const o = out === undefined ? 0 : prog(t, out, 0.55);
        const pad = size * 0.16;
        return (
          <div key={i} style={{overflow: 'hidden', padding: `${pad}px 0`, margin: `${-pad}px 0`}}>
            <div style={{fontSize: size, fontWeight: r.weight, letterSpacing: r.tracking, lineHeight: r.lineHeight, color: l.blue ? DAY.accent : DAY.ink, whiteSpace: 'nowrap', transform: `translateY(${(1 - p) * 108 - o * 30}%)`, opacity: Math.min(1, p * 2.4) * (1 - o), filter: p < 0.97 || o > 0 ? `blur(${(1 - p) * 7 + o * 6}px)` : undefined}}>{l.text}</div>
          </div>
        );
      })}
    </div>
  );
};

/** Short hairline between headline and subline (centred layouts). Draws left to right. */
export const Rule: React.FC<{t: number; at?: number; align?: 'left' | 'center'; widthU?: number}> = ({t, at = 0, align = 'center', widthU = 3}) => {
  const u = useU();
  const p = prog(t, at, MOTION.ruleDraw);
  return <div style={{width: widthU * u * p, height: 1.5, background: DAY.ink, margin: align === 'center' ? `0 auto` : 0, opacity: 0.85}} />;
};

export type SublinePart = {text: string; blue?: boolean};

/** Wide-tracked fragment line. Tracking settles from +0.26em to +0.2em as it fades in. */
export const Subline: React.FC<{parts: SublinePart[]; t: number; at?: number; align?: 'left' | 'center'; sizeU?: number}> = ({parts, t, at = 0, align = 'center', sizeU}) => {
  const u = useU();
  const r = TYPE.subline;
  const p = prog(t, at, 1.1);
  return (
    <div style={{textAlign: align, fontFamily: 'Inter', fontSize: (sizeU ?? r.size) * u, fontWeight: r.weight, lineHeight: r.lineHeight, letterSpacing: `${0.26 - 0.06 * p}em`, color: DAY.ink, opacity: p * 0.9, transform: `translateY(${(1 - p) * 8}px)`}}>
      {parts.map((s, i) => (
        <span key={i} style={{color: s.blue ? DAY.accent : DAY.ink}}>
          {s.text}
        </span>
      ))}
    </div>
  );
};

/** A daylight frosted-glass card. Give it real content behind it. */
export const DayGlass: React.FC<{children?: React.ReactNode; style?: React.CSSProperties; floatT?: number; floatPhase?: number}> = ({children, style, floatT, floatPhase = 0}) => {
  const u = useU();
  const dy = floatT === undefined ? 0 : Math.sin((floatT / MOTION.floatPeriod) * Math.PI * 2 + floatPhase) * MOTION.floatAmp;
  return <div style={{...glassDay(u), transform: `translateY(${dy}px)`, ...style}}>{children}</div>;
};

/** Icon tile: white glass rounded square, 2px line icon, label under it. */
export const IconTile: React.FC<{icon: React.ReactNode; label: string[]}> = ({icon, label}) => {
  const u = useU();
  const s = 6.5 * u;
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.4 * u, fontFamily: 'Inter'}}>
      <DayGlass style={{width: s, height: s, borderRadius: s * 0.24, display: 'grid', placeItems: 'center'}}>{icon}</DayGlass>
      <div style={{fontSize: TYPE.label.size * u, fontWeight: TYPE.label.weight, lineHeight: TYPE.label.lineHeight, textAlign: 'center', color: DAY.ink}}>
        {label.map((l) => (
          <div key={l}>{l}</div>
        ))}
      </div>
    </div>
  );
};

/** A connector that draws on. `d` is an SVG path in the parent's coordinates; dots sit at both ends. */
export const Arc: React.FC<{d: string; length: number; t: number; at?: number; ends?: [number, number][]; width: number; height: number}> = ({d, length, t, at = 0, ends = [], width, height}) => {
  const p = prog(t, at, MOTION.arcDraw);
  return (
    <svg width={width} height={height} style={{position: 'absolute', left: 0, top: 0, overflow: 'visible', pointerEvents: 'none'}}>
      <path d={d} fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth={1.4} strokeDasharray={length} strokeDashoffset={length * (1 - p)} />
      {ends.map(([x, y], i) => (
        <g key={i} opacity={p > 0.98 ? 1 : 0}>
          <circle cx={x} cy={y} r={5} fill="#fff" />
          <circle cx={x} cy={y} r={2.2} fill={DAY.accent} />
        </g>
      ))}
    </svg>
  );
};
