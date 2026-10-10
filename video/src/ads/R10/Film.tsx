import React from 'react';
import {Audio, staticFile, useCurrentFrame} from 'remotion';
import {inOut, outX, seg} from '../../shared/timeline';
import {Check} from '../../trailer/ui';
import {Sheet, Title, Workspace} from '../R07/world';
import {BigLockup} from '../R08/props';
import {DarkRoomWide, SmallLockup, Figures, Rows, Timeline, Template, OwnShape, BusinessMap, Extras, TICKS, Pricing, Steps, SHEET} from './parts';
import {Layer, tk} from '../stage';

/** R10 "Software should adapt" (16:9). Motion graphic built on the presenter's own voice (alvina reel.mp4, audio only).
 *  Same dark world and light objects as R09, in landscape. Every beat is keyed to the transcript's word timings (the V
 *  object below); on-screen text is English only and there are no subtitles. */

export const R10_FPS = 30;
export const R10_DURATION = 70 * R10_FPS;

/** Anchors in seconds, read off the faster-whisper pass of the recording. Retime here if the audio changes. */
const V = {
  verity: 22.3, map: 27.55, configure: 35.15, noExtra: 38.95, only: 44.4, pricing: 47.3, steps: 50.6, framework: 54.9, around: 62.8, end: 66.3,
} as const;

/** Left-column headline. Anchor: the cap line (y 250) is the top edge of the product zone it describes. */
const Head: React.FC<{t: number; a: number; b: number; lines: string[]; size?: number; accent?: number[]}> = ({t, a, b, lines, size = 76, accent}) => (
  <Layer t={t} a={a} b={b}>
    <Title lines={lines} size={size} cap={250} x={120} accent={accent} />
  </Layer>
);

/** End card: the lockup, the line, one action. */
const EndCard: React.FC<{t: number}> = ({t}) => {
  const f = V.end;
  const r = (a: number) => {
    const p = seg(t, a, a + 0.7, outX);
    return {opacity: p, transform: `translateY(${Math.round((1 - p) * 24)}px)`} as React.CSSProperties;
  };
  const pill = seg(t, f + 1.0, f + 1.7, outX);
  return (
    <div style={{position: 'absolute', inset: 0, opacity: seg(t, f - 0.1, f + 0.35, inOut)}}>
      <div style={{position: 'absolute', left: 0, right: 0, top: 170, ...r(f)}}>
        <BigLockup draw={seg(t, f, f + 1.0, inOut)} word={seg(t, f + 0.5, f + 1.1, outX)} size={120} />
      </div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 400, textAlign: 'center', fontSize: 60, lineHeight: 1.12, fontWeight: 300, letterSpacing: '-0.035em', ...r(f + 0.35)}}>
        Business software configured<br />around how you work.
      </div>
      <div style={{position: 'absolute', left: 580, width: 760, top: 650, height: 112, borderRadius: 56, background: 'var(--accent)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 22, fontSize: 38, fontWeight: 500, letterSpacing: '-0.015em', opacity: pill, transform: `translateY(${Math.round((1 - pill) * 40)}px)`}}>
        Tell us about your business
        <svg width={40} height={24} viewBox="0 0 40 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12h34M26 3l10 9-10 9" />
        </svg>
      </div>
      <div style={{position: 'absolute', left: 0, right: 0, top: 812, textAlign: 'center', fontSize: 34, fontWeight: 400, letterSpacing: '-0.01em', color: 'var(--ink-muted)', ...r(f + 1.5)}}>verity.plotarmour.in</div>
    </div>
  );
};

