import React from 'react';
import {seg, track} from '../../shared/timeline';
import {C, glide, rgba, smooth} from './tokens';

/**
 * Opening: a dark studio desk where a business already runs. A real CSS-3D camera looks across a matte desk at
 * tactile props, with a soft key light from the top-left, contact shadows and depth of field. Between 6s and 8s the
 * camera rises to top-down and each prop collapses into a point: the nodes of the business's own workflow.
 */
export type NodeId = 'request' | 'review' | 'approve' | 'more' | 'quote' | 'order' | 'exec';

/** Prop centres in desk-plane coordinates. At t = 8.0 the camera is top-down with no dolly, so (x, y) lands at
 *  screen (540 + x, 480 + y). That is where each workflow node is born. */
export const DESK: Record<NodeId, {x: number; y: number}> = {
  request: {x: -235, y: -205},
  order: {x: 330, y: -320},
  more: {x: -395, y: -10},
  quote: {x: -10, y: 45},
  approve: {x: 300, y: 5},
  review: {x: -300, y: 290},
  exec: {x: 140, y: 265},
};
export const deskScreen = (id: NodeId): [number, number] => [540 + DESK[id].x, 480 + DESK[id].y];

const INK = '#2A2C30';
const PAPER = 'linear-gradient(165deg, #F2F1EC 0%, #E7E6E0 70%, #DEDDD6 100%)';

const cam = (t: number) => ({
  tilt: track(t, [[0, 57], [6.2, 54], [8.0, 0]]),
  dz: track(t, [[0, -330], [6.2, -70], [8.0, 0]]),
  cx: track(t, [[0, 40], [6.2, 10], [8.0, 0]]),
  cy: track(t, [[0, -30], [6.2, -10], [8.0, 0]]),
  rz: track(t, [[0, -4], [6.2, -1.2], [8.0, 0]]),
});

/** Rack focus: on the quotation, then the laptop as its notification lands, then back. */
const focusY = (t: number) => track(t, [[0, 40], [4.2, 40], [4.8, -320], [5.7, -320], [6.5, 0]]);

/** A prop on the plane. Children are its faces; blur is applied per face so 3D children are never flattened. */
const Prop: React.FC<{x: number; y: number; w: number; h: number; rot: number; z?: number; k: number; o: number; children: React.ReactNode}> = ({x, y, w, h, rot, z = 0, k, o, children}) => (
  <div style={{position: 'absolute', left: x - w / 2, top: y - h / 2, width: w, height: h, transformStyle: 'preserve-3d', transform: `translateZ(${z}px) rotateZ(${rot}deg) scale(${k})`, opacity: o}}>
    {children}
  </div>
);

/** Soft contact shadow cast toward the bottom-right (key light top-left). */
const Shadow: React.FC<{x: number; y: number; w: number; h: number; rot: number; dx: number; dy: number; b: number; a: number; r?: number; o: number}> = ({x, y, w, h, rot, dx, dy, b, a, r = 6, o}) => (
  <div style={{position: 'absolute', left: x - w / 2 + dx, top: y - h / 2 + dy, width: w, height: h, borderRadius: r, background: `rgba(0,0,0,${a})`, filter: `blur(${b}px)`, transform: `rotateZ(${rot}deg)`, opacity: o}} />
);

/** Handwriting: deterministic cursive-like strokes. */
const Script: React.FC<{w: number; rows: number[]; seed: number; color?: string; width?: number}> = ({w, rows, seed, color = '#3A4256', width = 1.4}) => (
  <svg width={w} height={rows[rows.length - 1] + 20} style={{position: 'absolute', left: 0, top: 0, overflow: 'visible'}}>
    {rows.map((y, r) => {
      const len = w * (0.55 + 0.4 * ((Math.sin(seed * 7 + r * 3.1) + 1) / 2));
      let d = `M0 ${y}`;
      for (let x = 2; x <= len; x += 2) {
        const yy = y + Math.sin(x / 2.6 + r + seed) * 3.2 + Math.sin(x / 7.3 + seed * 2) * 1.6;
        d += ` L${x} ${yy.toFixed(1)}`;
      }
      return <path key={r} d={d} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" opacity={0.85} />;
    })}
  </svg>
);

