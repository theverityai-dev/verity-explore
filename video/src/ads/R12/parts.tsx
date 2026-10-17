import React from 'react';
import {Mark} from '../../trailer/ui';
import {Easing, continueRender, delayRender, staticFile} from 'remotion';
import {inOut, lerp, seg} from '../../shared/timeline';

/** R12 parts: the site's own tokens in both themes, the two-tone headline, and every object the film carries across its
 *  seams (chips, tool cards, module tiles, metric cards, the lockup). Canvas 1920 x 1080, margins 120. */

/** Inter from a local file: the render sandbox has no route to Google Fonts. */
const fontFamily = 'InterR12';
if (typeof document !== 'undefined' && !document.getElementById('r12-font')) {
  const handle = delayRender('Inter');
  const face = new FontFace(fontFamily, `url(${staticFile('ads/R12/InterVariable.woff2')}) format('woff2')`, {weight: '100 900'});
  face.load().then((f) => {
    document.fonts.add(f);
    continueRender(handle);
  });
  const tag = document.createElement('meta');
  tag.id = 'r12-font';
  document.head.appendChild(tag);
}

/** The settle ease: short tail so type never creeps at sub-pixel speed. */
export const glide = Easing.bezier(0.22, 1, 0.36, 1);

export type GlyphKind = 'chat' | 'receipt' | 'voice' | 'sheet' | 'notes' | 'flow' | 'team' | 'list' | 'loop';

/** Outline glyphs (the R09 set). */
export const Glyph: React.FC<{kind: GlyphKind; size?: number}> = ({kind, size = 56}) => {
  const p = {fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round'} as const;
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" {...p} style={{flex: 'none'}}>
      {kind === 'chat' && <path d="M8 12h32v20H20l-8 7v-7H8z" />}
      {kind === 'receipt' && <><path d="M12 6h24v36l-4-3-4 3-4-3-4 3-4-3-4 3z" /><path d="M18 16h12M18 24h12M18 32h7" /></>}
      {kind === 'voice' && <><rect x="18" y="6" width="12" height="22" rx="6" /><path d="M10 24a14 14 0 0 0 28 0M24 38v6" /></>}
      {kind === 'sheet' && <><rect x="6" y="8" width="36" height="32" rx="3" /><path d="M6 18h36M6 28h36M20 8v32" /></>}
      {kind === 'notes' && <><rect x="10" y="6" width="28" height="36" rx="3" /><path d="M16 16h16M16 24h16M16 32h9" /></>}
      {kind === 'flow' && <><circle cx="10" cy="24" r="4" /><circle cx="38" cy="10" r="4" /><circle cx="38" cy="38" r="4" /><path d="M14 24h8l12-12M22 24l12 12" /></>}
      {kind === 'team' && <><circle cx="24" cy="14" r="6" /><circle cx="10" cy="34" r="5" /><circle cx="38" cy="34" r="5" /><path d="M24 20v6M24 26l-11 5M24 26l11 5" /></>}
      {kind === 'list' && <path d="M10 14l4 4 7-8M10 32l4 4 7-8M28 16h12M28 34h12" />}
      {kind === 'loop' && <><path d="M36 20a14 14 0 0 0-24-6M12 28a14 14 0 0 0 24 6" /><path d="M12 6v8h8M36 42v-8h-8" /></>}
    </svg>
  );
};

export const W = 1920;
export const H = 1080;

export type Theme = 'light' | 'dark';

/** css/verity.css, light and dark, plus the two film-only values (shadow and sky wash). */
export const TOKENS: Record<Theme, React.CSSProperties> = {
  light: {
    '--base': '#f7f8fa', '--base-alt': '#f1f3f7', '--surface': '#ffffff', '--surface-2': '#f4f6f9',
    '--ink': '#0f1115', '--ink-muted': '#6b7078', '--line': '#e6eaee', '--line-hair': '#edeff3',
    '--accent': '#0a84ff', '--accent-ink': '#ffffff', '--accent-text': '#0050a8',
    '--accent-a08': 'rgba(10,132,255,0.08)', '--accent-a14': 'rgba(10,132,255,0.14)',
    '--shadow': '0 2px 4px rgba(15,17,21,0.05), 0 30px 70px -24px rgba(15,17,21,0.2)',
    '--wash': 'rgba(10,132,255,0.11)',
  } as React.CSSProperties,
  dark: {
    '--base': '#0b0f17', '--base-alt': '#0f141d', '--surface': '#141a25', '--surface-2': '#1a2130',
    '--ink': '#f4f7fb', '--ink-muted': '#8e9aae', '--line': 'rgba(244,247,251,0.14)', '--line-hair': 'rgba(244,247,251,0.08)',
    '--accent': '#0a84ff', '--accent-ink': '#ffffff', '--accent-text': '#80bbff',
    '--accent-a08': 'rgba(10,132,255,0.10)', '--accent-a14': 'rgba(10,132,255,0.18)',
    '--shadow': '0 6px 14px rgba(0,0,0,0.4), 0 44px 100px -20px rgba(0,0,0,0.65)',
    '--wash': 'rgba(10,132,255,0.16)',
  } as React.CSSProperties,
};

