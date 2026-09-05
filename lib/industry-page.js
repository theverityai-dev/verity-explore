import {
  esc, head, nav, footer, tail, section, sectionHead, cta,
  breadcrumb, breadcrumbLd, softwareLd, faqLd,
} from './render.js';
import { CAPABILITIES } from '../content/capabilities.js';
import { INDUSTRIES } from '../content/industries.js';
import { REGISTRY } from '../content/businesses/registry.js';

export function renderIndustryPage(slug, publishedSlugs) {
  const ind = INDUSTRIES[slug];
  const url = `/industries/${slug}/`;
  const trail = [
    { name: 'Explore', href: '/' },
    { name: 'Industries', href: '/industries/' },
    { name: ind.name, href: url },
  ];
  const members = REGISTRY.filter((b) => b.industry === slug);
  const faqs = [
    [
      `What does Verity do for ${ind.lower} businesses?`,
      `${ind.lede} Every business in this category works from the same record model — people, work, relationships, records, workflows and control — configured to the way that business actually operates.`,
    ],
    [
      `Which ${ind.lower} business types does Verity support?`,
      `Verity Explore covers ${members.length} business types in this category, including ${members.slice(0, 5).map((m) => m.name.toLowerCase()).join(', ')}. Each has its own page describing the modules, workflows and reporting that apply to it.`,
    ],
    [
      'Does Verity replace the systems we already use?',
      'No. Verity is introduced as an operational layer over what already runs. Existing systems are mapped during implementation, the records that matter are migrated, and the rest continues to work.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping, configuration, migration, then an ongoing operations partnership rather than a handover.',
    ],
  ];

  const body = [];

  body.push(`
<section class="section section--tall x-ind-hero" id="top" aria-labelledby="hero-heading">
  <div class="shell">
    <p class="label" data-reveal>Verity for ${esc(ind.name)}</p>
    <h1 id="hero-heading" class="h-lg x-ind-h1" data-reveal data-words>${esc(ind.headline)}</h1>
    <p class="lede x-ind-lede" data-reveal>${esc(ind.lede)}</p>
    <div class="x-hero-cta" data-reveal>
      <a class="btn btn--primary" href="#businesses">Find your business type</a>
      <a class="btn btn--secondary" href="#capabilities">What Verity manages</a>
    </div>
  </div>
</section>`);

  body.push(
    section({
      id: 'context',
      tone: 'alt',
      tall: true,
      labelledBy: 'context-heading',
      html: `
      <div class="x-split">
        <div class="x-split-a">
          <p class="label" data-reveal>The shape of the operation</p>
          <h2 id="context-heading" class="h-lg" data-reveal data-words>What these businesses have in common.</h2>
        </div>
        <div class="x-split-b">
          ${ind.context.map((p) => `<p class="body-copy" data-reveal>${esc(p)}</p>`).join('')}
        </div>
      </div>`,
    })
  );

  body.push(
    section({
      id: 'challenges',
      tall: true,
      labelledBy: 'challenges-heading',
      html:
        sectionHead({
          id: 'challenges-heading',
          label: 'What gets in the way',
          heading: 'The problems repeat across the category.',
        }) +
        `<ul class="x-prob-grid" data-stagger>${ind.challenges
          .map(
            ([title, detail]) => `<li class="x-prob" data-reveal>
              <p class="x-prob-title">${esc(title)}</p>
              <p class="x-prob-body">${esc(detail)}</p>
            </li>`
          )
          .join('')}</ul>`,
    })
  );

  body.push(
    section({
      id: 'capabilities',
      tone: 'alt',
      tall: true,
      labelledBy: 'capabilities-heading',
      html:
        sectionHead({
          id: 'capabilities-heading',
          label: 'The complete system',
          heading: `What Verity manages across ${esc(ind.lower)}`,
        }) +
        `<div class="x-mod-grid" data-stagger>${ind.capabilities
          .map((id) => {
            const cap = CAPABILITIES[id];
            return `<article class="x-mod" data-reveal>
              <p class="label x-mod-kicker">${esc(cap.name)}</p>
              <h3 class="h-sm x-mod-title">${esc(cap.label)}</h3>
              <p class="x-mod-body">${esc(cap.summary)}</p>
              <p class="x-mod-why"><span class="label">What you can see</span> ${esc(cap.derive)}</p>
            </article>`;
          })
          .join('')}</div>`,
    })
  );

  const live = members.filter((m) => publishedSlugs.has(m.slug));
  const pending = members.filter((m) => !publishedSlugs.has(m.slug));
  body.push(
    section({
      id: 'businesses',
      tall: true,
      labelledBy: 'businesses-heading',
      html:
        sectionHead({
          id: 'businesses-heading',
          label: `${members.length} business types`,
          heading: 'Find the page for your business.',
          lede: 'Each one describes the same system in the terms that business already uses.',
        }) +
        (live.length
          ? `<ul class="x-biz-grid" data-stagger>${live
              .map(
                (m) => `<li class="x-biz" data-reveal><a href="/businesses/${m.slug}/">
                  <span class="x-biz-name">${esc(m.name)}</span>
                  <span class="x-biz-go label">Explore</span>
                </a></li>`
              )
              .join('')}</ul>`
          : '') +
        (pending.length
          ? `<div class="x-pending" data-reveal>
              <p class="label">Also in this category</p>
              <p class="x-pending-list">${pending.map((m) => esc(m.name)).join(' · ')}</p>
              <p class="caption">These pages are being written. Verity already works for these businesses — <a href="mailto:theplotarmour@gmail.com?subject=Verity%20enquiry">ask us about yours</a>.</p>
            </div>`
          : ''),
    })
  );

  body.push(
    section({
      id: 'faq',
      tone: 'alt',
      tall: true,
      labelledBy: 'faq-heading',
      html:
        sectionHead({ id: 'faq-heading', label: 'Questions', heading: `Verity for ${esc(ind.lower)}` }) +
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

  body.push(
    section({
      id: 'related',
      labelledBy: 'related-heading',
      html: `
      <p class="label" data-reveal>Other industries</p>
      <h2 id="related-heading" class="h-md x-rel-h" data-reveal>Verity runs the same way elsewhere</h2>
      <ul class="x-rel-grid" data-stagger>${Object.entries(INDUSTRIES)
        .filter(([s]) => s !== slug)
        .map(
          ([s, i]) => `<li class="x-rel" data-reveal><a href="/industries/${s}/">
            <span class="x-rel-name">${esc(i.name)}</span>
            <span class="x-rel-ind label">${REGISTRY.filter((b) => b.industry === s).length} types</span>
          </a></li>`
        )
        .join('')}</ul>`,
    })
  );

  body.push(
    cta({
      heading: 'Start with the part of the operation that hurts most.',
      lede: 'Tell us how your business runs today and we will show you what it looks like as one system.',
      subject: `${ind.lower} business`,
      secondary: ind.name,
    })
  );

  return (
    head({
      title: ind.metaTitle,
      description: ind.metaDescription,
      canonical: url,
      jsonLd: [
        breadcrumbLd(trail),
        softwareLd({ name: `Verity for ${ind.name}`, description: ind.metaDescription, url }),
        faqLd(faqs),
      ],
    }) +
    nav() +
    breadcrumb(trail) +
    '\n<main id="main">' +
    body.join('\n') +
    '\n</main>' +
    footer() +
    tail()
  );
}