export const AdR10: React.FC = () => {
  const t = useCurrentFrame() / R10_FPS;
  const built = tk(t, [[35.3, 0], [35.8, 1], [36.5, 2], [37.2, 3], [37.9, 4], [38.6, 5]]);
  return (
    <DarkRoomWide shaft={t * 4}>
      {/* Beats 1-5: every business is different, years of settling, the rigid template. */}
      <Layer t={t} a={0.3} b={22.1} ex={0.15} dy={50} light>
        <Sheet x={SHEET.x} y={SHEET.y} w={SHEET.w} h={SHEET.h}>
          <Figures t={t} />
          <Rows t={t} />
          <Timeline t={t} />
          <Template t={t} />
        </Sheet>
      </Layer>

      {/* Beat 6: a hard cut to a clear room, the mark draws itself. */}
      <Layer t={t} a={V.verity} b={27.2} ex={0.35} dy={0}>
        <div style={{position: 'absolute', left: 0, right: 0, top: 290}}>
          <BigLockup draw={seg(t, V.verity, 23.4, inOut)} word={seg(t, 22.8, 23.4, outX)} size={150} />
        </div>
      </Layer>
      <Layer t={t} a={23.2} b={25.0} ex={0.35}>
        <Title lines={["Verity's approach is different."]} size={84} cap={640} x={120} align="center" />
      </Layer>
      <Layer t={t} a={25.45} b={27.0} ex={0.4}>
        <Title lines={["We don't start with software."]} size={84} cap={640} x={120} align="center" accent={[0]} />
      </Layer>
      <Layer t={t} a={27.4} b={65.9} ex={0.3} dy={0}>
        <SmallLockup />
      </Layer>

      {/* Beat 7: map the business. */}
      <Layer t={t} a={27.9} b={34.9} ex={0.4} dy={30} light>
        <BusinessMap t={t} />
      </Layer>

      {/* Beat 8: configured on that understanding, with nothing extra. */}
      <Layer t={t} a={35.1} b={46.9} ex={0.4} dy={60} light>
        <Workspace x={SHEET.x} y={220} w={SHEET.w} h={640} built={built} />
        {TICKS.map(([x, y, a]) => (
          <div key={a} style={{position: 'absolute', left: x, top: y, opacity: seg(t, a, a + 0.3), transform: `scale(${0.8 + 0.2 * seg(t, a, a + 0.4, outX)})`}}>
            <Check p={seg(t, a, a + 0.5, outX)} size={36} />
          </div>
        ))}
        <Extras t={t} />
      </Layer>

      {/* Beat 9: pricing follows understanding. Beat 10: requirement to implementation. */}
      <Layer t={t} a={V.pricing} b={50.2} ex={0.4} dy={30} light>
        <Pricing t={t} />
      </Layer>
      <Layer t={t} a={V.steps} b={54.5} ex={0.4} dy={30} light>
        <Steps t={t} />
      </Layer>

      {/* Beats 11-12: the business keeps its shape; the software forms around it. */}
      <Layer t={t} a={V.framework} b={65.5} ex={0.3} dy={50} light>
        <Sheet x={SHEET.x} y={SHEET.y} w={SHEET.w} h={SHEET.h}>
          <OwnShape t={t} />
        </Sheet>
      </Layer>

      {/* Headlines: land once, hold still, exit upward; each is gone before the next lands in the same place. */}
      <Head t={t} a={0.1} b={3.9} lines={['One thing', 'is clear.']} size={104} />
      <Head t={t} a={4.3} b={11.9} lines={['Every business', 'has its own way', 'of working.']} />
      <Head t={t} a={12.5} b={14.9} lines={['A system takes', 'years to form.']} />
      <Head t={t} a={15.45} b={21.9} lines={['Software asks', 'your business', 'to adapt.']} accent={[2]} />
      <Head t={t} a={V.map} b={34.6} lines={['We understand', 'your business', 'first.']} accent={[2]} />
      <Head t={t} a={V.configure} b={38.5} lines={['Configured on', 'what we', 'understood.']} accent={[2]} />
      <Head t={t} a={V.noExtra} b={44.0} lines={['No unnecessary', 'modules. No', 'complicated', 'workflows.']} />
      <Head t={t} a={V.only} b={46.9} lines={['Only what you', 'need becomes', 'the system.']} accent={[2]} />
      <Head t={t} a={V.pricing} b={50.1} lines={['Pricing follows', 'understanding.']} accent={[1]} />
      <Head t={t} a={V.steps} b={54.4} lines={['Implementation', 'starts after', 'your approval.']} accent={[2]} />
      <Head t={t} a={V.framework} b={58.0} lines={['Software should', 'not decide your', 'framework.']} />
      <Head t={t} a={58.5} b={62.2} lines={['Your business', 'should not change', 'for software.']} />
      <Head t={t} a={V.around} b={65.8} lines={['Software should', 'be built around', 'how you work.']} accent={[2]} />

      <EndCard t={t} />
      <Audio src={staticFile('ads/R10/vo.wav')} />
    </DarkRoomWide>
  );
};
