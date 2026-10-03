import React from 'react';
import {AbsoluteFill, Audio, Sequence, staticFile, useCurrentFrame} from 'remotion';
import {seg, track} from '../../shared/timeline';
import {Cam, D, DURATION, FPS, Grade, H, L, Line, Mark, Obj3, TEXT_TOP, TEXT_X, W, WorldBase, fontFamily, glide, lerp, smooth} from './base';
import {ARTEFACTS, Erp, idle} from './props';
import {BlankBody, BuildBody, MapBody, PH, PW, ProposalBody, VPanel} from './panel';

export {DURATION, FPS};
export const ADAPT_W = W;
export const ADAPT_H = H;

/* Panel anchor (screen px). Text lives above it, the product surface below: one asymmetric column, one focal object. */
const PCX = W / 2;
const PCY = 1070; // panel centre in the surface group's own (design) coordinates
const RIG_ORIGIN_Y = 700;
/** The surface group is designed on a 900x1020 panel. In the 8:9 frame it is scaled by PS and centred at GROUP_CY,
 *  which leaves a 233px band at the top for the one piece of on-screen copy (and the end card re-centres everything). */
const PS = 0.86;
const GROUP_CY = 672;
/** Where the panel collapses to: the logo tile of the end card, in real frame coordinates. */
const TILE_RX = 398;
const TILE_RY = 430;

/* ---------------------------------------------------------------------------------------------------------------- */
/* Ghosts: the old world, far behind the glass. They are why the glass reads as glass.                                */
const GHOSTS: {i: number; x: number; y: number; z: number; rz: number; ry: number}[] = [
  {i: 0, x: -300, y: 560, z: -350, rz: -5, ry: -12}, // register, under the bottom edge
  {i: 1, x: 260, y: 610, z: -420, rz: 3, ry: 10}, // sheet
  {i: 2, x: -60, y: 680, z: -760, rz: -3, ry: -10}, // chat
  {i: 5, x: 700, y: 200, z: -620, rz: 5, ry: 18}, // bill, right edge
  {i: 6, x: -700, y: 160, z: -650, rz: -3, ry: -20}, // checklist, left edge
  {i: 3, x: 600, y: -420, z: -720, rz: 8, ry: 14}, // slip, top right
  {i: 4, x: -600, y: -420, z: -640, rz: -9, ry: -8}, // sticky, top left
];

