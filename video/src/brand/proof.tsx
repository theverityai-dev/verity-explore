import React from 'react';
import {AbsoluteFill, useVideoConfig} from 'remotion';
import './fonts';
import {Headline, Lockup, Subline, DayGlass, useU} from './kit';
import {DAY} from './language';

/** Proof frames: the locked language rebuilt from the primitives, to be compared against references 2 and 3. */
const T = 6; // seconds into the piece: everything has landed

const Planes: React.FC = () => {
  const u = useU();
  const bars = (n: number) => Array.from({length: n}).map((_, i) => <div key={i} style={{height: 0.9 * u, width: `${i === n - 1 ? 52 : 86 - i * 6}%`, borderRadius: 4, background: 'rgba(15,17,21,0.18)', marginTop: 1.5 * u}} />);
  const plane = (x: number, y: number, s: number, op: number) => (
    <DayGlass key={`${x}${y}`} style={{position: 'absolute', left: x * u, top: y * u, width: 20 * u * s, height: 13.5 * u * s, padding: 2.4 * u * s, transform: 'perspective(1400px) rotateY(-28deg) rotateX(8deg)', opacity: op, background: 'rgba(250,250,250,0.78)', border: '1px solid rgba(255,255,255,0.95)'}}>
      <div style={{width: 5 * u * s, height: 1.4 * u * s, borderRadius: 3, background: 'rgba(15,17,21,0.5)'}} />
      {bars(4)}
    </DayGlass>
  );
  return (
    <div style={{position: 'absolute', inset: 0}}>
      {plane(5, 72, 1.05, 1)}
      {plane(30, 62, 1.0, 0.95)}
      {plane(55, 51, 0.88, 0.88)}
      {plane(76, 41, 0.72, 0.75)}
      {/* the workflow path: one blue line travelling through the planes, a node on the one it has reached */}
      <svg width="100%" height="100%" viewBox="0 0 108 135" style={{position: 'absolute', inset: 0}}>
        <path d="M-2 108 C 14 104, 22 100, 31 96 S 48 88, 57 80 S 76 68, 84 60 S 100 52, 112 46" fill="none" stroke={DAY.accent} strokeWidth={0.2} />
        <circle cx={44.5} cy={90.5} r={0.95} fill={DAY.accent} />
      </svg>
    </div>
  );
};

/** Template B: diagram, left-aligned, paper world (reference 2). */
export const ProofB: React.FC = () => {
  const u = useU();
  const {height} = useVideoConfig();
  return (
    <AbsoluteFill style={{background: `radial-gradient(ellipse 90% 70% at 70% 70%, #f6f7f8, ${DAY.paper} 70%)`}}>
      <div style={{position: 'absolute', left: 8 * u, top: height * 0.16}}>
        <Headline t={T} lines={[{text: 'Your business'}, {text: 'is already running.'}]} role="headlineMinimal" />
      </div>
      <div style={{position: 'absolute', left: 8.4 * u, top: height * 0.375}}>
        <Subline t={T} align="left" parts={[{text: 'Your systems should keep up.'}]} />
      </div>
      <Planes />
      <div style={{position: 'absolute', left: 6.5 * u, bottom: 5.6 * u}}>
        <Lockup markHeight={4.6 * u} tone="blue" />
      </div>
    </AbsoluteFill>
  );
};

/** Template C: lockup end card (reference 3). */
export const ProofC: React.FC = () => {
  const u = useU();
  return (
    <AbsoluteFill style={{background: DAY.paper, alignItems: 'center', justifyContent: 'center'}}>
      <Lockup markHeight={13.5 * u} tone="blue" weight={200} />
    </AbsoluteFill>
  );
};
