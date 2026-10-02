/** Bridge to the site's own content, so reels are generated from the same words as the pages.
 *  The content files are plain JS, so they are imported untyped and narrowed here. */
// @ts-ignore untyped site content
import retailStores from '../../../content/businesses/retail-stores.js';
// @ts-ignore untyped site content
import restaurants from '../../../content/businesses/restaurants.js';
// @ts-ignore untyped site content
import {REGISTRY} from '../../../content/businesses/registry.js';

export type Panel = {
  title: string;
  meta: string;
  rowsLabel: string;
  metrics: {label: string; value: string; note: string}[];
  rows: {name: string; meta: string; active?: boolean}[];
};
export type Workflow = {name: string; steps: string[]; note: string};

export const RETAIL = {
  headline: retailStores.hero.headline as string,
  panel: retailStores.hero.panel as Panel,
  workflows: retailStores.workflows as Workflow[],
};

export const FOOD = {
  headline: restaurants.hero.headline as string,
  panel: restaurants.hero.panel as Panel,
  workflows: restaurants.workflows as Workflow[],
};

/** Business-type names for one industry, in registry order. */
export const typesFor = (industry: string): string[] =>
  (REGISTRY as {name: string; industry: string}[]).filter((b) => b.industry === industry).map((b) => b.name);
