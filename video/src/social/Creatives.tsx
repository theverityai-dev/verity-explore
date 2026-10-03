import React from 'react';
import {FOOD, RETAIL} from '../reels/content';
import {C, Canvas, Lockup, M, Micro, Pill, SH, SW, Statement, TYPE, UIPanel, capOffset, statementBottom} from './kit';

/** The record line: the system's continuity device. It sits 120 above the bottom margin line, mirroring the hero cap
 *  line's 120 below the top margin. Broken (dashed, muted) before Verity, solid accent once facts share one record. */
const LINE_Y = SH - M - 120;

const Node: React.FC<{x: number; label?: string; on?: boolean}> = ({x, label, on}) => (
  <>
    <div style={{position: 'absolute', left: x - 9, top: LINE_Y - 9, width: 18, height: 18, borderRadius: 9, boxSizing: 'border-box', background: on ? C.accent : C.base, border: on ? 'none' : `2px solid ${C.muted}`}} />
    {/* Label hangs from its node: its left edge on the node's left edge, 32 below the line. */}
    {label ? <div style={{position: 'absolute', left: x - 9, top: LINE_Y + 32, fontSize: TYPE.micro, lineHeight: 1, color: on ? C.ink : C.muted}}>{label}</div> : null}
  </>
);

const Dashed: React.FC<{x0: number; x1: number}> = ({x0, x1}) => (
  <div style={{position: 'absolute', left: x0, top: LINE_Y - 1, width: x1 - x0, height: 2, backgroundImage: `repeating-linear-gradient(90deg, ${C.faint} 0 14px, transparent 14px 26px)`}} />
);

const Solid: React.FC<{x0: number; x1: number}> = ({x0, x1}) => <div style={{position: 'absolute', left: x0, top: LINE_Y - 1, width: x1 - x0, height: 2, background: C.accent}} />;

/* ---------------------------------------------------------------------------
   1. Static problem post (archetype A, editorial statement). Copy: the site hero sub (index.html) and the retail
   industry context ("four systems that do not know about each other").
   -------------------------------------------------------------------------- */
export const Post01: React.FC = () => {
  const xs = [0, 1, 2, 3, 4].map((i) => M + i * ((SW - 2 * M) / 4));
  return (
    <Canvas lift={{x: 0.3, y: 0.3}}>
      <Lockup />
      <Statement ink={'Your work lives\nacross WhatsApp,\nspreadsheets,\nemail, ERPs\nand people.'} muted={'None of them know\nabout each other.'} size={88} />
      {/* Five sources as five unconnected nodes on a broken line: the sentence, drawn. */}
      <Dashed x0={M} x1={SW - M} />
      {xs.map((x) => (
        <Node key={x} x={x} />
      ))}
      <Micro>theverityai.xyz</Micro>
    </Canvas>
  );
};

/* ---------------------------------------------------------------------------
   2. Carousel, Food & Hospitality (6 slides, one wide canvas). Copy: content/businesses/restaurants.js.
   HOOK, PROBLEM, INSIGHT and CONSEQUENCE, SOLUTION, EXAMPLE, CTA.
   -------------------------------------------------------------------------- */
const N = 6;
const X = (slide: number, x: number) => slide * SW + x;
/** The panel enters as an 80px glass edge at the right of slide 4 and is the hero of slide 5. */
const PANEL_X = X(4, -M);

