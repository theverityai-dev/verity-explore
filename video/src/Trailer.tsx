import React from 'react';
import {AbsoluteFill, Img, staticFile, useCurrentFrame} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Inter';
import {FPS, inOut, lerp, pop, quad, seg, track} from './timeline';

const {fontFamily} = loadFont('normal', {weights: ['400', '500', '600', '700'], subsets: ['latin']});

/* ----------------------------------------------------------------------------
   Geometry. World = 2x2 grid of product panels; camera navigates it.
   Screen = 1080x1920. World origin (0,0) is the grid centre.
   -------------------------------------------------------------------------- */
const PW = 880;
const PH = 760;
const PAD = 36;
const GX = 480; // panel centre offsets before convergence
const GY = 420;

type PanelId = 'crm' | 'ops' | 'dash' | 'ana';
const PANELS: Record<PanelId, {sx: number; sy: number}> = {
  crm: {sx: -1, sy: -1},
  ops: {sx: 1, sy: -1},
  dash: {sx: -1, sy: 1},
  ana: {sx: 1, sy: 1},
};

const camX: [number, number][] = [[0, -480], [10.4, -480], [12.2, 480], [16, 480], [18.4, 0], [25.5, 0]];
const camY: [number, number][] = [[0, -420], [16, -420], [18.4, 0], [23, 0], [25.2, 430]];
const camS: [number, number][] = [[0, 1], [7, 1], [10.4, 1.05], [12.2, 1], [16, 1.05], [18.4, 0.54], [23, 0.58], [25.2, 0.56]];

/** Panel centre in world space, including the orbit + convergence in beat F. */
const panelCenter = (id: PanelId, t: number): [number, number] => {
  const {sx, sy} = PANELS[id];
  const e = seg(t, 19.6, 22.6, inOut);
  const conv = seg(t, 21.8, 23.2, inOut);
  const m = 1 + 0.26 * Math.sin(Math.PI * e);
  const x = sx * lerp(GX, 448, conv) * m;
  const y = sy * lerp(GY, 388, conv) * m;
  const th = 2 * Math.PI * e;
  return [x * Math.cos(th) - y * Math.sin(th), x * Math.sin(th) + y * Math.cos(th)];
};

/* ----------------------------------------------------------------------------
   Small UI atoms — token-driven, styled after the site's dashboard replica.
   -------------------------------------------------------------------------- */
const Pill: React.FC<{children: React.ReactNode; tone?: 'accent' | 'muted' | 'ok'}> = ({children, tone = 'muted'}) => (
  <span
    style={{
      fontSize: 22,
      fontWeight: 600,
      padding: '6px 14px',
      borderRadius: 999,
      whiteSpace: 'nowrap',
      color: tone === 'accent' ? 'var(--accent-text)' : tone === 'ok' ? '#1f7a44' : 'var(--ink-muted)',
      background: tone === 'accent' ? 'var(--accent-a14)' : tone === 'ok' ? 'rgba(31,122,68,0.10)' : 'var(--line-hair)',
      border: `1px solid ${tone === 'accent' ? 'var(--accent-a40)' : 'var(--line-hair)'}`,
    }}
  >
    {children}
  </span>
);

const Avatar: React.FC<{letter: string; active?: boolean; size?: number}> = ({letter, active, size = 52}) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: 14,
      flex: 'none',
      display: 'grid',
      placeItems: 'center',
      fontWeight: 700,
      fontSize: size * 0.42,
      background: active ? 'var(--accent)' : 'var(--line-hair)',
      color: active ? 'var(--accent-ink)' : 'var(--ink-muted)',
    }}
  >
    {letter}
  </div>
);

