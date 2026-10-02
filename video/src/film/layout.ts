/** Verity film layout and material system (16:9, 1920x1080). Every film places things on this grid, so margins, the text
 *  column and the UI region never move between scenes or between industries. */

/** Safe area. Nothing but full-bleed backgrounds crosses these margins. */
export const SAFE = {l: 120, r: 120, t: 96, b: 96};

/** Left text column. Statements are bottom-anchored here, left-aligned, never centred. */
export const TEXT = {x: SAFE.l, w: 620, bottom: SAFE.b};

/** Product UI region (right two thirds). The UI panel always occupies exactly this box; its bottom edge is the text baseline. */
export const UI = {x: 840, y: SAFE.t, w: 960, h: 1080 - SAFE.t - SAFE.b};

/** Type scale: one main statement, one supporting line, then data/UI text. */
export const TYPE = {statement: 72, support: 30, label: 15};

/** Dark world. Mirrors the site's dark theme tokens (css/verity.css) because the UI itself stays on the light theme. */
export const DK = {
  base: '#080b11',
  baseAlt: '#0e131c',
  ink: '#f4f7fb',
  muted: '#8e9aae',
  hair: 'rgba(244,247,251,0.14)',
};

/** Paper props (not brand UI). */
export const CREAM = '#ece5d6';
export const PAPER_INK = '#1b1814';

/** Light glass for Verity UI surfaces: translucent white, soft blur, thin rim, specular top edge, soft contact shadow. */
export const GLASS_LIGHT: React.CSSProperties = {
  background: 'rgba(250,251,253,0.93)',
  backdropFilter: 'blur(30px) saturate(170%)',
  WebkitBackdropFilter: 'blur(30px) saturate(170%)',
  border: '1px solid rgba(255,255,255,0.55)',
  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.95), 0 2px 6px rgba(0,0,0,0.22), 0 44px 110px rgba(0,0,0,0.5)',
};

/** Inner card on the glass panel. */
export const CARD_LIGHT: React.CSSProperties = {
  background: 'rgba(255,255,255,0.92)',
  border: '1px solid rgba(15,17,21,0.07)',
  boxShadow: '0 1px 2px rgba(15,17,21,0.05)',
};
