import React from 'react';
import {CTAPill, Lockup, OfferChip} from '../kit';
import {Mark} from '../../trailer/ui';
import {Acrylic, Branch, CastShadow, Caption, Chain, Lattice, Loop, Plate, Sheet, Studio, Support, Tick, Title, Workspace} from './world';
import {type Cam, Studio3D} from './studio3d';

/** R07 keyframe stills: the payload frame of every shot in TREATMENT.md, unanimated. These are scored on the
 *  art-direction gate before any motion is written. Coordinates are 1080 x 1920 canvas px. */

/** Campaign variables. The offer window is a campaign claim, not creative: change it here when the campaign changes,
 *  and retire R07 when the offer ends (offer-and-claims.md). */
export const CAMPAIGN = {name: 'Verity Business Blueprint™', value: '₹5,000 value', until: 'Free until Diwali'};
export const CHIP = `Business Blueprint™ · ${CAMPAIGN.value} · ${CAMPAIGN.until}`;

/** The offer object: the same drafting sheet as shot 3, now the Blueprint itself. `s` scales it as one object. */
const OfferSheet: React.FC<{x: number; y: number; s?: number; blur?: number; bare?: boolean}> = ({x, y, s = 1, blur, bare}) => (
  <div style={{position: 'absolute', left: x, top: y, width: 860, height: 800, transform: `scale(${s})`, transformOrigin: '0 0', filter: blur ? `blur(${blur}px)` : undefined}}>
    {/* `bare` drops the title block when the sheet is shown small enough that its micro text would fall under 16 px. */}
    <Sheet x={0} y={0} w={860} h={800} title={bare ? undefined : ['Business analysis · Sheet 01', 'Prepared by Verity product team']}>
      <div style={{position: 'absolute', left: 72, top: 92, right: 72}}>
        <div style={{fontSize: 26, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-muted)'}}>Verity Business Blueprint™</div>
        <div style={{display: 'flex', alignItems: 'baseline', gap: 20, marginTop: 34}}>
          <span style={{fontSize: 168, fontWeight: 300, letterSpacing: '-0.05em', lineHeight: 1}}>₹5,000</span>
          <span style={{fontSize: 56, fontWeight: 300, letterSpacing: '-0.03em', color: 'var(--ink-muted)'}}>value</span>
        </div>
        <div style={{marginTop: 30, fontSize: 80, fontWeight: 300, letterSpacing: '-0.038em', lineHeight: 1.04, color: 'var(--accent)'}}>{CAMPAIGN.until}.</div>
        <div style={{marginTop: 40, height: 1, width: 420, background: 'rgba(15,17,21,0.14)'}} />
        <div style={{marginTop: 22, fontSize: 28, lineHeight: 1.35, color: 'var(--ink-muted)'}}>
          Structured business analysis →<br />
          proposed system blueprint
        </div>
      </div>
    </Sheet>
  </div>
);

const S1: React.FC = () => (
  <Studio>
    <Lockup />
    <Title lines={['Looking for', 'an ERP?']} size={104} />
    {/* Monumental and cropped at the trailing edge: one object, the system not yet defined. */}
    <Acrylic x={440} y={540} w={720} h={840} ry={-20} />
    <Caption text="Aapke business ke liye ERP dhoond rahe hain?" />
  </Studio>
);

const S2a: React.FC = () => (
  <Studio shaft={-20}>
    <Lockup />
    <Title lines={['Most ERPs run on', 'one fixed system.']} size={84} />
    <Acrylic x={250} y={560} w={720} h={820} ry={-8}>
      <div style={{position: 'absolute', inset: 0, display: 'grid', placeItems: 'center'}}>
        <Lattice cols={6} rows={9} size={60} />
      </div>
    </Acrylic>
    <Caption text="Most ERP ek fixed system pe chalte hain," />
  </Studio>
);

const S2b: React.FC = () => (
  <Studio shaft={-40}>
    <Lockup />
    <Title lines={['Every business', 'works differently.']} size={84} />
    {/* Three businesses, three depths: bases step down toward the camera, the far plane softens. */}
    <Acrylic x={650} y={690} w={360} h={500} ry={-14} blur={2} opacity={0.85}>
      <div style={{position: 'absolute', inset: 0, display: 'grid', placeItems: 'center'}}>
        <div style={{transform: 'scale(0.9)'}}>
          <Loop />
        </div>
      </div>
    </Acrylic>
    <Acrylic x={360} y={700} w={420} h={560} ry={-12}>
      <div style={{position: 'absolute', inset: 0, display: 'grid', placeItems: 'center'}}>
        <div style={{transform: 'scale(0.78)'}}>
          <Branch />
        </div>
      </div>
    </Acrylic>
    <Acrylic x={60} y={860} w={380} h={480} ry={-8}>
      <div style={{position: 'absolute', inset: 0, display: 'grid', placeItems: 'center'}}>
        <Chain w={290} />
      </div>
    </Acrylic>
    <Caption text="but har business ka workflow different hota hai." />
  </Studio>
);

/** A product manager's study, drawn: the traced path, three annotations on the nodes they describe, one dimension line. */
export const Note: React.FC<{x: number; y: number; text: string; lx: number; ly: number}> = ({x, y, text, lx, ly}) => (
  <>
    <svg width={860} height={720} style={{position: 'absolute', left: 0, top: 0, overflow: 'visible'}}>
      <path d={`M${x} ${y} L${lx} ${ly}`} stroke="rgba(15,17,21,0.45)" strokeWidth={1.2} fill="none" />
      <circle cx={x} cy={y} r={3.5} fill="rgba(15,17,21,0.6)" />
    </svg>
    <div style={{position: 'absolute', left: lx + 8, top: ly - 12, fontSize: 19, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink)', whiteSpace: 'nowrap'}}>{text}</div>
  </>
);

const S3: React.FC = () => (
  <Studio shaft={-60}>
    <Lockup />
    <OfferChip text={CHIP} p={1} />
    <Title lines={['Product managers', 'from IIMs and IITs']} size={80} />
    <Support text="study your business first." top={552} />
    <Acrylic x={420} y={660} w={600} h={620} ry={-12} blur={7} opacity={0.75}>
      <div style={{position: 'absolute', inset: 0, display: 'grid', placeItems: 'center'}}>
        <Branch />
      </div>
    </Acrylic>
    <Sheet x={110} y={680} w={860} h={700} rx={4} title={['Business study · Sheet 01', 'Prepared by Verity product team']}>
      <div style={{position: 'absolute', left: 96, top: 120, transform: 'scale(1.18)', transformOrigin: '0 0'}}>
        <Branch trace />
      </div>
      <Note x={450} y={168} text="Approval owner" lx={560} ly={120} />
      <Note x={450} y={368} text="Exception path" lx={560} ly={430} />
      <Note x={297} y={268} text="Handoff" lx={190} ly={430} />
      {/* Dimension line under the traced path: the whole process, measured end to end. */}
      <svg width={860} height={700} style={{position: 'absolute', left: 0, top: 0}}>
        <path d="M138 500 H630 M138 488 V512 M630 488 V512" stroke="rgba(15,17,21,0.5)" strokeWidth={1.2} fill="none" />
      </svg>
      <div style={{position: 'absolute', left: 138, width: 492, top: 514, textAlign: 'center', fontSize: 19, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-muted)'}}>Order to dispatch</div>
    </Sheet>
    <Caption text="product managers pehle aapke business ko" />
  </Studio>
);

const LAYERS = ['Workflows', 'Teams', 'Approvals', 'Reporting', 'Requirements'];
const LAYER_Y = [640, 760, 880, 1000, 1120];
const S4a: React.FC = () => (
  <Studio shaft={-80}>
    <Lockup />
    <OfferChip text={CHIP} p={1} />
    <CastShadow x={420} y={1296} w={480} len={170} o={0.1} />
    {[...LAYER_Y].reverse().map((cy) => (
      <Plate key={cy} cx={660} cy={cy} size={480} />
    ))}
    {/* The one path that threads every layer. */}
    <svg width={1080} height={1920} style={{position: 'absolute', inset: 0}}>
      <path d={`M660 ${LAYER_Y[0]} V${LAYER_Y[4]}`} stroke="var(--accent)" strokeWidth={3} strokeLinecap="round" />
      {LAYER_Y.map((y) => (
        <circle key={y} cx={660} cy={y} r={8} fill="#fff" stroke="var(--accent)" strokeWidth={3} />
      ))}
      {LAYER_Y.map((y) => (
        <path key={y} d={`M300 ${y - 16} H318`} stroke="rgba(15,17,21,0.4)" strokeWidth={1.2} />
      ))}
    </svg>
    {LAYERS.map((l, i) => (
      <div key={l} style={{position: 'absolute', left: 80, top: LAYER_Y[i] - 29, width: 212, fontSize: 22, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink)'}}>{l}</div>
    ))}
    <Caption text="Workflows, teams, approvals, reporting" />
  </Studio>
);

const S4b: React.FC = () => (
  <Studio shaft={-100}>
    <Lockup />
    <OfferChip text={CHIP} p={1} />
    <Title lines={['Built module by module,', 'from scratch.']} size={80} />
    {/* The UI is the environment: large, cropped at the trailing edge, turning toward the camera. */}
    <Workspace x={60} y={600} w={1120} h={780} ry={-8} built={3} />
    <Caption text="from scratch build karte hain." />
  </Studio>
);

const S5: React.FC = () => (
  <Studio shaft={-120}>
    <Lockup />
    <OfferChip text={CHIP} p={1} />
    <Workspace x={360} y={1000} w={900} h={700} ry={-10} built={5} blur={9} opacity={0.42} />
    <Title lines={['Requirement.', 'Proposed system.', 'Your approval.', 'Then implementation.']} size={84} cap={520} lh={120 / 84} dim={[0.26, 0.26, 0.26, 1]} />
    <div style={{position: 'absolute', left: 650, top: 752}}>
      <Tick size={56} />
    </div>
    <Caption text="Aapki approval ke baad implementation." />
  </Studio>
);

const S6: React.FC = () => (
  <Studio shaft={-140}>
    <Lockup />
    <OfferSheet x={110} y={500} />
    <Caption text="Business Analysis Blueprint, Diwali tak free." />
  </Studio>
);

const S7: React.FC = () => (
  <Studio shaft={-160}>
    <Lockup />
    <OfferSheet x={(1080 - 860 * 0.78) / 2} y={420} s={0.78} />
    <Title lines={['Upgrade. Replace. Implement.']} size={64} cap={1160} />
    <Support text="Tap Learn More. We'll call you." top={1236} size={38} />
    <Caption text="Learn More par click kijiye," />
  </Studio>
);

const S8: React.FC = () => (
  <Studio shaft={-180}>
    <div style={{position: 'absolute', left: 0, right: 0, top: 640, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 22}}>
      <Mark height={64} color="var(--ink)" />
      <div style={{fontSize: 76, fontWeight: 500, letterSpacing: '-0.04em', lineHeight: 1}}>verity</div>
    </div>
    <Title lines={['Tell us about', 'your business.']} size={80} cap={860} align="center" />
    <CTAPill text="Get your Business Blueprint" p={1} y={1150} />
    <Support text={`${CAMPAIGN.value} · ${CAMPAIGN.until}`} top={1300} size={30} align="center" />
  </Studio>
);

/* 3D object shots (option B): the studio and the acrylic are real geometry with physical glass; type stays HTML. */

/** 85 mm feel: narrow field of view, camera at standing eye height, looking slightly down at the floor line. */
const CAM: Cam = {pos: [0, 1.25, 8.5], look: [0, 0.79, 0], fov: 24};

const S1g: React.FC = () => (
  <Studio3D cam={CAM} planes={[{x: 0.5, z: 0, w: 1.35, h: 1.42, ry: -0.34, figure: 'etched'}]}>
    <Lockup />
    <Title lines={['Looking for', 'an ERP?']} size={104} />
    <Caption text="Aapke business ke liye ERP dhoond rahe hain?" />
  </Studio3D>
);

const S2ag: React.FC = () => (
  <Studio3D cam={CAM} planes={[{x: 0.12, z: 0, w: 1.3, h: 1.48, ry: -0.16, figure: 'lattice'}]}>
    <Lockup />
    <Title lines={['Most ERPs run on', 'one fixed system.']} size={84} />
    <Caption text="Most ERP ek fixed system pe chalte hain," />
  </Studio3D>
);

const S2bg: React.FC = () => (
  <Studio3D
    cam={CAM}
    planes={[
      {x: 0.72, z: -2.1, w: 0.72, h: 1.05, ry: -0.38, figure: 'loop'},
      {x: 0.1, z: -0.9, w: 0.78, h: 1.1, ry: -0.24, figure: 'branch'},
      {x: -0.5, z: 0.05, w: 0.66, h: 0.86, ry: -0.1, figure: 'chain'},
    ]}
  >
    <Lockup />
    <Title lines={['Every business', 'works differently.']} size={84} />
    <Caption text="but har business ka workflow different hota hai." />
  </Studio3D>
);

/** The blueprint the workspace stands on: drafting grid on the studio floor with the module footprints traced on it. */
export const FloorPlan: React.FC = () => (
  <div
    style={{
      position: 'absolute',
      left: -260,
      top: 1250,
      width: 1600,
      height: 760,
      transform: 'perspective(1400px) rotateX(74deg)',
      transformOrigin: '50% 0',
      backgroundImage: 'linear-gradient(rgba(70,90,120,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(70,90,120,0.16) 1px, transparent 1px), linear-gradient(rgba(70,90,120,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(70,90,120,0.07) 1px, transparent 1px)',
      backgroundSize: '160px 160px, 160px 160px, 32px 32px, 32px 32px',
      WebkitMaskImage: 'radial-gradient(ellipse 60% 70% at 50% 20%, #000 40%, transparent 100%)',
      maskImage: 'radial-gradient(ellipse 60% 70% at 50% 20%, #000 40%, transparent 100%)',
    }}
  >
    <svg width={1600} height={760} style={{position: 'absolute', inset: 0}}>
      {[[320, 60, 300, 220], [660, 60, 300, 220], [320, 320, 300, 220], [660, 320, 300, 220], [1000, 60, 260, 480]].map(([x, y, w, h], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} rx={14} fill="none" stroke="rgba(15,17,21,0.32)" strokeWidth={2} strokeDasharray={i < 3 ? undefined : '10 8'} />
      ))}
    </svg>
  </div>
);

/** S4b hybrid: the workspace is built standing on its own blueprint, in the studio, with the layers' glass behind it. */
const S4bg: React.FC = () => (
  <Studio3D
    cam={CAM}
    planes={[
      {x: -1.0, z: -1.7, w: 0.72, h: 1.55, ry: 0.32, figure: 'etched'},
      {x: 1.02, z: -2.0, w: 0.72, h: 1.65, ry: -0.4, figure: 'etched'},
    ]}
  >
    <Lockup />
    <OfferChip text={CHIP} p={1} />
    <Title lines={['Built module by module,', 'from scratch.']} size={80} />
    <FloorPlan />
    <Workspace x={60} y={590} w={1120} h={760} ry={-8} built={3} />
    <Caption text="from scratch build karte hain." />
  </Studio3D>
);

/** S5 hybrid: the process typography in front, the business's traced system standing in soft focus behind it. */
const S5g: React.FC = () => (
  <Studio3D cam={CAM} blur={6} planes={[{x: 0.72, z: -0.9, w: 1.2, h: 1.0, ry: -0.3, figure: 'trace'}]}>
    <Lockup />
    <OfferChip text={CHIP} p={1} />
    <Title lines={['Requirement.', 'Proposed system.', 'Your approval.', 'Then implementation.']} size={84} cap={520} lh={120 / 84} dim={[0.26, 0.26, 0.26, 1]} />
    <div style={{position: 'absolute', left: 650, top: 752}}>
      <Tick size={56} />
    </div>
    <Caption text="Aapki approval ke baad implementation." />
  </Studio3D>
);

/** S7 hybrid: the Blueprint stands in front of the system it describes. */
const S7g: React.FC = () => (
  <Studio3D cam={CAM} planes={[{x: 0.7, z: -1.4, w: 0.85, h: 1.45, ry: -0.28, figure: 'trace'}]}>
    <Lockup />
    <OfferSheet x={80} y={480} s={0.66} bare />
    <Title lines={['Upgrade. Replace. Implement.']} size={64} cap={1160} />
    <Support text="Tap Learn More. We'll call you." top={1236} size={38} />
    <Caption text="Learn More par click kijiye," />
  </Studio3D>
);

/** The film's object, small and final: a drafting sheet carrying the business's traced workflow. No text on it. */
export const BlueprintObject: React.FC<{x: number; y: number; draw?: number}> = ({x, y, draw}) => (
  <Sheet x={x} y={y} w={420} h={300} rx={10}>
    <div style={{position: 'absolute', left: 50, top: 46, transform: 'scale(0.7)', transformOrigin: '0 0'}}>
      <Branch trace draw={draw} />
    </div>
  </Sheet>
);

/** End card: the Blueprint rests in the studio between two glass planes. The story resolves into the offer. */
const S8g: React.FC = () => (
  <Studio3D
    cam={{pos: [0, 1.2, 8.5], look: [0, 0.95, 0], fov: 24}}
    planes={[
      {x: -0.86, z: -0.6, w: 0.7, h: 2.3, ry: 0.42, figure: 'etched'},
      {x: 0.86, z: -0.6, w: 0.7, h: 2.3, ry: -0.42, figure: 'etched'},
    ]}
  >
    <div style={{position: 'absolute', left: 0, right: 0, top: 470, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 20}}>
      <Mark height={56} color="var(--ink)" />
      <div style={{fontSize: 66, fontWeight: 500, letterSpacing: '-0.04em', lineHeight: 1}}>verity</div>
    </div>
    <Title lines={['Tell us about', 'your business.']} size={80} cap={650} align="center" />
    <CTAPill text="Get your Business Blueprint" p={1} y={860} />
    <Support text={`${CAMPAIGN.value} · ${CAMPAIGN.until}`} top={1000} size={30} align="center" />
    <BlueprintObject x={330} y={1100} />
  </Studio3D>
);

/** The CSS versions of S1, S2a, S2b and S8 scored 6-7 on material; kept for comparison, not used. */
export const R07_CSS_BOARDS = {S1, S2a, S2b, S4b, S5, S7, S8};

export const R07_BOARDS: {name: string; C: React.FC}[] = [
  {name: 'S1-hook', C: S1g},
  {name: 'S2a-fixed', C: S2ag},
  {name: 'S2b-different', C: S2bg},
  {name: 'S3-study', C: S3},
  {name: 'S4a-map', C: S4a},
  {name: 'S4b-modules', C: S4bg},
  {name: 'S5-process', C: S5g},
  {name: 'S6-offer', C: S6},
  {name: 'S7-qualify', C: S7g},
  {name: 'S8-endcard', C: S8g},
];
