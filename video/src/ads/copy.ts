import {T} from './tokens';

/** One ad's words and timings. A hook variant swaps this object; no scene changes. */
export type HeadlineCopy = {t0: number; t1: number; size: number; ink: string; accent?: string};
export type CaptionCopy = {t0: number; t1: number; text: string; hi?: string};
export type AdCopy = {
  id: string;
  headlines: HeadlineCopy[];
  /** Roman-script Hinglish matching the voiceover. Replace with word timings from the recording (vo/words.json). */
  captions: CaptionCopy[];
  chip: string;
  offer: {label: string; value: string; valueNote: string; line: [string, string]; limited: string; scope: string};
  cta: string;
};

/** R01 H1. Wording per video/ads/00-strategy/offer-and-claims.md: D1 value/complimentary, D2 no deliverable promise, D3 limited time only. */
export const R01_H1: AdCopy = {
  id: 'R01-H1',
  headlines: [
    {t0: T.hook, t1: T.fragment, size: 80, ink: 'Stop changing\nyour business', accent: 'to fit your software.'},
    {t0: T.fragment, t1: T.rigid, size: 72, ink: 'Every business has\nits own way of working.'},
    {t0: T.rigid, t1: T.understand, size: 72, ink: 'Most software gives you\none fixed system.'},
    {t0: T.understand, t1: T.configure, size: 72, ink: 'Verity starts by', accent: 'understanding yours.'},
    {t0: T.configure, t1: T.blueprint, size: 72, ink: 'We map how your', accent: 'business actually works.'},
    {t0: T.blueprint, t1: T.offer, size: 72, ink: 'Then it configures the', accent: 'system around it.'},
  ],
  captions: [
    {t0: T.hook, t1: T.fragment, text: 'Aapka business software ke hisaab se kyun chale?', hi: 'software'},
    {t0: T.fragment, t1: T.rigid, text: 'Har business ka apna way of working hota hai.', hi: 'working'},
    {t0: T.rigid, t1: T.understand, text: 'Lekin most business software ek fixed system deta hai.', hi: 'fixed'},
    {t0: T.understand, t1: T.configure, text: 'Verity pehle aapka business samajhta hai.', hi: 'Verity'},
    {t0: T.configure, t1: T.blueprint, text: 'Workflows, teams, approvals aur actual requirements.', hi: 'requirements'},
    {t0: T.blueprint, t1: T.offer, text: 'Phir uske around system configure hota hai.', hi: 'configure'},
    {t0: T.offer, t1: T.cta, text: 'Isi process se banta hai aapka Business Blueprint.', hi: 'Blueprint'},
    // 25-27 s: no caption. The CTA pill carries "Get your free Business Blueprint" and sits where captions would.
  ],
  chip: 'Business Blueprint™ · ₹5,000 value · Currently complimentary',
  offer: {
    label: 'Verity Business Blueprint™',
    value: '₹5,000',
    valueNote: 'value',
    line: ['Currently', 'complimentary'],
    limited: 'Limited-time offer',
    scope: 'Structured business analysis →\nproposed system blueprint',
  },
  cta: 'Get Your Free Business Blueprint',
};
