import React from 'react';
import {SANS, UI, lerp, seg, smooth} from './kit';

/** The one product surface of the film. Natural size 600 x 650, drawn at 1.2x on a 1440 x 1080 canvas.
 *  It starts as pre-built ERP software, becomes a blank Verity workspace and then changes state as the business is understood. */
export const PANEL = {w: 600, h: 650, scale: 1.2};

const font: React.CSSProperties = {fontFamily: SANS, fontFeatureSettings: '"cv02","cv03","cv04","ss03"', color: UI.ink};

/* ------------------------------------------------------------------ ERP */

export const ERP_MODULES = ['Finance', 'HR', 'Procurement', 'Inventory', 'Sales', 'CRM', 'Projects', 'Payroll', 'Reports', 'Assets', 'Quality', 'Admin'];
/** Natural centre of an ERP tile. */
export const tileCenter = (row: number, col: number) => ({x: 24 + 86 + col * 180, y: 100 + 52 + row * 112});

export const ErpPanel: React.FC<{step: number}> = ({step}) => (
  <div style={{...font, position: 'absolute', inset: 0, background: '#c7cfdf', border: '2px solid #8f9ab3', borderRadius: 8, overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.3), 0 50px 120px rgba(0,0,0,0.6)'}}>
    <div style={{height: 46, background: '#3b4a68', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 18px'}}>
      <span style={{fontSize: 16, fontWeight: 700, letterSpacing: '0.04em'}}>ERP SUITE • v9.2</span>
      <span style={{fontSize: 13, color: '#c9d2e6'}}>File &nbsp; Edit &nbsp; View &nbsp; Tools &nbsp; Help</span>
    </div>
    <div style={{position: 'absolute', left: 24, top: 58, fontSize: 14, color: '#4a5675'}}>Home &gt; All Modules &gt; Standard</div>
    {ERP_MODULES.map((m, i) => {
      const c = tileCenter(Math.floor(i / 3), i % 3);
      return (
        <div key={m} style={{position: 'absolute', left: c.x - 86, top: c.y - 52, width: 172, height: 104, background: '#dde3f0', border: '1px solid #aab4cc', borderTop: '3px solid #4e5f86'}}>
          <div style={{position: 'absolute', left: 14, top: 14, width: 24, height: 24, background: '#4a5c85'}}>
            <div style={{position: 'absolute', left: 7, top: 7, width: 10, height: 10, background: '#dde3f0'}} />
          </div>
          <div style={{position: 'absolute', left: 14, top: 50, fontSize: 18, fontWeight: 700, color: '#1d2740'}}>{m}</div>
          <div style={{position: 'absolute', left: 14, top: 76, fontSize: 12, color: '#6a7592'}}>Standard module</div>
        </div>
      );
    })}
    <div style={{position: 'absolute', left: 0, right: 0, bottom: 0, height: 52, background: '#bcc5d8', borderTop: '2px solid #8f9ab3', display: 'flex', alignItems: 'center', gap: 10, padding: '0 20px', fontSize: 14, color: '#1d2740'}}>
      <b>Workflow:</b>
      {['Standard', 'Step 1', 'Step 2', 'Step 3'].map((s, i) => (
        <span key={s} style={{padding: '4px 10px', border: '1px solid #8f9ab3', background: i === step ? '#4e5f86' : '#dfe5f2', color: i === step ? '#fff' : '#1d2740'}}>
          {s}
        </span>
      ))}
      <span style={{marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8}}>
        <span style={{width: 12, height: 10, background: '#b8860b', borderRadius: 2, display: 'inline-block'}} />
        Locked
      </span>
    </div>
  </div>
);

/* --------------------------------------------------------------- Verity */

export const VerityFrame: React.FC<{status: string; live?: number; children: React.ReactNode}> = ({status, live = 0, children}) => (
  <div
    style={{
      ...font,
      position: 'absolute',
      inset: 0,
      borderRadius: 22,
      background: 'linear-gradient(180deg, #f7f8fb 0%, #eef0f5 68%, #e4e8ef 100%)',
      border: '1px solid rgba(255,255,255,0.7)',
      boxShadow: 'inset 0 1px 0 #fff, inset 0 -60px 80px rgba(150,160,182,0.22), 0 2px 4px rgba(0,0,0,0.3), 0 50px 120px rgba(0,0,0,0.6)',
      overflow: 'hidden',
    }}
  >
    <div style={{position: 'absolute', left: 28, top: 24, fontSize: 14, fontWeight: 600, letterSpacing: '0.22em', color: '#3d4452'}}>VERITY / WORKSPACE</div>
    <div style={{position: 'absolute', right: 28, top: 24, fontSize: 13, fontWeight: 600, letterSpacing: '0.2em', color: live > 0.5 ? UI.acc : '#8a909b'}}>
      {live > 0.5 ? '• ' : ''}
      {status}
    </div>
    {children}
  </div>
);

export const Blank: React.FC<{t: number}> = ({t}) => (
  <div style={{position: 'absolute', left: 0, right: 0, top: 300, textAlign: 'center'}}>
    <div style={{width: 2, height: 28, margin: '0 auto 22px', background: UI.acc, opacity: Math.floor(t * 2) % 2 === 0 ? 1 : 0.15}} />
    <div style={{fontSize: 14, letterSpacing: '0.24em', fontWeight: 600, color: '#8a909b'}}>A BLANK WORKSPACE</div>
  </div>
);

const ROWS: [string, string, string][] = [
  ['01', 'People', 'Who does what'],
  ['02', 'Process', 'How it runs today'],
  ['03', 'Approvals', 'Who signs off'],
  ['04', 'Data', 'Where it lives'],
  ['05', 'Operations', 'What gets done'],
];
export const ROW_TOP = (i: number) => 76 + i * 92;

export const Discovery: React.FC<{rows: number[]; sel: number[]; flow: number; merge: number; bottleneck: number; done: number}> = ({rows, sel, flow, merge, bottleneck, done}) => (
  <>
    {ROWS.map(([n, title, sub], i) => {
      const s = sel[i];
      return (
        <div
          key={n}
          style={{
            position: 'absolute',
            left: 24,
            right: 24,
            top: ROW_TOP(i),
            height: 80,
            borderRadius: 14,
            background: `color-mix(in srgb, ${UI.accTint} ${Math.round(s * 100)}%, #fff)`,
            border: `1px solid color-mix(in srgb, rgba(10,132,255,0.4) ${Math.round(s * 100)}%, rgba(15,17,21,0.07))`,
            boxShadow: '0 1px 2px rgba(15,17,21,0.05)',
            opacity: rows[i],
            transform: `translateY(${(1 - rows[i]) * 16}px)`,
          }}
        >
          <div style={{position: 'absolute', left: 16, top: 22, width: 36, height: 36, borderRadius: 9, display: 'grid', placeItems: 'center', fontSize: 14, fontWeight: 600, background: `color-mix(in srgb, ${UI.acc} ${Math.round(s * 100)}%, #eef0f4)`, color: s > 0.5 ? '#fff' : '#9aa0ab'}}>{n}</div>
          <div style={{position: 'absolute', left: 70, top: 14, fontSize: 24, fontWeight: 500, letterSpacing: '-0.01em'}}>{title}</div>
          <div style={{position: 'absolute', left: 70, top: 46, fontSize: 16, color: UI.mute}}>{sub}</div>
          {i === 0 && (
            <div style={{position: 'absolute', right: 20, top: 26, display: 'flex', gap: 8}}>
              {['R', 'S', 'A'].map((l, k) => (
                <div key={l} style={{width: 28, height: 28, borderRadius: 14, display: 'grid', placeItems: 'center', fontSize: 13, fontWeight: 600, background: k === 0 && s > 0.5 ? UI.acc : '#eef0f4', color: k === 0 && s > 0.5 ? '#fff' : '#9aa0ab'}}>{l}</div>
              ))}
            </div>
          )}
          {i === 1 && (
            <div style={{position: 'absolute', right: 20, top: 33, width: 96, height: 14}}>
              <div style={{position: 'absolute', left: 6, right: 6, top: 6, height: 2, background: '#dfe3ea'}} />
              <div style={{position: 'absolute', left: 6, top: 6, width: 84 * flow * (1 - merge * 0.4), height: 2, background: UI.acc}} />
              {[0, 1, 2].map((k) => {
                const x = k === 1 ? lerp(48, 6, merge) : k === 0 ? 6 : lerp(90, 48, merge);
                const on = flow > k / 2 - 0.01;
                return <div key={k} style={{position: 'absolute', left: x - 6, top: 1, width: 12, height: 12, borderRadius: 6, background: on ? UI.acc : '#fff', border: `2px solid ${on ? UI.acc : '#c9ced8'}`}} />;
              })}
            </div>
          )}
          {i === 2 && (
            <>
              <div style={{position: 'absolute', right: 20, top: 24, width: 30, height: 30, borderRadius: 15, border: `2px solid ${s > 0.5 ? UI.acc : '#c9ced8'}`, display: 'grid', placeItems: 'center', background: done > 0.5 ? UI.acc : 'transparent', color: done > 0.5 ? '#fff' : UI.acc, fontSize: 16, fontWeight: 700}}>{s > 0.5 || done > 0.5 ? '✓' : ''}</div>
              <div style={{position: 'absolute', right: 18, top: -11, fontSize: 12, fontWeight: 600, letterSpacing: '0.16em', color: '#6b7078', background: '#fff', border: `1px solid ${UI.line}`, borderRadius: 6, padding: '2px 8px', opacity: bottleneck * (1 - done)}}>BOTTLENECK</div>
            </>
          )}
          {i === 3 && (
            <div style={{position: 'absolute', right: 22, top: 24, display: 'grid', gap: 7}}>
              {[64, 46, 56].map((w, k) => (
                <div key={k} style={{width: w, height: 6, borderRadius: 3, background: s > 0.5 ? UI.acc : '#dfe3ea', opacity: s > 0.5 ? 0.7 - k * 0.15 : 1}} />
              ))}
            </div>
          )}
          {i === 4 && (
            <div style={{position: 'absolute', right: 20, top: 26, display: 'flex', gap: 8}}>
              {[0, 1, 2].map((k) => (
                <div key={k} style={{width: 26, height: 26, borderRadius: 7, background: s > 0.5 && k === 0 ? UI.acc : '#eef0f4'}} />
              ))}
            </div>
          )}
        </div>
      );
    })}
  </>
);

export const TAB_NAMES = ['Retailers', 'Orders', 'Godowns', 'Approvals'];
export const TAB_X = [24, 146, 242, 356];
export const TAB_W = [112, 86, 104, 112];
export const TAB_Y = 70;

export const Tabs: React.FC<{p: number}> = ({p}) => (
  <>
    {TAB_NAMES.map((n, i) => (
      <div key={n} style={{position: 'absolute', left: TAB_X[i], top: TAB_Y, width: TAB_W[i], height: 34, borderRadius: 17, display: 'grid', placeItems: 'center', fontSize: 16, fontWeight: 500, background: i === 3 ? UI.accTint : '#fff', color: i === 3 ? UI.acc : UI.ink, border: `1px solid ${i === 3 ? 'rgba(10,132,255,0.3)' : UI.line}`, opacity: p, transform: `translateY(${(1 - p) * 10}px)`}}>{n}</div>
    ))}
  </>
);

const TERMS: [string, string][] = [
  ['SKUs, cases, batches', 'INVENTORY'],
  ['Retailer orders, indents', 'ORDERS'],
  ['Retailers, outlets', 'RELATIONSHIPS'],
  ['Godowns, vans', 'LOCATIONS'],
  ['Credit limits, schemes', 'WORKFLOWS'],
];
const STEPS = [
  'Salesperson records the order against the retailer',
  'Stock availability checked across godowns',
  'Order accepted, or held for approval if it exceeds the limit',
  'Order released to the godown for picking',
];

export const Words: React.FC<{tabs: number; list: number[]; card: number; steps: number[]}> = ({tabs, list, card, steps}) => (
  <>
    <Tabs p={tabs} />
    <div style={{position: 'absolute', left: 28, top: 126, fontSize: 12, fontWeight: 600, letterSpacing: '0.2em', color: '#8a909b', opacity: tabs}}>IN YOUR WORDS</div>
    {TERMS.map(([w, tag], i) => (
      <div key={w} style={{position: 'absolute', left: 28, right: 28, top: 152 + i * 40, height: 34, opacity: list[i], transform: `translateY(${(1 - list[i]) * 10}px)`}}>
        <span style={{fontSize: 22, letterSpacing: '-0.01em'}}>{w}</span>
        <span style={{position: 'absolute', right: 0, top: 10, fontSize: 11, fontWeight: 600, letterSpacing: '0.16em', color: '#9aa0ab'}}>{tag}</span>
      </div>
    ))}
    <div style={{position: 'absolute', left: 24, right: 24, top: 372, height: 244, borderRadius: 16, background: '#fff', boxShadow: '0 1px 3px rgba(15,17,21,0.08), 0 12px 30px rgba(15,17,21,0.06)', opacity: card, transform: `translateY(${(1 - card) * 30}px)`}}>
      <div style={{position: 'absolute', left: 22, top: 20, fontSize: 12, fontWeight: 600, letterSpacing: '0.18em', color: '#8a909b'}}>ORDER TAKEN AT AN OUTLET</div>
      {STEPS.map((s, i) => (
        <div key={s} style={{position: 'absolute', left: 22, right: 18, top: 54 + i * 44, height: 36}}>
          <div style={{position: 'absolute', left: 0, top: 4, width: 20, height: 20, borderRadius: 10, background: i === 2 ? '#fff' : `color-mix(in srgb, ${UI.acc} ${Math.round(steps[i] * 100)}%, #fff)`, border: `2px solid ${i === 2 ? UI.acc : steps[i] > 0.5 ? UI.acc : '#c9ced8'}`, display: 'grid', placeItems: 'center', color: '#fff', fontSize: 12, fontWeight: 700}}>{i !== 2 && steps[i] > 0.5 ? '✓' : ''}</div>
          <div style={{position: 'absolute', left: 34, top: 0, fontSize: 16, color: i === 2 ? UI.ink : '#2a3140', fontWeight: i === 2 ? 500 : 400, lineHeight: '28px'}}>{s}</div>
        </div>
      ))}
    </div>
  </>
);

export const MODULE_GRID = ['Finance', 'HR', 'Retailers', 'Procurement', 'Payroll', 'Orders', 'Projects', 'Reports', 'Assets', 'Godowns', 'Quality', 'Admin', 'Tenders', 'Fleet', 'Approvals', 'Audit'];
export const KEEP = ['Retailers', 'Orders', 'Godowns', 'Approvals'];
const chipPos = (i: number) => ({x: 33 + (i % 4) * 136, y: 112 + Math.floor(i / 4) * 84});

export const Modules: React.FC<{lab: number; chips: number; gone: number[]; toTab: number}> = ({lab, chips, gone, toTab}) => (
  <>
    <div style={{position: 'absolute', left: 28, top: 76, fontSize: 12, fontWeight: 600, letterSpacing: '0.2em', color: '#8a909b', opacity: lab * (1 - toTab)}}>MODULES</div>
    {MODULE_GRID.map((m, i) => {
      const keep = KEEP.indexOf(m);
      const p = chipPos(i);
      const g = gone[i];
      const tt = keep >= 0 ? toTab : 0;
      const x = keep >= 0 ? lerp(p.x, TAB_X[keep], tt) : p.x;
      const y = keep >= 0 ? lerp(p.y, TAB_Y, tt) : p.y;
      const w = keep >= 0 ? lerp(126, TAB_W[keep], tt) : 126;
      const h = keep >= 0 ? lerp(72, 34, tt) : 72;
      const active = keep === 3 && tt > 0.9;
      return (
        <div
          key={m}
          style={{
            position: 'absolute',
            left: x,
            top: y,
            width: w,
            height: h,
            borderRadius: lerp(14, 17, tt),
            background: active ? UI.accTint : '#fff',
            border: `1px solid ${active ? 'rgba(10,132,255,0.3)' : UI.line}`,
            boxShadow: tt > 0.5 ? 'none' : '0 1px 2px rgba(15,17,21,0.05)',
            display: 'grid',
            placeItems: 'center',
            fontSize: lerp(18, 16, tt),
            fontWeight: 500,
            color: active ? UI.acc : UI.ink,
            opacity: chips * (1 - g),
            transform: `scale(${1 - g * 0.18})`,
          }}
        >
          {m}
        </div>
      );
    })}
  </>
);

export const Proposal: React.FC<{items: number[]; approved: number; press: number}> = ({items, approved, press}) => (
  <div style={{position: 'absolute', left: 22, right: 22, top: 62, bottom: 22, borderRadius: 18, background: '#fff', boxShadow: '0 1px 3px rgba(15,17,21,0.08), 0 14px 34px rgba(15,17,21,0.07)'}}>
    <div style={{position: 'absolute', left: 28, top: 26, fontSize: 12, fontWeight: 600, letterSpacing: '0.2em', color: '#9aa0ab'}}>PROPOSAL</div>
    <div style={{position: 'absolute', left: 28, top: 48, fontSize: 48, fontWeight: 400, letterSpacing: '-0.035em'}}>Your Verity</div>
    <div style={{position: 'absolute', left: 28, top: 112, fontSize: 16, color: '#8a909b'}}>Prepared after your business analysis</div>
    {[
      ['Your workflows', 'Mapped from how you work today'],
      ['Your modules', 'Only what your workflow needs'],
      ['Your terminology', 'In your own words'],
    ].map(([a, b], i) => (
      <div key={a} style={{position: 'absolute', left: 28, right: 28, top: 170 + i * 76, height: 64, opacity: seg(items[i], 0, 1), transform: `translateY(${(1 - items[i]) * 12}px)`}}>
        <div style={{position: 'absolute', left: 0, top: 6, width: 24, height: 24, borderRadius: 12, border: `2px solid ${approved > 0.3 ? UI.acc : '#c9ced8'}`, background: approved > 0.3 ? UI.acc : '#fff', color: '#fff', display: 'grid', placeItems: 'center', fontSize: 14, fontWeight: 700}}>{approved > 0.3 ? '✓' : ''}</div>
        <div style={{position: 'absolute', left: 42, top: 0, fontSize: 22, fontWeight: 500}}>{a}</div>
        <div style={{position: 'absolute', left: 42, top: 32, fontSize: 15, color: '#8a909b'}}>{b}</div>
      </div>
    ))}
    <div
      style={{
        position: 'absolute',
        left: 28,
        right: 28,
        bottom: 28,
        height: 58,
        borderRadius: 13,
        background: `color-mix(in srgb, ${UI.acc} ${Math.round(approved * 100)}%, #0f1115)`,
        color: '#fff',
        display: 'grid',
        placeItems: 'center',
        fontSize: 16,
        fontWeight: 600,
        letterSpacing: '0.32em',
        transform: `scale(${1 - press * 0.03})`,
        boxShadow: approved > 0.5 ? '0 0 0 6px rgba(10,132,255,0.18)' : undefined,
      }}
    >
      {approved > 0.5 ? '✓ APPROVED' : 'APPROVE'}
    </div>
  </div>
);

export const sm = (t: number, a: number, b: number) => seg(t, a, b, smooth);
