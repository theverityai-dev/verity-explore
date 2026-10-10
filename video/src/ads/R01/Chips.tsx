import React from 'react';
import {Check} from '../../trailer/ui';
import {inOut, lerp, outX, seg} from '../../shared/timeline';
import {T} from '../tokens';

/** The four carrier cards. One set of objects is scattered (every business is different), forced into a fixed grid
 *  (fixed software), re-flowed into the owner's own chain (Verity starts from yours), then becomes the rows of the
 *  Verity panel and the Blueprint. Nothing is replaced between seams; the same cards move. */

type Pose = {x: number; y: number; w: number; h: number; r: number};
const mix = (a: Pose, b: Pose, p: number): Pose => ({x: lerp(a.x, b.x, p), y: lerp(a.y, b.y, p), w: lerp(a.w, b.w, p), h: lerp(a.h, b.h, p), r: lerp(a.r, b.r, p)});

const FACE_W = 420;
const FACE_H = 220;

const SCATTER: Pose[] = [
  {x: 300, y: 810, w: 400, h: 210, r: -5},
  {x: 740, y: 940, w: 370, h: 194, r: 4},
  {x: 330, y: 1090, w: 420, h: 220, r: 3},
  {x: 720, y: 1230, w: 390, h: 204, r: -4},
];
const RIGID: Pose[] = [
  {x: 318, y: 908, w: FACE_W, h: FACE_H, r: 0},
  {x: 762, y: 908, w: FACE_W, h: FACE_H, r: 0},
  {x: 318, y: 1152, w: FACE_W, h: FACE_H, r: 0},
  {x: 762, y: 1152, w: FACE_W, h: FACE_H, r: 0},
];
export const CHAIN_Y = [824, 952, 1080, 1208];
export const CHAIN_H = 96;
export const CHAIN_W = 800;
const CHAIN: Pose[] = CHAIN_Y.map((y) => ({x: 540, y, w: CHAIN_W, h: CHAIN_H, r: 0}));

const NAMES = ['Workflows', 'Teams', 'Approvals', 'Requirements'];
const STATUS = ['Mapped', 'Mapped', 'Mapped', 'Captured'];
const FAINT = 'rgba(15,17,21,0.22)';

