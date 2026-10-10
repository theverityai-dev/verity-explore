/** Verity Meta performance ads: canvas, safe areas and the block clock. See video/ads/00-strategy/ad-formula.md. */
export const AW = 1080;
export const AH = 1920;
export const AFPS = 30;

/** Meta Reels/Stories cover the top 250 px and bottom 420 px. Keep hook, offer and CTA inside the band between. */
export const SAFE = {top: 250, bottom: 420, side: 80};

/** Cap line of every headline, and the baseline unit the layout hangs from. */
export const CAP = 380;

/** R01 block starts in seconds. The one place to retime once the voiceover is recorded. */
export const T = {
  hook: 0,
  fragment: 3,
  /** Not a block: the small "Business Blueprint™ · ₹5,000 value · Currently complimentary" signal enters here and stays. */
  chip: 6,
  rigid: 7,
  understand: 11,
  configure: 15,
  blueprint: 19,
  offer: 22,
  cta: 25,
  end: 27,
} as const;

export const R01_DURATION = T.end * AFPS;
