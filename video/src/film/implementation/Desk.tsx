import React from 'react';
import {C, lerp, seg, smooth} from './tokens';
import {fontFamily} from '../engine';

/** Beat 1: a business that is already operating. Flat, drawn editorial objects (not faked photography) arranged on the
 *  same coordinates the workflow nodes will occupy, so each object can morph into its node in beat 2. */

const fmt = (n: number) => Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

type Target = {w: number; h: number; r: number; rot: number};

const Obj: React.FC<{
  x: number;
  y: number;
  w: number;
  h: number;
  rot: number;
  m: number;
  node?: Target;
  fill: string;
  radius?: number;
  children: React.ReactNode;
}> = ({x, y, w, h, rot, m, node, fill, radius = 8, children}) => {
  const sx = node ? lerp(1, node.w / w, m) : lerp(1, 0.84, m);
  const sy = node ? lerp(1, node.h / h, m) : lerp(1, 0.84, m);
  const r = node ? lerp(radius, node.r, m) : radius;
  const rotation = node ? lerp(rot, node.rot, m) : rot;
  const fade = node ? 1 - seg(m, 0.62, 1, smooth) : 1 - seg(m, 0, 0.9, smooth);
  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: w,
        height: h,
        transform: `translate(-50%,-50%) rotate(${rotation}deg) scale(${sx},${sy})`,
        borderRadius: r,
        background: node ? `color-mix(in srgb, ${C.bg} ${Math.round(seg(m, 0.1, 0.7) * 100)}%, ${fill})` : fill,
        boxShadow: `0 ${24 * (1 - m)}px ${60 * (1 - m)}px rgba(0,0,0,${0.55 * (1 - m)}), 0 2px 5px rgba(0,0,0,${0.4 * (1 - m)})`,
        opacity: fade,
        overflow: 'hidden',
      }}
    >
      <div style={{position: 'absolute', inset: 0, opacity: 1 - seg(m, 0, 0.5, smooth)}}>{children}</div>
      <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(115deg, rgba(255,255,255,0.28), transparent 38%, rgba(0,0,0,0.22) 100%)', opacity: 1 - seg(m, 0, 0.6, smooth), pointerEvents: 'none'}} />
      {node && <div style={{position: 'absolute', inset: 0, borderRadius: r, border: `${2 / Math.max(sx, 0.2)}px solid ${C.line}`, opacity: seg(m, 0.25, 0.8)}} />}
    </div>
  );
};

const Bar: React.FC<{x: number; y: number; w: number; h?: number; c?: string; s?: number}> = ({x, y, w, h = 7, c = C.paperLine, s = 1}) => (
  <div style={{position: 'absolute', left: x, top: y, width: w, height: h, borderRadius: h / 2, background: c, transformOrigin: '0 50%', transform: `scaleX(${s})`}} />
);

const Digits: React.FC<{x: number; y: number; v: string; size: number; c: string; right?: number; weight?: number}> = ({x, y, v, size, c, right, weight = 600}) => (
  <div
    style={{
      position: 'absolute',
      left: right === undefined ? x : undefined,
      right,
      top: y,
      fontFamily,
      fontSize: size,
      fontWeight: weight,
      color: c,
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: -0.5,
      lineHeight: 1,
    }}
  >
    {v}
  </div>
);

const m = (t: number, a: number, b: number) => seg(t, a, b, smooth);

