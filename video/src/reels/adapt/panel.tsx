import React from 'react';
import {seg, track} from '../../shared/timeline';
import {ACCENT, Cursor, L, Label, Mark, glide, lerp, smooth} from './base';

/** The Verity surface. One panel for the whole film: it starts blank, takes on the business, is approved, goes live,
 *  and finally collapses into the logo tile. Light theme, real glass (backdrop blur over the old world behind it). */
export const PW = 900;
export const PH = 1020;
export const CHROME = 64;
export const BODY_H = PH - CHROME;

export type PanelState = 'New' | 'Draft' | 'Live';

export const VPanel: React.FC<{
  cx: number;
  cy: number;
  w?: number;
  h?: number;
  radius?: number;
  rx?: number;
  ry?: number;
  opacity?: number;
  state: PanelState;
  /** 0..1, how far the dot has gone from muted to the live accent */
  liveP?: number;
  /** 0..1 position of the one specular sweep (undefined = none) */
  sweep?: number;
  /** 0..1 fades the glass itself (fill, rim, shadow) while the content on it, e.g. the mark, stays */
  glassOut?: number;
  chromeOpacity?: number;
  bodyOpacity?: number;
  markP?: number;
  /** mark height in panel units (screen mark height / group scale) */
  markH?: number;
  t: number;
  children?: React.ReactNode;
}> = ({cx, cy, w = PW, h = PH, radius = 30, rx = 0, ry = 0, opacity = 1, state, liveP = 0, sweep, glassOut = 0, chromeOpacity = 1, bodyOpacity = 1, markP = 0, markH = 88, t, children}) => {
  if (opacity <= 0.003) return null;
  const glassA = 1 - glassOut;
  return (
    <div style={{position: 'absolute', left: cx - w / 2, top: cy - h / 2, width: w, height: h, opacity, transform: `perspective(1900px) rotateX(${rx}deg) rotateY(${ry}deg)`}}>
      {/* the glass: daylight frosted fill, hairline, cool soft shadows */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: radius,
          background: 'rgba(255,255,255,0.86)',
          backdropFilter: 'blur(26px) saturate(150%)',
          WebkitBackdropFilter: 'blur(26px) saturate(150%)',
          border: '1px solid rgba(15,17,21,0.09)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.95), 0 2px 6px rgba(60,90,130,0.16), 0 40px 90px rgba(60,90,130,0.30)',
          opacity: glassA,
        }}
      />
      <div style={{position: 'absolute', inset: 0, borderRadius: radius, overflow: 'hidden'}}>
        {/* the single diagonal sheen, upper left */}
        <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 36%)', pointerEvents: 'none', opacity: (1 - markP * 0.6) * glassA}} />

        {/* chrome */}
        <div style={{position: 'absolute', left: 0, right: 0, top: 0, height: CHROME, opacity: chromeOpacity, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 34px', borderBottom: `1px solid ${L.line}`}}>
          <div style={{fontSize: 19, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: L.ink, whiteSpace: 'nowrap'}}>
            Verity / Workspace
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: 10, fontSize: 16, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: liveP > 0.5 ? L.accentText : L.muted}}>
            <i
              style={{
                width: 7,
                height: 7,
                borderRadius: 4,
                display: 'inline-block',
                background: liveP > 0.5 ? ACCENT : L.line,
                opacity: liveP > 0.5 ? 0.65 + 0.35 * Math.sin(t * 2.4) ** 2 : 1,
              }}
            />
            {state}
          </div>
        </div>

        {/* body, fixed 900x956 canvas centred in the panel so it can be clipped as the panel collapses */}
        <div style={{position: 'absolute', left: (w - PW) / 2, top: CHROME, width: PW, height: BODY_H, opacity: bodyOpacity}}>{children}</div>

        {/* sweep */}
        {sweep !== undefined && sweep > 0 && sweep < 1 ? (
          <div style={{position: 'absolute', top: -20, bottom: -20, width: '30%', left: `${lerp(-40, 120, sweep)}%`, transform: 'skewX(-18deg)', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)', opacity: Math.sin(Math.PI * sweep), pointerEvents: 'none'}} />
        ) : null}

        {/* the mark: stays when the glass fades, and becomes the lockup's mark (88 here = 76px on screen) */}
        {markP > 0 ? (
          <div style={{position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', opacity: markP}}>
            <Mark height={markH} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------------------------------------------------
   Bodies (all in the 900 x 956 canvas)
   ------------------------------------------------------------------------------------------------------------------- */
const CARD: React.CSSProperties = {
  background: 'rgba(255,255,255,0.94)',
  border: '1px solid rgba(15,17,21,0.07)',
  boxShadow: '0 1px 2px rgba(15,17,21,0.05)',
  boxSizing: 'border-box',
};

const OpGrid: React.FC<{p: number}> = ({p}) => {
  const mask = 'radial-gradient(ellipse 80% 70% at 50% 46%, #000 20%, transparent 100%)';
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        opacity: p,
        backgroundImage: `linear-gradient(${L.grid} 1px, transparent 1px), linear-gradient(90deg, ${L.grid} 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
        WebkitMaskImage: mask,
        maskImage: mask,
      }}
    />
  );
};

/** Scene 3: nothing yet. A clean grid, a caret, one quiet line. */
export const BlankBody: React.FC<{u: number}> = ({u}) => {
  const grid = seg(u, 0.1, 1.4, glide);
  const caret = seg(u, 0.9, 1.4, glide);
  const blink = 0.35 + 0.65 * Math.max(0, Math.sin(u * 4.2)) ** 0.6;
  return (
    <div style={{position: 'absolute', inset: 0}}>
      <OpGrid p={grid} />
      <div style={{position: 'absolute', left: 0, right: 0, top: BODY_H / 2 - 74, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 26, opacity: caret}}>
        <div style={{width: 3, height: 64, borderRadius: 2, background: ACCENT, opacity: blink}} />
        <Label style={{fontSize: 19, letterSpacing: '0.2em'}}>A blank workspace</Label>
      </div>
    </div>
  );
};

const NODES = [
  {k: 'People', sub: 'Who does what', n: '01', mini: 'people'},
  {k: 'Process', sub: 'How it runs today', n: '02', mini: 'chain'},
  {k: 'Approvals', sub: 'Who signs off', n: '03', mini: 'check'},
  {k: 'Data', sub: 'Where it lives', n: '04', mini: 'rows'},
  {k: 'Operations', sub: 'What gets done', n: '05', mini: 'tasks'},
] as const;
const NODE_Y = (i: number) => 70 + i * 168;
const NODE_H = 130;

const Mini: React.FC<{kind: string; on: number}> = ({kind, on}) => {
  const c = on > 0.5 ? ACCENT : 'rgba(15,17,21,0.16)';
  if (kind === 'people')
    return (
      <div style={{display: 'flex'}}>
        {['R', 'S', 'A'].map((l, i) => (
          <div key={l} style={{width: 46, height: 46, borderRadius: 23, marginLeft: i ? -12 : 0, display: 'grid', placeItems: 'center', fontSize: 19, fontWeight: 600, background: i === 0 && on > 0.5 ? ACCENT : '#eef0f4', color: i === 0 && on > 0.5 ? '#fff' : L.muted, border: '2px solid #fff'}}>
            {l}
          </div>
        ))}
      </div>
    );
  if (kind === 'chain')
    return (
      <svg width="150" height="46" viewBox="0 0 150 46">
        <path d="M12 23 H138" stroke="rgba(15,17,21,0.14)" strokeWidth="2" />
        {[12, 75, 138].map((x, i) => (
          <circle key={x} cx={x} cy="23" r="9" fill={i === 0 ? c : '#fff'} stroke={c} strokeWidth="2.5" />
        ))}
      </svg>
    );
  if (kind === 'check')
    return (
      <div style={{width: 46, height: 46, borderRadius: 23, border: `2.5px ${on > 0.5 ? 'solid' : 'dashed'} ${c}`, display: 'grid', placeItems: 'center'}}>
        <svg width="22" height="22" viewBox="0 0 22 22">
          <path d="M4 11.5l4.8 4.8L18 6" fill="none" stroke={c} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  if (kind === 'rows')
    return (
      <div style={{display: 'flex', flexDirection: 'column', gap: 9, width: 120}}>
        {[1, 0.7, 0.85].map((w, i) => (
          <div key={i} style={{height: 8, borderRadius: 4, width: `${w * 100}%`, background: i === 0 && on > 0.5 ? ACCENT : 'rgba(15,17,21,0.12)'}} />
        ))}
      </div>
    );
  return (
    <div style={{display: 'flex', gap: 8}}>
      {[0, 1, 2].map((i) => (
        <div key={i} style={{width: 34, height: 46, borderRadius: 8, background: i === 0 && on > 0.5 ? L.a14 : '#eef0f4', border: `1.5px solid ${i === 0 && on > 0.5 ? ACCENT : 'rgba(15,17,21,0.07)'}`}} />
      ))}
    </div>
  );
};

/** Scene 4: People → Process → Approvals → Data → Operations, mapped with the business in the room. */
export const MapBody: React.FC<{u: number}> = ({u}) => {
  const nodeIn = (i: number) => seg(u, 0.5 + i * 0.5, 1.3 + i * 0.5, glide);
  // The PM and the domain expert visit the nodes; the node under a cursor takes the focus state.
  const pmKeys: [number, number][] = [[1.2, 0], [2.0, 0], [2.9, 1], [3.8, 2], [4.7, 3], [5.5, 4], [6.0, 4]];
  const focusIdx = track(u, pmKeys, smooth);
  const nodeFocus = (i: number) => Math.max(0, 1 - Math.abs(focusIdx - i) * 2.2) * seg(u, 1.0, 1.4);
  const bottleneck = seg(u, 4.0, 4.7, glide);

  const pmX = track(u, pmKeys.map(([a]) => [a, 470] as [number, number]), smooth);
  const pmY = track(u, pmKeys.map(([a, i]) => [a, NODE_Y(i) + 40] as [number, number]), smooth);
  const deKeys: [number, number][] = [[2.4, 0], [3.4, 0], [4.2, 2], [6.0, 2]];
  const deX = track(u, deKeys.map(([a]) => [a, 590] as [number, number]), smooth);
  const deY = track(u, deKeys.map(([a, i]) => [a, NODE_Y(i) + 92] as [number, number]), smooth);

  return (
    <div style={{position: 'absolute', inset: 0}}>
      <OpGrid p={1} />
      {/* connectors */}
      {NODES.slice(0, -1).map((_, i) => {
        const p = seg(u, 0.9 + i * 0.5, 1.5 + i * 0.5, smooth);
        return <div key={i} style={{position: 'absolute', left: 36 + 62, top: NODE_Y(i) + NODE_H, width: 2, height: (NODE_Y(i + 1) - NODE_Y(i) - NODE_H) * p, background: 'rgba(15,17,21,0.18)'}} />;
      })}
      {NODES.map((n, i) => {
        const p = nodeIn(i);
        const f = nodeFocus(i);
        const flagged = i === 2 ? bottleneck : 0;
        return (
          <div
            key={n.k}
            style={{
              ...CARD,
              position: 'absolute',
              left: 36,
              top: NODE_Y(i),
              width: 828,
              height: NODE_H,
              borderRadius: 20,
              padding: '0 32px',
              display: 'flex',
              alignItems: 'center',
              gap: 26,
              opacity: p,
              transform: `translateY(${(1 - p) * 18}px) scale(${lerp(0.985, 1, p)})`,
              borderColor: f > 0.4 ? L.a40 : flagged > 0.5 ? L.a40 : 'rgba(15,17,21,0.07)',
              background: f > 0.4 ? 'rgba(245,250,255,0.98)' : 'rgba(255,255,255,0.94)',
              boxShadow: f > 0.4 ? '0 1px 2px rgba(15,17,21,0.05), 0 12px 28px rgba(10,132,255,0.10)' : '0 1px 2px rgba(15,17,21,0.05)',
            }}
          >
            <div style={{width: 64, height: 64, borderRadius: 16, background: f > 0.4 ? ACCENT : '#f0f2f6', color: f > 0.4 ? '#fff' : L.muted, display: 'grid', placeItems: 'center', fontSize: 21, fontWeight: 600, letterSpacing: '0.04em', fontVariantNumeric: 'tabular-nums'}}>{n.n}</div>
            <div style={{flex: 1}}>
              <div style={{fontSize: 38, fontWeight: 400, letterSpacing: '-0.025em', color: L.ink, lineHeight: 1.1}}>{n.k}</div>
              <div style={{fontSize: 23, color: L.muted, marginTop: 6}}>{n.sub}</div>
            </div>
            <Mini kind={n.mini} on={f > 0.4 ? 1 : 0} />
            {i === 2 ? (
              <div style={{position: 'absolute', right: 28, top: -17, padding: '6px 16px 7px', borderRadius: 999, background: L.a14, border: `1px solid ${L.a40}`, color: L.accentText, fontSize: 17, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: bottleneck, transform: `translateY(${(1 - bottleneck) * 6}px)`}}>
                Bottleneck
              </div>
            ) : null}
          </div>
        );
      })}
      <Cursor x={pmX} y={pmY} name="Verity PM" color={ACCENT} opacity={seg(u, 1.0, 1.5)} />
      <Cursor x={deX} y={deY} name="Domain expert" color={L.ink} opacity={seg(u, 2.4, 2.9)} />
    </div>
  );
};

const TERMS: [string, string][] = [
  ['Inventory', 'SKUs, cases, batches'],
  ['Orders', 'Retailer orders, indents'],
  ['Relationships', 'Retailers, outlets'],
  ['Locations', 'Godowns, vans'],
  ['Workflows', 'Credit limits, schemes'],
];
const STEPS = ['Salesperson records the order against the retailer', 'Stock availability checked across godowns', 'Order accepted, or held for approval if it exceeds the limit', 'Order released to the godown for picking'];
const MODULES = ['Retailers', 'Orders', 'Godowns', 'Approvals'];

/** Scene 5 and 8: the same surface, now speaking the business's own language. Terms from content/businesses/distributors.js. */
export const BuildBody: React.FC<{u: number; live?: number; t?: number}> = ({u, live = 0, t = 0}) => {
  return (
    <div style={{position: 'absolute', inset: 0}}>
      <OpGrid p={1} />
      {/* modules appear only when needed */}
      <div style={{position: 'absolute', left: 36, top: 36, display: 'flex', gap: 12}}>
        {MODULES.map((m, i) => {
          const p = seg(u, 0.5 + i * 0.22, 1.2 + i * 0.22, glide);
          return (
            <div key={m} style={{...CARD, padding: '12px 22px', borderRadius: 999, fontSize: 22, fontWeight: 500, color: i === 3 ? L.accentText : L.ink, background: i === 3 ? L.a08 : 'rgba(255,255,255,0.94)', borderColor: i === 3 ? L.a24 : 'rgba(15,17,21,0.07)', opacity: p, transform: `translateY(${(1 - p) * 10}px)`}}>
              {m}
            </div>
          );
        })}
      </div>

      {/* terminology: Verity's base term rolls into the company's own words */}
      <div style={{position: 'absolute', left: 36, top: 128, width: 828}}>
        <Label style={{opacity: seg(u, 1.3, 1.8)}}>In your words</Label>
        <div style={{marginTop: 14, borderTop: `1px solid ${L.line}`}}>
          {TERMS.map(([base, mine], i) => {
            const enter = seg(u, 1.5 + i * 0.1, 2.1 + i * 0.1, glide);
            const flip = seg(u, 2.3 + i * 0.3, 3.0 + i * 0.3, smooth);
            return (
              <div key={base} style={{height: 66, borderBottom: `1px solid ${L.hair}`, position: 'relative', overflow: 'hidden', opacity: enter}}>
                <div style={{position: 'absolute', left: 0, top: 0, height: 66, display: 'flex', alignItems: 'center', fontSize: 38, fontWeight: 300, letterSpacing: '-0.025em', color: L.muted, transform: `translateY(${-flip * 70}px)`, opacity: 1 - flip}}>{base}</div>
                <div style={{position: 'absolute', left: 0, top: 0, height: 66, display: 'flex', alignItems: 'center', fontSize: 38, fontWeight: 300, letterSpacing: '-0.025em', color: L.ink, transform: `translateY(${(1 - flip) * 70}px)`, opacity: flip}}>{mine}</div>
                <div style={{position: 'absolute', right: 0, top: 0, height: 66, display: 'flex', alignItems: 'center', fontSize: 15, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: L.faint, opacity: flip * 0.9}}>{base}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* the workflow, in the order the business actually runs it */}
      <div style={{...CARD, position: 'absolute', left: 36, top: 520, width: 828, height: 396, borderRadius: 22, padding: '30px 34px', opacity: seg(u, 3.4, 4.1, glide), transform: `translateY(${(1 - seg(u, 3.4, 4.1, glide)) * 22}px)`}}>
        <Label>Order taken at an outlet</Label>
        <div style={{marginTop: 18, position: 'relative'}}>
          <div style={{position: 'absolute', left: 14, top: 26, bottom: 40, width: 2, background: L.line}} />
          {STEPS.map((s, i) => {
            const p = seg(u, 4.0 + i * 0.28, 4.7 + i * 0.28, glide);
            const held = i === 2;
            const done = i < 2 || (live > 0.5 && i > 2);
            return (
              <div key={s} style={{display: 'flex', alignItems: 'center', gap: 22, height: 74, opacity: p, transform: `translateX(${(1 - p) * 14}px)`, position: 'relative'}}>
                <div style={{width: 30, height: 30, borderRadius: 15, flex: 'none', background: done ? ACCENT : '#fff', border: `2.5px solid ${done || held ? ACCENT : L.line}`, display: 'grid', placeItems: 'center', boxShadow: held ? `0 0 0 ${5 + 2 * Math.sin(t * 2.4) ** 2}px ${'rgba(10,132,255,0.14)'}` : undefined}}>
                  {done ? (
                    <svg width="16" height="16" viewBox="0 0 22 22">
                      <path d="M4 11.5l4.8 4.8L18 6" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : null}
                </div>
                <div style={{fontSize: 25, lineHeight: 1.22, color: held ? L.ink : done ? L.ink : L.body, fontWeight: held ? 500 : 400, letterSpacing: '-0.01em'}}>{s}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

/** Scene 7: the proposal. The owner reads it, approves it, and only then does the system activate. */
export const ProposalBody: React.FC<{u: number; approve: number; activate: number; press: number; hover: number; cx: number; cy: number}> = ({u, approve, activate, press, hover, cx, cy}) => {
  const enter = seg(u, 0.1, 1.2, glide);
  const rows = [
    ['Your workflows', 'Mapped from how you work today'],
    ['Your modules', 'Only what your workflow needs'],
    ['Your terminology', 'In your own words'],
  ];
  const btnBg = approve > 0.5 ? ACCENT : L.ink;
  return (
    <div style={{position: 'absolute', inset: 0}}>
      <OpGrid p={1} />
      <div style={{...CARD, position: 'absolute', left: 36, top: 44, width: 828, height: 868, borderRadius: 26, padding: '48px 46px', opacity: enter, transform: `translateY(${(1 - enter) * 26}px) scale(${lerp(0.985, 1, enter)})`, boxShadow: '0 1px 2px rgba(15,17,21,0.05), 0 22px 50px rgba(15,17,21,0.08)'}}>
        <Label>Proposal</Label>
        <div style={{fontSize: 72, fontWeight: 300, letterSpacing: '-0.04em', lineHeight: 1.04, marginTop: 14, color: L.ink}}>Your Verity</div>
        <div style={{fontSize: 26, color: L.muted, marginTop: 14, letterSpacing: '-0.01em'}}>Prepared after your business analysis</div>
        <div style={{marginTop: 44, borderTop: `1px solid ${L.line}`}}>
          {rows.map(([a, b], i) => {
            const p = seg(u, 0.7 + i * 0.25, 1.4 + i * 0.25, glide);
            const on = seg(activate, i * 0.34, i * 0.34 + 0.5, glide);
            return (
              <div key={a} style={{display: 'flex', alignItems: 'center', gap: 24, height: 112, borderBottom: `1px solid ${L.hair}`, opacity: p, transform: `translateY(${(1 - p) * 12}px)`}}>
                <div style={{width: 34, height: 34, borderRadius: 17, flex: 'none', background: on > 0.5 ? ACCENT : '#fff', border: `2.5px solid ${on > 0.5 ? ACCENT : L.line}`, display: 'grid', placeItems: 'center', transition: 'none'}}>
                  <svg width="18" height="18" viewBox="0 0 22 22" style={{opacity: on}}>
                    <path d="M4 11.5l4.8 4.8L18 6" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div style={{flex: 1}}>
                  <div style={{fontSize: 36, fontWeight: 300, letterSpacing: '-0.025em', color: L.ink}}>{a}</div>
                  <div style={{fontSize: 22, color: L.muted, marginTop: 4}}>{b}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div
          style={{
            position: 'absolute',
            left: 46,
            right: 46,
            bottom: 46,
            height: 104,
            borderRadius: 18,
            background: btnBg,
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 18,
            fontSize: 28,
            fontWeight: 500,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            boxShadow: approve > 0.5 ? '0 14px 34px rgba(10,132,255,0.28)' : `0 ${10 + hover * 6}px ${24 + hover * 10}px rgba(15,17,21,${0.16 + hover * 0.06})`,
            transform: `scale(${1 - press * 0.012})`,
          }}
        >
          {approve > 0.5 ? (
            <svg width="30" height="30" viewBox="0 0 22 22">
              <path d="M4 11.5l4.8 4.8L18 6" fill="none" stroke="#fff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="24" strokeDashoffset={24 * (1 - seg(approve, 0.5, 1, glide))} />
            </svg>
          ) : null}
          {approve > 0.5 ? 'Approved' : 'Approve'}
        </div>
      </div>
      <Cursor x={cx} y={cy} name="Business owner" color={L.ink} opacity={seg(u, 1.6, 2.1)} press={press} />
    </div>
  );
};