/** The site hero's room: base colour and one soft sky wash from the upper right. Nothing moves in it. */
export const Sky: React.FC<{theme: Theme; children: React.ReactNode}> = ({theme, children}) => (
  <div style={{position: 'absolute', inset: 0, overflow: 'hidden', fontFamily, fontFeatureSettings: '"cv02","cv03","cv04","ss03"', color: 'var(--ink)', background: 'var(--base)', ...TOKENS[theme]}}>
    <div style={{position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 62% 70% at 92% -8%, var(--wash) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at -5% 105%, var(--accent-a08) 0%, transparent 70%)'}} />
    {children}
  </div>
);

export const LABEL: React.CSSProperties = {fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase'};
const r = Math.round;

/* ---------- the headline: two tones, each line rises out of its own mask, holds dead still, exits upward ---------- */

export type Seg = [string, 0 | 1];

export const Head: React.FC<{t: number; a: number; b: number; lines: Seg[][]; size: number; x?: number; top: number; align?: 'left' | 'center'; at?: number[]}> = ({t, a, b, lines, size, x = 120, top, align = 'left', at}) => {
  const o = seg(t, b, b + 0.4, inOut);
  if (t < a || o >= 1) return null;
  const lh = Math.round(size * 1.08);
  return (
    <div style={{position: 'absolute', left: align === 'center' ? 0 : x, right: align === 'center' ? 0 : undefined, top: top - r(o * 36), opacity: 1 - o, textAlign: align}}>
      {lines.map((line, i) => {
        const s = at?.[i] ?? a + i * 0.09;
        const p = seg(t, s, s + 0.75, glide);
        return (
          <div key={i} style={{height: lh, overflow: 'hidden', paddingBottom: 0}}>
            <div style={{fontSize: size, lineHeight: `${lh}px`, fontWeight: 300, letterSpacing: '-0.04em', whiteSpace: 'nowrap', transform: `translateY(${r((1 - p) * lh)}px)`, opacity: Math.min(1, p * 1.4)}}>
              {line.map(([txt, tone], j) => (
                <span key={j} style={{color: tone ? 'var(--ink-muted)' : 'var(--ink)'}}>{txt}</span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

/* ---------- small objects ---------- */

/** A pill naming one thing a business has to manage. Anchored at its left-centre. */
export const Chip: React.FC<{label: string; glyph: GlyphKind; size?: number}> = ({label, glyph, size = 28}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 14, height: size * 2.3, padding: `0 ${size * 0.95}px 0 ${size * 0.7}px`, borderRadius: 999, background: 'var(--surface)', border: '1px solid var(--line)', boxShadow: 'var(--shadow)', whiteSpace: 'nowrap', fontSize: size, fontWeight: 500, letterSpacing: '-0.015em', color: 'var(--ink)'}}>
    <span style={{color: 'var(--ink-muted)', display: 'flex'}}><Glyph kind={glyph} size={size * 1.25} /></span>
    {label}
  </div>
);
export const chipW = (label: string, size = 28) => size * 0.7 + size * 1.25 + 14 + label.length * size * 0.56 + size * 0.95;

export const Lockup: React.FC<{draw: number; word: number; size?: number}> = ({draw, word, size = 150}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: size * 0.3, whiteSpace: 'nowrap'}}>
    <Mark height={size} draw={draw} color="var(--ink)" />
    <div style={{fontSize: size * 0.84, fontWeight: 500, letterSpacing: '-0.04em', lineHeight: 1, opacity: word, transform: `translateX(${r((1 - word) * -24)}px)`}}>verity</div>
  </div>
);

/* ---------- the three tools that hold customer details, operations and reports ---------- */

const Bar: React.FC<{icon: GlyphKind; name: string; meta?: React.ReactNode}> = ({icon, name, meta}) => (
  <div style={{height: 72, display: 'flex', alignItems: 'center', gap: 14, padding: '0 26px', borderBottom: '1px solid var(--line)', fontSize: 22, fontWeight: 500, color: 'var(--ink)'}}>
    <span style={{color: 'var(--ink-muted)', display: 'flex'}}><Glyph kind={icon} size={30} /></span>
    <span style={{flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{name}</span>
    {meta}
  </div>
);

export const CARD = {w: 480, h: 640};
const shell: React.CSSProperties = {width: CARD.w, height: CARD.h, borderRadius: 22, background: 'var(--surface)', border: '1px solid var(--line)', boxShadow: 'var(--shadow)', overflow: 'hidden', color: 'var(--ink)'};

const PEOPLE: [string, string][] = [['Rahul Mehta', '98201 4••••'], ['Anita Shah', '—'], ['K. Traders', '99876 1••••'], ['Priya Nair', '90040 7••••'], ['S. Exports', '—'], ['Vikram Rao', '98190 2••••'], ['Meena & Co', '97022 8••••']];

/** Customer details, in a spreadsheet someone keeps. Props: the names and numbers are invented. */
export const SheetTool: React.FC<{p: number}> = ({p}) => (
  <div style={shell}>
    <Bar icon="sheet" name="customers_final_v2.xlsx" />
    <div style={{display: 'flex', padding: '18px 26px 10px', ...LABEL, fontSize: 20, color: 'var(--ink-muted)'}}>
      <span style={{flex: 1}}>Name</span><span style={{width: 170}}>Phone</span>
    </div>
    {PEOPLE.map(([n, ph], i) => {
      const k = seg(p, i * 0.08, i * 0.08 + 0.4);
      return (
        <div key={n} style={{display: 'flex', alignItems: 'center', height: 70, padding: '0 26px', borderTop: '1px solid var(--line-hair)', fontSize: 26, opacity: k}}>
          <span style={{flex: 1}}>{n}</span>
          <span style={{width: 170, color: ph === '—' ? 'var(--ink-muted)' : 'var(--ink)', fontVariantNumeric: 'tabular-nums'}}>{ph}</span>
        </div>
      );
    })}
  </div>
);

const MSGS = ['Order 482 dispatched?', 'Stock low on item 12', 'Who approved this?', 'Payment still pending', 'Please check, urgent', 'Call me back'];

/** Operations, in a group chat. */
export const ChatTool: React.FC<{p: number}> = ({p}) => (
  <div style={shell}>
    <Bar icon="chat" name="Operations group" meta={<span style={{padding: '4px 14px', borderRadius: 999, background: 'var(--accent)', color: 'var(--accent-ink)', fontSize: 20, fontWeight: 600}}>48</span>} />
    <div style={{padding: '22px 26px', display: 'flex', flexDirection: 'column', gap: 16}}>
      {MSGS.map((m, i) => {
        const k = seg(p, i * 0.1, i * 0.1 + 0.4);
        const mine = i === 2;
        return (
          <div key={m} style={{alignSelf: mine ? 'flex-end' : 'flex-start', maxWidth: 360, padding: '16px 22px', borderRadius: 20, background: mine ? 'var(--accent-a14)' : 'var(--surface-2)', fontSize: 26, lineHeight: 1.2, opacity: k, transform: `translateY(${r((1 - k) * 14)}px)`}}>{m}</div>
        );
      })}
    </div>
  </div>
);

const BARS = [0.42, 0.58, 0.5, 0.74, 0.66, 0.88];

/** Reports, in a PDF nobody has updated. */
export const ReportTool: React.FC<{p: number}> = ({p}) => (
  <div style={shell}>
    <Bar icon="notes" name="report_Q3_final_v4.pdf" />
    <div style={{padding: '30px 30px 0'}}>
      <div style={{fontSize: 38, fontWeight: 400, letterSpacing: '-0.025em'}}>Monthly report</div>
      <div style={{marginTop: 8, fontSize: 22, color: 'var(--ink-muted)'}}>Page 1 of 14</div>
      <div style={{marginTop: 34, height: 270, display: 'flex', alignItems: 'flex-end', gap: 22, borderBottom: '1px solid var(--line)'}}>
        {BARS.map((h, i) => (
          <div key={i} style={{flex: 1, height: r(260 * h * seg(p, 0.1 + i * 0.07, 0.5 + i * 0.07, glide)), borderRadius: '8px 8px 0 0', background: 'var(--ink-muted)', opacity: 0.32}} />
        ))}
      </div>
      <div style={{marginTop: 34, display: 'inline-flex', alignItems: 'center', gap: 12, padding: '12px 20px', borderRadius: 999, background: 'var(--surface-2)', fontSize: 22, color: 'var(--ink-muted)', opacity: seg(p, 0.6, 0.9)}}>
        <span style={{width: 10, height: 10, borderRadius: 5, background: 'var(--ink-muted)'}} />
        Updated 23 days ago
      </div>
    </div>
  </div>
);

/* ---------- the module tile and the metric card it becomes ---------- */

export const TILE = {w: 300, h: 132};

export const TileFace: React.FC<{label: string; glyph: GlyphKind; live: number}> = ({label, glyph, live}) => (
  <div style={{position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', gap: 18, padding: '0 26px'}}>
    <span style={{color: 'var(--ink)', display: 'flex'}}><Glyph kind={glyph} size={44} /></span>
    <span style={{flex: 1, fontSize: 31, fontWeight: 500, letterSpacing: '-0.02em', whiteSpace: 'nowrap'}}>{label}</span>
    <span style={{position: 'relative', width: 14, height: 14}}>
      <span style={{position: 'absolute', inset: 0, borderRadius: 7, background: 'var(--line)'}} />
      <span style={{position: 'absolute', inset: 0, borderRadius: 7, background: 'var(--accent)', opacity: live, transform: `scale(${0.4 + 0.6 * live})`}} />
    </span>
  </div>
);

export type Metric = {label: string; to: number; fmt: (v: number) => string; note: string; spark: number[]; alert?: boolean};

const n0 = (v: number) => String(Math.round(v));
export const METRICS: Metric[] = [
  {label: 'Revenue', to: 4.2, fmt: (v) => `₹${v.toFixed(1)} Cr`, note: 'quarter to date', spark: [0.3, 0.42, 0.38, 0.55, 0.62, 0.8]},
  {label: 'Active work', to: 318, fmt: n0, note: 'items in flight', spark: [0.5, 0.46, 0.6, 0.58, 0.7, 0.66]},
  {label: 'Delayed', to: 14, fmt: n0, note: 'past committed date', spark: [0.2, 0.34, 0.3, 0.52, 0.44, 0.6], alert: true},
  {label: 'Pending approvals', to: 27, fmt: n0, note: '4 over threshold', spark: [0.6, 0.52, 0.56, 0.44, 0.5, 0.42]},
  {label: 'Team utilisation', to: 78, fmt: (v) => `${Math.round(v)}%`, note: 'billable capacity', spark: [0.4, 0.5, 0.46, 0.6, 0.64, 0.7]},
  {label: 'Customer health', to: 92, fmt: n0, note: 'of 100', spark: [0.5, 0.58, 0.62, 0.6, 0.72, 0.78]},
  {label: 'Exceptions closed', to: 88, fmt: (v) => `${Math.round(v)}%`, note: 'within SLA window', spark: [0.3, 0.44, 0.52, 0.6, 0.66, 0.74]},
  {label: 'Median response', to: 372, fmt: (v) => `${Math.floor(v / 60)}m ${String(Math.round(v) % 60).padStart(2, '0')}s`, note: 'across 24 sites', spark: [0.7, 0.6, 0.64, 0.5, 0.46, 0.4]},
];

export const MetricFace: React.FC<{m: Metric; count: number}> = ({m, count}) => {
  return (
    <div style={{position: 'absolute', inset: 0, padding: '26px 28px'}}>
      <div style={{...LABEL, fontSize: 20, color: 'var(--ink-muted)', whiteSpace: 'nowrap'}}>{m.label}</div>
      <div style={{marginTop: 18, fontSize: 76, lineHeight: 1, fontWeight: 300, letterSpacing: '-0.045em', fontVariantNumeric: 'tabular-nums', color: m.alert ? 'var(--accent)' : 'var(--ink)', whiteSpace: 'nowrap'}}>{m.fmt(m.to * count)}</div>
      <div style={{marginTop: 16, fontSize: 22, color: 'var(--ink-muted)', whiteSpace: 'nowrap'}}>{m.note}</div>
    </div>
  );
};

/** The command centre's header row, from the site's live operational picture. */
export const PanelHeader: React.FC<{p: number}> = ({p}) => (
  <div style={{position: 'absolute', left: 0, right: 0, top: 0, height: 76, display: 'flex', alignItems: 'center', gap: 30, padding: '0 34px 0 190px', borderBottom: '1px solid var(--line)', fontSize: 22, color: 'var(--ink-muted)', opacity: p}}>
    <span style={{...LABEL, fontSize: 20}}>/ Command centre</span>
    <span>All regions</span>
    <span>Q3</span>
    <span style={{color: 'var(--accent-text)', fontWeight: 500}}>3 need attention</span>
    <span style={{flex: 1}} />
    <span style={{display: 'flex', alignItems: 'center', gap: 10, ...LABEL, fontSize: 20, color: 'var(--accent-text)'}}>
      <span style={{width: 10, height: 10, borderRadius: 5, background: 'var(--accent)'}} />
      Live
    </span>
  </div>
);

export const lerp2 = (a: [number, number], b: [number, number], k: number): [number, number] => [lerp(a[0], b[0], k), lerp(a[1], b[1], k)];