/* ---------------------------------------------------------------------------------------------------------------- */
export const Adapt: React.FC = () => {
  const frame = useCurrentFrame();
  const t = frame / FPS;

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
      [40.0, 1.09],
      [41.9, 1.0],
    ],
    smooth,
  );
  const ghostCam: Cam = {x: Math.sin(t * 0.18) * 30, y: Math.cos(t * 0.15) * 22, z: 1500 * (1 - 1 / rig)};

  /* ---- S1 camera through the artefacts ---- */
  const cam1: Cam = {x: track(t, [[0, -45], [5.2, 45]], smooth), y: track(t, [[0, 30], [5.2, -20]], smooth), z: track(t, [[0, -340], [5.4, 190]], smooth)};

  /* ---- scene clocks ---- */
  const light = seg(t, 41.4, 42.4, smooth);
  const bloomR = lerp(-440, 1950, seg(t, 41.0, 42.5, smooth));
  const ghostsOn = seg(t, 9.4, 10.8, glide) * (1 - seg(t, 40.6, 41.6));
  const ghostDim = 1 - 0.65 * seg(t, 26.0, 27.0) + 0.65 * seg(t, 30.6, 31.6);
  const erpIn = seg(t, 5.6, 6.5, glide);
  const erpOut = seg(t, 8.9, 10.4, (n) => n);

  /* ---- panel ---- */
  const panelIn = seg(t, 9.3, 10.5, glide);
  const s6 = 1 - 0.17 * seg(t, 25.8, 27.0, smooth) + 0.17 * seg(t, 30.4, 31.6, smooth);
  const panelOpacity = panelIn * (1 - 0.86 * seg(t, 25.8, 27.0, smooth) + 0.86 * seg(t, 30.4, 31.6, smooth));
  const panelScale = rig * lerp(0.94, 1, panelIn) * s6;
  const ry = lerp(-9, 0, seg(t, 9.3, 11.4, glide)) + track(t, [[35.8, 0], [37.0, -6], [39.6, 0]], smooth);
  const collapse = seg(t, 41.0, 42.5, smooth);
  const tileCx = PCX + (TILE_RX - W / 2) / PS;
  const tileCy = PCY + (TILE_RY - GROUP_CY) / PS;
  const tileSize = 112 / PS;
  const pw = lerp(PW, tileSize, collapse);
  const ph = lerp(PH, tileSize, collapse);
  const pcx = lerp(PCX, tileCx, collapse);
  const pcy = lerp(PCY, tileCy, collapse);
  const bodyOpacity = (1 - seg(t, 41.0, 41.7)) * (1 - 0.88 * seg(t, 25.8, 27.0) + 0.88 * seg(t, 30.4, 31.6));
  const markP = seg(t, 42.0, 42.7, glide);

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
  const lock = lerp(0.975, 1, seg(t, 42.0, 45, smooth));
  const reveal = (a: number, b: number, rise: number, blur: number): React.CSSProperties => {
    const p = seg(t, a, b, glide);
    return {opacity: Math.min(1, p * 1.4), transform: `translateY(${(1 - p) * rise}px) scale(${lerp(0.97, 1, p)})`, filter: p < 0.98 ? `blur(${(1 - p) * blur}px)` : undefined};
  };

  return (
    <AbsoluteFill style={{fontFamily, fontFeatureSettings: '"cv02","cv03","cv04","ss03"', color: D.ink, overflow: 'hidden', background: D.base}}>
      <WorldBase cam={ghostCam} />

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
                opacity={ghostsOn * ghostDim * 0.62}
                blur={9}
                k={0.8}
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
            const x = lerp(a.x + id.dx, 0, e);
            const y = lerp(a.y + id.dy + (1 - appear) * 36, GROUP_CY - H / 2, e);
            const z = lerp(a.z, -120, e);
            return (
              <Obj3 key={a.key} x={x} y={y} z={z} rx={lerp(a.rx, 0, e)} ry={lerp(a.ry, 0, e)} rz={lerp(a.rz + id.drz, 0, e)} w={a.w} h={a.h} cam={cam1} opacity={appear * (1 - seg(e, 0.7, 1))} focus={90} dof={0.017} k={0.8}>
                {a.node}
              </Obj3>
            );
          })}
        </AbsoluteFill>
      ) : null}

      {/* S9 light field */}
      {t > 40.9 ? (
        <AbsoluteFill
          style={{
            background: `radial-gradient(ellipse 60% 52% at 50% 44%, ${L.baseAlt}, ${L.base} 82%)`,
            WebkitMaskImage: `radial-gradient(circle at 540px ${TILE_RY}px, #000 ${Math.max(0, bloomR)}px, transparent ${Math.max(1, bloomR + 440)}px)`,
            maskImage: `radial-gradient(circle at 540px ${TILE_RY}px, #000 ${Math.max(0, bloomR)}px, transparent ${Math.max(1, bloomR + 440)}px)`,
          }}
        />
      ) : null}

      {/* Surface group: ERP, panel, pricing cards, corner marks. Designed at 900x1020 and fitted to the 8:9 frame. */}
      <div style={{position: 'absolute', inset: 0, transformOrigin: `${PCX}px ${PCY}px`, transform: `translate(0px, ${GROUP_CY - PCY}px) scale(${PS})`}}>
      {/* S2: the generic ERP */}
      {erpIn > 0.003 && erpOut < 0.999 ? (
        <div style={{position: 'absolute', left: PCX - PW / 2, top: PCY - PH / 2, width: PW, height: PH, opacity: erpIn, transform: `scale(${lerp(0.965, 1, erpIn)})`}}>
          <Erp t={t} at={6.0} drain={erpOut} />
        </div>
      ) : null}

      {/* The Verity surface, under the camera rig */}
      <div style={{position: 'absolute', inset: 0, transformOrigin: `${PCX}px ${RIG_ORIGIN_Y}px`, transform: `scale(${panelScale})`}}>
        <VPanel cx={pcx} cy={pcy} w={pw} h={ph} radius={lerp(30, 34, collapse)} ry={ry} opacity={panelOpacity} state={state} liveP={liveP} t={t} sweep={seg(t, 37.0, 39.4, smooth)} shadow={1 - light * 0.92} chromeOpacity={1 - seg(t, 41.0, 41.5)} bodyOpacity={bodyOpacity} markP={markP}>
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
                  boxShadow: '0 30px 70px rgba(0,0,0,0.45)',
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
                  <div style={{position: 'absolute', left: 540 - 1, top: 790 + (idx - 1) * 176 + 118, width: 2, height: 58 * seg(t, 28.7 + idx * 0.7 - 0.25, 28.7 + idx * 0.7 + 0.2, smooth), background: 'rgba(244,247,251,0.45)', opacity: 1 - o}}>
                    <div style={{position: 'absolute', bottom: -2, left: -6, width: 12, height: 12, borderRight: '2px solid rgba(244,247,251,0.6)', borderBottom: '2px solid rgba(244,247,251,0.6)', transform: 'rotate(45deg) translate(-2px,-2px)', opacity: seg(t, 28.7 + idx * 0.7, 28.7 + idx * 0.7 + 0.3)}} />
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
                    border: `1px solid ${last ? L.a40 : 'rgba(255,255,255,0.55)'}`,
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.95), 0 30px 70px rgba(0,0,0,0.45)',
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
      {t > 37.4 && t < 41.2 ? <RegMarks t={t} rig={rig} /> : null}
      </div>

      {/* ------------------------------ type ------------------------------ */}
      {/* The only on-screen copy before the end card is the script's own: "Pre-built software. Pre-built workflow."
          Left edge = the surface's left edge (x 153), top band above the ERP. */}
      <div style={{position: 'absolute', left: TEXT_X + 9, top: TEXT_TOP, width: 800}}>
        <Line t={t} at={5.4} out={8.7}>Pre-built software.</Line>
        <Line t={t} at={6.0} out={8.7} color={D.muted}>Pre-built workflow.</Line>
      </div>

      {/* S9 brand lockup, centred: a single-object frame */}
      {t > 42.0 ? (
        <AbsoluteFill style={{transform: `scale(${lock})`, transformOrigin: '540px 607px', color: L.ink}}>
          <div style={{position: 'absolute', left: 488, top: TILE_RY - 50, fontSize: 100, fontWeight: 600, letterSpacing: '-0.045em', lineHeight: 1, ...reveal(42.35, 43.1, 8, 8)}}>verity</div>
          <div style={{position: 'absolute', left: 0, right: 0, top: 530, textAlign: 'center', fontSize: 76, fontWeight: 300, letterSpacing: '-0.035em', lineHeight: 1.08, ...reveal(42.9, 43.8, 14, 5)}}>
            Run your business
            <br />
            <span style={{color: L.muted}}>in your way.</span>
          </div>
          <div style={{position: 'absolute', left: 0, right: 0, top: 720, textAlign: 'center', fontSize: 30, fontWeight: 300, letterSpacing: '-0.01em', color: L.muted, ...reveal(43.5, 44.2, 10, 3)}}>Enterprise operations, built around how you work.</div>
          <div style={{position: 'absolute', left: 0, right: 0, top: 800, textAlign: 'center', fontSize: 26, fontWeight: 400, letterSpacing: '0.04em', color: L.faint, ...reveal(43.9, 44.5, 6, 2)}}>verity.plotarmour.in</div>
        </AbsoluteFill>
      ) : null}

      <Grade t={t} light={light} />

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
  {file: 'subhit.wav', at: 41.4, vol: 0.2},
  {file: 'outro-tone.wav', at: 42.3, vol: 0.5},
];

/** Four corner ticks at 16px off the panel, drawn in over 0.9s. They follow the camera rig so they stay glued to the surface. */
const RegMarks: React.FC<{t: number; rig: number}> = ({t, rig}) => {
  const p = seg(t, 37.4, 38.4, smooth) * (1 - seg(t, 40.4, 41.1));
  const s = rig * 1;
  const x0 = PCX - PW / 2 - 18;
  const x1 = PCX + PW / 2 + 18;
  const y0 = PCY - PH / 2 - 18;
  const y1 = PCY + PH / 2 + 18;
  const len = 34 * p;
  const line: React.CSSProperties = {position: 'absolute', background: 'rgba(244,247,251,0.55)'};
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

