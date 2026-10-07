import React from 'react';
import {AbsoluteFill} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Inter';
import {CAPS} from '../trailer/data';
import {Avatar, Card, Check, Label, Mark, Words} from '../trailer/ui';

const {fontFamily} = loadFont('normal', {weights: ['300', '400', '500', '600'], subsets: ['latin']});

/** 4:3 canvas. Margin 96 all round, inner width 1248. Statement anchors top-left at (96, 96), as the trailer does at 16:9. */
export const PW = 1440;
export const PH = 1080;
export const M = 96;
export const INNER = PW - M * 2;
const GRID = 72;
const MASK = 'radial-gradient(ellipse 75% 70% at 50% 50%, #000 30%, transparent 100%)';

/** The business's own steps. This one set of cards is the carrier that returns in frames 1, 2 and 6. */
export const FLOW: {name: string; sub: string}[] = [
  {name: 'Request', sub: 'Raised by the team'},
  {name: 'Review', sub: 'Checked by the lead'},
  {name: 'Decision', sub: 'Owner signs off'},
  {name: 'Approval', sub: 'Finance clears it'},
  {name: 'Execution', sub: 'Done and recorded'},
];

const Stage: React.FC<{children: React.ReactNode}> = ({children}) => (
  <AbsoluteFill style={{background: 'var(--base)', fontFamily, fontFeatureSettings: '"cv02","cv03","cv04","ss03"', color: 'var(--ink)', overflow: 'hidden'}}>
    <AbsoluteFill
      style={{
        backgroundImage: 'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
        backgroundSize: `${GRID}px ${GRID}px`,
        WebkitMaskImage: MASK,
        maskImage: MASK,
      }}
    />
    {children}
  </AbsoluteFill>
);

/** Lines are written, not wrapped. */
const Head: React.FC<{lines: string[]; sub?: string; subTop?: number}> = ({lines, sub, subTop = 330}) => (
  <>
    <div style={{position: 'absolute', left: M, top: M, width: INNER}}>
      {lines.map((l) => (
        <Words key={l} text={l} t={99} at={0} size={84} />
      ))}
    </div>
    {sub ? (
      <div style={{position: 'absolute', left: M + 4, top: subTop, width: 900}}>
        <Words text={sub} t={99} at={0} size={34} weight={400} color="var(--ink-muted)" />
      </div>
    ) : null}
  </>
);

const Dot: React.FC<{on?: boolean}> = ({on}) => <div style={{width: 10, height: 10, borderRadius: 5, flex: 'none', background: on ? 'var(--accent)' : 'var(--line)'}} />;

