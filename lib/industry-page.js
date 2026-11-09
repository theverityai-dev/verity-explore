import {
  esc, head, nav, footer, tail, section, sectionHead, cta,
  breadcrumb, breadcrumbLd, softwareLd, faqLd, videoBand,
} from './render.js';
import { INDUSTRY_FILMS } from '../content/videos.js';
import { CAPABILITIES } from '../content/capabilities.js';
import { INDUSTRIES } from '../content/industries.js';
import { REGISTRY, BY_SLUG } from '../content/businesses/registry.js';
import { LIFECYCLE } from '../content/industry-depth.js';

/* bizBySlug: the published business pages, so the hub can show what actually
   repeats across its members instead of four hand-written sentences. */
export function renderIndustryPage(slug, publishedSlugs, bizBySlug = {}) {
  const ind = INDUSTRIES[slug];
  const url = `/industries/${slug}/`;
  const trail = [
    { name: 'Explore', href: '/explore/' },
    { name: 'Industries', href: '/industries/' },
    { name: ind.name, href: url },
  ];
  const members = REGISTRY.filter((b) => b.industry === slug);
  const faqs = [
    [
      `What does Verity do for ${ind.lower} businesses?`,
      `${ind.lede} Each business in this category gets the same underlying system, set up around the way that business actually runs: its own customers, jobs, stock, staff, money and the questions its owner asks every day.`,
    ],
    [
      `Which ${ind.lower} business types does Verity support?`,
      `Verity Explore covers ${members.length} business types in this category, including ${members.slice(0, 5).map((m) => m.name.toLowerCase()).join(', ')}. Each has its own page describing the modules, workflows and reporting that apply to it.`,
    ],
    [
      'Does Verity replace the systems we already use?',
      'Not at once. We map what you use now, such as Tally, Excel or a billing tool, bring over the records that matter, and leave the rest running. Nothing you rely on is switched off until the new view is working.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping, configuration, migration, then an ongoing operations partnership rather than a handover.',
    ],
  ];

  const body = [];

  body.push(`
<section class="section section--tall x-ind-hero up-page-hero" id="top" aria-labelledby="hero-heading">
  <div class="up-aurora" aria-hidden="true"><i></i><i></i><i></i></div>
  <div class="up-hero-grid" aria-hidden="true"></div>
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

  if (INDUSTRY_FILMS[slug]) {
    const f = INDUSTRY_FILMS[slug];
    body.push(videoBand({ clip: f, label: 'Watch', heading: f.title, lede: f.line, tone: 'base' }));
  }

  /* ------------------------------------------------ journey (authored) --- */
  const life = LIFECYCLE[slug];
  if (life) {
    body.push(
      section({
        id: 'journey',
        tall: true,
        labelledBy: 'journey-heading',
        html:
          sectionHead({ id: 'journey-heading', label: `${life.stages.length} steps, start to finish`, heading: esc(life.heading), lede: esc(life.lede) }) +
          `<ol class="bz-flow">${life.stages
            .map(
              ([name, who, risk], i) => `<li class="bz-stage" data-reveal>
            <div class="bz-stage-top"><span class="bz-pain-n tnum">${String(i + 1).padStart(2, '0')}</span><h3 class="h-sm">${esc(name)}</h3><span class="chip">${esc(who)}</span></div>
            <dl class="bz-stage-grid"><div class="bz-stage-break"><dt>Where it usually goes wrong</dt><dd>${esc(risk)}</dd></div></dl>
          </li>`
            )
            .join('')}</ol>`,
      })
    );
  }

  /* ----------------------------------- repeat problems (aggregated) --- */
  const mem = members.map((m) => bizBySlug[m.slug]).filter(Boolean);
  const areas = new Map();
  let totalPains = 0;
  for (const b of mem) {
    b.pains.forEach((p, i) => {
      totalPains += 1;
      const a = areas.get(p.area) || { n: 0, ex: [], biz: new Set() };
      a.n += 1;
      a.biz.add(b.slug);
      if (a.ex.length < 3 && !a.ex.some((e) => e.slug === b.slug)) a.ex.push({ slug: b.slug, n: i + 1, title: p.title });
      areas.set(p.area, a);
    });
  }
  const topAreas = [...areas.entries()].sort((x, y) => y[1].n - x[1].n).slice(0, 6);
  if (topAreas.length) {
    body.push(
      section({
        id: 'repeat',
        tone: 'alt',
        tall: true,
        labelledBy: 'repeat-heading',
        html:
          sectionHead({
            id: 'repeat-heading',
            label: `${totalPains} problems mapped across ${mem.length} business types`,
            heading: 'Where these businesses lose the most.',
            lede: 'We wrote down every problem an owner of each type described, then counted by area. These are the areas that come up most, with real examples and the page that deals with each.',
          }) +
          `<ul class="ind-areas">${topAreas
            .map(
              ([area, a]) => `<li class="ind-area" data-reveal>
            <div class="ind-area-top"><p class="ind-area-n tnum">${a.n}</p><div><h3 class="h-sm">${esc(area)}</h3><p class="caption">problems across ${a.biz.size} business types</p></div></div>
            <ul class="ind-ex">${a.ex
              .map((e) => `<li><a href="/businesses/${esc(e.slug)}/#pain-${e.n}">${esc(e.title)}</a><span class="label">${esc(BY_SLUG[e.slug].name)}</span></li>`)
              .join('')}</ul>
          </li>`
            )
            .join('')}</ul>`,
      })
    );
  }

  /* ------------------------------------------------ sourced numbers --- */
  const seen = new Set();
  const facts = [];
  for (const b of mem) {
    const f = b.facts.find((x) => !seen.has(x.source.name));
    if (f && facts.length < 4) {
      seen.add(f.source.name);
      facts.push({ ...f, slug: b.slug });
    }
  }
  if (facts.length) {
    body.push(
      section({
        id: 'numbers',
        labelledBy: 'numbers-heading',
        html:
          sectionHead({ id: 'numbers-heading', label: 'The numbers behind it', heading: 'Published figures for this industry.', lede: 'Each figure is from a public source named below it, and is indicative, not a promise of your results.' }) +
          `<ul class="bz-facts" data-stagger>${facts
            .map(
              (f) => `<li class="bz-fact" data-reveal>
              <p class="bz-fact-v tnum">${esc(f.figure)}</p>
              <p class="bz-fact-t">${esc(f.text)}</p>
              <p class="bz-fact-s"><a href="${esc(f.source.url)}" target="_blank" rel="noopener nofollow">${esc(f.source.name)}${f.source.year ? `, ${esc(f.source.year)}` : ''}</a></p>
            </li>`
            )
            .join('')}</ul>`,
      })
    );
  }

  body.push(
    section({
      id: 'challenges',
      tall: true,
      labelledBy: 'challenges-heading',
      html:
        sectionHead({
          id: 'challenges-heading',
          label: 'The short version',
          heading: 'What owners usually say first.',
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
                (m) => {
                  const b = bizBySlug[m.slug];
                  return `<li class="x-biz" data-reveal><a href="/businesses/${m.slug}/">
                  <span class="x-biz-name">${esc(m.name)}</span>
                  ${b ? `<span class="ind-biz-line">${esc(b.hero.oneLine)}</span><span class="x-biz-go label">${b.pains.length} problems mapped</span>` : '<span class="x-biz-go label">Explore</span>'}
                </a></li>`;
                }
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
