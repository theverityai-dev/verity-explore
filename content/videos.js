/* Which finished Verity films appear where.

   Files live in assets/video as <name>.mp4 plus <name>.jpg (the poster), encoded
   for the web from the masters in video/renders. A business page shows its own
   9:16 ad when one exists, otherwise the film for its industry. Industries with
   no entry show no video: a film is only added once it has been made and passed
   the art direction gate, not as a placeholder. */

export const INDUSTRY_FILMS = {
  'retail-commerce': {
    name: 'film-retail-commerce',
    title: 'Verity in retail and commerce',
    seconds: 35,
    line: 'Shelf counts, billing and stock, shown the way a store lives them.',
  },
  'food-hospitality': {
    name: 'film-food-hospitality',
    title: 'Verity in food and hospitality',
    seconds: 35,
    line: 'Kitchen, counter and stock moving together.',
  },
};

export const BUSINESS_ADS = {
  /* These four carry a voiceover (and music), so they keep their audio track. */
  restaurants: { name: 'ad-restaurants', title: 'Kitchen, staff and billing in sync', seconds: 52, audio: true },
  manufacturers: { name: 'ad-manufacturers', title: 'The factory floor, in one picture', seconds: 56, audio: true },
  wholesalers: { name: 'ad-wholesalers', title: 'Orders, stock and dues for a wholesaler', seconds: 56, audio: true },
  'facility-management': { name: 'ad-facility-management', title: 'Sites, staff and tickets for facility teams', seconds: 62, audio: true },
};
