/** The business workflow: the one object that persists across the film. World units are canvas px at camera scale 1.
 *  Spine (5 nodes + roles + a document) is the "scene 02" workflow. Extras grow in during beat 3 (years of evolution)
 *  and some are removed again in beat 7 (what can improve). Born/die times are absolute film seconds. */
export type Kind = 'circle' | 'block' | 'diamond' | 'ring' | 'wide' | 'role' | 'rec' | 'rule' | 'gate';
export type Cat = 'step' | 'role' | 'decision' | 'rule';
export type GNode = {id: string; kind: Kind; cat: Cat; x: number; y: number; w: number; h: number; label?: string; born: number; die?: number};
export type GEdge = {id: string; a: string; b: string; mode: 'flow' | 'link' | 'loop'; born: number; die?: number};

const n = (id: string, kind: Kind, cat: Cat, x: number, y: number, w: number, h: number, born: number, label?: string, die?: number): GNode => ({
  id, kind, cat, x, y, w, h, born, label, die,
});
const e = (id: string, a: string, b: string, mode: GEdge['mode'], born: number, die?: number): GEdge => ({id, a, b, mode, born, die});

export const NODES: GNode[] = [
  // Spine, formed from the desk objects in beat 2.
  n('req', 'circle', 'step', -480, 60, 124, 124, 6.75, 'REQUEST'),
  n('rev', 'block', 'step', -240, -110, 120, 120, 7.0, 'REVIEW'),
  n('dec', 'diamond', 'decision', 0, 40, 84, 84, 7.25, 'DECISION'),
  n('app', 'ring', 'step', 250, -100, 124, 124, 7.5, 'APPROVAL'),
  n('exe', 'wide', 'step', 490, 60, 190, 96, 7.75, 'EXECUTION'),
  n('r1', 'role', 'role', -240, -300, 62, 62, 8.7),
  n('r2', 'role', 'role', 250, -290, 62, 62, 8.9),
  n('r3', 'role', 'role', 490, 250, 62, 62, 9.1),
  n('doc', 'rec', 'step', -480, 265, 76, 60, 9.3),
  // Years of evolution (beat 3).
  n('m1', 'rec', 'step', -640, -150, 76, 48, 14.4),
  n('m2', 'rec', 'step', -640, -60, 76, 48, 14.9, undefined, 50.9),
  n('x1', 'diamond', 'decision', 130, 270, 64, 64, 15.8),
  n('x2', 'block', 'step', 350, 320, 112, 60, 16.9, undefined, 51.2),
  n('r4', 'role', 'role', -90, 310, 56, 56, 17.6),
  n('x4', 'ring', 'step', 5, -290, 84, 84, 18.4, undefined, 51.9),
  n('bn', 'gate', 'decision', 125, -30, 40, 44, 20.3),
  n('ru1', 'rule', 'rule', -360, -25, 44, 44, 21.3),
  n('ru2', 'rule', 'rule', -120, -35, 44, 44, 21.7),
  n('ru3', 'rule', 'rule', 65, 155, 44, 44, 22.1),
];

export const EDGES: GEdge[] = [
  e('e1', 'req', 'rev', 'flow', 7.5),
  e('e2', 'rev', 'dec', 'flow', 7.75),
  e('e3', 'dec', 'app', 'flow', 8.0),
  e('e4', 'app', 'exe', 'flow', 8.25),
  e('l1', 'r1', 'rev', 'link', 8.9),
  e('l2', 'r2', 'app', 'link', 9.1),
  e('l3', 'r3', 'exe', 'link', 9.3),
  e('l4', 'doc', 'req', 'link', 9.5),
  e('ex1', 'm1', 'req', 'flow', 14.7),
  e('ex2', 'm2', 'req', 'flow', 15.2, 50.9),
  e('ex3', 'dec', 'x1', 'flow', 16.0),
  e('ex4', 'x1', 'x2', 'flow', 17.1, 50.9),
  e('ex5', 'x2', 'exe', 'flow', 17.6, 50.9),
  e('l5', 'r4', 'x1', 'link', 17.9),
  e('ex6', 'rev', 'x4', 'flow', 18.6, 51.7),
  e('ex7', 'x4', 'app', 'flow', 18.9, 51.7),
  e('lp', 'app', 'rev', 'loop', 21.0),
  e('xe', 'x1', 'exe', 'flow', 50.9),
];

/** The scene-02 workflow alone (used for the callback in beats 13 to 15). */
export const SPINE_IDS = ['req', 'rev', 'dec', 'app', 'exe', 'r1', 'r2', 'r3', 'doc'];
export const SPINE_EDGES = ['e1', 'e2', 'e3', 'e4', 'l1', 'l2', 'l3', 'l4'];

/** Two other businesses (beat 2, scene 3): different shape, depth and branching. No labels. */
export const WF_B: {nodes: GNode[]; edges: GEdge[]} = {
  nodes: [
    n('B1', 'circle', 'step', -560, -360, 88, 88, 10.7),
    n('B2', 'block', 'step', -340, -430, 92, 92, 10.85),
    n('B3', 'block', 'step', -340, -290, 92, 92, 11.0),
    n('B4', 'diamond', 'decision', -100, -360, 66, 66, 11.15),
    n('B5', 'ring', 'step', 140, -360, 90, 90, 11.3),
    n('B6', 'wide', 'step', 400, -360, 150, 72, 11.45),
    n('Br1', 'role', 'role', -340, -560, 46, 46, 11.6),
    n('Br2', 'role', 'role', 140, -540, 46, 46, 11.7),
    n('Br3', 'role', 'role', 400, -210, 46, 46, 11.8),
  ],
  edges: [
    e('B-e1', 'B1', 'B2', 'flow', 10.9),
    e('B-e2', 'B1', 'B3', 'flow', 11.0),
    e('B-e3', 'B2', 'B4', 'flow', 11.2),
    e('B-e4', 'B3', 'B4', 'flow', 11.3),
    e('B-e5', 'B4', 'B5', 'flow', 11.45),
    e('B-e6', 'B5', 'B6', 'flow', 11.6),
    e('B-l1', 'Br1', 'B2', 'link', 11.75),
    e('B-l2', 'Br2', 'B5', 'link', 11.85),
    e('B-l3', 'Br3', 'B6', 'link', 11.95),
  ],
};
export const WF_C: {nodes: GNode[]; edges: GEdge[]} = {
  nodes: [
    n('C1', 'circle', 'step', -520, 380, 88, 88, 11.0),
    n('C2', 'diamond', 'decision', -240, 380, 66, 66, 11.15),
    n('C3', 'ring', 'step', 60, 380, 90, 90, 11.3),
    n('C4', 'wide', 'step', 360, 380, 150, 72, 11.45),
    n('C5', 'block', 'step', -240, 580, 92, 92, 11.55),
    n('C6', 'rec', 'step', 60, 580, 76, 56, 11.65),
    n('Cr1', 'role', 'role', 60, 220, 46, 46, 11.8),
  ],
  edges: [
    e('C-e1', 'C1', 'C2', 'flow', 11.1),
    e('C-e2', 'C2', 'C3', 'flow', 11.25),
    e('C-e3', 'C3', 'C4', 'flow', 11.4),
    e('C-e4', 'C2', 'C5', 'flow', 11.55),
    e('C-e5', 'C5', 'C6', 'flow', 11.7),
    e('C-lp', 'C6', 'C3', 'loop', 11.85),
    e('C-l1', 'Cr1', 'C3', 'link', 11.9),
  ],
};
