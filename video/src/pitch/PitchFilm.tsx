import React, {createContext, useContext, useEffect} from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Inter';
import {inOut, outX, seg, track} from '../shared/timeline';
import {CAPS} from '../trailer/data';
import {Avatar, Card, Check, Label, Mark, Words} from '../trailer/ui';
import {F1_POS, FLOW, INNER, M, NEED, PH, PW, QUESTIONS, SOFT, STEPS, YEARS} from './PitchFrames';

const {fontFamily} = loadFont('normal', {weights: ['300', '400', '500', '600'], subsets: ['latin']});

export const FILM_FPS = 60;
export const FILM_SECONDS = 51;
export const FILM_DURATION = FILM_SECONDS * FILM_FPS;

/**
 * 4:3 pitch film, 50 s of voiceover plus a 1 s tail. Everything is a pure function of time.
 *
 * Vector law: one dominant direction. The world is a row of scenes and the camera only ever travels
 * left to right, so content leaves to the left. Each pan is centred on the voiceover line that
 * starts the next scene, and lands 0.4 s after it. The only against-the-current moves are the two
 * step cards that arrive from the left in scene 3, because that is the meaning: they do not fit.
 */
const B = [8, 15, 21, 24, 34, 42, 46, 48];
const HALF = 0.4;
const PAN_KEYS: [number, number][] = [[B[0] - HALF, 0]];
B.forEach((b, i) => {
  PAN_KEYS.push([b + HALF, (i + 1) * PW]);
  if (i < B.length - 1) PAN_KEYS.push([B[i + 1] - HALF, (i + 1) * PW]);
});

const GRID = 72;
const MASK = 'radial-gradient(ellipse 75% 70% at 50% 50%, #000 30%, transparent 100%)';
const lin = (n: number) => n;

/** Theme comes from the site stylesheet (`:root[data-theme]`), so dark is the landing page's own dark tokens. */
const DarkCtx = createContext(false);

const rise = (p: number, dx = 0, dy = 0) => ({opacity: Math.min(1, p * 2), transform: `translate(${(1 - p) * dx}px, ${(1 - p) * dy}px)`});
const enter = (t: number, at: number, dur = 0.8) => seg(t, at, at + dur, outX);

const DotP: React.FC<{p: number}> = ({p}) => (
  <div style={{position: 'relative', width: 10, height: 10, flex: 'none'}}>
    <div style={{position: 'absolute', inset: 0, borderRadius: 5, background: 'var(--line)'}} />
    <div style={{position: 'absolute', inset: 0, borderRadius: 5, background: 'var(--accent)', opacity: p}} />
  </div>
);

/** Accent border that fades in over a card's neutral border. */
const Rim: React.FC<{p: number}> = ({p}) => (
  <div style={{position: 'absolute', inset: -1, borderRadius: 16, border: '1px solid var(--accent-a40)', opacity: p, pointerEvents: 'none'}} />
);

const Head: React.FC<{t: number; lines: string[]; at: number; step?: number; out?: number}> = ({t, lines, at, step = 0.25, out}) => (
  <div style={{position: 'absolute', left: M, top: M, width: INNER}}>
    {lines.map((l, i) => (
      <Words key={l} text={l} t={t} at={at + i * step} size={84} out={out} />
    ))}
  </div>
);

const Sub: React.FC<{t: number; text: string; at: number; top: number}> = ({t, text, at, top}) => (
  <div style={{position: 'absolute', left: M + 4, top, width: 900}}>
    <Words text={text} t={t} at={at} size={34} weight={400} color="var(--ink-muted)" />
  </div>
);

