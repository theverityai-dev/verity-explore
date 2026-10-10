import React, {useLayoutEffect, useMemo, useRef} from 'react';
import {ThreeCanvas} from '@remotion/three';
import {useThree} from '@react-three/fiber';
import * as THREE from 'three';
import {RoomEnvironment} from 'three/examples/jsm/environments/RoomEnvironment.js';
import {fontFamily} from '../kit';

/** R07 3D world. 3D owns the world (the pale studio, physical acrylic, light, shadow, camera); Remotion HTML layered on top
 *  owns the information (type, captions, UI). Architectural model-making glass, not a glossy hologram: low gloss,
 *  restrained reflections, a soft key from the upper right. Units are metres; planes stand on the floor at y = 0. */

type V3 = [number, number, number];
export type Figure = 'lattice' | 'chain' | 'branch' | 'loop' | 'etched' | 'trace';
/** `rise` 0..1 grows the plane up out of the floor (and sinks it back). `figs` gives each figure its build amount 0..1,
 *  so one plane can carry a figure that dissolves while the next one builds. `figure` is shorthand for one figure at 1. */
export type PlaneSpec = {x: number; z: number; w: number; h: number; ry: number; rise?: number; figure?: Figure; figs?: Partial<Record<Figure, number>>};
export type Cam = {pos: V3; look: V3; fov: number};

const clamp = (n: number) => Math.min(1, Math.max(0, n));
const EPS = 1e-4;

/** Lighting environment and tone mapping: built once per canvas. */
const Env: React.FC = () => {
  const {gl, scene} = useThree();
  useLayoutEffect(() => {
    gl.toneMapping = THREE.NeutralToneMapping;
    gl.toneMappingExposure = 0.96;
    const pmrem = new THREE.PMREMGenerator(gl);
    scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environmentIntensity = 0.55;
    return () => pmrem.dispose();
  }, [gl, scene]);
  return null;
};

/** Camera: updated every frame from plain numbers, so a moving camera never rebuilds the environment. */
const CamRig: React.FC<{cam: Cam}> = ({cam}) => {
  const {camera} = useThree();
  const [px, py, pz] = cam.pos;
  const [lx, ly, lz] = cam.look;
  useLayoutEffect(() => {
    const c = camera as THREE.PerspectiveCamera;
    c.fov = cam.fov;
    c.near = 0.1;
    c.far = 60;
    c.position.set(px, py, pz);
    c.lookAt(lx, ly, lz);
    c.updateProjectionMatrix();
  }, [camera, cam.fov, px, py, pz, lx, ly, lz]);
  return null;
};

const useMaterials = () =>
  useMemo(
    () => ({
      // Neutral architectural acrylic: clear enough to bend the light pool behind it, a little frost, no blue cast.
      glass: new THREE.MeshPhysicalMaterial({
        color: '#fcfdfd',
        transmission: 1,
        roughness: 0.14,
        thickness: 0.35,
        ior: 1.49,
        attenuationColor: new THREE.Color('#dfe5ec'),
        attenuationDistance: 1.4,
        specularIntensity: 1,
        clearcoat: 0.4,
        clearcoatRoughness: 0.15,
      }),
      block: new THREE.MeshStandardMaterial({color: '#ffffff', roughness: 0.5}),
      link: new THREE.MeshStandardMaterial({color: '#5b636e', roughness: 0.7}),
      accent: new THREE.MeshStandardMaterial({color: '#0a84ff', roughness: 0.45}),
      etch: new THREE.MeshStandardMaterial({color: '#aab3be', roughness: 0.9, transparent: true, opacity: 0.7}),
      wall: new THREE.MeshStandardMaterial({color: '#eceef2', roughness: 1}),
      floor: new THREE.MeshStandardMaterial({color: '#dfe2e7', roughness: 0.95}),
      unit: new THREE.BoxGeometry(1, 1, 1),
    }),
    [],
  );
type Mats = ReturnType<typeof useMaterials>;

