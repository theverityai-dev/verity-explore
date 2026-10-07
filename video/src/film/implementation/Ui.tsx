import React from 'react';
import {C, lerp, seg, smooth} from './tokens';
import {fontFamily} from '../engine';

/** Verity UI fragments (the product's light UI language) used as the consequence of the business, never as a tour.
 *  Each piece cross-fades from a wireframe skeleton (fill 0) to the real UI (fill 1); `st` drives its own state. */

export type PieceKind = 'quote' | 'record' | 'approval' | 'perm' | 'flow' | 'control';
export const PIECE_W = 320;
export const PIECE_H = 220;

const shell = (extra?: React.CSSProperties): React.CSSProperties => ({
  position: 'absolute',
  inset: 0,
  borderRadius: 20,
  background: C.ui,
  border: `1px solid ${C.uiLine}`,
  boxShadow: '0 2px 4px rgba(0,0,0,0.3), 0 28px 70px rgba(0,0,0,0.55)',
  fontFamily,
  color: C.uiInk,
  overflow: 'hidden',
  ...extra,
});

const Title: React.FC<{children: string; meta?: React.ReactNode}> = ({children, meta}) => (
  <div style={{position: 'absolute', left: 22, right: 22, top: 18, height: 34, display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
    <span style={{fontSize: 24, fontWeight: 600, letterSpacing: -0.3}}>{children}</span>
    {meta}
  </div>
);

const Pill: React.FC<{children: string; on?: number}> = ({children, on = 0}) => (
  <span
    style={{
      fontSize: 20,
      fontWeight: 500,
      padding: '3px 12px',
      borderRadius: 999,
      color: on > 0.5 ? '#fff' : C.uiMute,
      background: `color-mix(in srgb, ${C.uiAcc} ${Math.round(on * 100)}%, #EEF0F4)`,
    }}
  >
    {children}
  </span>
);

const Toggle: React.FC<{x: number; y: number; on: number}> = ({x, y, on}) => (
  <div style={{position: 'absolute', left: x, top: y, width: 50, height: 28, borderRadius: 14, background: `color-mix(in srgb, ${C.uiAcc} ${Math.round(on * 100)}%, #D9DDE4)`}}>
    <div style={{position: 'absolute', top: 3, left: 3 + on * 22, width: 22, height: 22, borderRadius: 11, background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.25)'}} />
  </div>
);

const Line: React.FC<{x: number; y: number; w: number; c?: string; h?: number}> = ({x, y, w, c = '#E4E7EC', h = 10}) => (
  <div style={{position: 'absolute', left: x, top: y, width: w, height: h, borderRadius: h / 2, background: c}} />
);

const Label: React.FC<{x: number; y: number; children: string; c?: string}> = ({x, y, children, c = C.uiMute}) => (
  <div style={{position: 'absolute', left: x, top: y, fontSize: 20, fontWeight: 500, color: c, lineHeight: '24px'}}>{children}</div>
);

const Real: React.FC<{kind: PieceKind; st: number}> = ({kind, st}) => {
  switch (kind) {
    case 'quote':
      return (
        <div style={shell()}>
          <Title meta={<Pill on={st}>{st > 0.5 ? 'Sent' : 'Draft'}</Pill>}>Quotation</Title>
          <Label x={22} y={70}>Customer</Label>
          <Line x={150} y={77} w={130} c="#D5DAE2" />
          <Label x={22} y={108}>Items</Label>
          <Line x={150} y={115} w={96} />
          <Line x={150} y={115} w={96 * st} c={C.uiAcc} />
          <Label x={22} y={146}>Terms</Label>
          <Line x={150} y={153} w={110} />
          <div style={{position: 'absolute', left: 22, right: 22, top: 184, height: 1, background: C.uiLine}} />
          <Line x={22} y={198} w={70} c="#C9CED8" />
        </div>
      );
    case 'record':
      return (
        <div style={shell()}>
          <Title meta={<Pill>Live</Pill>}>Records</Title>
          {[0, 1, 2, 3].map((i) => {
            const p = i < 2 ? 1 : seg(st, (i - 2) * 0.4, (i - 2) * 0.4 + 0.4);
            return (
              <div key={i} style={{opacity: p, transform: `translateY(${(1 - p) * 10}px)`}}>
                <Line x={22} y={72 + i * 34} w={[104, 86, 120, 94][i]} c="#D5DAE2" />
                <Line x={200} y={72 + i * 34} w={64} />
              </div>
            );
          })}
        </div>
      );
    case 'approval':
      return (
        <div style={shell()}>
          <Title meta={<Pill on={st}>{st > 0.5 ? 'Approved' : 'Awaiting'}</Pill>}>Approval</Title>
          <Line x={22} y={72} w={190} c="#D5DAE2" />
          <Line x={22} y={96} w={140} />
          <div
            style={{
              position: 'absolute',
              left: 22,
              top: 140,
              width: 136,
              height: 54,
              borderRadius: 12,
              background: C.uiAcc,
              color: '#fff',
              fontSize: 22,
              fontWeight: 600,
              display: 'grid',
              placeItems: 'center',
              filter: `brightness(${1 - (st > 0.01 && st < 0.5 ? 0.12 : 0)})`,
              boxShadow: st > 0.5 ? `0 0 0 6px color-mix(in srgb, ${C.uiAcc} 22%, transparent)` : undefined,
            }}
          >
            Approve
          </div>
          <div style={{position: 'absolute', left: 172, top: 140, width: 126, height: 54, borderRadius: 12, border: `1.5px solid ${C.uiLine}`, color: C.uiMute, fontSize: 22, fontWeight: 500, display: 'grid', placeItems: 'center'}}>Return</div>
        </div>
      );
    case 'perm':
      return (
        <div style={shell()}>
          <Title>Permissions</Title>
          {['View', 'Edit', 'Approve'].map((l, i) => (
            <React.Fragment key={l}>
              <Label x={22} y={74 + i * 44} c={C.uiInk}>{l}</Label>
              <Toggle x={246} y={72 + i * 44} on={i === 0 ? 1 : seg(st, i * 0.25, i * 0.25 + 0.3)} />
            </React.Fragment>
          ))}
        </div>
      );
    case 'flow':
      return (
        <div style={shell()}>
          <Title meta={<Pill>Active</Pill>}>Workflow</Title>
          <div style={{position: 'absolute', left: 31, top: 84, width: 2, height: 100, background: C.uiLine}} />
          {[0, 1, 2, 3].map((i) => (
            <React.Fragment key={i}>
              <div style={{position: 'absolute', left: 24, top: 76 + i * 34, width: 16, height: 16, borderRadius: 8, background: i / 3 <= st ? C.uiAcc : '#fff', border: `2px solid ${i / 3 <= st ? C.uiAcc : '#C9CED8'}`}} />
              <Line x={58} y={79 + i * 34} w={[120, 96, 140, 84][i]} c={i / 3 <= st ? '#C9CED8' : '#E4E7EC'} />
            </React.Fragment>
          ))}
        </div>
      );
    case 'control':
      return (
        <div style={shell()}>
          <Title>Control</Title>
          <Label x={22} y={74} c={C.uiInk}>Required</Label>
          <Toggle x={246} y={72} on={seg(st, 0, 0.4)} />
          <Label x={22} y={118} c={C.uiInk}>Condition</Label>
          <Line x={150} y={125} w={96} c={st > 0.5 ? C.uiAcc : '#E4E7EC'} />
          <Label x={22} y={162} c={C.uiInk}>Limit</Label>
          <Line x={150} y={169} w={72} />
        </div>
      );
  }
};

const Wire: React.FC<{kind: PieceKind}> = ({kind}) => {
  const rows = kind === 'record' ? 4 : 3;
  return (
    <div style={{position: 'absolute', inset: 0, borderRadius: 20, border: `2px dashed ${C.hair}`, background: 'rgba(244,244,241,0.03)'}}>
      <div style={{position: 'absolute', left: 22, top: 22, width: 120, height: 14, borderRadius: 7, background: 'rgba(244,244,241,0.2)'}} />
      {Array.from({length: rows}).map((_, i) => (
        <div key={i} style={{position: 'absolute', left: 22, top: 74 + i * 38, width: [180, 140, 210, 120][i], height: 10, borderRadius: 5, background: 'rgba(244,244,241,0.1)'}} />
      ))}
    </div>
  );
};

/** One UI piece centred at (x, y) in world units. */
export const Piece: React.FC<{kind: PieceKind; x: number; y: number; fill?: number; st?: number; s?: number; alpha?: number; w?: number}> = ({kind, x, y, fill = 1, st = 0, s = 1, alpha = 1, w = PIECE_W}) => (
  <div
    style={{
      position: 'absolute',
      left: x,
      top: y,
      width: PIECE_W,
      height: PIECE_H,
      transform: `translate(-50%,-50%) scale(${s * (w / PIECE_W)})`,
      opacity: alpha,
    }}
  >
    <div style={{position: 'absolute', inset: 0, opacity: 1 - seg(fill, 0.1, 0.9, smooth)}}>
      <Wire kind={kind} />
    </div>
    <div style={{position: 'absolute', inset: 0, opacity: seg(fill, 0.1, 0.9, smooth), transform: `scale(${lerp(0.97, 1, fill)})`}}>
      <Real kind={kind} st={st} />
    </div>
  </div>
);

/** Large editorial word. Used as punctuation, never as subtitles. */
export const Word: React.FC<{children: string; x: number; y: number; size: number; alpha: number; blur?: number; spacing?: number; weight?: number; color?: string; sc?: number}> = ({
  children, x, y, size, alpha, blur = 0, spacing = 0.04, weight = 200, color = C.ink, sc = 1,
}) => (
  <div
    style={{
      position: 'absolute',
      left: x,
      top: y,
      transform: `translate(-50%,-50%) scale(${sc})`,
      fontFamily,
      fontSize: size,
      fontWeight: weight,
      color,
      letterSpacing: `${spacing}em`,
      lineHeight: 1,
      whiteSpace: 'nowrap',
      opacity: alpha,
      filter: blur > 0.3 ? `blur(${blur}px)` : undefined,
    }}
  >
    {children}
  </div>
);

/** Stage-prop cursor: large, heavy stroke, deep shadow. Tip is at (x, y). */
export const Cursor: React.FC<{x: number; y: number; press: number; alpha: number}> = ({x, y, press, alpha}) => (
  <div style={{position: 'absolute', left: x, top: y, width: 0, height: 0, opacity: alpha, transform: `scale(${1 - press * 0.14})`, transformOrigin: '0 0'}}>
    <svg width={52} height={64} viewBox="0 0 52 64" style={{position: 'absolute', left: 0, top: 0, overflow: 'visible', filter: 'drop-shadow(0 8px 14px rgba(0,0,0,0.55))'}}>
      <path d="M 3 3 L 3 48 L 15 37 L 24 58 L 33 54 L 24 34 L 41 34 Z" fill="#0F1115" stroke="#fff" strokeWidth={4} strokeLinejoin="round" />
    </svg>
    <div style={{position: 'absolute', left: -26, top: -26, width: 52, height: 52, borderRadius: 26, border: `3px solid ${C.acc}`, opacity: press > 0.01 ? (1 - press) * 0.9 : 0, transform: `scale(${1 + press * 1.4})`}} />
  </div>
);

/** Larger Verity configuration panel for beat 8, built field by field while a cursor edits it.
 *  `lt` is time in seconds since the panel started. */
export const ConfigPanel: React.FC<{lt: number; x: number; y: number; s: number; alpha: number}> = ({lt, x, y, s, alpha}) => {
  const rowsAll = ['Customer', 'Items', 'Terms', 'Delivery note', 'Approved by'];
  const removed = seg(lt, 3.1, 3.7, smooth); // 'Delivery note' collapses
  const reqOn = seg(lt, 1.7, 1.95);
  const role = seg(lt, 4.6, 4.95);
  const rowH = 70;
  let offset = 0;
  return (
    <div style={{position: 'absolute', left: x, top: y, width: 600, height: 520, transform: `translate(-50%,-50%) scale(${s})`, opacity: alpha}}>
      <div style={shell({borderRadius: 24})}>
        <div style={{position: 'absolute', left: 30, right: 30, top: 24, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <span style={{fontSize: 30, fontWeight: 600, letterSpacing: -0.4}}>Quotation</span>
          <Pill on={seg(lt, 5.2, 5.6)}>{lt > 5.4 ? 'Configured' : 'Setup'}</Pill>
        </div>
        <div style={{position: 'absolute', left: 30, right: 30, top: 82, height: 1, background: C.uiLine}} />
        {rowsAll.map((r, i) => {
          const born = seg(lt, 0.3 + i * 0.28, 0.75 + i * 0.28);
          const isRem = r === 'Delivery note';
          const h = isRem ? rowH * (1 - removed) : rowH;
          const top = 96 + offset;
          offset += h;
          const op = born * (isRem ? 1 - seg(removed, 0.2, 0.8) : 1);
          return (
            <div key={r} style={{position: 'absolute', left: 30, right: 30, top, height: h, opacity: op, overflow: 'hidden'}}>
              <div style={{position: 'absolute', left: 0, top: 20, fontSize: 24, fontWeight: 500, color: C.uiInk}}>{r}</div>
              {r === 'Approved by' ? (
                <div
                  style={{
                    position: 'absolute',
                    right: 0,
                    top: 12,
                    height: 42,
                    padding: '0 18px',
                    borderRadius: 12,
                    border: `1.5px solid ${role > 0.5 ? C.uiAcc : C.uiLine}`,
                    color: role > 0.5 ? C.uiAcc : C.uiMute,
                    fontSize: 22,
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    background: role > 0.5 ? 'rgba(10,132,255,0.08)' : '#fff',
                  }}
                >
                  {role > 0.5 ? 'Manager' : 'Select role'}
                </div>
              ) : (
                <>
                  <div style={{position: 'absolute', right: 112, top: 28, width: 120, height: 10, borderRadius: 5, background: '#E4E7EC'}} />
                  <Toggle x={500} y={20} on={r === 'Customer' ? reqOn : isRem ? 0 : r === 'Items' ? seg(lt, 2.4, 2.65) : 0} />
                </>
              )}
              <div style={{position: 'absolute', left: 0, right: 0, bottom: 0, height: 1, background: C.uiLine}} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

/** Hero statement of the film. Left-aligned on the shared margin, bottom-anchored to the text baseline so it never sits
 *  where there is room. `lt` is progress 0..1 of the arrival, `out` progress 0..1 of the exit. */
export const STATEMENT = {x: 96, baseline: 996, size: 96};
export const Statement: React.FC<{lines: string[]; inP: number; outP: number}> = ({lines, inP, outP}) => (
  <div
    style={{
      position: 'absolute',
      left: STATEMENT.x,
      bottom: 1080 - STATEMENT.baseline,
      fontFamily,
      fontSize: STATEMENT.size,
      fontWeight: 300,
      letterSpacing: '-0.035em',
      lineHeight: 1.05,
      color: C.ink,
      whiteSpace: 'pre',
      opacity: inP * (1 - outP),
      transform: `translateY(${(1 - inP) * 28 - outP * 14}px)`,
    }}
  >
    {lines.join('\n')}
  </div>
);