type FCardProps = {i: number; left: number; top: number; p: number; k?: number; w?: number; tall?: boolean; rot?: number; dx?: number; dy?: number; dot?: number; done?: number};
const FCard: React.FC<FCardProps> = ({i, left, top, p, k = 1, w, tall, rot = 0, dx = 0, dy = 0, dot = 0, done = 0}) => (
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
      opacity: Math.min(1, p * 2),
      transform: `translate(${(1 - p) * dx}px, ${(1 - p) * dy}px) rotate(${rot}deg)`,
    }}
  >
    {tall ? (
      <div style={{display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between'}}>
        <Avatar letter={FLOW[i].name[0]} size={48} />
        {done > 0 ? <Check p={done} size={30} /> : <DotP p={dot} />}
      </div>
    ) : (
      <Avatar letter={FLOW[i].name[0]} size={52 * k} />
    )}
    <div style={{minWidth: 0, marginTop: tall ? 26 : 0}}>
      <div style={{fontSize: tall ? 30 : 30 * k, fontWeight: 600, letterSpacing: '-0.01em', lineHeight: 1.1}}>{FLOW[i].name}</div>
      <div style={{fontSize: tall ? 18 : 19 * k, color: 'var(--ink-muted)', whiteSpace: 'nowrap', marginTop: 2}}>{FLOW[i].sub}</div>
    </div>
    {!tall ? <div style={{marginLeft: 'auto'}}>{done > 0 ? <Check p={done} size={30 * k} /> : <DotP p={dot} />}</div> : null}
  </Card>
);

const Win: React.FC<{title: string; top: number; height: number; p: number; children: React.ReactNode}> = ({title, top, height, p, children}) => (
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
      ...rise(p, 260, 0),
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

/** 0-8 s. Cards arrive alone, then the statement, then each card's dot goes live in turn. */
const S1: React.FC<{t: number}> = ({t}) => (
  <>
    <Head t={t} lines={['Every business has', 'its own way of working.']} at={5.0} />
    {F1_POS.map(([x, y, r], i) => (
      <FCard key={i} i={i} left={x - t * 3} top={y - 40} k={1.2} rot={r} p={enter(t, 0.4 + i * 0.4, 0.9)} dx={140} dy={30} dot={seg(t, 5.9 + i * 0.3, 6.3 + i * 0.3)} />
    ))}
  </>
);

/** 8-15 s. Four cards cascade like layers laid down over years. */
const S2: React.FC<{t: number}> = ({t}) => (
  <>
    <Head t={t} lines={['Built over years,', 'not in a day.']} at={8.2} />
    {YEARS.map(([n, d], i) => {
      const p = enter(t, 8.9 + i * 0.9, 0.9);
      return (
        <Card
          key={n}
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
            ...rise(p, 160, -60),
          }}
        >
          <Avatar letter={n[0]} size={60} />
          <div>
            <div style={{fontSize: 44, fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.1}}>{n}</div>
            <div style={{fontSize: 24, color: 'var(--ink-muted)', marginTop: 4}}>{d}</div>
          </div>
          <div style={{marginLeft: 'auto'}}>
            <DotP p={seg(t, 9.7 + i * 0.9, 10.1 + i * 0.9)} />
          </div>
        </Card>
      );
    })}
  </>
);

/** 15-21 s. A rigid template, with no accent. Two step cards arrive from the left and jam against it. */
const S3: React.FC<{t: number}> = ({t}) => {
  const p = enter(t, 15.6, 0.9);
  return (
    <>
      <Head t={t} lines={['Software tells the', 'business how to run.']} at={15.2} />
      <Sub t={t} text="One template. Every company." at={16.0} top={380} />
      <Card style={{position: 'absolute', left: 400, top: 440, width: 944, height: 544, borderRadius: 16, boxShadow: 'var(--elev-high)', overflow: 'hidden', ...rise(p, 240, 0)}}>
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
              ...rise(enter(t, 16.3 + k * 0.18, 0.6), 0, 24),
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
      <FCard i={2} left={84} top={560} w={316} rot={-4 - (1 - enter(t, 17.6, 0.8)) * 8} p={enter(t, 17.6, 0.8)} dx={-420} />
      <FCard i={3} left={70} top={730} w={316} rot={3 + (1 - enter(t, 18.1, 0.8)) * 8} p={enter(t, 18.1, 0.8)} dx={-420} />
      <div
        style={{
          position: 'absolute',
          left: M + 4,
          top: 920,
          fontSize: 18,
          fontWeight: 500,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--ink-muted)',
          opacity: seg(t, 19.0, 19.5),
        }}
      >
        Your steps don't fit
      </div>
    </>
  );
};

/** 21-24 s. The mark draws, then one line. The only centred scene, because it holds one object. */
const S4: React.FC<{t: number}> = ({t}) => (
  <>
    <div style={{position: 'absolute', left: 0, right: 0, top: 330, display: 'flex', justifyContent: 'center'}}>
      <Mark height={190} draw={seg(t, 21.0, 21.8, inOut)} fill={seg(t, 21.6, 22.1)} />
    </div>
    <div style={{position: 'absolute', left: M, right: M, top: 600, display: 'flex', justifyContent: 'center'}}>
      <Words text="A different approach." t={t} at={21.7} size={84} align="center" />
    </div>
  </>
);