/** Figure geometry in the plane's local space, as fractions of the plane width. */
const FIGS: Record<'chain' | 'branch' | 'loop', {nodes: [number, number][]; links: [number, number][]}> = {
  chain: {nodes: [[-0.33, 0], [-0.11, 0], [0.11, 0], [0.33, 0]], links: [[0, 1], [1, 2], [2, 3]]},
  branch: {nodes: [[-0.36, 0], [-0.14, 0], [0.08, 0.15], [0.08, -0.15], [0.3, 0]], links: [[0, 1], [1, 2], [1, 3], [2, 4], [3, 4]]},
  loop: {nodes: [[0, 0.2], [0.24, -0.16], [-0.24, -0.16]], links: [[0, 1], [1, 2], [2, 0]]},
};

/** Staggered build: element i of n reaches full size as k goes from i/n*0.5 to i/n*0.5 + 0.5. */
const stag = (k: number, i: number, n: number) => Math.max(EPS, clamp((k - (i / Math.max(1, n)) * 0.5) / 0.5));

/** One box: unit geometry scaled, so changing size never rebuilds geometry. */
const Box: React.FC<{m: THREE.Material; geo: THREE.BoxGeometry; p: V3; s: V3; rz?: number; shadow?: boolean}> = ({m, geo, p, s, rz = 0, shadow}) => (
  <mesh geometry={geo} material={m} position={p} scale={s} rotation={[0, 0, rz]} castShadow={shadow} />
);

const Glyph: React.FC<{figure: Figure; k: number; w: number; d: number; m: Mats}> = ({figure, k, w, d, m}) => {
  if (k <= 0) return null;
  const z = d / 2 + 0.014;
  if (figure === 'etched') {
    // An empty template etched into the glass: a system not yet defined. Hairlines draw to length k.
    const cols = 6;
    const rows = 8;
    const gw = w * 0.72;
    const gh = gw * (rows / cols);
    return (
      <>
        {Array.from({length: cols + 1}).map((_, i) => (
          <Box key={`v${i}`} m={m.etch} geo={m.unit} p={[-gw / 2 + (i * gw) / cols, 0, d / 2 + 0.001]} s={[0.004, Math.max(EPS, gh * stag(k, i, cols + 1)), 0.002]} />
        ))}
        {Array.from({length: rows + 1}).map((_, i) => (
          <Box key={`h${i}`} m={m.etch} geo={m.unit} p={[0, -gh / 2 + (i * gh) / rows, d / 2 + 0.001]} s={[Math.max(EPS, gw * stag(k, i, rows + 1)), 0.004, 0.002]} />
        ))}
      </>
    );
  }
  if (figure === 'lattice') {
    const cols = 6;
    const rows = 9;
    const cell = 0.1;
    const pitch = cell + 0.034;
    const n = cols * rows;
    return (
      <>
        {Array.from({length: n}).map((_, i) => {
          const s = stag(k, i, n);
          return <Box key={i} m={m.block} geo={m.unit} shadow p={[((i % cols) - (cols - 1) / 2) * pitch, (Math.floor(i / cols) - (rows - 1) / 2) * pitch, z]} s={[cell * s, cell * s, 0.022 * s]} />;
        })}
      </>
    );
  }
  // 'trace' is the business's own workflow after the study: the branch, with its path in Verity blue.
  const f = FIGS[figure === 'trace' ? 'branch' : figure];
  const linkMat = figure === 'trace' ? m.accent : m.link;
  const pts = f.nodes.map(([x, y]) => [x * w, y * w] as [number, number]);
  const nw = 0.2 * (w / 1.2);
  const nh = 0.12 * (w / 1.2);
  return (
    <>
      {f.links.map(([a, b], i) => {
        const [x1, y1] = pts[a];
        const [x2, y2] = pts[b];
        const len = Math.hypot(x2 - x1, y2 - y1) * stag(k, i, f.links.length);
        const ang = Math.atan2(y2 - y1, x2 - x1);
        // Links draw out from their first node.
        return <Box key={`l${i}`} m={linkMat} geo={m.unit} p={[x1 + (Math.cos(ang) * len) / 2, y1 + (Math.sin(ang) * len) / 2, z - 0.004]} s={[Math.max(EPS, len), figure === 'trace' ? 0.014 : 0.009, 0.008]} rz={ang} />;
      })}
      {pts.map(([x, y], i) => {
        const s = stag(k, i, pts.length);
        return <Box key={`n${i}`} m={m.block} geo={m.unit} shadow p={[x, y, z]} s={[nw * s, nh * s, 0.028 * s]} />;
      })}
    </>
  );
};

