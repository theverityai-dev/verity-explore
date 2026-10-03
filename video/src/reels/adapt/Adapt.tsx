import React from 'react';
import {AbsoluteFill, Audio, Sequence, staticFile, useCurrentFrame} from 'remotion';
import {seg, track} from '../../shared/timeline';
import {Cam, DURATION, FPS, DayGrade, L, Mark, Obj3, PaperBase, fontFamily, glide, lerp, smooth} from './base';
import {Headline, Rule, Subline} from '../../brand/kit';
import {DAY} from '../../brand/language';
import {ARTEFACTS, Erp, idle} from './props';
import {BlankBody, BuildBody, MapBody, PH, PW, ProposalBody, VPanel} from './panel';

export {DURATION, FPS};

export type Aspect = '8:9' | '9:16' | '16:9';

type Ghost = {i: number; x: number; y: number; z: number; rz: number; ry: number};
type Layout = {
  w: number;
  h: number;
  /** the surface group: designed on a 900x1020 panel, scaled by PS and centred at (GROUP_CX, GROUP_CY) */
  PS: number;
  GROUP_CX: number;
  GROUP_CY: number;
  /** opening cluster: positions are scaled (xs, ys), shifted (yoff) and sized (k) per canvas */
  cluster: {k: number; xs: number; ys: number; yoff: number};
  /** the one pre-end-card line ("Pre-built software. / Pre-built workflow."): left, top, font px */
  text: {x: number; y: number; px: number};
  /** y of the lockup mark centre. Everything else on the end card is placed relative to it. */
  endY: number;
  ghosts: Ghost[];
};

/** All px values are for a 1080-unit short side. Panels keep the same design; only the fit changes. */
export const LAYOUTS: Record<Aspect, Layout> = {
  '8:9': {
    w: 1080,
    h: 1215,
    PS: 0.86,
    GROUP_CX: 540,
    GROUP_CY: 672,
    cluster: {k: 0.8, xs: 1, ys: 1, yoff: 0},
    text: {x: 153, y: 74, px: 69},
    endY: 397,
    ghosts: [
      {i: 0, x: -300, y: 560, z: -350, rz: -5, ry: -12}, // register, under the bottom edge
      {i: 1, x: 260, y: 610, z: -420, rz: 3, ry: 10}, // sheet
      {i: 2, x: -60, y: 680, z: -760, rz: -3, ry: -10}, // chat
      {i: 5, x: 700, y: 200, z: -620, rz: 5, ry: 18}, // bill, right edge
      {i: 6, x: -700, y: 160, z: -650, rz: -3, ry: -20}, // checklist, left edge
      {i: 3, x: 600, y: -420, z: -720, rz: 8, ry: 14}, // slip, top right
      {i: 4, x: -600, y: -420, z: -640, rz: -9, ry: -8}, // sticky, top left
    ],
  },
  '9:16': {
    w: 1080,
    h: 1920,
    PS: 1,
    GROUP_CX: 540,
    GROUP_CY: 1000,
    cluster: {k: 1, xs: 1.2, ys: 1.5, yoff: 40},
    text: {x: 90, y: 215, px: 88},
    endY: 748,
    ghosts: [
      {i: 0, x: -300, y: 730, z: -350, rz: -5, ry: -12},
      {i: 1, x: 270, y: 780, z: -420, rz: 3, ry: 10},
      {i: 2, x: -40, y: 890, z: -760, rz: -3, ry: -10},
      {i: 5, x: 500, y: 260, z: -620, rz: 5, ry: 18},
      {i: 6, x: -520, y: 190, z: -650, rz: -3, ry: -20},
      {i: 3, x: 450, y: -230, z: -720, rz: 8, ry: 14},
      {i: 4, x: -480, y: -230, z: -640, rz: -9, ry: -8},
    ],
  },
  '16:9': {
    w: 1920,
    h: 1080,
    PS: 0.9,
    GROUP_CX: 1250,
    GROUP_CY: 540,
    cluster: {k: 0.92, xs: 2.0, ys: 1.0, yoff: 0},
    text: {x: 130, y: 400, px: 80},
    endY: 328,
    ghosts: [
      {i: 0, x: -560, y: 150, z: -350, rz: -5, ry: -12},
      {i: 1, x: -330, y: 360, z: -420, rz: 3, ry: 10},
      {i: 2, x: -700, y: -240, z: -700, rz: -3, ry: -10},
      {i: 6, x: -840, y: 230, z: -650, rz: -3, ry: -20},
      {i: 4, x: -450, y: -330, z: -640, rz: -9, ry: -8},
      {i: 5, x: 1220, y: 150, z: -620, rz: 5, ry: 18},
      {i: 3, x: 1050, y: -330, z: -720, rz: 8, ry: 14},
    ],
  },
};