/** 24-34 s. Four questions, each going from waiting to live to understood, one after another. */
const LIVE_AT = [28.7, 30.2, 31.7, 32.8];
const DONE_AT = [30.2, 31.7, 32.8, 33.6];
const S5: React.FC<{t: number}> = ({t}) => (
  <>
    <Head t={t} lines={['Understand the', 'business first.']} at={24.2} />
    <Sub t={t} text="Before any software." at={25.4} top={380} />
    {QUESTIONS.map((q, k) => {
      const live = seg(t, LIVE_AT[k], LIVE_AT[k] + 0.4);
      const done = seg(t, DONE_AT[k], DONE_AT[k] + 0.6);
      const p = enter(t, 27.0 + k * 0.15, 0.8);
      const lab = {position: 'absolute' as const, left: 0, top: 0};
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
            ...rise(p, 120, 0),
            opacity: Math.min(1, p * 2) * (0.55 + 0.45 * live),
          }}
        >
          <Rim p={live} />
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <div style={{position: 'relative', height: 24, width: 200}}>
              <Label style={{...lab, opacity: 1 - live}}>Next</Label>
              <Label style={{...lab, opacity: live * (1 - done)}}>Looking now</Label>
              <Label style={{...lab, opacity: done}}>Understood</Label>
            </div>
            {done > 0 ? <Check p={done} size={32} /> : <DotP p={live} />}
          </div>
          <div style={{fontSize: 40, fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.1, marginTop: 48}}>{q.title}</div>
          <div style={{fontSize: 24, color: 'var(--ink-muted)', marginTop: 12}}>{q.sub}</div>
        </Card>
      );
    })}
  </>
);

/** 34-42 s. The Verity window fills with the capability cards, then four are kept and four fall back. */
const S6: React.FC<{t: number}> = ({t}) => {
  const dim = seg(t, 38.4, 39.2, inOut);
  let needIdx = -1;
  return (
    <>
      <Head t={t} lines={['Configured from', 'what we learned.']} at={34.2} out={37.4} />
      <Head t={t} lines={['Only what the', 'business needs.']} at={38.0} />
      <Sub t={t} text="Nothing extra to adjust to." at={39.6} top={380} />
      <Win title="Verity / Your system" top={440} height={540} p={enter(t, 34.5, 0.9)}>
        {CAPS.map((c, k) => {
          const on = NEED.has(c.name);
          if (on) needIdx += 1;
          const done = on ? seg(t, 38.5 + needIdx * 0.15, 39.1 + needIdx * 0.15) : 0;
          const p = enter(t, 35.0 + k * 0.14, 0.6);
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
                boxShadow: on ? 'var(--elev-mid)' : `0 1px 2px rgba(15,17,21,${0.08 * (1 - dim)})`,
                ...rise(p, 0, 24),
                opacity: Math.min(1, p * 2) * (on ? 1 : 1 - 0.62 * dim),
              }}
            >
              <Rim p={done} />
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <div style={{fontSize: 31, fontWeight: 600, letterSpacing: '-0.02em'}}>{c.name}</div>
                {on && done > 0 ? <Check p={done} size={30} /> : null}
              </div>
              <div style={{fontSize: 19, color: 'var(--ink-muted)', marginTop: 12, lineHeight: 1.3}}>{c.label}</div>
            </Card>
          );
        })}
      </Win>
    </>
  );
};

/** 42-46 s. Requirement, proposal, approval check in on the beat; implementation goes live. */
const DONE_ROW = [42.9, 43.8, 44.8];
const S7: React.FC<{t: number}> = ({t}) => (
  <>
    <Head t={t} lines={['Requirement. Proposal.', 'Approval.']} at={42.1} step={0.45} />
    {STEPS.map(([n, d], k) => {
      const done = k < 3 ? seg(t, DONE_ROW[k], DONE_ROW[k] + 0.6) : 0;
      const live = k === 3 ? seg(t, 45.3, 45.7) : 0;
      const p = enter(t, 42.4 + k * 0.15, 0.7);
      return (
        <Card
          key={n}
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
            boxShadow: 'var(--elev-mid)',
            ...rise(p, 120, 0),
            opacity: Math.min(1, p * 2) * (0.55 + 0.45 * Math.max(done, live)),
          }}
        >
          <Rim p={Math.max(done, live)} />
          {done > 0 ? <Check p={done} size={42} /> : <div style={{width: 42, height: 42, borderRadius: 21, border: '2px solid var(--line)', flex: 'none'}} />}
          <div style={{fontSize: 42, fontWeight: 500, letterSpacing: '-0.02em'}}>{n}</div>
          <div style={{marginLeft: 'auto', fontSize: 26, color: 'var(--ink-muted)'}}>{d}</div>
        </Card>
      );
    })}
  </>
);