const Wide: React.FC = () => (
  <>
    {/* Slide 1: hook */}
    <Lockup />
    <Statement left={X(0, M)} ink={'Service ends\nat eleven.'} muted={'The numbers should\nnot arrive next month.'} />
    {/* Slide 2: problem */}
    <Statement left={X(1, M)} ink={'The billing system\nknows what\nwas ordered.'} muted={'Not what it\nconsumed.'} />
    {/* Slide 3: insight and consequence */}
    <Statement left={X(2, M)} ink={'Each fact exists.'} muted={'None of them\nare connected.'} />
    {/* Slide 4: solution */}
    <Statement left={X(3, M)} ink={'Verity keeps them\non one record.'} />
    {/* Slide 5: example (the panel's real first attention row) */}
    <Statement left={X(4, M)} ink={'Low stock shows up\nbefore service.'} muted={'Not during it.'} />
    {/* Slide 6: CTA */}
    <Statement left={X(5, M)} ink={'The day,\nunderstood while\nit is still running.'} />

    {/* The record line: broken across slides 1-3, solid into the panel on slide 4. */}
    <Dashed x0={X(0, M)} x1={X(3, 0)} />
    <Node x={X(0, 560)} label="Orders" />
    <Node x={X(1, 560)} label="Stock" />
    <Node x={X(2, 320)} label="People" />
    <Node x={X(2, 800)} label="Money" />
    <Solid x0={X(3, 0)} x1={PANEL_X} />
    <Node x={X(3, 80)} on />

    {/* Ends exactly on the slide 5/6 seam: it bleeds off slide 5's right edge without spilling into the CTA slide. */}
    <UIPanel data={FOOD.panel} x={PANEL_X} y={600} w={X(5, 0) - PANEL_X} h={1000} s={1.5} pad={2 * M} metrics={[2, 3]} rows={3} focus={0} />
  </>
);

export const Carousel01: React.FC<{slide: number}> = ({slide}) => {
  const ctaTop = statementBottom(3) + 64;
  return (
    <Canvas lift={{x: 0.72, y: 0.7}}>
      <div style={{position: 'absolute', left: -slide * SW, top: 0, width: N * SW, height: SH}}>
        <Wide />
      </div>
      {slide === N - 1 ? (
        <>
          {/* CTA: the editorial link, on the hero's left edge, 64 under its last baseline. */}
          <div style={{position: 'absolute', left: M, top: ctaTop - capOffset(TYPE.micro, 1), fontSize: TYPE.micro, lineHeight: 1, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.ink, borderBottom: `2px solid ${C.accent}`, paddingBottom: 8}}>
            See Verity for restaurants
          </div>
          <Lockup y={SH - M - 30} />
          <Micro align="right">theverityai.xyz</Micro>
        </>
      ) : (
        // Slide count: top-right, on the lockup's line, where objects that bleed off the bottom can never cover it.
        <div style={{position: 'absolute', right: M, top: M + 15 - TYPE.micro / 2, fontSize: TYPE.micro, lineHeight: 1, color: C.muted, fontVariantNumeric: 'tabular-nums'}}>
          {slide + 1} / {N}
        </div>
      )}
    </Canvas>
  );
};

/* ---------------------------------------------------------------------------
   3. Meta ad, pain-led (archetype B, UI hero bleed). Copy: index.html hero ("Verity makes it run as one", WhatsApp).
   Panel: content/businesses/retail-stores.js.
   -------------------------------------------------------------------------- */
export const Ad01: React.FC = () => {
  const heroEnd = statementBottom(3);
  const supportCap = heroEnd + 40 + 0.27 * TYPE.support;
  const pillTop = supportCap + 0.73 * TYPE.support + 48;
  const panelTop = pillTop + 64 + 72;
  return (
    <Canvas lift={{x: 0.75, y: 0.85}}>
      <Lockup />
      <Statement ink={'Still running\nthe business\non WhatsApp?'} />
      {/* Support: 40 under the hero's last baseline, on the same left edge. */}
      <div style={{position: 'absolute', left: M, top: supportCap - capOffset(TYPE.support, 1.3), fontSize: TYPE.support, lineHeight: 1.3, fontWeight: 300, letterSpacing: '-0.01em', color: C.muted}}>
        Verity makes it run as one.
      </div>
      <Pill x={M} y={pillTop}>
        See how it works
      </Pill>
      {/* The panel starts on the left margin under the CTA and bleeds off the right and bottom edges. */}
      <UIPanel data={RETAIL.panel} x={M} y={panelTop} w={1240} h={900} s={1.4} pad={32 * 1.4} metrics={[0, 3, 1]} rows={3} focus={0} />
    </Canvas>
  );
};

export const SOCIAL_SLIDES = N;
