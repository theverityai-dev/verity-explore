import React from 'react';
import {Easing, useCurrentFrame} from 'remotion';
import {lerp, seg} from '../../shared/timeline';
import {Check, Mark} from '../../trailer/ui';
import {FOOD, typesFor} from '../../reels/content';
import {FFPS, FilmAudio, FilmSfx, Grade, fontFamily, rnd} from '../engine';
import {Bars} from '../props';
import {CARD_LIGHT, CREAM, DK, GLASS_LIGHT, PAPER_INK, TEXT, TYPE, UI} from '../layout';

export const FOOD_SECONDS = 35;
export const FOOD_DURATION = FOOD_SECONDS * FFPS;

const glide = Easing.bezier(0.22, 1, 0.36, 1);
const smooth = Easing.bezier(0.45, 0, 0.15, 1);
const lin = (n: number) => n;

const PANEL = FOOD.panel;
const SHORTAGE = FOOD.workflows.find((w) => w.name === 'A shortage before it happens')!;
const ROSTER = FOOD.workflows.find((w) => w.name === 'Shift and roster')!;
const TYPES = typesFor('food-hospitality');

/* Timeline (seconds) */
const T_RISE = 6.8; // panel rises
const T_SHORT = 14.6; // first shortage step completes; steps are 0.9s apart
const T_DOTS = 20.9;
const T_EXIT = 25.6; // panel leaves