const Quotation: React.FC<{blur: number}> = ({blur}) => (
  <div style={{position: 'absolute', inset: 0, background: PAPER, boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.35)', padding: '26px 24px', boxSizing: 'border-box', color: INK, filter: blur > 0.3 ? `blur(${blur}px)` : undefined}}>
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
      <div style={{width: 22, height: 22, background: INK}} />
      <div style={{textAlign: 'right', fontSize: 9, letterSpacing: '0.12em', color: '#6a6c70'}}>
        QTN-0418
        <br />
        12 MAR
      </div>
    </div>
    <div style={{marginTop: 18, fontSize: 15, fontWeight: 600, letterSpacing: '0.22em'}}>QUOTATION</div>
    <div style={{marginTop: 14, height: 1, background: 'rgba(42,44,48,0.35)'}} />
    {[
      ['MS sheet 2 mm', '1,24,000'],
      ['Angle 40 x 40', '58,200'],
      ['Fabrication', '2,16,000'],
      ['Powder coat', '61,500'],
      ['Transport', '26,500'],
    ].map(([a, b]) => (
      <div key={a} style={{display: 'flex', justifyContent: 'space-between', fontSize: 11, padding: '8px 0', borderBottom: '1px solid rgba(42,44,48,0.12)', fontVariantNumeric: 'tabular-nums'}}>
        <span>{a}</span>
        <span>{b}</span>
      </div>
    ))}
    <div style={{display: 'flex', justifyContent: 'space-between', marginTop: 14, fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', fontVariantNumeric: 'tabular-nums'}}>
      <span>TOTAL</span>
      <span>₹ 4,86,200</span>
    </div>
    <div style={{position: 'absolute', left: 24, right: 24, bottom: 26}}>
      <div style={{position: 'relative', height: 26}}>
        <Script w={120} rows={[12]} seed={4} color={INK} width={1.2} />
      </div>
      <div style={{height: 1, width: 140, background: 'rgba(42,44,48,0.4)'}} />
    </div>
  </div>
);

const ApprovalSheet: React.FC<{blur: number; stamp: number}> = ({blur, stamp}) => (
  <div style={{position: 'absolute', inset: 0, background: PAPER, boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.35)', padding: '26px 24px', boxSizing: 'border-box', color: INK, filter: blur > 0.3 ? `blur(${blur}px)` : undefined}}>
    <div style={{fontSize: 12, fontWeight: 600, letterSpacing: '0.22em'}}>APPROVAL NOTE</div>
    <div style={{marginTop: 18, display: 'grid', gap: 11}}>
      {[100, 92, 96, 70, 88, 54].map((w, i) => (
        <div key={i} style={{height: 5, width: `${w}%`, background: 'rgba(42,44,48,0.16)', borderRadius: 3}} />
      ))}
    </div>
    <div style={{position: 'absolute', left: 24, bottom: 34, width: 120}}>
      <div style={{position: 'relative', height: 26}}>
        <Script w={110} rows={[14]} seed={9} color={INK} width={1.2} />
      </div>
      <div style={{height: 1, background: 'rgba(42,44,48,0.4)'}} />
      <div style={{fontSize: 8, letterSpacing: '0.16em', marginTop: 6, color: '#6a6c70'}}>APPROVED BY</div>
    </div>
    {stamp > 0.01 ? (
      <div
        style={{
          position: 'absolute',
          right: 22,
          bottom: 30,
          width: 96,
          height: 96,
          borderRadius: 48,
          border: `2.5px solid ${rgba(C.acc, 0.82)}`,
          boxShadow: `inset 0 0 0 4px rgba(242,241,236,1), inset 0 0 0 5.5px ${rgba(C.acc, 0.7)}`,
          display: 'grid',
          placeItems: 'center',
          color: rgba(C.acc, 0.9),
          transform: `rotate(-14deg) scale(${1 + 0.28 * (1 - stamp)})`,
          opacity: Math.min(1, stamp * 1.6) * 0.92,
        }}
      >
        <div style={{textAlign: 'center', fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', lineHeight: 1.4}}>
          APPROVED
          <div style={{fontSize: 8, letterSpacing: '0.2em', fontWeight: 600}}>14 · 03</div>
        </div>
      </div>
    ) : null}
  </div>
);

const Notebook: React.FC<{blur: number; flip: number}> = ({blur, flip}) => {
  const f = blur > 0.3 ? `blur(${blur}px)` : undefined;
  const ruled = 'repeating-linear-gradient(to bottom, transparent 0, transparent 21px, rgba(58,66,86,0.16) 22px)';
  return (
    <>
      <div style={{position: 'absolute', inset: 0, background: '#ECEAE3', backgroundImage: ruled, backgroundPosition: '0 30px', filter: f}}>
        <div style={{position: 'absolute', left: 18, top: 40, right: 18}}>
          <Script w={200} rows={[12, 34, 56, 100, 122]} seed={2} />
        </div>
      </div>
      {/* The page that turns: hinged on the top edge, flipping over and away. */}
      <div style={{position: 'absolute', inset: 0, transformStyle: 'preserve-3d', transformOrigin: '50% 0', transform: `rotateX(${180 * flip}deg)`, opacity: 1 - seg(flip, 0.5, 0.72, smooth)}}>
        <div style={{position: 'absolute', inset: 0, background: '#F1EFE9', backgroundImage: ruled, backgroundPosition: '0 30px', backfaceVisibility: 'hidden', filter: f, boxShadow: '0 1px 0 rgba(0,0,0,0.1)'}}>
          <div style={{position: 'absolute', left: 18, top: 40}}>
            <Script w={210} rows={[12, 34, 56, 78, 122, 144, 188]} seed={7} />
          </div>
        </div>
        <div style={{position: 'absolute', inset: 0, background: '#E6E4DD', transform: 'rotateY(180deg)', backfaceVisibility: 'hidden', filter: f}} />
      </div>
      <div style={{position: 'absolute', left: 14, right: 14, top: -6, height: 14, display: 'flex', justifyContent: 'space-between', filter: f}}>
        {Array.from({length: 14}).map((_, i) => (
          <div key={i} style={{width: 6, height: 14, borderRadius: 3, background: 'linear-gradient(90deg,#6d7076,#c9ccd1,#55585d)'}} />
        ))}
      </div>
    </>
  );
};

const Calculator: React.FC<{blur: number; t: number}> = ({blur, t}) => {
  const f = blur > 0.3 ? `blur(${blur}px)` : undefined;
  const flash = t > 2.42 && t < 2.52;
  const val = t < 2.42 ? '4,86,200' : '5,73,716';
  const pressed = (t > 2.28 && t < 2.36) || (t > 2.4 && t < 2.48);
  return (
    <>
      <div style={{position: 'absolute', inset: 0, borderRadius: 14, background: 'linear-gradient(160deg,#2E3034,#1A1B1E 60%,#151618)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.14), inset 1px 0 0 rgba(255,255,255,0.06)', filter: f}}>
        <div style={{position: 'absolute', left: 16, right: 16, top: 18, height: 44, borderRadius: 6, background: '#1A1F1D', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '0 10px', fontSize: 22, color: '#D2DACF', fontVariantNumeric: 'tabular-nums', letterSpacing: '0.02em'}}>
          {flash ? '' : val}
        </div>
        <div style={{position: 'absolute', left: 16, right: 16, top: 78, bottom: 16, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 7}}>
          {Array.from({length: 20}).map((_, i) => (
            <div key={i} style={{borderRadius: 5, background: i === 19 && pressed ? '#1d1e21' : i % 4 === 3 ? '#3A3C41' : '#2C2E32', boxShadow: i === 19 && pressed ? 'inset 0 1px 2px rgba(0,0,0,0.6)' : 'inset 0 1px 0 rgba(255,255,255,0.1)'}} />
          ))}
        </div>
      </div>
      {/* Front edge, so the body reads as a solid object, not a sticker. */}
      <div style={{position: 'absolute', left: 6, right: 6, top: '100%', height: 16, transformOrigin: '50% 0', transform: 'rotateX(-90deg)', background: '#0E0F11', borderRadius: '0 0 8px 8px', filter: f}} />
    </>
  );
};

const Pen: React.FC<{blur: number}> = ({blur}) => (
  <div style={{position: 'absolute', inset: 0, borderRadius: 7, background: 'linear-gradient(180deg,#5d6066 0%,#e4e6ea 32%,#9a9da3 55%,#3b3d41 100%)', filter: blur > 0.3 ? `blur(${blur}px)` : undefined}}>
    <div style={{position: 'absolute', right: -16, top: 2, width: 18, height: 10, background: 'linear-gradient(180deg,#2a2b2e,#6b6e73 40%,#202124)', clipPath: 'polygon(0 0, 100% 50%, 0 100%)'}} />
    <div style={{position: 'absolute', left: 40, top: -3, width: 70, height: 4, borderRadius: 2, background: 'linear-gradient(90deg,#8d9096,#e9ebee,#6b6e74)'}} />
  </div>
);

const Folder: React.FC<{blur: number}> = ({blur}) => {
  const f = blur > 0.3 ? `blur(${blur}px)` : undefined;
  return (
    <div style={{position: 'absolute', inset: 0, filter: f}}>
      <div style={{position: 'absolute', inset: 0, borderRadius: 6, background: '#3F3C37'}} />
      <div style={{position: 'absolute', left: 22, right: 18, top: -10, height: 60, background: '#E9E7E0', transform: 'rotate(-1.5deg)'}} />
      <div style={{position: 'absolute', left: 30, right: 30, top: -4, height: 60, background: '#F1EFE9', transform: 'rotate(1deg)'}} />
      <div style={{position: 'absolute', left: 0, right: 0, top: 26, bottom: 0, borderRadius: 6, background: 'linear-gradient(170deg,#5D5951,#4E4B45 70%)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12)'}} />
      <div style={{position: 'absolute', left: 0, top: 6, width: 120, height: 26, borderRadius: '6px 10px 0 0', background: '#5D5951', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12)'}} />
      <div style={{position: 'absolute', left: 26, top: 66, fontSize: 11, fontWeight: 600, letterSpacing: '0.22em', color: 'rgba(233,230,222,0.72)'}}>ORDERS · 2024</div>
    </div>
  );
};

const Laptop: React.FC<{blur: number; note: number}> = ({blur, note}) => {
  const f = blur > 0.3 ? `blur(${blur}px)` : undefined;
  return (
    <>
      <div style={{position: 'absolute', inset: 0, borderRadius: 14, background: 'linear-gradient(170deg,#83868C,#5B5E63 60%,#4A4D51)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3)', filter: f}}>
        <div style={{position: 'absolute', left: 22, right: 22, top: 18, height: 128, borderRadius: 6, background: '#1E2023', backgroundImage: 'repeating-linear-gradient(90deg, transparent 0 19px, rgba(255,255,255,0.05) 19px 21px), repeating-linear-gradient(0deg, transparent 0 19px, rgba(255,255,255,0.05) 19px 21px)'}} />
        <div style={{position: 'absolute', left: '50%', bottom: 18, width: 130, height: 70, marginLeft: -65, borderRadius: 8, background: 'rgba(255,255,255,0.08)', boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.15)'}} />
      </div>
      {/* The lid, hinged on the far edge and reclined toward the back. */}
      <div style={{position: 'absolute', left: 0, right: 0, bottom: '100%', height: 240, transformOrigin: '50% 100%', transform: 'rotateX(-74deg)', transformStyle: 'preserve-3d'}}>
        <div style={{position: 'absolute', inset: 0, borderRadius: 14, background: '#0C0D0F', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.08)', filter: f}}>
          <div style={{position: 'absolute', left: 12, right: 12, top: 12, bottom: 18, borderRadius: 4, background: 'linear-gradient(180deg,#191C21,#121418)', overflow: 'hidden'}}>
            <div style={{position: 'absolute', left: 0, top: 0, bottom: 0, width: 70, background: 'rgba(255,255,255,0.03)'}} />
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} style={{position: 'absolute', left: 86, right: 20, top: 30 + i * 30, height: 14, borderRadius: 3, background: 'rgba(255,255,255,0.05)'}} />
            ))}
            <div
              style={{
                position: 'absolute',
                right: 12,
                top: 12,
                width: 170,
                height: 50,
                borderRadius: 10,
                background: C.uiw,
                boxShadow: '0 6px 18px rgba(0,0,0,0.5)',
                padding: '9px 12px',
                boxSizing: 'border-box',
                opacity: note,
                transform: `translateX(${(1 - note) * 18}px)`,
              }}
            >
              <div style={{fontSize: 12, fontWeight: 600, color: C.uiInk}}>New enquiry</div>
              <div style={{fontSize: 10, color: C.uiMuted, marginTop: 2}}>Mehta Industries · now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

type PropDef = {id: NodeId; w: number; h: number; rot: number; z: number; sh: [number, number, number, number]};
const PROPS: PropDef[] = [
  {id: 'review', w: 360, h: 260, rot: -3, z: 0.5, sh: [8, 12, 14, 0.55]},
  {id: 'request', w: 250, h: 330, rot: -8, z: 0.6, sh: [6, 9, 10, 0.55]},
  {id: 'quote', w: 300, h: 420, rot: -5, z: 1.2, sh: [6, 10, 11, 0.55]},
  {id: 'approve', w: 270, h: 370, rot: 9, z: 1.0, sh: [6, 10, 11, 0.55]},
  {id: 'order', w: 380, h: 250, rot: -6, z: 2, sh: [18, 26, 28, 0.6]},
  {id: 'more', w: 150, h: 230, rot: 14, z: 16, sh: [16, 22, 20, 0.62]},
  {id: 'exec', w: 280, h: 14, rot: -28, z: 6, sh: [10, 14, 7, 0.55]},
];

export const DeskScene: React.FC<{t: number}> = ({t}) => {
  if (t > 8.4) return null;
  const c = cam(t);
  const lightUp = seg(t, 0.5, 2.9, smooth);
  const plane = 1 - seg(t, 6.9, 8.1, smooth);
  // Each prop collapses toward its centre and becomes a point of light (the workflow takes over at 8.0).
  const k = 1 - 0.94 * seg(t, 7.2, 8.05, smooth);
  const o = 1 - seg(t, 7.55, 8.1, smooth);
  const fy = focusY(t);
  const dofOn = Math.min(1, c.tilt / 54);
  const blurOf = (y: number) => Math.min(5, Math.abs(y - fy) * 0.0085) * dofOn;
  const stamp = seg(t, 3.42, 3.66, glide);
  const flip = seg(t, 1.5, 2.6, smooth);
  const note = seg(t, 4.6, 5.1, glide);

  const body = (p: PropDef) => {
    const b = blurOf(DESK[p.id].y);
    switch (p.id) {
      case 'quote':
        return <Quotation blur={b} />;
      case 'approve':
        return <ApprovalSheet blur={b} stamp={stamp} />;
      case 'request':
        return <Notebook blur={b} flip={flip} />;
      case 'more':
        return <Calculator blur={b} t={t} />;
      case 'exec':
        return <Pen blur={b} />;
      case 'review':
        return <Folder blur={b} />;
      default:
        return <Laptop blur={b} note={note} />;
    }
  };

  return (
    <div style={{position: 'absolute', inset: 0, perspective: 1500, perspectiveOrigin: '540px 480px', overflow: 'hidden', opacity: lightUp}}>
      <div style={{position: 'absolute', left: 540, top: 480, width: 0, height: 0, transformStyle: 'preserve-3d', transform: `translateZ(${c.dz}px) rotateX(${c.tilt}deg) rotateZ(${c.rz}deg) translate(${-c.cx}px, ${-c.cy}px)`}}>
        {/* The desk: matte charcoal, a soft key-light pool from the top-left, falling off into darkness. */}
        <div
          style={{
            position: 'absolute',
            left: -1800,
            top: -1500,
            width: 3600,
            height: 3000,
            opacity: plane,
            background:
              'radial-gradient(ellipse 1050px 780px at 46% 45%, rgba(255,247,234,0.12), rgba(255,247,234,0.035) 45%, transparent 72%), repeating-linear-gradient(0deg, rgba(255,255,255,0.012) 0 2px, transparent 2px 5px), linear-gradient(#141518, #0E0F11)',
            WebkitMaskImage: 'radial-gradient(ellipse 48% 48% at 50% 50%, #000 38%, transparent 76%)',
            maskImage: 'radial-gradient(ellipse 48% 48% at 50% 50%, #000 38%, transparent 76%)',
          }}
        />
        {/* Cool spill from the laptop screen onto the desk. */}
        <div style={{position: 'absolute', left: 330 - 320, top: -200 - 200, width: 640, height: 420, background: 'radial-gradient(ellipse at 50% 30%, rgba(150,170,255,0.07), transparent 70%)', opacity: plane}} />
        {PROPS.map((p) => (
          <Shadow key={`s-${p.id}`} x={DESK[p.id].x} y={DESK[p.id].y} w={p.w * k} h={p.h * k} rot={p.rot} dx={p.sh[0]} dy={p.sh[1]} b={p.sh[2]} a={p.sh[3]} r={p.id === 'exec' ? 7 : 8} o={o * plane} />
        ))}
        {PROPS.map((p) => (
          <Prop key={p.id} x={DESK[p.id].x} y={DESK[p.id].y} w={p.w} h={p.h} rot={p.rot} z={p.z} k={k} o={o}>
            {body(p)}
          </Prop>
        ))}
      </div>
    </div>
  );
};

/** Desk sound cues (seconds). */
export const DESK_SFX = [
  {f: 'card-slide-2.ogg', at: 1.55, v: 0.16},
  {f: 'click_003.ogg', at: 2.3, v: 0.12},
  {f: 'click_003.ogg', at: 2.42, v: 0.12},
  {f: 'subhit.wav', at: 3.44, v: 0.2},
  {f: 'card-slide-1.ogg', at: 3.46, v: 0.08},
  {f: 'select_008.ogg', at: 4.62, v: 0.14},
];