export const ADAPT_ASPECTS: Aspect[] = ['8:9', '9:16', '16:9'];

/* Design-space anchors of the surface group (900x1020 panel centred here). */
const PCX = 540;
const PCY = 1070;
const RIG_ORIGIN_Y = 700;

/* ---------------------------------------------------------------------------------------------------------------- */
export const Adapt: React.FC<{aspect: Aspect}> = ({aspect}) => {
  const frame = useCurrentFrame();
  const t = frame / FPS;
  const LAY = LAYOUTS[aspect];
  const {PS, GROUP_CX, GROUP_CY, ghosts: GHOSTS} = LAY;
  const W = LAY.w;
  const H = LAY.h;
  const TILE_RX = W / 2 - 105; // mark centre of the lockup (mark 76px + gap + wordmark, centred on the canvas)
  const TILE_RY = LAY.endY;
  const u = W / 100;

  /* ---- camera, expressed as one push on the surface (rig) and a matching dolly on the ghosts ---- */
  const rig = track(
    t,
    [
      [0, 1],
      [9.0, 1],
      [14.0, 1],
      [20.0, 1.06],
      [26.0, 1.045],
      [31.0, 1.0],
      [36.0, 1.04],
      [38.8, 1.09],
      [40.0, 1.0],
    ],
    smooth,
  );
  const ghostCam: Cam = {x: Math.sin(t * 0.18) * 30, y: Math.cos(t * 0.15) * 22, z: 1500 * (1 - 1 / rig)};

  /* ---- S1 camera through the artefacts ---- */
  const cam1: Cam = {x: track(t, [[0, -45], [5.2, 45]], smooth), y: track(t, [[0, 30], [5.2, -20]], smooth), z: track(t, [[0, -340], [5.4, 190]], smooth)};

  /* ---- scene clocks ---- */
  const ghostsOn = seg(t, 9.4, 10.8, glide) * (1 - seg(t, 39.2, 40.2));
  const ghostDim = 1 - 0.65 * seg(t, 26.0, 27.0) + 0.65 * seg(t, 30.6, 31.6);
  const erpIn = seg(t, 5.6, 6.5, glide);
  const erpOut = seg(t, 8.9, 10.4, (n) => n);

  /* ---- panel ---- */
  const panelIn = seg(t, 9.3, 10.5, glide);
  const s6 = 1 - 0.17 * seg(t, 25.8, 27.0, smooth) + 0.17 * seg(t, 30.4, 31.6, smooth);
  const panelOpacity = panelIn * (1 - 0.86 * seg(t, 25.8, 27.0, smooth) + 0.86 * seg(t, 30.4, 31.6, smooth));
  const panelScale = rig * lerp(0.94, 1, panelIn) * s6;
  const ry = lerp(-9, 0, seg(t, 9.3, 11.4, glide)) + track(t, [[35.8, 0], [37.0, -6], [39.6, 0]], smooth);
  const collapse = seg(t, 39.6, 41.0, smooth);
  const tileCx = PCX + (TILE_RX - GROUP_CX) / PS;
  const tileCy = PCY + (TILE_RY - GROUP_CY) / PS;
  const tileSize = 112 / PS;
  const pw = lerp(PW, tileSize, collapse);
  const ph = lerp(PH, tileSize, collapse);
  const pcx = lerp(PCX, tileCx, collapse);
  const pcy = lerp(PCY, tileCy, collapse);
  const bodyOpacity = (1 - seg(t, 39.6, 40.3)) * (1 - 0.88 * seg(t, 25.8, 27.0) + 0.88 * seg(t, 30.4, 31.6));
  const markP = seg(t, 40.3, 40.9, glide);
  const glassOut = seg(t, 41.0, 41.5, smooth);

  const state = t < 14.0 ? 'New' : t < 34.7 ? 'Draft' : 'Live';
  const liveP = seg(t, 34.7, 35.0);

  /* ---- body crossfades ---- */
  const blankOp = (1 - seg(t, 14.0, 14.7)) * seg(t, 9.0, 9.6);
  const mapOp = seg(t, 14.0, 14.7) * (1 - seg(t, 19.6, 20.3));
  const buildOp1 = seg(t, 20.0, 20.5) * (1 - seg(t, 30.8, 31.5));
  const propOp = seg(t, 30.8, 31.5) * (1 - seg(t, 36.0, 36.8));
  const buildOp2 = seg(t, 36.0, 36.8);

  /* ---- S7 proposal choreography ---- */
  const pu = t - 31.0;
  const cur = track(
    pu,
    [
      [1.7, 790],
      [2.4, 620],
      [2.8, 540],
      [3.2, 600],
      [3.7, 610],
    ],
    smooth,
  );
  const curY = track(
    pu,
    [
      [1.7, 140],
      [2.4, 300],
      [2.8, 500],
      [3.2, 610],
      [3.7, 794],
    ],
    smooth,
  );
  const hover = seg(t, 34.4, 34.6);
  const press = seg(t, 34.62, 34.7) * (1 - seg(t, 34.78, 34.92));
  const approve = seg(t, 34.72, 35.25, glide);
  const activate = Math.max(0, t - 35.15);

  /* ---- S6 foreground ---- */
  const stackIn = (i: number) => seg(t, 26.1 + i * 0.5, 26.8 + i * 0.5, glide);
  const stackOut = seg(t, 28.0, 28.9, smooth);
  const chainIn = (i: number) => seg(t, 28.7 + i * 0.7, 29.4 + i * 0.7, glide);
  const chainOut = seg(t, 30.5, 31.2, smooth);

  /* ---- S9 lockup ---- */
  const reveal = (a: number, b: number, rise: number, blur: number): React.CSSProperties => {
    const p = seg(t, a, b, glide);
    return {opacity: Math.min(1, p * 1.4), transform: `translateY(${(1 - p) * rise}px) scale(${lerp(0.97, 1, p)})`, filter: p < 0.98 ? `blur(${(1 - p) * blur}px)` : undefined};
  };

  return (
    <AbsoluteFill style={{fontFamily, fontFeatureSettings: '"cv02","cv03","cv04","ss03"', color: DAY.ink, overflow: 'hidden', background: DAY.paper}}>
      <PaperBase t={t} />

      {/* ghosts */}
      {ghostsOn > 0.003 ? (
        <AbsoluteFill>
          {GHOSTS.map((g, k) => {
            const a = ARTEFACTS[g.i];
            return (
              <Obj3
                key={a.key}
                x={g.x + Math.sin(t * 0.22 + k * 1.9) * 26}
                y={g.y + Math.cos(t * 0.19 + k * 2.1) * 20}
                z={g.z}
                rz={g.rz + Math.sin(t * 0.15 + k) * 1.2}
                ry={g.ry}
                w={a.w}
                h={a.h}
                cam={ghostCam}
                opacity={ghostsOn * ghostDim * 0.78}
                blur={9}
                k={LAY.cluster.k}
              >
                {a.node}
              </Obj3>
            );
          })}
        </AbsoluteFill>
      ) : null}

      {/* S1-S2: the business as it is */}
      {t < 7.2 ? (
        <AbsoluteFill>
          {ARTEFACTS.map((a, i) => {
            const id = idle(a, i, t);
            const appear = 0.25 + 0.75 * seg(t, 0, 0.9 + i * 0.12, glide);
            const e = seg(t, 5.0 + i * 0.05, 6.5 + i * 0.05, smooth);
            const x = lerp(a.x * LAY.cluster.xs + id.dx, GROUP_CX - W / 2, e);
            const y = lerp(a.y * LAY.cluster.ys + LAY.cluster.yoff + id.dy + (1 - appear) * 36, GROUP_CY - H / 2, e);
            const z = lerp(a.z, -120, e);
            return (
              <Obj3 key={a.key} x={x} y={y} z={z} rx={lerp(a.rx, 0, e)} ry={lerp(a.ry, 0, e)} rz={lerp(a.rz + id.drz, 0, e)} w={a.w} h={a.h} cam={cam1} opacity={appear * (1 - seg(e, 0.7, 1))} focus={90} dof={0.017} k={LAY.cluster.k}>
                {a.node}
              </Obj3>
            );
          })}
        </AbsoluteFill>
      ) : null}

      {/* Surface group: ERP, panel, pricing cards, corner marks. Designed at 900x1020 and fitted to the 8:9 frame. */}
      <div style={{position: 'absolute', inset: 0, transformOrigin: `${PCX}px ${PCY}px`, transform: `translate(${GROUP_CX - PCX}px, ${GROUP_CY - PCY}px) scale(${PS})`}}>
      {/* S2: the generic ERP */}
      {erpIn > 0.003 && erpOut < 0.999 ? (
        <div style={{position: 'absolute', left: PCX - PW / 2, top: PCY - PH / 2, width: PW, height: PH, opacity: erpIn, transform: `scale(${lerp(0.965, 1, erpIn)})`}}>
          <Erp t={t} at={6.0} drain={erpOut} />
        </div>
      ) : null}

      {/* The Verity surface, under the camera rig */}
      <div style={{position: 'absolute', inset: 0, transformOrigin: `${PCX}px ${RIG_ORIGIN_Y}px`, transform: `scale(${panelScale})`}}>
        <VPanel cx={pcx} cy={pcy} w={pw} h={ph} radius={lerp(30, 34, collapse)} ry={ry} opacity={panelOpacity} state={state} liveP={liveP} t={t} sweep={seg(t, 37.0, 39.4, smooth)} markH={76 / PS} glassOut={glassOut} chromeOpacity={1 - seg(t, 39.6, 40.1)} bodyOpacity={bodyOpacity} markP={markP}>
          {blankOp > 0.003 ? (
            <div style={{position: 'absolute', inset: 0, opacity: blankOp}}>
              <BlankBody u={t - 9.0} />
            </div>
          ) : null}
          {mapOp > 0.003 ? (
            <div style={{position: 'absolute', inset: 0, opacity: mapOp}}>
              <MapBody u={t - 14.0} />
            </div>
          ) : null}
          {buildOp1 > 0.003 ? (
            <div style={{position: 'absolute', inset: 0, opacity: buildOp1}}>
              <BuildBody u={t - 20.0} t={t} />
            </div>
          ) : null}
          {propOp > 0.003 ? (
            <div style={{position: 'absolute', inset: 0, opacity: propOp}}>
              <ProposalBody u={pu} approve={approve} activate={activate} press={press} hover={hover} cx={cur} cy={curY} />
            </div>
          ) : null}
          {buildOp2 > 0.003 ? (
            <div style={{position: 'absolute', inset: 0, opacity: buildOp2}}>
              <BuildBody u={60} live={1} t={t} />
            </div>
          ) : null}
        </VPanel>
      </div>

      {/* S6 foreground: what you usually pay for, then what you actually get */}
      {t > 25.8 && t < 31.3 ? (
        <AbsoluteFill>
          {[
            ['Software fee', ''],
            ['+', 'Implementation'],
            ['+', "Features you don't need"],
          ].map(([plus, label], i) => {
            const p = stackIn(i);
            const o = stackOut;
            return (
              <div
                key={label || plus}
                style={{
                  position: 'absolute',
                  left: 90,
                  top: 790 + i * 142,
                  width: 900,
                  height: 118,
                  borderRadius: 22,
                  background: 'rgba(213,219,230,0.94)',
                  border: '1px solid rgba(143,155,179,0.8)',
                  boxShadow: '0 30px 70px rgba(60,90,130,0.20), 0 2px 6px rgba(60,90,130,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 24,
                  padding: '0 40px',
                  color: '#2b3850',
                  fontSize: 38,
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                  opacity: p * (1 - o),
                  transform: `translateY(${(1 - p) * 26 + o * 34}px) scale(${lerp(0.97, 1, p)})`,
                  filter: o > 0.01 ? `blur(${o * 8}px)` : undefined,
                }}
              >
                {label ? <span style={{color: '#6b7a93', fontSize: 34, width: 22}}>{plus}</span> : null}
                <span>{label || plus}</span>
              </div>
            );
          })}
          {[
            ['Your business analysis', 0],
            ['Your requirements', 1],
            ['Your Verity', 2],
          ].map(([label, i]) => {
            const idx = i as number;
            const p = chainIn(idx);
            const o = chainOut;
            const last = idx === 2;
            return (
              <React.Fragment key={label as string}>
                {idx > 0 ? (
                  <div style={{position: 'absolute', left: 540 - 1, top: 790 + (idx - 1) * 176 + 118, width: 2, height: 58 * seg(t, 28.7 + idx * 0.7 - 0.25, 28.7 + idx * 0.7 + 0.2, smooth), background: 'rgba(15,17,21,0.28)', opacity: 1 - o}}>
                    <div style={{position: 'absolute', bottom: -2, left: -6, width: 12, height: 12, borderRight: '2px solid rgba(15,17,21,0.4)', borderBottom: '2px solid rgba(15,17,21,0.4)', transform: 'rotate(45deg) translate(-2px,-2px)', opacity: seg(t, 28.7 + idx * 0.7, 28.7 + idx * 0.7 + 0.3)}} />
                  </div>
                ) : null}
                <div
                  style={{
                    position: 'absolute',
                    left: 90,
                    top: 790 + idx * 176,
                    width: 900,
                    height: 118,
                    borderRadius: 22,
                    background: last ? 'rgba(250,251,253,0.94)' : 'rgba(250,251,253,0.84)',
                    backdropFilter: 'blur(26px) saturate(170%)',
                    WebkitBackdropFilter: 'blur(26px) saturate(170%)',
                    border: `1px solid ${last ? L.a40 : 'rgba(15,17,21,0.08)'}`,
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.95), 0 30px 70px rgba(60,90,130,0.20), 0 2px 6px rgba(60,90,130,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 26,
                    padding: '0 40px',
                    color: L.ink,
                    fontSize: 40,
                    fontWeight: 300,
                    letterSpacing: '-0.03em',
                    opacity: p * (1 - o),
                    transform: `translateY(${(1 - p) * 28}px) scale(${lerp(0.97, 1, p)})`,
                  }}
                >
                  <span style={{fontSize: 18, fontWeight: 500, letterSpacing: '0.16em', color: last ? L.accentText : L.muted, fontVariantNumeric: 'tabular-nums'}}>0{idx + 1}</span>
                  <span style={{flex: 1}}>{label as string}</span>
                  {last ? <Mark height={40} /> : null}
                </div>
              </React.Fragment>
            );
          })}
        </AbsoluteFill>
      ) : null}

      {/* S8: registration marks, the tailor's tick marks around the finished surface */}
      {t > 37.4 && t < 39.8 ? <RegMarks t={t} rig={rig} /> : null}
      </div>

      {/* ------------------------------ type ------------------------------ */}
      {/* The only on-screen copy before the end card is the script's own: "Pre-built software. Pre-built workflow."
          Both ink: blue is reserved for Verity's payoff. Left edge = the surface's left edge (x 153), top band above the ERP. */}
      <div style={{position: 'absolute', left: LAY.text.x, top: LAY.text.y}}>
        <Headline t={t} at={5.4} out={8.7} role="headlineSquare" sizeU={LAY.text.px / u} lines={[{text: 'Pre-built software.'}, {text: 'Pre-built workflow.'}]} />
      </div>

      {/* End card, centred: the mark (the collapsed panel) + wordmark, the two-tone tagline, rule, subline, URL.
          Mark centre (TILE_RX, TILE_RY) is where the panel collapses to; wordmark = 0.95 x mark height, gap = 0.4 x mark width. */}
      {t > 40.8 ? (
        <AbsoluteFill>
          <div style={{position: 'absolute', left: W / 2 - 50.4, top: TILE_RY - 38, fontFamily: 'Inter', fontSize: 72, fontWeight: 200, letterSpacing: '-0.03em', lineHeight: 1, color: DAY.ink, ...reveal(41.3, 42.1, 8, 8)}}>verity</div>
          <div style={{position: 'absolute', left: 0, right: 0, top: TILE_RY + 108}}>
            <Headline t={t} at={41.7} role="headline" sizeU={90.7 / u} align="center" lines={[{text: 'Run your business'}, {text: 'in your way.', blue: true}]} />
          </div>
          <div style={{position: 'absolute', left: 0, right: 0, top: TILE_RY + 347}}>
            <Rule t={t} at={42.6} widthU={32 / u} />
          </div>
          <div style={{position: 'absolute', left: 0, right: 0, top: TILE_RY + 385}}>
            <Subline t={t} at={42.8} sizeU={22.7 / u} parts={[{text: 'Enterprise operations, built around how you work.'}]} />
          </div>
          <div style={{position: 'absolute', left: 0, right: 0, top: TILE_RY + 455, textAlign: 'center', fontFamily: 'Inter', fontSize: 20, fontWeight: 400, letterSpacing: '0.12em', color: DAY.inkMuted, ...reveal(43.3, 43.9, 6, 2)}}>verity.plotarmour.in</div>
        </AbsoluteFill>
      ) : null}

      <DayGrade t={t} />

      {/* ------------------------------ sound ------------------------------ */}
      <Audio src={staticFile('brag/music.mp3')} volume={(f) => 0.32 * Math.min(1, f / FPS) * Math.min(1, (DURATION - f) / (FPS * 2))} />
      {SFX.map((s, i) => (
        <Sequence key={i} from={Math.round(s.at * FPS)}>
          <Audio src={staticFile(`film/${s.file}`)} volume={s.vol} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

const SFX = [
  {file: 'whoosh.wav', at: 5.1, vol: 0.28},
  {file: 'impactGlass_light_001.ogg', at: 9.2, vol: 0.4},
  {file: 'card-slide-1.ogg', at: 14.5, vol: 0.3},
  {file: 'select_008.ogg', at: 17.3, vol: 0.3},
  {file: 'card-slide-2.ogg', at: 20.4, vol: 0.3},
  {file: 'card-slide-3.ogg', at: 28.8, vol: 0.28},
  {file: 'click_003.ogg', at: 34.62, vol: 0.5},
  {file: 'impactGlass_medium_000.ogg', at: 34.8, vol: 0.4},
  {file: 'subhit.wav', at: 40.3, vol: 0.2},
  {file: 'outro-tone.wav', at: 41.2, vol: 0.5},
];

/** Four corner ticks at 16px off the panel, drawn in over 0.9s. They follow the camera rig so they stay glued to the surface. */
const RegMarks: React.FC<{t: number; rig: number}> = ({t, rig}) => {
  const p = seg(t, 37.4, 38.4, smooth) * (1 - seg(t, 39.0, 39.6));
  const s = rig * 1;
  const x0 = PCX - PW / 2 - 18;
  const x1 = PCX + PW / 2 + 18;
  const y0 = PCY - PH / 2 - 18;
  const y1 = PCY + PH / 2 + 18;
  const len = 34 * p;
  const line: React.CSSProperties = {position: 'absolute', background: 'rgba(15,17,21,0.35)'};
  return (
    <div style={{position: 'absolute', inset: 0, transformOrigin: `${PCX}px ${RIG_ORIGIN_Y}px`, transform: `scale(${s})`, opacity: p}}>
      {[
        [x0, y0, 1, 1],
        [x1, y0, -1, 1],
        [x0, y1, 1, -1],
        [x1, y1, -1, -1],
      ].map(([x, y, sx, sy], i) => (
        <React.Fragment key={i}>
          <div style={{...line, left: sx > 0 ? x : x - len, top: y, width: len, height: 1}} />
          <div style={{...line, left: x, top: sy > 0 ? y : y - len, width: 1, height: len}} />
        </React.Fragment>
      ))}
    </div>
  );
};