const Label: React.FC<{children: React.ReactNode}> = ({children}) => (
  <div style={{fontSize: 22, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-muted)'}}>{children}</div>
);

const WorkflowsFace: React.FC<{t: number}> = ({t}) => {
  const d = seg(t, T.fragment + 1.6, T.fragment + 3.2, inOut);
  const Node: React.FC<{x: number; y: number}> = ({x, y}) => <rect x={x} y={y} width={72} height={44} rx={12} fill="var(--base-alt)" stroke="var(--line)" strokeWidth={2} />;
  const Link: React.FC<{d: string; len: number}> = ({d: path, len}) => (
    <path d={path} fill="none" stroke={FAINT} strokeWidth={3} strokeLinecap="round" strokeDasharray={len} strokeDashoffset={len * (1 - d)} />
  );
  return (
    <svg width={364} height={124} viewBox="0 0 364 124" style={{marginTop: 18}}>
      <Link d="M72 30H146" len={74} />
      <Link d="M218 30H292" len={74} />
      <Link d="M182 52V74" len={22} />
      <Node x={0} y={8} />
      <Node x={146} y={8} />
      <Node x={292} y={8} />
      <Node x={146} y={74} />
    </svg>
  );
};

const TeamsFace: React.FC<{t: number}> = ({t}) => {
  const hi = seg(t, T.fragment + 2.9, T.fragment + 3.3);
  return (
    <div style={{display: 'flex', marginTop: 28}}>
      {['A', 'R', 'S', 'M', 'K'].map((l, k) => (
        <div key={l} style={{position: 'relative', width: 56, height: 56, marginRight: 12, borderRadius: 28, background: 'var(--line-hair)', border: '2px solid var(--surface)', display: 'grid', placeItems: 'center', fontSize: 24, fontWeight: 500, color: 'var(--ink-muted)'}}>
          {l}
          {k === 1 ? (
            <div style={{position: 'absolute', inset: -2, borderRadius: 30, background: 'var(--accent)', color: 'var(--accent-ink)', display: 'grid', placeItems: 'center', opacity: hi}}>{l}</div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

const ApprovalsFace: React.FC<{t: number}> = ({t}) => {
  const tick = seg(t, T.fragment + 2.3, T.fragment + 2.7);
  const Row: React.FC<{w: number; first?: boolean}> = ({w, first}) => (
    <div style={{display: 'flex', alignItems: 'center', gap: 18}}>
      <div style={{position: 'relative', width: 34, height: 34, borderRadius: 10, border: '2px solid rgba(15,17,21,0.2)', background: 'var(--surface)'}}>
        {first ? (
          <div style={{position: 'absolute', inset: -2, opacity: tick}}>
            <Check p={tick} size={34} />
          </div>
        ) : null}
      </div>
      <div style={{width: w, height: 12, borderRadius: 6, background: 'var(--line)'}} />
    </div>
  );
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 20, marginTop: 24}}>
      <Row w={230} first />
      <Row w={170} />
    </div>
  );
};

const RequirementsFace: React.FC<{t: number}> = ({t}) => (
  <div style={{display: 'flex', flexDirection: 'column', gap: 20, marginTop: 26}}>
    {[300, 240, 180].map((w, k) => {
      const g = seg(t, T.fragment + 1.9 + k * 0.5, T.fragment + 2.6 + k * 0.5, outX);
      return (
        <div key={w} style={{display: 'flex', alignItems: 'center', gap: 16}}>
          <div style={{width: 12, height: 12, borderRadius: 3, background: FAINT, opacity: g}} />
          <div style={{width: w * g, height: 12, borderRadius: 6, background: 'var(--line)'}} />
        </div>
      );
    })}
  </div>
);

const FACES = [WorkflowsFace, TeamsFace, ApprovalsFace, RequirementsFace];

/** Corner brackets: the card being forced to fit the template. */
const Brackets: React.FC<{p: number}> = ({p}) => {
  if (p <= 0) return null;
  const e = 2 + 8 * p;
  const corner = (style: React.CSSProperties) => <div style={{position: 'absolute', width: 22, height: 22, borderColor: 'rgba(15,17,21,0.5)', borderStyle: 'solid', borderWidth: 0, ...style}} />;
  return (
    <div style={{position: 'absolute', inset: -e, opacity: p, pointerEvents: 'none'}}>
      {corner({left: 0, top: 0, borderLeftWidth: 3, borderTopWidth: 3, borderTopLeftRadius: 8})}
      {corner({right: 0, top: 0, borderRightWidth: 3, borderTopWidth: 3, borderTopRightRadius: 8})}
      {corner({left: 0, bottom: 0, borderLeftWidth: 3, borderBottomWidth: 3, borderBottomLeftRadius: 8})}
      {corner({right: 0, bottom: 0, borderRightWidth: 3, borderBottomWidth: 3, borderBottomRightRadius: 8})}
    </div>
  );
};

export const Chip: React.FC<{i: number; t: number}> = ({i, t}) => {
  const e0 = T.fragment + 0.15 + i * 0.28;
  const enter = seg(t, e0, e0 + 1.1, outX);
  const appear = seg(t, e0, e0 + 0.45);
  const toRigid = seg(t, T.rigid + i * 0.08, T.rigid + 0.75 + i * 0.08, outX);
  const toChain = seg(t, T.understand + i * 0.14, T.understand + 1.1 + i * 0.14, inOut);
  const p = mix(mix(SCATTER[i], RIGID[i], toRigid), CHAIN[i], toChain);
  const lift = seg(t, T.offer, T.offer + 0.9, inOut) * -130;
  const out = seg(t, T.offer + i * 0.05, T.offer + 0.55 + i * 0.05);
  const opacity = appear * (1 - out);
  if (opacity <= 0) return null;

  const fullOp = 1 - seg(t, T.understand + i * 0.14, T.understand + 0.55 + i * 0.14);
  const compOp = seg(t, T.understand + 0.45 + i * 0.14, T.understand + 1.0 + i * 0.14);
  const dot = seg(t, T.understand + 2.0 + i * 0.45, T.understand + 2.45 + i * 0.45);
  const status = seg(t, T.configure + 1.0 + i * 0.5, T.configure + 1.5 + i * 0.5);
  const check = seg(t, T.blueprint + 0.2 + i * 0.5, T.blueprint + 0.75 + i * 0.5);
  const brackets = seg(t, T.rigid + 1.2 + i * 0.4, T.rigid + 1.7 + i * 0.4) * (1 - seg(t, T.understand, T.understand + 0.4));
  /** One row at a time takes the attention tint: the path being read, then each status, then each approval. */
  const pulse = (a: number, hold: number) => seg(t, a, a + 0.3) * (1 - seg(t, a + hold, a + hold + 0.3));
  const focus = Math.max(pulse(T.understand + 2.0 + i * 0.45, 0.5), pulse(T.configure + 1.0 + i * 0.7, 0.6), pulse(T.blueprint + 0.2 + i * 0.5, 0.6));
  const squeeze = 1 - 0.015 * seg(t, T.rigid + 2.4, T.rigid + 3.6) * (1 - toChain);
  const Face = FACES[i];

  return (
    <div
      style={{
        position: 'absolute',
        left: p.x - p.w / 2,
        top: p.y + (1 - enter) * 140 + lift - p.h / 2,
        width: p.w,
        height: p.h,
        transform: `rotate(${p.r}deg) scale(${squeeze})`,
        opacity,
      }}
    >
      <div style={{position: 'absolute', inset: 0, borderRadius: 24, background: 'var(--surface)', border: '1px solid var(--line)', boxShadow: `var(--elev-mid), inset 0 0 0 2px rgba(10,132,255,${0.5 * focus})`, overflow: 'hidden'}}>
        <div style={{position: 'absolute', inset: 0, background: `rgba(10,132,255,${0.08 * focus})`}} />
        <div style={{position: 'absolute', left: 0, top: 0, width: FACE_W, height: FACE_H, boxSizing: 'border-box', padding: '28px 28px 0', transformOrigin: '0 0', transform: `scale(${Math.min(p.w / FACE_W, p.h / FACE_H)})`, opacity: fullOp}}>
          <Label>{NAMES[i]}</Label>
          <Face t={t} />
        </div>
        <div style={{position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: '0 36px', opacity: compOp}}>
          <div style={{position: 'relative', width: 30, height: 30, flex: 'none', display: 'grid', placeItems: 'center'}}>
            <div style={{width: 16, height: 16, borderRadius: 8, boxSizing: 'border-box', border: '2px solid rgba(15,17,21,0.2)', background: 'var(--surface)'}} />
            <div style={{position: 'absolute', width: 16, height: 16, borderRadius: 8, background: 'var(--accent)', opacity: dot * (1 - check)}} />
            <div style={{position: 'absolute', inset: 0, opacity: check}}>
              <Check p={check} size={30} />
            </div>
          </div>
          <div style={{marginLeft: 22, fontSize: 36, fontWeight: 500, letterSpacing: '-0.02em'}}>{NAMES[i]}</div>
          <div style={{flex: 1}} />
          <div style={{fontSize: 26, color: 'var(--ink-muted)', opacity: status, transform: `translateX(${(1 - status) * 16}px)`}}>{STATUS[i]}</div>
        </div>
      </div>
      <Brackets p={brackets} />
    </div>
  );
};

/** The accent path the chain is read along. Visible only in the gaps between rows, so it reads as a route being followed. */
export const Connector: React.FC<{t: number}> = ({t}) => {
  const draw = seg(t, T.understand + 1.0, T.understand + 2.8, inOut);
  const o = 1 - seg(t, T.offer, T.offer + 0.5);
  const len = CHAIN_Y[3] - CHAIN_Y[0];
  const lift = seg(t, T.offer, T.offer + 0.9, inOut) * -130;
  if (draw <= 0 || o <= 0) return null;
  return (
    <svg width={1080} height={1920} style={{position: 'absolute', inset: 0, opacity: o, transform: `translateY(${lift}px)`}}>
      <line x1={191} y1={CHAIN_Y[0]} x2={191} y2={CHAIN_Y[3]} stroke="var(--accent)" strokeWidth={4} strokeLinecap="round" strokeDasharray={len} strokeDashoffset={len * (1 - draw)} />
    </svg>
  );
};

/** The fixed template the cards are forced into while software is "one fixed system". */
export const Template: React.FC<{t: number}> = ({t}) => {
  const o = seg(t, T.rigid + 0.1, T.rigid + 0.9) * (1 - seg(t, T.understand, T.understand + 0.5));
  if (o <= 0) return null;
  const set = seg(t, T.rigid + 2.4, T.rigid + 3.6);
  return (
    <>
      <div style={{position: 'absolute', left: 96, top: 774, width: 888, height: 512, boxSizing: 'border-box', borderRadius: 32, border: `2px dashed rgba(15,17,21,${0.2 + 0.3 * set})`, opacity: o, transform: `scale(${lerp(0.97, 1, o)})`}} />
      <div style={{position: 'absolute', left: 96, top: 724, display: 'flex', alignItems: 'center', gap: 12, fontSize: 22, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-muted)', opacity: o}}>
        <svg width={20} height={24} viewBox="0 0 20 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
          <rect x={2} y={10} width={16} height={12} rx={3} />
          <path d="M5.5 10V7a4.5 4.5 0 019 0v3" />
        </svg>
        One fixed template
      </div>
    </>
  );
};