/** 46-48 s. The same five step cards, now checked inside the Verity window. */
const S8: React.FC<{t: number}> = ({t}) => {
  const dark = useContext(DarkCtx);
  const toast = enter(t, 47.2, 0.5);
  return (
    <>
      <Head t={t} lines={['Software built around', 'how you work.']} at={46.2} step={0.2} />
      <Win title="Verity / Your workflow" top={470} height={420} p={enter(t, 46.3, 0.8)}>
        {FLOW.map((_, i) => (
          <FCard key={i} i={i} left={28 + i * 242} top={28} w={224} tall p={enter(t, 46.6 + i * 0.08, 0.6)} dy={20} done={seg(t, 46.9 + i * 0.12, 47.4 + i * 0.12)} />
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
            background: dark ? 'var(--surface-elevated)' : 'var(--ink)',
            color: dark ? 'var(--ink)' : 'var(--base)',
            border: dark ? '1px solid var(--line)' : undefined,
            fontSize: 30,
            fontWeight: 500,
            ...rise(toast, 0, 16),
          }}
        >
          <Check p={toast} size={32} />
          Your process, unchanged.
        </div>
      </Win>
    </>
  );
};

/** 48-51 s. End card: the mark draws, the wordmark lands, then the line. */
const S9: React.FC<{t: number}> = ({t}) => {
  const word = seg(t, 48.6, 49.4, outX);
  return (
    <>
      <div style={{position: 'absolute', left: 0, right: 0, top: 300, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 28}}>
        <Mark height={130} draw={seg(t, 48.0, 48.8, inOut)} fill={seg(t, 48.6, 49.1)} />
        <div style={{overflow: 'hidden', paddingBottom: 20, marginBottom: -20}}>
          <div style={{fontSize: 130, fontWeight: 600, letterSpacing: '-0.04em', lineHeight: 1, transform: `translateX(${(1 - word) * -50}px)`, opacity: word}}>verity</div>
        </div>
      </div>
      <div style={{position: 'absolute', left: M, right: M, top: 540, display: 'flex', justifyContent: 'center'}}>
        <Words text="That is what Verity does." t={t} at={49.1} size={64} align="center" />
      </div>
    </>
  );
};

const SCENES: React.FC<{t: number}>[] = [S1, S2, S3, S4, S5, S6, S7, S8, S9];

export const PitchFilm: React.FC<{dark?: boolean}> = ({dark = false}) => {
  const t = useCurrentFrame() / FILM_FPS;
  const camX = track(t, PAN_KEYS);
  // Set during render so the first painted frame already has the right tokens; restore on unmount for Studio.
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  useEffect(() => () => document.documentElement.setAttribute('data-theme', 'light'), []);
  return (
    <DarkCtx.Provider value={dark}>
    <AbsoluteFill style={{background: 'var(--base)', fontFamily, fontFeatureSettings: '"cv02","cv03","cv04","ss03"', color: 'var(--ink)', overflow: 'hidden'}}>
      <AbsoluteFill
        style={{
          backgroundImage: 'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
          backgroundSize: `${GRID}px ${GRID}px`,
          backgroundPosition: `${-camX * 0.35}px 0`,
          WebkitMaskImage: MASK,
          maskImage: MASK,
        }}
      />
      <div style={{position: 'absolute', left: 0, top: 0, width: PW, height: PH, transform: `translateX(${-camX}px)`}}>
        {SCENES.map((S, i) => {
          if (Math.abs(i * PW - camX) >= PW) return null;
          const start = i === 0 ? 0 : B[i - 1];
          const end = i < B.length ? B[i] : FILM_SECONDS;
          return (
            <div key={i} style={{position: 'absolute', left: i * PW, top: 0, width: PW, height: PH}}>
              {/* Slow 3.5% push across the whole dwell, so no beat sits dead. */}
              <div style={{position: 'absolute', inset: 0, transform: `scale(${1 + 0.035 * seg(t, start, end, lin)})`}}>
                <S t={t} />
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
    </DarkCtx.Provider>
  );
};