export const DeskMid: React.FC<{t: number}> = ({t}) => {
  const quoteTotal = lerp(48200, 51950, seg(t, 2.3, 3.1, smooth));
  const calc = t < 2.9 ? lerp(1240, 3715, seg(t, 1.2, 2.6, smooth)) : lerp(3715, 5360, seg(t, 3.5, 4.4, smooth));
  const stamp = seg(t, 3.5, 3.78, smooth);
  const stampRing = seg(t, 3.78, 4.5, smooth);
  const phone = seg(t, 4.7, 5.2);
  return (
    <>
      {/* Quotation, becomes REQUEST */}
      <Obj x={-480} y={60} w={230} h={300} rot={-4} m={m(t, 6.3, 7.2)} node={{w: 124, h: 124, r: 62, rot: 0}} fill={C.paper} radius={6}>
        <div style={{position: 'absolute', left: 22, top: 22, width: 22, height: 22, borderRadius: 11, background: C.paperInk}} />
        <Bar x={56} y={26} w={90} h={8} c={C.paperInk} />
        <Bar x={22} y={64} w={120} h={11} c={C.paperInk} />
        {[0, 1, 2, 3, 4].map((i) => (
          <React.Fragment key={i}>
            <Bar x={22} y={104 + i * 32} w={[118, 98, 132, 84, 110][i]} s={i === 4 ? seg(t, 2.0, 2.6) : 1} />
            <Bar x={172} y={104 + i * 32} w={36} s={i === 4 ? seg(t, 2.2, 2.8) : 1} />
          </React.Fragment>
        ))}
        <div style={{position: 'absolute', left: 22, right: 22, top: 252, height: 2, background: C.paperLine}} />
        <Digits x={0} y={264} right={22} v={fmt(quoteTotal)} size={22} c={C.paperInk} />
      </Obj>

      {/* Invoice, becomes REVIEW (data block) */}
      <Obj x={-240} y={-110} w={210} h={280} rot={3} m={m(t, 6.5, 7.4)} node={{w: 120, h: 120, r: 18, rot: 0}} fill={C.paper} radius={6}>
        <Bar x={20} y={24} w={80} h={9} c={C.paperInk} />
        <Bar x={20} y={46} w={54} h={6} />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} style={{position: 'absolute', left: 20, right: 20, top: 88 + i * 28, height: 1.5, background: C.paperLine}} />
        ))}
        {[0, 1, 2, 3, 4].map((i) => (
          <Bar key={i} x={20} y={98 + i * 28} w={[96, 70, 110, 62, 84][i]} h={6} />
        ))}
      </Obj>

      {/* Calculator, becomes DECISION */}
      <Obj x={0} y={40} w={190} h={270} rot={-2} m={m(t, 6.75, 7.65)} node={{w: 84, h: 84, r: 9, rot: 45}} fill="#20232A" radius={16}>
        <div style={{position: 'absolute', left: 16, right: 16, top: 18, height: 62, borderRadius: 8, background: '#C9CFC4'}} />
        <Digits x={0} y={34} right={26} v={fmt(calc)} size={30} c="#15181B" weight={500} />
        {Array.from({length: 16}).map((_, i) => {
          const col = i % 4;
          const row = Math.floor(i / 4);
          const press = i === 5 ? seg(t, 1.2, 1.3) * (1 - seg(t, 1.4, 1.6)) : i === 10 ? seg(t, 3.5, 3.6) * (1 - seg(t, 3.7, 3.9)) : 0;
          return (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: 16 + col * 42,
                top: 98 + row * 40,
                width: 34,
                height: 30,
                borderRadius: 7,
                background: i % 4 === 3 ? '#3A3F49' : '#2B2F37',
                filter: `brightness(${1 + press * 0.7})`,
              }}
            />
          );
        })}
      </Obj>

      {/* Approval document with a stamp, becomes APPROVAL */}
      <Obj x={250} y={-100} w={220} h={290} rot={2} m={m(t, 7.0, 7.9)} node={{w: 124, h: 124, r: 62, rot: 0}} fill={C.paper} radius={6}>
        <Bar x={22} y={26} w={96} h={9} c={C.paperInk} />
        {[0, 1, 2, 3].map((i) => (
          <Bar key={i} x={22} y={62 + i * 26} w={[150, 126, 160, 104][i]} h={6} />
        ))}
        <div style={{position: 'absolute', left: 22, top: 228, width: 100, height: 2, background: C.paperInk, opacity: 0.55}} />
        <div
          style={{
            position: 'absolute',
            left: 112,
            top: 120,
            width: 96,
            height: 96,
            transform: `scale(${lerp(1.7, 1, stamp)}) rotate(-9deg)`,
            opacity: stamp,
          }}
        >
          <svg width={96} height={96} viewBox="-48 -48 96 96">
            <circle r={42} fill="none" stroke="#0A84FF" strokeWidth={4} />
            <circle r={33} fill="none" stroke="#0A84FF" strokeWidth={1.8} strokeDasharray="3 5" />
            <path d="M -14 2 L -4 13 L 17 -12" fill="none" stroke="#0A84FF" strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div style={{position: 'absolute', inset: -10, borderRadius: '50%', border: '2px solid rgba(10,132,255,0.35)', transform: `scale(${lerp(1, 1.5, stampRing)})`, opacity: (1 - stampRing) * stamp}} />
        </div>
      </Obj>

      {/* Printed order, becomes EXECUTION */}
      <Obj x={490} y={60} w={270} h={190} rot={-3} m={m(t, 7.2, 8.1)} node={{w: 190, h: 96, r: 24, rot: 0}} fill={C.paper} radius={6}>
        <Bar x={20} y={22} w={110} h={9} c={C.paperInk} />
        {[0, 1, 2, 3].map((i) => (
          <React.Fragment key={i}>
            <Bar x={20} y={60 + i * 28} w={[96, 124, 84, 110][i]} h={6} />
            <Bar x={190} y={60 + i * 28} w={52} h={6} />
          </React.Fragment>
        ))}
        <div style={{position: 'absolute', left: 20, right: 20, top: 168, height: 2, background: C.paperLine}} />
      </Obj>

      {/* Phone with a notification */}
      <Obj x={620} y={250} w={116} h={218} rot={-5} m={m(t, 7.4, 8.4)} fill="#1C1F25" radius={20}>
        <div style={{position: 'absolute', inset: 8, borderRadius: 14, background: '#0E1014'}} />
        <div
          style={{
            position: 'absolute',
            left: 16,
            right: 16,
            top: 22,
            height: 44,
            borderRadius: 11,
            background: 'rgba(244,244,241,0.14)',
            transform: `translateY(${lerp(-70, 0, phone)}px)`,
            opacity: phone,
          }}
        >
          <div style={{position: 'absolute', left: 10, top: 11, width: 22, height: 22, borderRadius: 11, background: C.acc}} />
          <Bar x={40} y={12} w={36} h={6} c="rgba(244,244,241,0.6)" />
          <Bar x={40} y={26} w={24} h={5} c="rgba(244,244,241,0.3)" />
        </div>
        <div style={{position: 'absolute', left: 16, right: 16, top: 86, height: 6, borderRadius: 3, background: 'rgba(244,244,241,0.08)'}} />
        <div style={{position: 'absolute', left: 16, width: 60, top: 104, height: 6, borderRadius: 3, background: 'rgba(244,244,241,0.08)'}} />
      </Obj>
    </>
  );
};