const Plane: React.FC<{p: PlaneSpec; m: Mats}> = ({p, m}) => {
  const rise = p.rise ?? 1;
  if (rise <= 0) return null;
  const d = 0.04;
  const figs = p.figs ?? (p.figure ? {[p.figure]: 1} : {});
  // Grows from the floor: the base stays on y = 0 while the plane scales up.
  return (
    <group position={[p.x, (p.h * rise) / 2, p.z]} rotation={[0, p.ry, 0]} scale={[1, Math.max(EPS, rise), 1]}>
      <mesh geometry={m.unit} material={m.glass} scale={[p.w, p.h, d]} castShadow receiveShadow />
      {(Object.keys(figs) as Figure[]).map((f) => (
        <Glyph key={f} figure={f} k={figs[f] ?? 0} w={p.w} d={d} m={m} />
      ))}
    </group>
  );
};

/** A soft pool of light on the back wall, upper right: the glass bends it, so the glass reads as glass. */
const WallPool: React.FC = () => {
  const ref = useRef<THREE.SpotLight>(null);
  useLayoutEffect(() => {
    if (!ref.current) return;
    ref.current.target.position.set(0.6, 2.2, -2.4);
    ref.current.target.updateMatrixWorld();
  }, []);
  return <spotLight ref={ref} position={[2.6, 4.6, 2.2]} angle={0.55} penumbra={1} intensity={16} decay={1.6} color="#fff9f0" />;
};

const World: React.FC<{planes: PlaneSpec[]; cam: Cam}> = ({planes, cam}) => {
  const m = useMaterials();
  return (
    <>
      <Env />
      <CamRig cam={cam} />
      <hemisphereLight args={['#ffffff', '#cfd5dc', 0.45]} />
      <WallPool />
      {/* Key from the upper right and slightly behind: long soft shadows fall toward the camera and to the left,
          and the plane edges catch the light. */}
      <directionalLight
        position={[4.5, 6, -1.2]}
        intensity={1.6}
        castShadow
        shadow-mapSize={[4096, 4096]}
        shadow-camera-left={-6}
        shadow-camera-right={6}
        shadow-camera-top={6}
        shadow-camera-bottom={-6}
        shadow-radius={14}
        shadow-blurSamples={24}
        shadow-bias={-0.0005}
      />
      <mesh rotation={[-Math.PI / 2, 0, 0]} material={m.floor} receiveShadow>
        <planeGeometry args={[40, 40]} />
      </mesh>
      <mesh position={[0, 6, -2.4]} material={m.wall} receiveShadow>
        <planeGeometry args={[40, 12]} />
      </mesh>
      {planes.map((p, i) => (
        <Plane key={i} p={p} m={m} />
      ))}
    </>
  );
};

/** `push` scales the rendered world about the frame centre: the film-long dolly-in, shared with the object layers above. */
export const Studio3D: React.FC<{planes: PlaneSpec[]; cam: Cam; blur?: number; push?: number; children?: React.ReactNode}> = ({planes, cam, blur, push = 1, children}) => (
  <div style={{position: 'absolute', inset: 0, overflow: 'hidden', fontFamily, fontFeatureSettings: '"cv02","cv03","cv04","ss03"', color: 'var(--ink)', background: '#eef1f5'}}>
    <div style={{position: 'absolute', inset: 0, filter: blur && blur > 0.05 ? `blur(${blur}px)` : undefined, transform: push !== 1 ? `scale(${push})` : undefined}}>
      <ThreeCanvas width={1080} height={1920} shadows="variance" gl={{antialias: true}}>
        <World planes={planes} cam={cam} />
      </ThreeCanvas>
    </div>
    {children}
  </div>
);