/** UI micro text. 17px, so it stays above 16px on screen at every camera scale. */
const Label: React.FC<{children: React.ReactNode; style?: React.CSSProperties}> = ({children, style}) => (
  <div style={{fontSize: 17, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-muted)', ...style}}>{children}</div>
);

/* ---------------------------------------------------------------------------
   Camera on the panel: hero (tilted, context scale), then a push-in that holds while workflows are read
   -------------------------------------------------------------------------- */
const T_PUSH = 13.0;
/** Push-in scale. Chosen so the longest workflow step and the 19th roster dot still land inside the frame. */
const PUSH = 1.24;
/** Top of the workflow title on screen once pushed: panel top + title offset (92) x PUSH. */
const PUSHED_TITLE_TOP = UI.y + 92 * PUSH;
/** Roster dot pitch. 19 dots at this pitch stay inside the frame at PUSH, so the two empty seats are never cropped. */
const DOT = 40;

/* ---------------------------------------------------------------------------
   Left column: one statement per shot. Line breaks are written. Each statement names its anchor.
   -------------------------------------------------------------------------- */
type Anchor = {bottom: number} | {top: number};
type Line = {at: number; out: number; statement: string; support?: string; anchor: Anchor};
/** Pass shots: bottom edge of the voice note (y 940), the late supplier message the line is about. */
const ON_VOICE_NOTE: Anchor = {bottom: 1080 - 940};
/** Overview: the panel's bottom edge, which is the film's text baseline. */
const ON_BASELINE: Anchor = {bottom: TEXT.bottom};
/** Pushed workflows: statement cap line on the workflow title's cap line. */
const ON_TITLE: Anchor = {top: PUSHED_TITLE_TOP - 2};
const LINES: Line[] = [
  {at: 1.8, out: 3.9, statement: 'Service ends\nat eleven.', anchor: ON_VOICE_NOTE},
  {at: 4.3, out: 6.9, statement: 'The numbers\nshould not arrive\nnext month.', anchor: ON_VOICE_NOTE},
  {at: 8.6, out: 12.6, statement: 'The day,\nunderstood while\nit is still running.', support: 'Orders, stock, people and money on one record.', anchor: ON_BASELINE},
  {at: 13.2, out: 19.4, statement: 'A shortage,\ncaught before\nit happens.', anchor: ON_TITLE},
  {at: 20.0, out: 25.2, statement: 'Labour, compared\nwith covers\nand revenue.', anchor: ON_TITLE},
  {at: 26.2, out: 30.2, statement: `${TYPES.length} business types.`, anchor: ON_BASELINE},
];

const Statement: React.FC<{t: number; line: Line}> = ({t, line}) => {
  const p = seg(t, line.at, line.at + 0.9, glide);
  const q = seg(t, line.out, line.out + 0.6, smooth);
  const o = Math.min(1, p * 1.6) * (1 - q);
  if (o <= 0.002) return null;
  return (
    <div style={{position: 'absolute', left: TEXT.x, width: TEXT.w, ...line.anchor, opacity: o, transform: `translateY(${(1 - p) * 26 - q * 18}px)`}}>
      <div style={{fontSize: TYPE.statement, fontWeight: 300, letterSpacing: '-0.035em', lineHeight: 1.06, color: DK.ink, whiteSpace: 'pre-line'}}>{line.statement}</div>
      {line.support ? <div style={{fontSize: TYPE.support, fontWeight: 300, letterSpacing: '-0.01em', lineHeight: 1.3, color: DK.muted, marginTop: 28, ...({textWrap: 'balance'} as any)}}>{line.support}</div> : null}
    </div>
  );
};

/* ---------------------------------------------------------------------------
   Scene 1: the kitchen pass. Match-cut in from Film 01's barcode.
   -------------------------------------------------------------------------- */
const TICKETS = [
  {x: 1010, y: 200, h: 520, rot: -2.4, head: 'TABLE 4', time: '20:07', items: ['Prawn starter', 'Dal makhani ×2', 'Garlic naan ×3', 'Kulfi'], seed: 5},
  {x: 1340, y: 170, h: 600, rot: 1.6, head: 'TABLE 9', time: '20:12', items: ['Starter platter', 'Butter chicken', 'Paneer tikka', 'Biryani ×2', 'Raita', 'Gulab jamun ×4'], seed: 9},
  {x: 1660, y: 215, h: 470, rot: -0.9, head: 'DELIVERY', time: '20:15', items: ['Biryani ×2', 'Raita', 'Soft drink ×2'], seed: 21},
];
const TW = 280;
/** Bounding box of ticket 2's barcode strip, the target of the match-cut. */
const MATCH = {x: TICKETS[1].x - 100, y: TICKETS[1].y + TICKETS[1].h - 60, w: 200, h: 34};

const Ticket: React.FC<{k: number; t: number}> = ({k, t}) => {
  const c = TICKETS[k];
  const sway = Math.sin(t * 0.7 + k * 1.9) * 0.5;
  const o = seg(t, 0.55 + k * 0.1, 1.4 + k * 0.1);
  return (
    <div style={{position: 'absolute', left: c.x - TW / 2, top: c.y, width: TW, height: c.h, opacity: o, transformOrigin: '50% 0', transform: `rotate(${c.rot + sway}deg)`}}>
      <div style={{position: 'absolute', left: TW / 2 - 18, top: -14, width: 36, height: 24, borderRadius: 4, background: '#3a4254', boxShadow: '0 4px 10px rgba(0,0,0,0.5)'}} />
      <div
        style={{
          width: TW,
          height: c.h,
          boxSizing: 'border-box',
          padding: '34px 30px',
          borderRadius: 4,
          background: `linear-gradient(160deg, #f4eddf, ${CREAM} 60%, #dcd4c1)`,
          color: PAPER_INK,
          boxShadow: '0 34px 80px rgba(0,0,0,0.55)',
          position: 'relative',
        }}
      >
        <div style={{display: 'flex', justifyContent: 'space-between', fontSize: 18, fontWeight: 600, letterSpacing: '0.16em'}}>
          <span>{c.head}</span>
          <span style={{color: 'rgba(27,24,20,0.55)'}}>{c.time}</span>
        </div>
        <div style={{borderTop: '2px dashed rgba(27,24,20,0.28)', margin: '20px 0 18px'}} />
        {c.items.map((it) => (
          <div key={it} style={{fontSize: 22, padding: '6px 0'}}>{it}</div>
        ))}
        <div style={{position: 'absolute', left: (TW - 200) / 2, bottom: 26, opacity: 0.85}}>
          <Bars w={200} h={34} color={PAPER_INK} seed={c.seed} />
        </div>
      </div>
    </div>
  );
};

const VoiceNote: React.FC<{t: number}> = ({t}) => {
  const o = seg(t, 1.2, 2.0);
  return (
    <div style={{position: 'absolute', left: 1130, top: 836, width: 560, height: 104, boxSizing: 'border-box', padding: '0 28px', display: 'flex', alignItems: 'center', gap: 22, borderRadius: 30, background: 'rgba(28,36,52,0.9)', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 24px 60px rgba(0,0,0,0.5)', opacity: o}}>
      <div style={{width: 56, height: 56, borderRadius: 28, background: 'rgba(255,255,255,0.12)', display: 'grid', placeItems: 'center', flex: 'none'}}>
        <div style={{width: 0, height: 0, borderTop: '11px solid transparent', borderBottom: '11px solid transparent', borderLeft: '18px solid #f4f7fb', marginLeft: 5}} />
      </div>
      <div style={{flex: 1, display: 'flex', alignItems: 'center', gap: 5, height: 56}}>
        {Array.from({length: 30}).map((_, i) => (
          <i key={i} style={{width: 6, height: 10 + rnd(i + 3) * 40, borderRadius: 3, background: 'rgba(244,247,251,0.5)', display: 'block'}} />
        ))}
      </div>
      <div style={{fontSize: 22, color: DK.muted, fontVariantNumeric: 'tabular-nums'}}>0:14</div>
    </div>
  );
};

/** Full-frame cream bars (the end of Film 01) that contract into ticket 2's barcode strip. */
const MatchCut: React.FC<{t: number}> = ({t}) => {
  if (t > 1.8) return null;
  const e = seg(t, 0.15, 1.5, smooth);
  const box = {l: lerp(0, MATCH.x, e), t: lerp(0, MATCH.y, e), w: lerp(1920, MATCH.w, e), h: lerp(1080, MATCH.h, e)};
  const ws = Array.from({length: 46}).map((_, i) => 1 + Math.floor(rnd(i + 5) * 4));
  return (
    <div style={{position: 'absolute', left: box.l, top: box.t, width: box.w, height: box.h, display: 'flex', opacity: 1 - seg(t, 1.45, 1.8)}}>
      {ws.map((w, i) => (
        <React.Fragment key={i}>
          <div style={{flexGrow: w, background: 'rgba(236,229,214,0.92)'}} />
          <div style={{flexGrow: w}} />
        </React.Fragment>
      ))}
    </div>
  );
};

const Pass: React.FC<{t: number}> = ({t}) => {
  if (t > 8.6) return null;
  const drift = seg(t, 0, 8, lin);
  // Depth exit: the pass recedes and softens as the panel arrives from behind, rather than sliding off-frame.
  const exit = seg(t, 6.6, 8.2, smooth);
  return (
    <div style={{position: 'absolute', inset: 0, opacity: 1 - exit, filter: exit > 0.02 ? `blur(${8 * exit}px)` : undefined, transform: `translateX(${-14 * drift}px) scale(${(1 + 0.025 * drift) * (1 - 0.06 * exit)})`, transformOrigin: '1300px 480px'}}>
      <div style={{position: 'absolute', left: 860, top: 100, width: 960, height: 800, background: 'radial-gradient(ellipse at 50% 42%, rgba(255,236,205,0.10), transparent 66%)'}} />
      <div style={{position: 'absolute', left: 900, top: 148, width: 940, height: 4, background: 'linear-gradient(90deg, transparent, rgba(210,216,226,0.5) 8%, rgba(210,216,226,0.5) 92%, transparent)', opacity: seg(t, 0.4, 1.2)}} />
      {TICKETS.map((_, k) => (
        <Ticket key={k} k={k} t={t} />
      ))}
      <VoiceNote t={t} />
    </div>
  );
};

/* ---------------------------------------------------------------------------
   Scenes 2-5: the light Verity panel on the dark world
   -------------------------------------------------------------------------- */
const Panel: React.FC<{t: number}> = ({t}) => {
  if (t < T_RISE - 0.1 || t > T_EXIT + 1.4) return null;
  // Depth reveal in, push-in to reading scale, pull-back out. All scaling is anchored at the panel's top-left, so the
  // reading start stays put and the crop always falls on the trailing (right, bottom) edges.
  const rise = seg(t, T_RISE, 8.4, glide);
  const push = seg(t, T_PUSH, T_PUSH + 1.6, smooth);
  const exit = seg(t, T_EXIT, 26.8, smooth);
  const hero = lerp(0.92, 1, rise) + 0.01 * seg(t, 8.4, T_PUSH, lin);
  const scale = lerp(lerp(hero, PUSH, push), 0.9, exit);
  const tilt = lerp(lerp(7, 3, rise), 0, push); // the hero tilt settles flat as the camera arrives
  const blur = 10 * (1 - rise) + 8 * exit;
  const opacity = Math.min(1, rise * 1.4) * (1 - exit);

  const a = 1 - seg(t, 13.75, 14.35);
  const b1 = seg(t, 13.9, 14.5) * (1 - seg(t, 19.4, 20.0));
  const b2 = seg(t, 19.7, 20.3);
  const rosterDone = (k: number) => seg(t, T_DOTS + 0.7 + 0.9 * k, T_DOTS + 1.3 + 0.9 * k, smooth);
  const rosterLine = (k: number) => seg(t, T_DOTS + 0.95 + 0.9 * k, T_DOTS + 1.6 + 0.9 * k, smooth);
  const hl = seg(t, T_PUSH, T_PUSH + 0.6);

  const stepDone = (k: number) => seg(t, T_SHORT + 0.9 * k, T_SHORT + 0.9 * k + 0.6, smooth);
  const lineFill = (k: number) => seg(t, T_SHORT + 0.9 * k + 0.25, T_SHORT + 0.9 * k + 0.95, smooth);

  return (
    <div style={{position: 'absolute', inset: 0, perspective: 2400}}>
    <div
      style={{
        position: 'absolute',
        left: UI.x,
        top: UI.y,
        width: UI.w,
        height: UI.h,
        opacity,
        filter: blur > 0.2 ? `blur(${blur}px)` : undefined,
        transformOrigin: '0 0',
        transform: `translateY(${(1 - rise) * 40}px) rotateY(${tilt}deg) scale(${scale})`,
      }}
    >
      <div style={{...GLASS_LIGHT, position: 'relative', width: UI.w, height: UI.h, borderRadius: 28, overflow: 'hidden', color: 'var(--ink)'}}>
        <div style={{position: 'absolute', inset: 0, pointerEvents: 'none', background: 'linear-gradient(135deg, rgba(255,255,255,0.5), rgba(255,255,255,0) 30%)'}} />

        <div style={{position: 'absolute', left: 40, top: 30, display: 'flex', alignItems: 'center', gap: 14}}>
          <Mark height={26} />
          <Label style={{color: 'var(--ink)'}}>Verity / {PANEL.title} · {PANEL.meta}</Label>
        </div>
        {/* Leaves before the push crops the right edge, so the crop never cuts through a word. */}
        <div style={{position: 'absolute', right: 40, top: 34, display: 'flex', alignItems: 'center', gap: 10, opacity: 1 - push}}>
          <span style={{width: 8, height: 8, borderRadius: 4, background: 'var(--accent)', opacity: 0.6 + 0.4 * Math.sin(t * 2.2)}} />
          <Label>Live</Label>
        </div>

        {/* A: overview */}
        <div style={{position: 'absolute', inset: 0, opacity: a}}>
          {PANEL.metrics.map((m, i) => (
            <div key={m.label} style={{...CARD_LIGHT, position: 'absolute', left: 40 + (i % 2) * 452, top: 92 + Math.floor(i / 2) * 140, width: 436, height: 124, boxSizing: 'border-box', padding: '16px 26px', borderRadius: 18}}>
              <div style={{fontSize: 19, color: 'var(--ink-muted)', fontWeight: 500}}>{m.label}</div>
              <div style={{fontSize: 44, fontWeight: 400, letterSpacing: '-0.03em', lineHeight: 1.08, fontVariantNumeric: 'tabular-nums'}}>{m.value}</div>
              <div style={{fontSize: 18, color: 'var(--accent-text)'}}>{m.note}</div>
            </div>
          ))}
          <Label style={{position: 'absolute', left: 40, top: 392}}>{PANEL.rowsLabel}</Label>
          {PANEL.rows.slice(0, 4).map((r, i) => {
            const h = i === 0 ? hl : 0;
            return (
              <div
                key={r.name}
                style={{
                  ...CARD_LIGHT,
                  position: 'absolute',
                  left: 40,
                  top: 428 + i * 108,
                  width: 880,
                  height: 96,
                  boxSizing: 'border-box',
                  padding: '17px 28px',
                  borderRadius: 18,
                  background: `linear-gradient(rgba(10,132,255,${0.08 * h}), rgba(10,132,255,${0.08 * h})), rgba(255,255,255,0.78)`,
                  borderColor: h > 0.02 ? `rgba(10,132,255,${0.55 * h})` : CARD_LIGHT.border ? undefined : undefined,
                }}
              >
                <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
                  <span style={{width: 9, height: 9, borderRadius: 5, flex: 'none', background: r.active ? 'var(--accent)' : 'var(--line)'}} />
                  <div style={{fontSize: 24, fontWeight: 500, letterSpacing: '-0.01em'}}>{r.name}</div>
                </div>
                <div style={{fontSize: 19, color: 'var(--ink-muted)', marginTop: 4, marginLeft: 25}}>{r.meta}</div>
              </div>
            );
          })}
        </div>

        {/* B1: the shortage workflow */}
        {b1 > 0.002 ? (
          <div style={{position: 'absolute', left: 40, top: 92, width: 880, opacity: b1, transform: `translateY(${(1 - b1) * 14}px)`}}>
            {/* No workflow-name label: the statement beside the panel already names it. */}
            <div style={{fontSize: 34, fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.2}}>{PANEL.rows[0].name}</div>
            <div style={{fontSize: 19, color: 'var(--ink-muted)', marginTop: 6}}>{PANEL.rows[0].meta}</div>
            <div style={{position: 'relative', marginTop: 52}}>
              {SHORTAGE.steps.map((s, k) => {
                const d = stepDone(k);
                return (
                  <div key={s} style={{position: 'relative', height: 112}}>
                    {k < SHORTAGE.steps.length - 1 ? (
                      <div style={{position: 'absolute', left: 13, top: 32, width: 2, height: 90, background: 'rgba(15,17,21,0.12)'}}>
                        <div style={{width: 2, height: `${lineFill(k) * 100}%`, background: 'var(--accent)'}} />
                      </div>
                    ) : null}
                    <div style={{position: 'absolute', left: 0, top: 4, width: 28, height: 28, boxSizing: 'border-box', borderRadius: 14, border: '2px solid rgba(15,17,21,0.2)'}} />
                    <div style={{position: 'absolute', left: 0, top: 4}}>
                      <Check p={d} size={28} />
                    </div>
                    <div style={{position: 'absolute', left: 60, top: 2, width: 780, fontSize: 25, lineHeight: 1.3, fontWeight: 400, letterSpacing: '-0.01em', opacity: 0.42 + 0.58 * d}}>{s}</div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}

        {/* B2: the roster */}
        {b2 > 0.002 ? (
          <div style={{position: 'absolute', left: 40, top: 92, width: 880, opacity: b2, transform: `translateY(${(1 - b2) * 14}px)`}}>
            <div style={{fontSize: 34, fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.2}}>{PANEL.rows[2].name}</div>
            <div style={{fontSize: 19, color: 'var(--ink-muted)', marginTop: 6}}>{PANEL.rows[2].meta}</div>
            <div style={{display: 'flex', alignItems: 'baseline', gap: 20, marginTop: 40}}>
              <div style={{fontSize: 140, fontWeight: 300, letterSpacing: '-0.05em', lineHeight: 1, fontVariantNumeric: 'tabular-nums'}}>17</div>
              <div style={{fontSize: 30, color: 'var(--ink-muted)'}}>{PANEL.metrics[3].note}</div>
            </div>
            <div style={{position: 'relative', marginTop: 44, height: 40}}>
              {Array.from({length: 19}).map((_, i) => {
                const filled = i < 17;
                const p = filled ? seg(t, T_DOTS + i * 0.07, T_DOTS + i * 0.07 + 0.5, glide) : seg(t, T_DOTS + 0.3, T_DOTS + 0.9, smooth);
                return (
                  <div
                    key={i}
                    style={{
                      position: 'absolute',
                      left: i * DOT,
                      top: 0,
                      width: 30,
                      height: 30,
                      boxSizing: 'border-box',
                      borderRadius: 15,
                      background: filled ? 'var(--accent)' : 'transparent',
                      border: filled ? 'none' : '2px dashed rgba(10,132,255,0.55)',
                      opacity: filled ? p : p * 0.9,
                      transform: `scale(${filled ? lerp(0.6, 1, p) : 1})`,
                    }}
                  />
                );
              })}
              {(() => {
                const r = seg(t, 22.8, 24.0, glide);
                return r > 0 && r < 1 ? (
                  <div style={{position: 'absolute', left: 17 * DOT - 14 - 20 * r, top: -14 - 12 * r, width: 2 * DOT - 10 + 40 * r, height: 30 + 28 + 24 * r, borderRadius: 40, border: '2px solid var(--accent)', opacity: 0.5 * (1 - r)}} />
                ) : null;
              })()}
            </div>
            <div style={{position: 'relative', marginTop: 56}}>
              {ROSTER.steps.slice(0, 3).map((s, k) => {
                const d = rosterDone(k);
                return (
                  <div key={s} style={{position: 'relative', height: 100}}>
                    {k < 2 ? (
                      <div style={{position: 'absolute', left: 13, top: 32, width: 2, height: 78, background: 'rgba(15,17,21,0.12)'}}>
                        <div style={{width: 2, height: `${rosterLine(k) * 100}%`, background: 'var(--accent)'}} />
                      </div>
                    ) : null}
                    <div style={{position: 'absolute', left: 0, top: 4, width: 28, height: 28, boxSizing: 'border-box', borderRadius: 14, border: '2px solid rgba(15,17,21,0.2)'}} />
                    <div style={{position: 'absolute', left: 0, top: 4}}>
                      <Check p={d} size={28} />
                    </div>
                    <div style={{position: 'absolute', left: 60, top: 2, width: 780, fontSize: 25, lineHeight: 1.3, fontWeight: 400, letterSpacing: '-0.01em', opacity: 0.42 + 0.58 * d}}>{s}</div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
    </div>
  );
};

/* ---------------------------------------------------------------------------
   Scene 6: breadth, as plain type
   -------------------------------------------------------------------------- */
const Names: React.FC<{t: number}> = ({t}) => {
  if (t < 26 || t > 31.2) return null;
  const out = seg(t, 30.1, 30.7, smooth);
  const rows = Math.ceil(TYPES.length / 2);
  // The last row sits on the same baseline as the statement "14 business types." (box bottoms differ by the
  // 72px vs 42px descender offset, 6px).
  const lastBottom = 1080 - TEXT.bottom - 6;
  return (
    <div style={{position: 'absolute', inset: 0, opacity: 1 - out}}>
      {TYPES.map((n, i) => {
        const col = Math.floor(i / rows);
        const row = i % rows;
        const p = seg(t, 26.5 + i * 0.11, 27.3 + i * 0.11, glide);
        return (
          <div key={n} style={{position: 'absolute', left: UI.x + col * 480, top: lastBottom - 42 - (rows - 1 - row) * 80, fontSize: 42, lineHeight: 1, fontWeight: 300, letterSpacing: '-0.02em', whiteSpace: 'nowrap', color: DK.ink, opacity: p, transform: `translateY(${(1 - p) * 18}px)`}}>
            {n}
          </div>
        );
      })}
    </div>
  );
};

/* ---------------------------------------------------------------------------
   Scene 7: close, and the hand-off into Film 03 (a ticket becomes a document page)
   -------------------------------------------------------------------------- */
const Close: React.FC<{t: number}> = ({t}) => {
  if (t < 30.6) return null;
  const draw = seg(t, 30.8, 31.5, smooth);
  const fill = seg(t, 31.3, 31.8);
  const w = seg(t, 31.3, 32.0, glide);
  const s = seg(t, 31.7, 32.5, glide);
  const u = seg(t, 32.2, 32.8, glide);
  const fade = 1 - seg(t, 33.9, 34.6, smooth);
  // Brand moment: the only centred frame in the film, one lockup with lots of space. URL stays small.
  return (
    <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', opacity: fade}}>
      <div style={{display: 'flex', alignItems: 'center', gap: 20}}>
        {t >= 30.75 ? <Mark height={58} draw={draw} fill={fill} /> : <div style={{width: 46, height: 58}} />}
        <div style={{fontSize: 64, fontWeight: 600, letterSpacing: '-0.04em', color: DK.ink, opacity: w, transform: `translateY(${(1 - w) * 14}px)`}}>verity</div>
      </div>
      <div style={{fontSize: 40, fontWeight: 300, letterSpacing: '-0.02em', color: DK.ink, marginTop: 36, opacity: s, transform: `translateY(${(1 - s) * 14}px)`}}>Food &amp; Hospitality</div>
      <div style={{fontSize: 20, fontWeight: 400, letterSpacing: '0.02em', color: DK.muted, marginTop: 22, opacity: u}}>theverityai.xyz</div>
    </div>
  );
};

const Handoff: React.FC<{t: number}> = ({t}) => {
  if (t < 33.2) return null;
  const p1 = seg(t, 33.2, 34.0, glide);
  const p2 = seg(t, 34.0, 35.0, smooth);
  const y0 = lerp(1110, 330, p1);
  const box = {x: lerp(1300, 0, p2), y: lerp(y0, 0, p2), w: lerp(300, 1920, p2), h: lerp(520, 1080, p2)};
  return (
    <div
      style={{
        position: 'absolute',
        left: box.x,
        top: box.y,
        width: box.w,
        height: box.h,
        borderRadius: lerp(5, 0, p2),
        background: `linear-gradient(160deg, #f4eddf, ${CREAM} 60%, #dcd4c1)`,
        boxShadow: p2 < 1 ? '0 34px 80px rgba(0,0,0,0.55)' : undefined,
        backgroundImage: `repeating-linear-gradient(to bottom, transparent 0, transparent 53px, rgba(27,24,20,${0.06 * p2}) 54px), linear-gradient(160deg, #f4eddf, ${CREAM} 60%, #dcd4c1)`,
      }}
    />
  );
};

const SFX: FilmSfx[] = [
  {file: 'card-slide-1.ogg', at: 0.55, vol: 0.3},
  {file: 'card-slide-2.ogg', at: 0.95, vol: 0.26},
  {file: 'card-slide-3.ogg', at: 1.35, vol: 0.26},
  {file: 'whoosh.wav', at: 6.7, vol: 0.35},
  {file: 'impactGlass_light_001.ogg', at: 8.2, vol: 0.4},
  {file: 'click_003.ogg', at: 13.1, vol: 0.55},
  ...[0, 1, 2, 3, 4].map((k) => ({file: 'select_008.ogg', at: T_SHORT + 0.9 * k + 0.1, vol: 0.28})),
  {file: 'select_008.ogg', at: T_DOTS, vol: 0.25},
  ...[0, 1, 2].map((k) => ({file: 'select_008.ogg', at: T_DOTS + 0.8 + 0.9 * k, vol: 0.28})),
  {file: 'whoosh.wav', at: T_EXIT, vol: 0.3},
  {file: 'impactGlass_light_001.ogg', at: 26.4, vol: 0.25},
  {file: 'subhit.wav', at: 30.8, vol: 0.45},
  {file: 'impactBell_heavy_000.ogg', at: 31.1, vol: 0.38},
  {file: 'whoosh.wav', at: 33.3, vol: 0.35},
  {file: 'card-slide-2.ogg', at: 33.4, vol: 0.35},
];

/** Film 02, Food & Hospitality. Screenplay: docs/film-02-food.md. Content: content/businesses/restaurants.js. */
export const FoodFilm: React.FC = () => {
  const t = useCurrentFrame() / FFPS;
  return (
    <div style={{position: 'absolute', inset: 0, overflow: 'hidden', fontFamily, fontFeatureSettings: '"cv02","cv03","cv04","ss03"', background: `radial-gradient(ellipse 70% 62% at 62% 46%, ${DK.baseAlt}, ${DK.base} 76%)`, color: DK.ink}}>
      <Pass t={t} />
      <MatchCut t={t} />
      <Panel t={t} />
      <Names t={t} />
      {LINES.map((l) => (
        <Statement key={l.statement} t={t} line={l} />
      ))}
      <Close t={t} />
      <Handoff t={t} />
      <Grade t={t} vignette={0.3 * (1 - seg(t, 33.8, 34.9))} />
      <FilmAudio sfx={SFX} droneVol={0.42} />
    </div>
  );
};