/** Background layer: notebook and folders, held out of focus by the parent Layer. */
export const DeskBack: React.FC<{t: number}> = ({t}) => {
  const k = m(t, 6.4, 7.6);
  const ink = seg(t, 2.4, 4.2, smooth);
  return (
    <>
      <Obj x={-120} y={-330} w={236} h={300} rot={7} m={k} fill="#262A31" radius={14}>
        <div style={{position: 'absolute', left: 22, top: 0, bottom: 0, width: 3, background: 'rgba(244,244,241,0.1)'}} />
        <svg width={236} height={300} viewBox="0 0 236 300" style={{position: 'absolute', inset: 0}}>
          <path
            d="M 58 120 C 80 96, 96 150, 116 118 S 150 96, 160 128 S 186 150, 204 112"
            pathLength={1}
            strokeDasharray="1 1"
            strokeDashoffset={1 - ink}
            fill="none"
            stroke="rgba(244,244,241,0.5)"
            strokeWidth={3}
            strokeLinecap="round"
          />
          <path
            d="M 58 176 C 84 156, 100 200, 124 172 S 160 156, 176 182"
            pathLength={1}
            strokeDasharray="1 1"
            strokeDashoffset={1 - seg(t, 3.4, 4.8, smooth)}
            fill="none"
            stroke="rgba(244,244,241,0.4)"
            strokeWidth={3}
            strokeLinecap="round"
          />
        </svg>
      </Obj>
      {[0, 1, 2].map((i) => (
        <Obj key={i} x={340 + i * 64} y={-340 + i * 18} w={210} h={270} rot={-6 + i * 3} m={k} fill={['#CDC4AE', '#C2B9A2', '#B6AD97'][i]} radius={8}>
          <div style={{position: 'absolute', left: 14, top: 0, width: 84, height: 18, borderRadius: '0 0 7px 7px', background: 'rgba(27,24,20,0.14)'}} />
          <Bar x={22} y={60} w={110} h={7} c="rgba(27,24,20,0.22)" />
          <Bar x={22} y={84} w={80} h={7} c="rgba(27,24,20,0.16)" />
        </Obj>
      ))}
    </>
  );
};

/** Foreground layer: a pen and a paper corner entering from outside the frame, heavily defocused. */
export const DeskFront: React.FC<{t: number}> = ({t}) => {
  const k = m(t, 6.2, 7.2);
  const slide = seg(t, 0.2, 5.5, smooth);
  return (
    <>
      <Obj x={lerp(-980, -420, slide)} y={lerp(420, 320, slide)} w={520} h={22} rot={-24} m={k} fill="#2C2F36" radius={11}>
        <div style={{position: 'absolute', left: 0, top: 0, width: 90, height: 22, background: '#3B3F48'}} />
      </Obj>
      <Obj x={lerp(1180, 760, slide)} y={lerp(-120, -60, slide)} w={380} h={460} rot={9} m={k} fill={C.paper} radius={6}>
        <Bar x={30} y={40} w={150} h={10} c={C.paperInk} />
        <Bar x={30} y={80} w={210} h={7} />
        <Bar x={30} y={104} w={170} h={7} />
      </Obj>
    </>
  );
};