const FlowCard: React.FC<{i: number; left: number; top: number; k?: number; tall?: boolean; w?: number; rot?: number; done?: boolean}> = ({i, left, top, k = 1, tall, w, rot = 0, done}) => (
  <Card
    style={{
      position: 'absolute',
      left,
      top,
      width: w ?? 316 * k,
      height: tall ? 190 : 124 * k,
      padding: tall ? 20 : `0 ${24 * k}px`,
      display: 'flex',
      flexDirection: tall ? 'column' : 'row',
      alignItems: tall ? 'flex-start' : 'center',
      gap: tall ? 0 : 18 * k,
      boxShadow: 'var(--elev-mid)',
      transform: `rotate(${rot}deg)`,
    }}
  >
    {tall ? (
      <div style={{display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between'}}>
        <Avatar letter={FLOW[i].name[0]} size={48} />
        {done ? <Check p={1} size={30} /> : <Dot />}
      </div>
    ) : (
      <Avatar letter={FLOW[i].name[0]} size={52 * k} />
    )}
    <div style={{minWidth: 0, marginTop: tall ? 26 : 0}}>
      <div style={{fontSize: (tall ? 30 : 30 * k), fontWeight: 600, letterSpacing: '-0.01em', lineHeight: 1.1}}>{FLOW[i].name}</div>
      <div style={{fontSize: (tall ? 18 : 19 * k), color: 'var(--ink-muted)', whiteSpace: 'nowrap', marginTop: 2}}>{FLOW[i].sub}</div>
    </div>
    {!tall ? <div style={{marginLeft: 'auto'}}>{done ? <Check p={1} size={30 * k} /> : <Dot />}</div> : null}
  </Card>
);

const AppWindow: React.FC<{title: string; top: number; height: number; children: React.ReactNode}> = ({title, top, height, children}) => (
  <div
    style={{
      position: 'absolute',
      left: M,
      top,
      width: INNER,
      height,
      borderRadius: 16,
      background: 'var(--base)',
      border: '1px solid var(--line)',
      boxShadow: 'var(--elev-high)',
      overflow: 'hidden',
    }}
  >
    <div style={{height: 52, padding: '0 24px', display: 'flex', alignItems: 'center', gap: 14, borderBottom: '1px solid var(--line)', background: 'var(--surface)'}}>
      <Mark height={22} />
      <Label style={{color: 'var(--ink)', fontSize: 17}}>{title}</Label>
      <div style={{marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10}}>
        <span style={{width: 8, height: 8, borderRadius: 4, background: 'var(--accent)'}} />
        <Label style={{fontSize: 16}}>Live</Label>
      </div>
    </div>
    <div style={{position: 'absolute', left: 0, right: 0, top: 52, bottom: 0}}>{children}</div>
  </div>
);

/** 1. Every business has its own way of working. Scattered the way the trailer scatters its tools. */
export const F1_POS: [number, number, number][] = [
  [96, 520, -1.4],
  [530, 590, 1],
  [964, 530, -0.8],
  [310, 800, 1.3],
  [750, 830, -1.1],
];
const F1: React.FC = () => (
  <Stage>
    <Head lines={['Every business has', 'its own way of working.']} />
    {F1_POS.map(([x, y, r], i) => (
      <FlowCard key={i} i={i} left={x} top={y - 40} k={1.2} rot={r} />
    ))}
  </Stage>
);

/** 1b. Built over years. Four cards cascade like layers laid down over time; later ones sit on top. */
export const YEARS: [string, string][] = [
  ['Processes', 'How work moves'],
  ['Approvals', 'Who says yes'],
  ['Teams', 'Who does what'],
  ['Decisions', 'Who decides'],
];
const F1B: React.FC = () => (
  <Stage>
    <Head lines={['Built over years,', 'not in a day.']} />
    {YEARS.map(([t, d], i) => (
      <Card
        key={t}
        style={{
          position: 'absolute',
          left: M + i * 190,
          top: 400 + i * 138,
          width: 600,
          height: 156,
          padding: '0 32px',
          display: 'flex',
          alignItems: 'center',
          gap: 22,
          boxShadow: 'var(--elev-mid)',
        }}
      >
        <Avatar letter={t[0]} size={60} />
        <div>
          <div style={{fontSize: 44, fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.1}}>{t}</div>
          <div style={{fontSize: 24, color: 'var(--ink-muted)', marginTop: 4}}>{d}</div>
        </div>
        <div style={{marginLeft: 'auto'}}>
          <Dot />
        </div>
      </Card>
    ))}
  </Stage>
);

/** 4. A different approach. One object, so the centred composition is allowed. */
const F4M: React.FC = () => (
  <Stage>
    <div style={{position: 'absolute', left: 0, right: 0, top: 330, display: 'flex', justifyContent: 'center'}}>
      <Mark height={190} />
    </div>
    <div style={{position: 'absolute', left: M, right: M, top: 600, display: 'flex', justifyContent: 'center'}}>
      <Words text="A different approach." t={99} at={0} size={84} align="center" />
    </div>
  </Stage>
);

/** 2. Software tells the business how to run. No accent anywhere: the frame is rigid on purpose. */
export const SOFT = [
  ['Leads', 'Fixed fields'],
  ['Stock', 'Fixed steps'],
  ['Billing', 'Fixed approvals'],
  ['People', 'Fixed roles'],
  ['Reports', 'Fixed views'],
  ['Projects', 'Fixed stages'],
];
const F2: React.FC = () => (
  <Stage>
    <Head lines={['Software tells the', 'business how to run.']} sub="One template. Every company." subTop={380} />
    <Card style={{position: 'absolute', left: 400, top: 440, width: 944, height: 544, borderRadius: 16, boxShadow: 'var(--elev-high)', overflow: 'hidden'}}>
      <div style={{height: 52, padding: '0 24px', display: 'flex', alignItems: 'center', borderBottom: '1px solid var(--line)'}}>
        <Label style={{color: 'var(--ink)', fontSize: 17}}>Standard software</Label>
      </div>
      {SOFT.map(([n, s], k) => (
        <div
          key={n}
          style={{
            position: 'absolute',
            left: 24 + (k % 2) * 458,
            top: 76 + Math.floor(k / 2) * 154,
            width: 438,
            height: 138,
            boxSizing: 'border-box',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            gap: 18,
            borderRadius: 12,
            border: '1px solid var(--line-hair)',
            background: 'var(--surface-elevated)',
          }}
        >
          <Avatar letter={n[0]} size={52} />
          <div>
            <div style={{fontSize: 34, fontWeight: 600, letterSpacing: '-0.01em'}}>{n}</div>
            <div style={{fontSize: 20, color: 'var(--ink-muted)', marginTop: 2}}>{s}</div>
          </div>
        </div>
      ))}
    </Card>
    <FlowCard i={2} left={84} top={560} w={316} rot={-4} />
    <FlowCard i={3} left={70} top={730} w={316} rot={3} />
    <div style={{position: 'absolute', left: M + 4, top: 920, fontSize: 18, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-muted)'}}>Your steps don't fit</div>
  </Stage>
);

/** 3. Understand first. */
export const QUESTIONS: {title: string; sub: string; state: 'done' | 'live' | 'todo'}[] = [
  {title: 'How work happens', sub: 'Steps, handoffs, people', state: 'done'},
  {title: 'Where decisions are made', sub: 'Who approves what', state: 'done'},
  {title: 'What can improve', sub: 'Delays and rework', state: 'live'},
  {title: 'What is actually needed', sub: 'Only the real requirement', state: 'todo'},
];
const F3: React.FC = () => (
  <Stage>
    <Head lines={['Understand the', 'business first.']} sub="Before any software." subTop={380} />
    {QUESTIONS.map((q, k) => {
      const hot = q.state !== 'todo';
      return (
        <Card
          key={q.title}
          style={{
            position: 'absolute',
            left: M + (k % 2) * 636,
            top: 470 + Math.floor(k / 2) * 262,
            width: 612,
            height: 238,
            padding: 32,
            boxShadow: 'var(--elev-mid)',
            border: `1px solid ${hot ? 'var(--accent-a40)' : 'var(--line)'}`,
            opacity: q.state === 'todo' ? 0.55 : 1,
          }}
        >
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <Label>{q.state === 'done' ? 'Understood' : q.state === 'live' ? 'Looking now' : 'Next'}</Label>
            {q.state === 'done' ? <Check p={1} size={32} /> : <Dot on={q.state === 'live'} />}
          </div>
          <div style={{fontSize: 40, fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.1, marginTop: 48}}>{q.title}</div>
          <div style={{fontSize: 24, color: 'var(--ink-muted)', marginTop: 12}}>{q.sub}</div>
        </Card>
      );
    })}
  </Stage>
);

/** 4. Only what the business needs: the real capability cards, four chosen, four left out. */
export const NEED = new Set(['People', 'Records', 'Workflows', 'Control']);
const F4: React.FC = () => (
  <Stage>
    <Head lines={['Only what the', 'business needs.']} sub="Nothing extra to adjust to." subTop={380} />
    <AppWindow title="Verity / Your system" top={440} height={540}>
      {CAPS.map((c, k) => {
        const on = NEED.has(c.name);
        return (
          <Card
            key={c.name}
            style={{
              position: 'absolute',
              left: 28 + (k % 4) * 302,
              top: 28 + Math.floor(k / 4) * 216,
              width: 286,
              height: 200,
              padding: 22,
              boxShadow: on ? 'var(--elev-mid)' : 'none',
              border: `1px solid ${on ? 'var(--accent-a40)' : 'var(--line)'}`,
              opacity: on ? 1 : 0.38,
            }}
          >
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <div style={{fontSize: 31, fontWeight: 600, letterSpacing: '-0.02em'}}>{c.name}</div>
              {on ? <Check p={1} size={30} /> : null}
            </div>
            <div style={{fontSize: 19, color: 'var(--ink-muted)', marginTop: 12, lineHeight: 1.3}}>{c.label}</div>
          </Card>
        );
      })}
    </AppWindow>
  </Stage>
);

/** 5. Requirement, proposal, approval. Pricing sits after understanding, so it is the sub line, not a number. */
export const STEPS: [string, string][] = [
  ['Requirement', 'What the business needs'],
  ['Proposed solution', 'What gets configured'],
  ['Your approval', 'Nothing starts before it'],
  ['Implementation', 'Only then'],
];
const F5: React.FC = () => (
  <Stage>
    <Head lines={['Requirement. Proposal.', 'Approval.']} />
    {STEPS.map(([t, d], k) => {
      const on = k < 3;
      return (
        <Card
          key={t}
          style={{
            position: 'absolute',
            left: M,
            top: 470 + k * 128,
            width: INNER,
            height: 112,
            padding: '0 36px',
            display: 'flex',
            alignItems: 'center',
            gap: 24,
            boxShadow: on ? 'var(--elev-mid)' : 'none',
            border: `1px solid ${on ? 'var(--accent-a40)' : 'var(--line)'}`,
            opacity: on ? 1 : 0.55,
          }}
        >
          {on ? <Check p={1} size={42} /> : <div style={{width: 42, height: 42, borderRadius: 21, border: '2px solid var(--line)', flex: 'none'}} />}
          <div style={{fontSize: 42, fontWeight: 500, letterSpacing: '-0.02em'}}>{t}</div>
          <div style={{marginLeft: 'auto', fontSize: 26, color: 'var(--ink-muted)'}}>{d}</div>
        </Card>
      );
    })}
  </Stage>
);

/** 6. The software is built around the steps the business already had. */
const F6: React.FC = () => (
  <Stage>
    <Head lines={['Software built around', 'how you work.']} sub="Same steps. Same people." subTop={380} />
    <AppWindow title="Verity / Your workflow" top={470} height={420}>
      {FLOW.map((_, i) => (
        <FlowCard key={i} i={i} left={28 + i * 242} top={28} w={224} tall done />
      ))}
      <div
        style={{
          position: 'absolute',
          left: 28,
          top: 250,
          height: 76,
          padding: '0 28px',
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          borderRadius: 14,
          background: 'var(--ink)',
          color: 'var(--base)',
          fontSize: 30,
          fontWeight: 500,
        }}
      >
        <Check p={1} size={32} />
        Your process, unchanged.
      </div>
    </AppWindow>
  </Stage>
);

/** Frame order follows the corrected 50 s voiceover timing. */
export const PITCH_FRAMES = [F1, F1B, F2, F4M, F3, F4, F5, F6];
export const PITCH_NAMES = [
  '1-way-of-working',
  '2-built-over-years',
  '3-rigid-software',
  '4-different-approach',
  '5-understand-first',
  '6-only-what-is-needed',
  '7-requirement-to-approval',
  '8-built-around-you',
];
