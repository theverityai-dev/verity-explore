import {
  esc, head, nav, footer, tail, section, sectionHead, cta,
  breadcrumb, breadcrumbLd, softwareLd, faqLd, SITE,
} from './render.js';
import { CAPABILITIES } from '../content/capabilities.js';
import { INDUSTRIES } from '../content/industries.js';
import { REGISTRY } from '../content/businesses/registry.js';

const HUB_CAPS = ['records', 'inventory', 'orders', 'work', 'relationships', 'workflows', 'intelligence', 'ai'];

export function renderHub(publishedSlugs) {
  const url = '/explore/';
  const trail = [{ name: 'Explore', href: '/explore/' }];
  const faqs = [
    [
      'What is Verity?',
      'Verity is a business operating system. It connects the people, records, workflows and decisions that keep an organisation moving into one operational layer, so the work, the information about it and the decisions that follow all live in the same system.',
    ],
    [
      'What is Verity Explore for?',
      'Explore describes what Verity looks like for a specific kind of business. The product is one system; the way a jewellery store, a restaurant and a manufacturer use it is not. Each page describes the same system in the terms that business already uses.',
    ],
    [
      'Does Verity replace the software we already run?',
      'No. Verity is introduced alongside what already works. Existing systems are mapped during implementation, the records that matter are migrated, and the operational layer takes over gradually rather than in a single cutover.',
    ],
    [
      'Is there an AI assistant?',
      'Yes. Verity AI answers from the operational context your organisation already owns rather than from generic model knowledge. It is permission-aware, so it only sees what the person asking can see, and it can turn an answer into tasks, assignments and follow-ups that stay part of the record.',
    ],
    [
      'How long does it take to implement?',
      'About four weeks: discovery and mapping of how the business actually runs, configuration, migration of existing records, then an ongoing operations partnership.',
    ],
  ];

  const parts = [];

  parts.push(`
<section class="section x-hub-hero" id="top" aria-labelledby="hero-heading">
  <div class="shell">
    <p class="label" data-reveal>Verity Explore</p>
    <h1 id="hero-heading" class="h-lg x-hub-h1" data-reveal data-words>Find out what Verity looks like for your business.</h1>
    <p class="lede x-hub-lede" data-reveal>Verity is one operating system for the whole business. What changes from one business to the next is the vocabulary, the workflows and the questions worth asking. Pick your business type and read the version that applies to you.</p>
    <div class="x-search" data-reveal>
      <label class="label" for="x-q">What type of business do you run?</label>
      <input type="search" id="x-q" class="x-search-input" placeholder="Try “jewellery”, “restaurant”, “clinic”, “distributor”" autocomplete="off">
      <p class="caption x-search-note" id="x-count">${REGISTRY.length} business types across ${Object.keys(INDUSTRIES).length} industries</p>
    </div>
  </div>
</section>`);

  parts.push(
    section({
      id: 'industries',
      tone: 'alt',
      tall: true,
      labelledBy: 'industries-heading',
      html:
        sectionHead({
          id: 'industries-heading',
          label: 'Explore by industry',
          heading: 'Nine categories, one system underneath.',
        }) +
        `<ul class="x-ind-grid" data-stagger>${Object.entries(INDUSTRIES)
          .map(
            ([s, i]) => `<li class="x-ind-card" data-reveal><a href="/industries/${s}/">
              <span class="x-ind-name">${esc(i.name)}</span>
              <span class="x-ind-line">${esc(i.headline)}</span>
              <span class="x-ind-count label">${REGISTRY.filter((b) => b.industry === s).length} business types</span>
            </a></li>`
          )
          .join('')}</ul>`,
    })
  );

  /* Every one of the 123 is in the DOM so search works without a data file and
     the page stays crawlable. Unpublished ones are plain text, not dead links. */
  parts.push(
    section({
      id: 'businesses',
      tall: true,
      labelledBy: 'businesses-heading',
      html:
        sectionHead({
          id: 'businesses-heading',
          label: 'Every business type',
          heading: 'All 123, grouped by industry.',
          lede: 'Pages marked as links are written. The rest are in progress — Verity already works for those businesses.',
        }) +
        Object.entries(INDUSTRIES)
          .map(([s, i]) => {
            const members = REGISTRY.filter((b) => b.industry === s);
            return `<div class="x-all-group" data-x-group="${esc(i.name)}">
              <p class="label x-all-head"><a href="/industries/${s}/">${esc(i.name)}</a></p>
              <ul class="x-all-list">${members
                .map((m) =>
                  publishedSlugs.has(m.slug)
                    ? `<li class="x-all-item" data-x-name="${esc(m.name.toLowerCase())}"><a href="/businesses/${m.slug}/">${esc(m.name)}</a></li>`
                    : `<li class="x-all-item x-all-item--soon" data-x-name="${esc(m.name.toLowerCase())}"><span>${esc(m.name)}</span></li>`
                )
                .join('')}</ul>
            </div>`;
          })
          .join(''),
    })
  );

  parts.push(
    section({
      id: 'capabilities',
      tone: 'alt',
      tall: true,
      labelledBy: 'capabilities-heading',
      html:
        sectionHead({
          id: 'capabilities-heading',
          label: 'Explore by capability',
          heading: 'What the system is made of.',
          lede: 'Every business page describes these same parts. Only the vocabulary changes.',
        }) +
        `<div class="x-mod-grid" data-stagger>${HUB_CAPS.map((id) => {
          const cap = CAPABILITIES[id];
          return `<article class="x-mod" data-reveal>
            <p class="label x-mod-kicker">${esc(cap.name)}</p>
            <h3 class="h-sm x-mod-title">${esc(cap.label)}</h3>
            <p class="x-mod-body">${esc(cap.summary)}</p>
            <p class="x-mod-why"><span class="label">What you can see</span> ${esc(cap.derive)}</p>
          </article>`;
        }).join('')}</div>`,
    })
  );

  parts.push(
    section({
      id: 'how',
      tall: true,
      labelledBy: 'how-heading',
      html: `
      <div class="x-split">
        <div class="x-split-a">
          <p class="label" data-reveal>How Verity works</p>
          <h2 id="how-heading" class="h-lg" data-reveal data-words>One record model, configured to your operation.</h2>
        </div>
        <div class="x-split-b">
          <p class="body-copy" data-reveal>Verity starts with the objects every business actually has: people, work, relationships, records, workflows, communication, intelligence and control. Each shares one identity model, one permission layer and one activity history, so nothing is bolted on afterwards.</p>
          <p class="body-copy" data-reveal>A jewellery store’s pieces, a restaurant’s ingredients and a manufacturer’s raw materials are the same kind of object with different names. That is why one system can run all three without becoming generic — the vocabulary, workflows and reporting are configured during implementation to match how the business already works.</p>
          <p class="body-copy" data-reveal>On top of that sits the live operational picture, the AI you can ask questions of, and the reporting that draws from the records themselves rather than from an export somebody assembled last week.</p>
          <p class="x-how-link" data-reveal><a href="${SITE.productOrigin}/#platform">See the platform in detail</a></p>
        </div>
      </div>`,
    })
  );

  parts.push(
    section({
      id: 'faq',
      tone: 'alt',
      tall: true,
      labelledBy: 'faq-heading',
      html:
        sectionHead({ id: 'faq-heading', label: 'Questions', heading: 'About Verity' }) +
        `<div class="x-faq" data-stagger>${faqs
          .map(
            ([q, a]) => `<details class="x-faq-item" data-reveal>
              <summary class="x-faq-q"><span>${esc(q)}</span></summary>
              <div class="x-faq-a"><p>${esc(a)}</p></div>
            </details>`
          )
          .join('')}</div>`,
    })
  );

  parts.push(
    cta({
      heading: 'Start with the part of the business that hurts most.',
      lede: 'Tell us how your operation runs today. We will show you what it looks like as one system.',
      subject: 'business',
      secondary: 'Explore',
    })
  );

  return (
    head({
      title: 'Verity Explore — AI business management software, by business type',
      description:
        'See what Verity looks like for your business. 123 business types across nine industries, each with the modules, workflows, AI questions and reporting that apply to it.',
      canonical: url,
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Verity Explore',
          url: `${SITE.origin}/explore/`,
          publisher: { '@type': 'Organization', name: 'Verity', url: SITE.productOrigin },
        },
        breadcrumbLd(trail),
        softwareLd({
          name: 'Verity',
          description:
            'A business operating system that connects people, work, records, workflows and decisions into one operational layer.',
          url,
        }),
        faqLd(faqs),
      ],
    }) +
    nav() +
    '\n<main id="main">' +
    parts.join('\n') +
    '\n</main>' +
    footer() +
    `
<script>
(function () {
  var q = document.getElementById('x-q');
  var count = document.getElementById('x-count');
  if (!q) return;
  var items = [].slice.call(document.querySelectorAll('.x-all-item'));
  var groups = [].slice.call(document.querySelectorAll('.x-all-group'));
  var base = count ? count.textContent : '';
  q.addEventListener('input', function () {
    var term = q.value.trim().toLowerCase();
    var shown = 0;
    items.forEach(function (li) {
      var hit = !term || li.getAttribute('data-x-name').indexOf(term) !== -1;
      li.hidden = !hit;
      if (hit) shown++;
    });
    groups.forEach(function (g) {
      g.hidden = !g.querySelector('.x-all-item:not([hidden])');
    });
    if (count) count.textContent = term ? shown + ' business types match “' + q.value.trim() + '”' : base;
  });
})();
</script>` +
    tail()
  );
}