const PanelTitle: React.FC<{title: string; right?: React.ReactNode}> = ({title, right}) => (
  <div style={{height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
    <div style={{fontSize: 34, fontWeight: 700, letterSpacing: '-0.02em'}}>{title}</div>
    {right}
  </div>
);

const Shell: React.FC<{
  id: PanelId;
  t: number;
  appear: number;
  dim: number;
  radius: number;
  children: React.ReactNode;
}> = ({id, t, appear, dim, radius, children}) => {
  const [cx, cy] = panelCenter(id, t);
  return (
    <div
      style={{
        position: 'absolute',
        left: cx - PW / 2,
        top: cy - PH / 2,
        width: PW,
        height: PH,
        padding: PAD,
        boxSizing: 'border-box',
        borderRadius: radius,
        background: 'var(--surface)',
        border: '1px solid var(--line)',
        boxShadow: '0 30px 90px rgba(15,17,21,0.12)',
        color: 'var(--ink)',
        opacity: appear * (0.35 + 0.65 * dim),
        transform: `scale(${lerp(0.94, 1, appear)})`,
        overflow: 'hidden',
      }}
    >
      {children}
    </div>
  );
};

/* ----------------------------------------------------------------------------
   Panels
   -------------------------------------------------------------------------- */
const CUSTOMERS: [string, string][] = [
  ['Halden & Co', '$12.4k'],
  ['Northwind Traders', '$1.2M'],
  ['Apex Freight', '$86k'],
  ['Lumen Studio', '$22k'],
  ['Orbit Foods', '$310k'],
];

const Card: React.FC<{h: number; accent?: boolean; col?: boolean; children: React.ReactNode}> = ({h, accent, col, children}) => (
  <div
    style={{
      height: h,
      boxSizing: 'border-box',
      padding: '0 24px',
      borderRadius: 20,
      display: 'flex',
      flexDirection: col ? 'column' : 'row',
      justifyContent: col ? 'center' : undefined,
      alignItems: col ? 'flex-start' : 'center',
      gap: col ? 14 : 18,
      background: 'var(--surface-elevated)',
      border: `1px solid ${accent ? 'var(--accent-a40)' : 'var(--line)'}`,
    }}
  >
    {children}
  </div>
);

const Link: React.FC<{p: number}> = ({p}) => (
  <div style={{height: 28, display: 'flex', justifyContent: 'center'}}>
    <div style={{width: 3, height: 28 * p, background: 'var(--accent)', borderRadius: 2}} />
  </div>
);

const Eyebrow: React.FC<{children: React.ReactNode}> = ({children}) => (
  <div style={{fontSize: 21, color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: '0.08em'}}>{children}</div>
);

const CrmPanel: React.FC<{t: number; frame: number}> = ({t, frame}) => {
  const listOut = seg(t, 8.1, 8.7);
  const rec = seg(t, 8.3, 8.9);
  const oppIn = pop(frame, 9.0);
  const ordIn = pop(frame, 10.1);
  const stage = seg(t, 9.4, 10.0); // 0..1 → Proposal, Negotiation, Won
  const connA = seg(t, 8.8, 9.2);
  const connB = seg(t, 9.8, 10.2);
  const reached = stage < 0.02 ? 0 : stage < 0.98 ? 1 : 2;
  return (
    <>
      <PanelTitle title="CRM" right={<Pill>Customers</Pill>} />
      <div style={{position: 'relative'}}>
        <div style={{opacity: 1 - listOut, transform: `translateY(${-30 * listOut}px)`, filter: `blur(${listOut * 8}px)`}}>
          {CUSTOMERS.map(([name, val], i) => {
            const sel = i === 1;
            return (
              <div
                key={name}
                style={{
                  height: 84,
                  marginBottom: 10,
                  padding: '0 18px',
                  borderRadius: 18,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 18,
                  background: sel ? 'var(--accent-a14)' : 'transparent',
                  border: `1px solid ${sel ? 'var(--accent-a40)' : 'var(--line-hair)'}`,
                }}
              >
                <Avatar letter={name[0]} active={sel} />
                <div style={{flex: 1, fontSize: 28, fontWeight: 600}}>{name}</div>
                <div style={{fontSize: 26, color: 'var(--ink-muted)', fontVariantNumeric: 'tabular-nums'}}>{val}</div>
              </div>
            );
          })}
        </div>

        <div style={{position: 'absolute', inset: 0, opacity: rec, transform: `translateY(${(1 - rec) * 30}px)`}}>
          <Card h={128} accent>
            <Avatar letter="N" active size={64} />
            <div style={{flex: 1}}>
              <div style={{fontSize: 30, fontWeight: 700}}>Northwind Traders</div>
              <div style={{fontSize: 22, color: 'var(--ink-muted)'}}>Customer since 2022 · $1.2M lifetime</div>
            </div>
            <Pill tone="ok">Active</Pill>
          </Card>
          <Link p={connA} />
          <div style={{opacity: oppIn, transform: `translateY(${(1 - oppIn) * 40}px)`}}>
            <Card h={168} col>
              <div style={{display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between'}}>
                <div>
                  <Eyebrow>Opportunity</Eyebrow>
                  <div style={{fontSize: 28, fontWeight: 600}}>Annual supply contract</div>
                </div>
                <div style={{fontSize: 36, fontWeight: 700, fontVariantNumeric: 'tabular-nums'}}>$48,200</div>
              </div>
              <div style={{display: 'flex', gap: 8, width: '100%'}}>
                {['Proposal', 'Negotiation', 'Won'].map((s, i) => {
                  const on = i <= reached;
                  return (
                    <div key={s} style={{flex: 1}}>
                      <div style={{height: 8, borderRadius: 4, background: on ? 'var(--accent)' : 'var(--line)'}} />
                      <div style={{fontSize: 20, marginTop: 6, color: on ? 'var(--ink)' : 'var(--ink-muted)'}}>{s}</div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
          <Link p={connB} />
          <div style={{opacity: ordIn, transform: `translateY(${(1 - ordIn) * 40}px)`}}>
            <Card h={128} accent>
              <div style={{flex: 1}}>
                <Eyebrow>Order</Eyebrow>
                <div style={{fontSize: 30, fontWeight: 700}}>#1042 · 240 units</div>
              </div>
              <Pill tone="accent">Confirmed</Pill>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

const Kpi: React.FC<{label: string; value: string; delta?: string; flash: number; w?: number | string}> = ({label, value, delta, flash, w}) => (
  <div
    style={{
      width: w,
      height: 150,
      boxSizing: 'border-box',
      padding: '22px 26px',
      borderRadius: 20,
      background: 'var(--surface-elevated)',
      border: `1px solid ${flash > 0.02 ? 'var(--accent)' : 'var(--line)'}`,
      boxShadow: flash > 0.02 ? `0 0 0 ${flash * 8}px var(--accent-a14)` : 'none',
    }}
  >
    <div style={{fontSize: 22, color: 'var(--ink-muted)'}}>{label}</div>
    <div style={{display: 'flex', alignItems: 'baseline', gap: 14, marginTop: 8}}>
      <div style={{fontSize: 54, fontWeight: 700, letterSpacing: '-0.03em', fontVariantNumeric: 'tabular-nums'}}>{value}</div>
      {delta ? <div style={{fontSize: 24, color: 'var(--accent-text)', fontWeight: 600}}>{delta}</div> : null}
    </div>
  </div>
);

const pulse = (t: number, a: number) => seg(t, a, a + 0.25) * (1 - 0.7 * seg(t, a + 0.25, a + 1.4));

const DashPanel: React.FC<{t: number}> = ({t}) => {
  const k = seg(t, 17.1, 18.3);
  const rev = 1280 + 48.2 * k;
  const orders = 1041 + (t >= 17.1 ? 1 : 0);
  const ful = 96 + 2.4 * k;
  const line = seg(t, 17.2, 19);
  const pts = [0.35, 0.42, 0.38, 0.5, 0.46, 0.58, 0.55, 0.66, 0.6, lerp(0.62, 0.86, line)];
  const path = pts.map((p, i) => `${i ? 'L' : 'M'}${(i * 808) / 9},${190 - p * 190}`).join(' ');
  return (
    <>
      <PanelTitle title="Dashboard" right={<Pill tone="accent">Live</Pill>} />
      <div style={{display: 'flex', gap: 20}}>
        <Kpi w={394} label="Revenue" value={`$${(rev / 1000).toFixed(2)}M`} flash={pulse(t, 17.1)} />
        <Kpi w={394} label="Orders" value={orders.toLocaleString('en-US')} flash={pulse(t, 17.1)} />
      </div>
      <div style={{marginTop: 20}}>
        <Kpi w={808} label="On-time fulfilment" value={`${ful.toFixed(1)}%`} delta={k > 0.5 ? '+2.4' : undefined} flash={pulse(t, 17.1)} />
      </div>
      <svg width={808} height={200} style={{marginTop: 20, overflow: 'visible'}}>
        <path d={`${path} L808,190 L0,190 Z`} style={{fill: 'var(--accent-a08)'}} />
        <path d={path} fill="none" strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" style={{stroke: 'var(--accent)'}} />
      </svg>
    </>
  );
};

const BARS = [38, 52, 44, 61, 55, 68, 59, 72, 64];

const AnaPanel: React.FC<{t: number}> = ({t}) => {
  const g = seg(t, 17.2, 18.6);
  const last = lerp(46, 96, g);
  return (
    <>
      <PanelTitle title="Analytics" right={<Pill tone={g > 0.4 ? 'accent' : 'muted'}>{g > 0.4 ? '+12.4% wk' : 'Revenue / week'}</Pill>} />
      <div style={{height: 420, display: 'flex', alignItems: 'flex-end', gap: 26, marginTop: 30, borderBottom: '1px solid var(--line)'}}>
        {[...BARS, last].map((h, i) => (
          <div
            key={i}
            style={{
              width: 56,
              height: `${h}%`,
              borderRadius: '12px 12px 4px 4px',
              background: i === 9 ? 'var(--accent)' : 'var(--line)',
            }}
          />
        ))}
      </div>
      <div style={{display: 'flex', gap: 26, marginTop: 14, fontSize: 20, color: 'var(--ink-muted)'}}>
        {['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'].map((w) => (
          <div key={w} style={{width: 56, textAlign: 'center'}}>{w}</div>
        ))}
      </div>
    </>
  );
};

/* Ops: kanban with the new order arriving as a task and moving through stages */
const COLS = ['Queued', 'In progress', 'Done'];
const COL_W = 250;
const COL_GAP = 29;
const slotY = (i: number) => 46 + i * 118;
const STATIC: {col: number; slot: number; title: string; sub: string}[] = [
  {col: 0, slot: 1, title: 'Pack #1038', sub: 'Warehouse A'},
  {col: 0, slot: 2, title: 'Invoice #1039', sub: 'Finance'},
  {col: 1, slot: 1, title: 'Ship #1036', sub: 'Route 4'},
  {col: 2, slot: 1, title: 'Deliver #1033', sub: 'Signed'},
  {col: 2, slot: 2, title: 'Deliver #1034', sub: 'Signed'},
];

const OpsPanel: React.FC<{t: number}> = ({t}) => {
  const spawn = seg(t, 12.3, 12.9);
  const c1 = seg(t, 13.2, 13.9, inOut);
  const c2 = seg(t, 14.6, 15.3, inOut);
  const x = (c1 + c2) * (COL_W + COL_GAP);
  const done = c2 > 0.98;
  const status = done ? 'Done' : c1 > 0.98 ? 'In progress' : 'Queued';
  const ontime = 96 + 2.4 * seg(t, 15.3, 16.3);
  return (
    <>
      <PanelTitle title="Operations" right={<Pill tone="accent">{status}</Pill>} />
      <div style={{position: 'relative', height: 500}}>
        {COLS.map((c, i) => (
          <div key={c} style={{position: 'absolute', left: i * (COL_W + COL_GAP), top: 0, width: COL_W, fontSize: 22, color: 'var(--ink-muted)', fontWeight: 600}}>
            {c}
          </div>
        ))}
        {STATIC.map((s) => (
          <div
            key={s.title}
            style={{
              position: 'absolute',
              left: s.col * (COL_W + COL_GAP),
              top: slotY(s.slot),
              width: COL_W,
              height: 104,
              boxSizing: 'border-box',
              padding: '18px 20px',
              borderRadius: 18,
              background: 'var(--surface-elevated)',
              border: '1px solid var(--line-hair)',
            }}
          >
            <div style={{fontSize: 24, fontWeight: 600}}>{s.title}</div>
            <div style={{fontSize: 20, color: 'var(--ink-muted)', marginTop: 4}}>{s.sub}</div>
          </div>
        ))}
        <div
          style={{
            position: 'absolute',
            left: x,
            top: slotY(0),
            width: COL_W,
            height: 104,
            boxSizing: 'border-box',
            padding: '18px 20px',
            borderRadius: 18,
            background: 'var(--accent-a14)',
            border: '1px solid var(--accent)',
            opacity: spawn,
            transform: `scale(${lerp(0.9, 1, spawn)})`,
          }}
        >
          <div style={{fontSize: 24, fontWeight: 700}}>Fulfil #1042</div>
          <div style={{fontSize: 20, color: 'var(--accent-text)', marginTop: 4}}>{done ? '✓ Complete' : 'Northwind · 240'}</div>
        </div>
      </div>
      <div style={{padding: '18px 22px', borderRadius: 18, background: 'var(--surface-elevated)', border: '1px solid var(--line-hair)'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', fontSize: 22, color: 'var(--ink-muted)'}}>
          <span>On-time delivery</span>
          <span style={{color: 'var(--ink)', fontWeight: 700, fontVariantNumeric: 'tabular-nums'}}>{ontime.toFixed(1)}%</span>
        </div>
        <div style={{height: 8, borderRadius: 4, background: 'var(--line)', marginTop: 12}}>
          <div style={{height: 8, borderRadius: 4, width: `${ontime}%`, background: 'var(--accent)'}} />
        </div>
      </div>
    </>
  );
};

/* ----------------------------------------------------------------------------
   Beat A/B — fragmented objects in screen space
   -------------------------------------------------------------------------- */
const CHIPS = [
  {name: 'Lead', sub: 'Inbound · New', x: 250, y: 560, a: 26, f: 0.31, p: 0.4, r: -3, d: 0.1},
  {name: 'Invoice', sub: 'INV-2291 · Due', x: 800, y: 470, a: 22, f: 0.42, p: 2.1, r: 3, d: 0.4},
  {name: 'Customer', sub: 'Northwind Traders', x: 560, y: 900, a: 24, f: 0.27, p: 1.2, r: -2, d: 0.7},
  {name: 'Order', sub: '#1042 · Draft', x: 250, y: 1170, a: 28, f: 0.36, p: 3.3, r: 4, d: 1.0},
  {name: 'Task', sub: 'Follow up · Today', x: 830, y: 1060, a: 20, f: 0.5, p: 0.9, r: -4, d: 1.3},
  {name: 'Employee', sub: 'A. Rao · Sales', x: 290, y: 1470, a: 24, f: 0.33, p: 4.4, r: 2, d: 1.6},
  {name: 'Project', sub: 'Rollout · 62%', x: 800, y: 1420, a: 26, f: 0.29, p: 5.1, r: -3, d: 1.9},
  {name: 'Payment', sub: '$48,200 · Pending', x: 540, y: 1640, a: 22, f: 0.45, p: 2.7, r: 3, d: 2.2},
];
const CHIP_W = 300;
const CHIP_H = 100;
const CUST = 2;

const chipPos = (i: number, t: number): [number, number] => {
  const c = CHIPS[i];
  let x = c.x + c.a * Math.sin(2 * Math.PI * c.f * t + c.p);
  let y = c.y + c.a * 0.8 * Math.cos(2 * Math.PI * c.f * 1.3 * t + c.p * 1.7);
  // customer settles to centre; the rest get drawn toward it
  if (i === CUST) {
    const s = seg(t, 5.6, 6.6, inOut);
    x = lerp(x, 540, s);
    y = lerp(y, 960, s);
  } else {
    const pull = seg(t, 6.3, 7.2, inOut) * 0.7;
    x = lerp(x, 540, pull);
    y = lerp(y, 960, pull);
  }
  return [x, y];
};

const Chips: React.FC<{t: number; frame: number}> = ({t, frame}) => {
  const sel = seg(t, 5.2, 5.5);
  const grow = seg(t, 7.0, 8.0, inOut);
  const others = 1 - seg(t, 6.4, 7.2);
  const cust = chipPos(CUST, t);
  const cur = seg(t, 3.9, 5.2, inOut);
  const cursor: [number, number] = [lerp(930, cust[0] + 70, cur), lerp(1740, cust[1] + 30, cur)];
  const cursorOut = 1 - seg(t, 6.4, 7.0);
  const click = seg(t, 5.2, 5.9);
  const targets = [0, 1, 3, 7];
  return (
    <>
      <svg width={1080} height={1920} style={{position: 'absolute', inset: 0}}>
        {targets.map((j, n) => {
          const [x0, y0] = cust;
          const [x1, y1] = chipPos(j, t);
          const len = Math.hypot(x1 - x0, y1 - y0);
          const p = seg(t, 5.4 + n * 0.12, 6.3 + n * 0.12);
          return (
            <line
              key={j}
              x1={x0}
              y1={y0}
              x2={x1}
              y2={y1}
              strokeWidth={3}
              strokeDasharray={len}
              strokeDashoffset={len * (1 - p)}
              opacity={others}
              style={{stroke: 'var(--accent)'}}
            />
          );
        })}
      </svg>
      {CHIPS.map((c, i) => {
        const isC = i === CUST;
        const p = pop(frame, c.d);
        const [x, y] = chipPos(i, t);
        const flick = Math.sin(t * 3 + c.p * 5) > 0.55;
        const scale = isC ? lerp(1, 2.93, grow) : 1;
        const op = isC ? 1 - seg(t, 7.5, 8.1) : others;
        const on = isC && sel > 0.5;
        return (
          <div
            key={c.name}
            style={{
              position: 'absolute',
              left: x - CHIP_W / 2,
              top: y - CHIP_H / 2,
              width: CHIP_W,
              height: CHIP_H,
              boxSizing: 'border-box',
              padding: '0 20px',
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              borderRadius: 24,
              background: on ? 'var(--surface-elevated)' : 'var(--surface)',
              border: `1px solid ${on ? 'var(--accent)' : 'var(--line)'}`,
              boxShadow: '0 16px 48px rgba(15,17,21,0.12)',
              color: 'var(--ink)',
              opacity: op * Math.min(1, p * 1.5),
              transform: `scale(${scale * lerp(0.8, 1, p)}) rotate(${c.r * (isC ? 1 - sel : 1)}deg)`,
              filter: !isC && others < 1 ? `blur(${(1 - others) * 6}px)` : undefined,
            }}
          >
            <Avatar letter={c.name[0]} active={on} size={52} />
            <div style={{minWidth: 0}}>
              <div style={{fontSize: 28, fontWeight: 700, lineHeight: 1.1}}>{c.name}</div>
              <div style={{fontSize: 19, color: 'var(--ink-muted)', whiteSpace: 'nowrap'}}>{c.sub}</div>
            </div>
            <div style={{marginLeft: 'auto', width: 10, height: 10, borderRadius: 5, background: flick ? 'var(--accent)' : 'var(--line)'}} />
          </div>
        );
      })}
      {click > 0 && click < 1 ? (
        <div
          style={{
            position: 'absolute',
            left: cursor[0] - 60 * click,
            top: cursor[1] - 60 * click,
            width: 120 * click,
            height: 120 * click,
            borderRadius: '50%',
            border: '3px solid var(--accent)',
            opacity: 1 - click,
          }}
        />
      ) : null}
      <svg
        width={44}
        height={44}
        viewBox="0 0 24 24"
        style={{position: 'absolute', left: cursor[0], top: cursor[1], opacity: cursorOut * seg(t, 3.6, 3.9), filter: 'drop-shadow(0 4px 8px rgba(0,0,0,.6))'}}
      >
        <path d="M4 2l15 9-6.5 1.5L9 19z" fill="#fff" stroke="#111" strokeWidth={1.2} strokeLinejoin="round" />
      </svg>
    </>
  );
};

/* ----------------------------------------------------------------------------
   Flow tokens between panels (world space)
   -------------------------------------------------------------------------- */
const ORDER_CARD: [number, number] = [-480, -284];
const TASK_SLOT: [number, number] = [201, -582 + 20];
const DONE_SLOT: [number, number] = [759, -582 + 20];
const DASH_TILE: [number, number] = [-273, 211];
const BAR: [number, number] = [842, 330];

const Flow: React.FC<{t: number}> = ({t}) => {
  const k1 = seg(t, 10.7, 12.2, inOut);
  const p1 = quad(ORDER_CARD, [-100, -760], TASK_SLOT, k1);
  const legs = [
    {from: DONE_SLOT, c: [300, -200] as [number, number], to: DASH_TILE, a: 15.5, b: 17.0},
    {from: DONE_SLOT, c: [1100, -100] as [number, number], to: BAR, a: 15.6, b: 17.1},
  ];
  const fade = 1 - seg(t, 19.0, 19.8);
  return (
    <svg width={1} height={1} style={{position: 'absolute', left: 0, top: 0, overflow: 'visible'}}>
      {t > 10.6 && t < 12.6 ? (
        <>
          <path
            d={`M${ORDER_CARD[0]},${ORDER_CARD[1]} Q-100,-760 ${TASK_SLOT[0]},${TASK_SLOT[1]}`}
            fill="none"
            strokeWidth={4}
            strokeDasharray="10 12"
            opacity={0.6 * (1 - seg(t, 12.2, 12.6))}
            style={{stroke: 'var(--accent)'}}
          />
          <g transform={`translate(${p1[0]} ${p1[1]}) scale(${lerp(1, 0.6, k1)})`} opacity={1 - seg(t, 12.2, 12.5)}>
            <rect x={-95} y={-34} width={190} height={68} rx={18} style={{fill: 'var(--accent)'}} />
            <text x={0} y={9} textAnchor="middle" fontSize={28} fontWeight={700} fontFamily={fontFamily} style={{fill: 'var(--accent-ink)'}}>
              Order #1042
            </text>
          </g>
        </>
      ) : null}
      {legs.map((l, i) => {
        if (t < l.a - 0.05) return null;
        const k = seg(t, l.a, l.b, inOut);
        const p = quad(l.from, l.c, l.to, k);
        return (
          <g key={i} opacity={fade}>
            <path
              d={`M${l.from[0]},${l.from[1]} Q${l.c[0]},${l.c[1]} ${l.to[0]},${l.to[1]}`}
              fill="none"
              strokeWidth={5}
              strokeDasharray="12 14"
              opacity={0.55}
              style={{stroke: 'var(--accent)'}}
            />
            <circle cx={p[0]} cy={p[1]} r={16} opacity={1 - seg(t, l.b, l.b + 0.2)} style={{fill: 'var(--accent)'}} />
          </g>
        );
      })}
    </svg>
  );
};

/* ----------------------------------------------------------------------------
   Captions
   -------------------------------------------------------------------------- */
const CAPTIONS: {a: number; b: number; k: string; text: string}[] = [
  {a: 0.5, b: 3.9, k: 'Right now', text: 'Your business is scattered.'},
  {a: 4.3, b: 6.9, k: 'Select one', text: 'One record connects it all.'},
  {a: 8.3, b: 10.9, k: 'CRM', text: 'Customer. Opportunity. Order.'},
  {a: 12.4, b: 15.8, k: 'Operations', text: 'The order becomes work.'},
  {a: 16.6, b: 19.4, k: 'Live', text: 'Every number updates itself.'},
  {a: 19.9, b: 22.8, k: 'Together', text: 'One environment.'},
];

const Captions: React.FC<{t: number}> = ({t}) => (
  <>
    {CAPTIONS.map((c) => {
      const inn = seg(t, c.a, c.a + 0.6);
      const out = seg(t, c.b - 0.4, c.b, inOut);
      const o = inn * (1 - out);
      if (o <= 0.001) return null;
      return (
        <div key={c.text} style={{position: 'absolute', top: 150, left: 0, right: 0, textAlign: 'center', opacity: o, transform: `translateY(${(1 - inn) * 24 - out * 16}px)`}}>
          <div style={{fontSize: 26, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-text)'}}>{c.k}</div>
          <div style={{fontSize: 58, fontWeight: 700, letterSpacing: '-0.03em', marginTop: 12, color: 'var(--ink)'}}>{c.text}</div>
        </div>
      );
    })}
  </>
);

/* ----------------------------------------------------------------------------
   Composition
   -------------------------------------------------------------------------- */
export const Trailer: React.FC = () => {
  const frame = useCurrentFrame();
  const t = frame / FPS;

  const cx = track(t, camX);
  const cy = track(t, camY);
  const s = track(t, camS);

  const appear: Record<PanelId, number> = {
    crm: seg(t, 7.3, 8.0),
    ops: seg(t, 10.3, 11.0),
    dash: seg(t, 15.6, 16.3),
    ana: seg(t, 15.6, 16.3),
  };
  const dim: Record<PanelId, number> = {
    crm: track(t, [[11, 1], [12.4, 0.45], [17.2, 0.45], [18.6, 1]]),
    ops: 1,
    dash: track(t, [[15.8, 0.5], [17.1, 0.5], [18.6, 1]]),
    ana: track(t, [[15.8, 0.5], [17.1, 0.5], [18.6, 1]]),
  };
  const radius = lerp(28, 12, seg(t, 22, 23.2));
  const bar = seg(t, 22.4, 23.2);

  const outroA = seg(t, 23.5, 24.3);
  const outroB = seg(t, 24.5, 25.2);
  const outroC = seg(t, 25.3, 25.9);

  return (
    <AbsoluteFill style={{background: 'var(--base)', fontFamily, overflow: 'hidden'}}>
      <AbsoluteFill style={{background: 'radial-gradient(ellipse 80% 55% at 50% 45%, var(--base-alt), var(--base) 75%)'}} />

      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: 0,
          height: 0,
          transformOrigin: '0 0',
          transform: `translate(${540 - cx * s}px, ${960 - cy * s}px) scale(${s})`,
        }}
      >
        <Shell id="crm" t={t} appear={appear.crm} dim={dim.crm} radius={radius}><CrmPanel t={t} frame={frame} /></Shell>
        <Shell id="ops" t={t} appear={appear.ops} dim={dim.ops} radius={radius}><OpsPanel t={t} /></Shell>
        <Shell id="dash" t={t} appear={appear.dash} dim={dim.dash} radius={radius}><DashPanel t={t} /></Shell>
        <Shell id="ana" t={t} appear={appear.ana} dim={dim.ana} radius={radius}><AnaPanel t={t} /></Shell>
        <Flow t={t} />
        <div
          style={{
            position: 'absolute',
            left: -896,
            top: -388 - PH / 2 - 92,
            width: 1792,
            height: 76,
            boxSizing: 'border-box',
            padding: '0 32px',
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            borderRadius: 16,
            background: 'var(--surface)',
            border: '1px solid var(--line)',
            opacity: bar,
            transform: `translateY(${(1 - bar) * 20}px)`,
            color: 'var(--ink)',
          }}
        >
          <Img src={staticFile('logo.svg')} style={{height: 40}} />
          <div style={{fontSize: 34, fontWeight: 700, letterSpacing: '-0.02em'}}>verity</div>
          <div style={{marginLeft: 'auto', display: 'flex', gap: 12}}>
            {['CRM', 'Operations', 'Dashboard', 'Analytics'].map((n) => (
              <Pill key={n} tone="accent">{n}</Pill>
            ))}
          </div>
        </div>
      </div>

      {t < 8.3 ? <Chips t={t} frame={frame} /> : null}
      <Captions t={t} />

      <div style={{position: 'absolute', left: 0, right: 0, top: 1330, textAlign: 'center', color: 'var(--ink)'}}>
        <div style={{fontSize: 64, fontWeight: 700, letterSpacing: '-0.03em', opacity: outroA, transform: `translateY(${(1 - outroA) * 24}px)`}}>
          One operating system.
        </div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 22, marginTop: 34, opacity: outroB, transform: `translateY(${(1 - outroB) * 24}px)`}}>
          <Img src={staticFile('logo.svg')} style={{height: 64}} />
          <div style={{fontSize: 72, fontWeight: 700, letterSpacing: '0.16em', color: 'var(--accent)'}}>VERITY</div>
        </div>
        <div style={{fontSize: 30, color: 'var(--ink-muted)', marginTop: 26, opacity: outroC}}>Your business, operating as one. · theverityai.xyz</div>
      </div>
    </AbsoluteFill>
  );
};
