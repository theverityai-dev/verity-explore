import React from 'react';
import {Mark} from '../../trailer/ui';
import {inOut, outX, seg} from '../../shared/timeline';
import {LABEL} from '../stage';
import {Glyph, type GlyphKind} from '../R09/props';

/** R11 parts: the 9:16 (1080 x 1920) placement of R10's objects. The drafting-sheet figures keep R10's sheet coordinates
 *  (920 x 700, imported from R10/parts); only where they sit and the product-zone cards move. Grid: text margin 80, headline
 *  cap line y 350, product zone y 800 to 1500 (inside the Meta safe band y 250 to 1500). */

export const SHEET = {x: 80, y: 800, w: 920, h: 700};

/** Small lockup on the top margin, the left edge of the text column. */
export const SmallLockup: React.FC = () => (
  <div style={{position: 'absolute', left: 80, top: 110, height: 40, display: 'flex', alignItems: 'center', gap: 14}}>
    <Mark height={34} color="var(--ink)" />
    <div style={{fontSize: 38, fontWeight: 500, letterSpacing: '-0.04em', lineHeight: 1}}>verity</div>
  </div>
);

/* ---------- beat 7: mapping the business ---------- */

const MAP_CARDS: {y: number; kind: GlyphKind; label: string; a: number}[] = [
  {y: 800, kind: 'flow', label: 'How the work happens', a: 29.0},
  {y: 980, kind: 'team', label: 'Where decisions are made', a: 30.1},
  {y: 1160, kind: 'loop', label: 'What can be improved', a: 31.8},
  {y: 1340, kind: 'list', label: 'What is actually required', a: 33.2},
];
const MAP_NODE = {x: 190, y: 1134, r: 90};
const MAP_CARD_X = 380;

export const BusinessMap: React.FC<{t: number}> = ({t}) => {
  const c = seg(t, 28.2, 28.9, outX);
  return (
    <div style={{position: 'absolute', inset: 0}}>
      <svg width={1080} height={1920} style={{position: 'absolute', left: 0, top: 0}}>
        {MAP_CARDS.map((k, i) => {
          const p = seg(t, k.a + 0.2, k.a + 0.8, inOut);
          const ty = k.y + 64;
          const len = 480; // longer than any of the four curves, so the dash never repeats
          return <path key={i} d={`M${MAP_NODE.x + MAP_NODE.r} ${MAP_NODE.y} C${MAP_NODE.x + 140} ${MAP_NODE.y}, ${MAP_NODE.x + 140} ${ty}, ${MAP_CARD_X} ${ty}`} fill="none" stroke="var(--accent)" strokeWidth={3} strokeLinecap="round" strokeDasharray={len} strokeDashoffset={len * (1 - p)} opacity={p > 0 ? 1 : 0} />;
        })}
        <circle cx={MAP_NODE.x} cy={MAP_NODE.y} r={MAP_NODE.r * (0.82 + 0.18 * c)} fill="var(--surface)" stroke="var(--accent)" strokeWidth={3} opacity={c} />
        <text x={MAP_NODE.x} y={MAP_NODE.y - 4} textAnchor="middle" fontSize={30} fontWeight={500} fill="var(--ink)" opacity={c} style={{letterSpacing: '-0.01em'}}>Your</text>
        <text x={MAP_NODE.x} y={MAP_NODE.y + 32} textAnchor="middle" fontSize={30} fontWeight={500} fill="var(--ink)" opacity={c} style={{letterSpacing: '-0.01em'}}>business</text>
      </svg>
      {MAP_CARDS.map((k) => {
        const p = seg(t, k.a, k.a + 0.6, outX);
        return (
          <div key={k.label} style={{position: 'absolute', left: MAP_CARD_X, top: k.y + Math.round((1 - p) * 20), width: 620, height: 128, borderRadius: 18, background: '#fff', border: '1px solid rgba(15,17,21,0.08)', boxShadow: '0 1px 2px rgba(15,17,21,0.06), 0 30px 60px -26px rgba(15,17,21,0.4)', display: 'flex', alignItems: 'center', gap: 22, padding: '0 28px', color: '#0f1115', opacity: p}}>
            <Glyph kind={k.kind} size={52} />
            <div style={{fontSize: 32, fontWeight: 400, letterSpacing: '-0.02em', whiteSpace: 'nowrap'}}>{k.label}</div>
          </div>
        );
      })}
    </div>
  );
};

/* ---------- beat 8: configured, with nothing extra ---------- */

const EXTRAS = ['Unused module', 'Extra approval step', 'Complicated workflow'];