export function renderIndustriesIndex(publishedSlugs) {
  const url = '/industries/';
  const trail = [
    { name: 'Explore', href: '/explore/' },
    { name: 'Industries', href: url },
  ];
  const parts = [];

  parts.push(`
<section class="section section--tall x-ind-hero" id="top" aria-labelledby="hero-heading">
  <div class="shell">
    <p class="label" data-reveal>Industries</p>
    <h1 id="hero-heading" class="h-lg x-ind-h1" data-reveal data-words>Nine industries. One operating system underneath.</h1>
    <p class="lede x-ind-lede" data-reveal>Verity’s record model does not change between a warehouse and a law firm. What changes is the vocabulary, the workflows and the questions leadership needs answered. Each industry page describes that difference.</p>
  </div>
</section>`);

  parts.push(
    section({
      id: 'list',
      tone: 'alt',
      tall: true,
      labelledBy: 'list-heading',
      html:
        sectionHead({ id: 'list-heading', label: 'All industries', heading: 'Pick the category that fits.' }) +
        `<ul class="x-ind-grid" data-stagger>${Object.entries(INDUSTRIES)
          .map(([s, i]) => {
            const members = REGISTRY.filter((b) => b.industry === s);
            const done = members.filter((m) => publishedSlugs.has(m.slug)).length;
            return `<li class="x-ind-card" data-reveal><a href="/industries/${s}/">
              <span class="x-ind-name">${esc(i.name)}</span>
              <span class="x-ind-line">${esc(i.headline)}</span>
              <span class="x-ind-count label">${members.length} business types${done ? ` · ${done} written` : ''}</span>
            </a></li>`;
          })
          .join('')}</ul>`,
    })
  );

  parts.push(
    cta({
      heading: 'Not sure which one you are?',
      lede: 'Most businesses sit across two of these. Tell us how yours runs and we will start from the operation rather than the category.',
      subject: 'business',
      secondary: 'Industries',
    })
  );

  return (
    head({
      title: 'Industries — AI business management software by sector | Verity',
      description:
        'Verity across nine industries: retail, hospitality, professional services, healthcare, education, real estate, manufacturing, local services and technology.',
      canonical: url,
      jsonLd: [breadcrumbLd(trail)],
    }) +
    nav() +
    breadcrumb(trail) +
    '\n<main id="main">' +
    parts.join('\n') +
    '\n</main>' +
    footer() +
    tail()
  );
}