export const Extras: React.FC<{t: number}> = ({t}) => (
  <div style={{position: 'absolute', inset: 0}}>
    {EXTRAS.map((label, i) => {
      const a = 38.98 + i * 0.3;
      const p = seg(t, a, a + 0.6, outX);
      const gone = seg(t, 42.0 + i * 0.2, 43.2 + i * 0.2, inOut);
      const strike = seg(t, 41.6 + i * 0.15, 42.1 + i * 0.15, inOut);
      if (p <= 0 || gone >= 1) return null;
      return (
        <div key={label} style={{position: 'absolute', left: 80 + i * 325, top: 1456, width: 270, height: 64, borderRadius: 14, border: '2px dashed rgba(15,17,21,0.28)', background: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, fontWeight: 500, letterSpacing: '-0.01em', color: 'rgba(15,17,21,0.62)', opacity: p * (1 - gone), transform: `translateX(${Math.round(gone * 90 + (1 - p) * 40)}px)`}}>
          {label}
          <div style={{position: 'absolute', left: 14, width: 242 * strike, top: '50%', height: 3, borderRadius: 2, background: 'rgba(15,17,21,0.62)'}} />
        </div>
      );
    })}
  </div>
);

/** Tick positions for the five Workspace tiles when it sits at x 80, y 800, 920 x 640 (R10's, moved by -800, +520). */
export const TICKS: [number, number, number][] = [[621, 906, 44.6], [924, 906, 44.9], [621, 1088, 45.2], [924, 1088, 45.5], [924, 1270, 45.8]];

/* ---------- beat 9: pricing follows understanding ---------- */

export const Pricing: React.FC<{t: number}> = ({t}) => {
  const a = seg(t, 47.5, 48.1, outX);
  const b = seg(t, 49.0, 49.6, outX);
  const link = seg(t, 48.85, 49.35, inOut);
  const card = (y: number, p: number, children: React.ReactNode) => (
    <div style={{position: 'absolute', left: 140, top: y + Math.round((1 - p) * 20), width: 800, height: 170, borderRadius: 20, background: '#fff', border: '1px solid rgba(15,17,21,0.08)', boxShadow: '0 1px 2px rgba(15,17,21,0.06), 0 30px 60px -26px rgba(15,17,21,0.4)', display: 'flex', alignItems: 'center', gap: 32, padding: '0 48px', color: '#0f1115', opacity: p}}>
      {children}
    </div>
  );
  return (
    <div style={{position: 'absolute', inset: 0}}>
      <svg width={1080} height={1920} style={{position: 'absolute', left: 0, top: 0}}>
        <path d="M540 1010 V1110" stroke="var(--accent)" strokeWidth={3} strokeLinecap="round" strokeDasharray={100} strokeDashoffset={100 * (1 - link)} />
      </svg>
      {card(840, a, (
        <>
          <Glyph kind="flow" size={64} />
          <div style={{flex: 1, fontSize: 56, fontWeight: 300, letterSpacing: '-0.035em'}}>Understanding</div>
        </>
      ))}
      {card(1110, b, (
        <>
          <div style={{...LABEL, fontSize: 24, color: '#6b7078', width: 64}}>Then</div>
          <div style={{flex: 1, fontSize: 56, fontWeight: 300, letterSpacing: '-0.035em'}}>Pricing</div>
        </>
      ))}
    </div>
  );
};

/* ---------- beat 10: requirement to implementation ---------- */

const STEPS: {kind: GlyphKind; num: string; label: string; a: number; tick?: number}[] = [
  {kind: 'notes', num: '01', label: 'Requirement', a: 50.82, tick: 51.5},
  {kind: 'flow', num: '02', label: 'Proposed solution', a: 51.78, tick: 52.5},
  {kind: 'list', num: '03', label: 'Your approval', a: 53.22, tick: 53.9},
  {kind: 'sheet', num: '04', label: 'Implementation', a: 53.92},
];

export const Steps: React.FC<{t: number}> = ({t}) => (
  <div style={{position: 'absolute', inset: 0}}>
    {STEPS.map((s, i) => {
      const p = seg(t, s.a, s.a + 0.6, outX);
      const last = !s.tick;
      return (
        <div key={s.label} style={{position: 'absolute', left: 80, top: 800 + i * 170 + Math.round((1 - p) * 24), width: 920, height: 150, borderRadius: 20, background: '#fff', border: last ? '2px solid var(--accent)' : '1px solid rgba(15,17,21,0.08)', boxShadow: '0 1px 2px rgba(15,17,21,0.06), 0 30px 60px -26px rgba(15,17,21,0.4)', display: 'flex', alignItems: 'center', gap: 32, padding: '0 44px', color: '#0f1115', opacity: p}}>
          <div style={{...LABEL, fontSize: 26, color: '#6b7078', width: 54}}>{s.num}</div>
          <Glyph kind={s.kind} size={60} />
          <div style={{flex: 1, fontSize: 56, fontWeight: 300, letterSpacing: '-0.035em'}}>{s.label}</div>
          {s.tick ? (
            <div style={{opacity: seg(t, s.tick, s.tick + 0.3)}}>
              <svg width={44} height={44} viewBox="0 0 24 24">
                <circle cx={12} cy={12} r={11 * (0.6 + 0.4 * seg(t, s.tick, s.tick + 0.3, outX))} fill="var(--accent)" />
                <path d="M6.8 12.4l3.6 3.6 6.8-7.4" fill="none" stroke="#fff" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={20} strokeDashoffset={20 * (1 - seg(t, s.tick + 0.1, s.tick + 0.5, inOut))} />
              </svg>
            </div>
          ) : null}
        </div>
      );
    })}
  </div>
);
