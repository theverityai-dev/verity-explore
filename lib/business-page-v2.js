/* Business page, schema 2.

   Written for the owner of the business, not for a product tour. Each page walks
   one reader through: what is going wrong in their business today, what it
   costs, how Verity fixes each thing, what the screens look like, how the
   four-week engagement runs, and what they would see on an ordinary day.

   All content is plain text in content/businesses/<slug>.js. This file holds
   layout and the mock-UI components (screens), nothing business-specific. */

import {
  esc, head, nav, footer, tail, section, sectionHead, panel, cta,
  breadcrumb, breadcrumbLd, softwareLd, faqLd, demoHref,
} from './render.js';
import { INDUSTRIES } from '../content/industries.js';
import { BY_SLUG } from '../content/businesses/registry.js';

const n2 = (i) => String(i + 1).padStart(2, '0');

/* ------------------------------------------------------------- mock UI --- */

/* A tag is `text`, `[text, tone]` or `[text, tone, toText, toTone]`. The
   four-item form flips from the first state to the second once the screen has
   scrolled into view, which is how a screen shows work getting resolved. */
function tag(t) {
  if (t == null || t === '') return '';
  const [text, tone = 'muted', toText, toTone] = Array.isArray(t) ? t : [t];
  const flip = toText ? ` data-flip-text="${esc(toText)}" data-flip-tone="${esc(toTone || 'ok')}"` : '';
  return `<span class="xs-tag xs-tag--${esc(tone)}"${flip}>${esc(text)}</span>`;
}

const cell = (c) => (Array.isArray(c) ? tag(c) : esc(c));

const BLOCKS = {
  kpis: (b) =>
    `<div class="xs-kpis" style="--n:${b.items.length}">${b.items
      .map(
        (k) => `<div class="xs-kpi"><p class="label">${esc(k.label)}</p><p class="xs-kpi-v tnum">${esc(k.value)}</p>${
          k.note ? `<p class="xs-kpi-n">${esc(k.note)}</p>` : ''
        }</div>`
      )
      .join('')}</div>`,

  title: (b) => `<p class="label xs-title">${esc(b.text)}</p>`,

  table: (b) =>
    `<div class="xs-scroll"><table class="xs-table"><thead><tr>${b.cols
      .map((c) => `<th scope="col">${esc(c)}</th>`)
      .join('')}</tr></thead><tbody class="xs-seq">${b.rows
      .map((r, i) => `<tr style="--i:${i}">${r.map((c) => `<td>${cell(c)}</td>`).join('')}</tr>`)
      .join('')}</tbody></table></div>`,

  list: (b) =>
    `<ul class="xs-list xs-seq">${b.items
      .map(
        (r, i) => `<li style="--i:${i}"><span class="xs-list-t"><span class="xs-list-n">${esc(r.name)}</span>${
          r.meta ? `<span class="xs-list-m">${esc(r.meta)}</span>` : ''
        }</span>${tag(r.tag)}</li>`
      )
      .join('')}</ul>`,

  bars: (b) =>
    `<ul class="xs-bars xs-seq">${b.items
      .map(
        (r, i) => `<li style="--i:${i}"><span class="xs-bar-l">${esc(r.label)}</span><span class="xs-bar"><i style="--w:${Math.min(100, Math.max(0, Number(r.value)))}%"${
          r.tone ? ` class="is-${esc(r.tone)}"` : ''
        }></i></span><span class="xs-bar-v tnum">${esc(r.display ?? r.value + '%')}</span></li>`
      )
      .join('')}</ul>`,

  board: (b) =>
    `<div class="xs-board">${b.columns
      .map(
        (c, ci) => `<div class="xs-col"><p class="label xs-col-h">${esc(c.name)}<span class="tnum">${c.cards.length}</span></p><ul class="xs-seq">${c.cards
          .map(
            (k, i) => `<li class="xs-card" style="--i:${ci + i}"><span class="xs-card-t">${esc(k.title)}</span>${
              k.meta ? `<span class="xs-card-m">${esc(k.meta)}</span>` : ''
            }${tag(k.tag)}</li>`
          )
          .join('')}</ul></div>`
      )
      .join('')}</div>`,

  record: (b) =>
    `<div class="xs-record"><div class="xs-record-h"><p class="xs-record-t">${esc(b.title)}</p>${
      b.sub ? `<p class="xs-record-s">${esc(b.sub)}</p>` : ''
    }</div><dl class="xs-fields">${b.fields
      .map(([k, v]) => `<div><dt class="label">${esc(k)}</dt><dd>${cell(v)}</dd></div>`)
      .join('')}</dl>${
      b.timeline
        ? `<ol class="xs-time xs-seq">${b.timeline
            .map(
              ([w, t], i) => `<li style="--i:${i}"><span class="xs-time-w tnum">${esc(w)}</span><span>${esc(t)}</span></li>`
            )
            .join('')}</ol>`
        : ''
    }</div>`,

  checks: (b) =>
    `<ul class="xs-checks xs-seq">${b.items
      .map(
        (c, i) => `<li style="--i:${i}" class="${c.done ? 'is-done' : ''}"><i aria-hidden="true"></i><span>${esc(c.text)}</span>${
          c.meta ? `<em>${esc(c.meta)}</em>` : ''
        }</li>`
      )
      .join('')}</ul>`,

  alert: (b) =>
    `<div class="xs-alert"><i aria-hidden="true"></i><p>${esc(b.text)}</p>${
      b.action ? `<span class="xs-tag xs-tag--info">${esc(b.action)}</span>` : ''
    }</div>`,

  ask: (b) =>
    `<div class="xs-ask xs-seq"><p class="xs-q" style="--i:0">${esc(b.q)}</p><div class="xs-a" style="--i:2"><p>${esc(b.a)}</p>${
      b.rows
        ? `<ul>${b.rows.map(([k, v]) => `<li><span>${esc(k)}</span><span class="tnum">${esc(v)}</span></li>`).join('')}</ul>`
        : ''
    }${b.action ? `<p class="xs-a-act">${esc(b.action)}</p>` : ''}</div></div>`,
};

function renderBlocks(blocks) {
  return blocks
    .map((b) => {
      const fn = BLOCKS[b.type];
      if (!fn) throw new Error(`Unknown screen block type "${b.type}"`);
      return fn(b);
    })
    .join('');
}

function screenPanel(s, { high = false, live = false } = {}) {
  return panel({
    title: `Verity / ${s.title}`,
    meta: s.meta,
    live,
    high,
    body: `<div class="panel-body xs-body">${renderBlocks(s.blocks)}</div>`,
  }).replace('class="panel', 'data-screen class="panel');
}

/* ----------------------------------------------------------------- page --- */

export function renderBusinessPageV2(biz) {
  const reg = BY_SLUG[biz.slug];
  const ind = INDUSTRIES[reg.industry];
  const url = `/businesses/${biz.slug}/`;
  const trail = [
    { name: 'Explore', href: '/explore/' },
    { name: 'Industries', href: '/industries/' },
    { name: ind.name, href: `/industries/${reg.industry}/` },
    { name: reg.name, href: url },
  ];
  const screenById = Object.fromEntries(biz.screens.map((s) => [s.id, s]));
  const parts = [];

  /* ---------------------------------------------------------------- hero --- */
  const heroScreen = screenById[biz.hero.screen] || biz.screens[0];
  parts.push(`
<section class="section section--tall x-hero" id="top" aria-labelledby="hero-heading">
  <div class="shell x-hero-grid">
    <div class="x-hero-copy">
      <p class="label" data-reveal>${esc(biz.hero.eyebrow)}</p>
      <h1 id="hero-heading" class="h-lg x-hero-h1" data-reveal data-words>${esc(biz.hero.headline)}</h1>
      <p class="lede x-hero-lede" data-reveal>${esc(biz.hero.lede)}</p>
      <div class="bz-oneline" data-reveal>
        <p class="label">Verity in one line</p>
        <p>${esc(biz.hero.oneLine)}</p>
      </div>
      <div class="x-hero-cta" data-reveal>
        <a class="btn btn--primary" href="${demoHref(biz.subject)}">Talk about your ${esc(biz.subject)}</a>
        <a class="btn btn--secondary" href="#problems">See the ${biz.pains.length} problems we solve</a>
      </div>
      <p class="caption x-hero-note" data-reveal>${esc(biz.hero.note)}</p>
    </div>
    <div class="x-hero-panel">
      ${screenPanel(heroScreen, { high: true, live: true })}
      <p class="caption x-panel-note">Illustrative screen with sample figures. Yours is set up with your own ${esc(biz.hero.screenNote || 'services, prices and team')}.</p>
    </div>
  </div>
</section>`);

  /* ------------------------------------------------------------- today --- */
  parts.push(
    section({
      id: 'context',
      tone: 'alt',
      tall: true,
      labelledBy: 'context-heading',
      html: `
      <div class="x-split">
        <div class="x-split-a">
          <p class="label" data-reveal>How it runs today</p>
          <h2 id="context-heading" class="h-lg" data-reveal data-words>${esc(biz.today.heading)}</h2>
        </div>
        <div class="x-split-b">
          ${biz.today.paragraphs.map((p) => `<p class="body-copy" data-reveal>${esc(p)}</p>`).join('')}
          <div class="x-terms" data-reveal>
            <p class="label">What most ${esc(biz.plural)} run on</p>
            <ul class="x-src">${biz.today.stack.map((s) => `<li class="chip">${esc(s)}</li>`).join('')}</ul>
            <p class="caption bz-stack-note">${esc(biz.today.stackNote)}</p>
          </div>
        </div>
      </div>`,
    })
  );

  /* ------------------------------------------------------------ problems --- */
  parts.push(
    section({
      id: 'problems',
      tall: true,
      labelledBy: 'problems-heading',
      html:
        sectionHead({
          id: 'problems-heading',
          label: `${biz.pains.length} problems, one by one`,
          heading: esc(biz.painsHeading),
          lede: esc(biz.painsLede),
        }) +
        `<ol class="bz-pains">${biz.pains
          .map((p, i) => {
            const target = p.screen && screenById[p.screen];
            return `<li class="bz-pain" data-reveal>
            <div class="bz-pain-top"><span class="bz-pain-n tnum">${n2(i)}</span><span class="label">${esc(p.area)}</span></div>
            <h3 class="h-sm bz-pain-title">${esc(p.title)}</h3>
            <div class="bz-pain-cols">
              <div><p class="label">What it looks like</p><p>${esc(p.scene)}</p></div>
              <div><p class="label">What it costs you</p><p>${esc(p.cost)}</p></div>
              <div class="bz-pain-fix"><p class="label">How Verity fixes it</p><p>${esc(p.fix)}</p>${
                target ? `<a class="bz-pain-go" href="#screen-${esc(target.id)}">See the screen</a>` : ''
              }</div>
            </div>
          </li>`;
          })
          .join('')}</ol>`,
    })
  );

  /* --------------------------------------------------------------- facts --- */
  parts.push(
    section({
      id: 'facts',
      tone: 'alt',
      labelledBy: 'facts-heading',
      html:
        sectionHead({
          id: 'facts-heading',
          label: 'The numbers behind it',
          heading: esc(biz.factsHeading),
          lede: esc(biz.factsLede),
        }) +
        `<ul class="bz-facts" data-stagger>${biz.facts
          .map(
            (f) => `<li class="bz-fact" data-reveal>
              <p class="bz-fact-v tnum">${esc(f.figure)}</p>
              <p class="bz-fact-t">${esc(f.text)}</p>
              <p class="bz-fact-s"><a href="${esc(f.source.url)}" target="_blank" rel="noopener nofollow">${esc(f.source.name)}${
                f.source.year ? `, ${esc(f.source.year)}` : ''
              }</a></p>
            </li>`
          )
          .join('')}</ul>
        <p class="caption bz-facts-note" data-reveal>${esc(biz.factsNote)}</p>`,
    })
  );

  /* ------------------------------------------------------------- screens --- */
  parts.push(
    section({
      id: 'screens',
      tall: true,
      labelledBy: 'screens-heading',
      html:
        sectionHead({
          id: 'screens-heading',
          label: 'What you will actually see',
          heading: esc(biz.screensHeading),
          lede: esc(biz.screensLede),
        }) +
        `<div class="bz-screens">${biz.screens
          .map((s, i) => {
            const solves = biz.pains
              .map((p, pi) => (p.screen === s.id ? { n: n2(pi), t: p.title } : null))
              .filter(Boolean);
            return `<article class="bz-screen" id="screen-${esc(s.id)}">
            <div class="bz-screen-copy" data-reveal>
              <p class="label">Screen ${i + 1} of ${biz.screens.length}</p>
              <h3 class="h-md bz-screen-h">${esc(s.heading)}</h3>
              <p class="body-copy">${esc(s.caption)}</p>
              ${
                solves.length
                  ? `<div class="bz-solves"><p class="label">Fixes</p><ul>${solves
                      .map((x) => `<li><span class="tnum">${x.n}</span> ${esc(x.t)}</li>`)
                      .join('')}</ul></div>`
                  : ''
              }
            </div>
            <div class="bz-screen-ui">${screenPanel(s)}</div>
          </article>`;
          })
          .join('')}</div>
        <p class="caption bz-facts-note" data-reveal>Illustrative screens with sample data. Layouts, fields, names and terms are set up around how your ${esc(biz.subject)} works.</p>`,
    })
  );

  /* ---------------------------------------------------------------- day --- */
  parts.push(
    section({
      id: 'day',
      tone: 'alt',
      tall: true,
      labelledBy: 'day-heading',
      html:
        sectionHead({
          id: 'day-heading',
          label: 'An ordinary day',
          heading: esc(biz.dayHeading),
          lede: esc(biz.dayLede),
        }) +
        `<div class="bz-day" role="table" aria-label="A day before and after Verity">
          <div class="bz-day-row bz-day-head" role="row"><span role="columnheader">When</span><span role="columnheader">Today</span><span role="columnheader">With Verity</span></div>
          ${biz.day
            .map(
              (d) => `<div class="bz-day-row" role="row" data-reveal>
              <span class="bz-day-t tnum" role="cell">${esc(d.time)}</span>
              <span class="bz-day-b" role="cell"><span class="label bz-day-l">Today</span>${esc(d.before)}</span>
              <span class="bz-day-a" role="cell"><span class="label bz-day-l">With Verity</span>${esc(d.after)}</span>
            </div>`
            )
            .join('')}
        </div>`,
    })
  );

  /* ----------------------------------------------------------------- how --- */
  parts.push(
    section({
      id: 'how',
      tall: true,
      labelledBy: 'how-heading',
      html:
        sectionHead({
          id: 'how-heading',
          label: 'How we work with you',
          heading: esc(biz.approach.heading),
          lede: esc(biz.approach.lede),
        }) +
        `<ol class="bz-phases" data-stagger>${biz.approach.phases
          .map(
            (p, i) => `<li class="bz-phase" data-reveal>
              <p class="bz-phase-w label">${esc(p.when)}</p>
              <h3 class="h-sm bz-phase-n">${esc(p.name)}</h3>
              <dl>
                <div><dt class="label">What we do</dt><dd>${esc(p.we)}</dd></div>
                <div><dt class="label">What we need from you</dt><dd>${esc(p.you)}</dd></div>
                <div><dt class="label">What you have at the end</dt><dd>${esc(p.get)}</dd></div>
              </dl>
            </li>`
          )
          .join('')}</ol>
        <div class="bz-need" data-reveal>
          <div>
            <p class="label">Bring these on day one</p>
            <ul>${biz.approach.bring.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>
          </div>
          <div>
            <p class="label">Your time</p>
            <p class="body-copy">${esc(biz.approach.time)}</p>
            <p class="label bz-need-l">After go-live</p>
            <p class="body-copy">${esc(biz.approach.after)}</p>
          </div>
        </div>`,
    })
  );

  /* ------------------------------------------------------------------ AI --- */
  parts.push(
    section({
      id: 'ai',
      tone: 'alt',
      tall: true,
      labelledBy: 'ai-heading',
      html: `
      <div class="x-split">
        <div class="x-split-a">
          <p class="label" data-reveal>Verity AI</p>
          <h2 id="ai-heading" class="h-lg" data-reveal data-words>${esc(biz.ai.heading)}</h2>
          <p class="lede x-lede" data-reveal>${esc(biz.ai.lede)}</p>
          <ul class="x-ai-facts" data-reveal>
            <li><span class="label">Your records only</span> Answers come from your own ${esc(biz.plural)} data, not from generic knowledge.</li>
            <li><span class="label">Right person, right view</span> It only shows what the person asking is allowed to see.</li>
            <li><span class="label">Turns into action</span> An answer can become a task assigned to a named person.</li>
          </ul>
        </div>
        <div class="x-split-b bz-ai-stack">
          ${biz.ai.examples.map((e) => screenPanel({ title: 'Ask', blocks: [{ type: 'ask', ...e }] })).join('')}
          <p class="caption x-panel-note">Sample questions and answers with illustrative figures.</p>
        </div>
      </div>`,
    })
  );

  /* ---------------------------------------------------------- automation --- */
  parts.push(
    section({
      id: 'automation',
      tall: true,
      labelledBy: 'automation-heading',
      html:
        sectionHead({
          id: 'automation-heading',
          label: 'Without chasing',
          heading: esc(biz.automationHeading),
          lede: esc(biz.automationLede),
        }) +
        `<div class="x-auto-grid" data-stagger>${biz.automations
          .map(
            (a) => `<article class="x-auto" data-reveal>
              <p class="label x-auto-kicker">When</p>
              <p class="x-auto-trigger">${esc(a.when)}</p>
              <ul class="x-auto-steps">${a.then.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>
            </article>`
          )
          .join('')}</div>`,
    })
  );

  /* --------------------------------------------------------------- rules --- */
  if (biz.rules) {
    parts.push(
      section({
        id: 'rules',
        tone: 'alt',
        tall: true,
        labelledBy: 'rules-heading',
        html:
          sectionHead({
            id: 'rules-heading',
            label: 'Rules and paperwork',
            heading: esc(biz.rules.heading),
            lede: esc(biz.rules.lede),
          }) +
          `<ul class="bz-rules" data-stagger>${biz.rules.items
            .map(
              (r) => `<li class="bz-rule" data-reveal>
              <h3 class="h-sm bz-rule-n">${esc(r.name)}</h3>
              <div><p class="label">What is expected</p><p>${esc(r.what)}</p></div>
              <div><p class="label">How Verity helps</p><p>${esc(r.how)}</p>${
                r.source
                  ? `<p class="bz-rule-s"><a href="${esc(r.source.url)}" target="_blank" rel="noopener nofollow">${esc(r.source.name)}</a></p>`
                  : ''
              }</div>
            </li>`
            )
            .join('')}</ul>
          <p class="caption bz-facts-note" data-reveal>${esc(biz.rules.note)}</p>`,
      })
    );
  }

  /* --------------------------------------------------------------- roles --- */
  parts.push(
    section({
      id: 'roles',
      tall: true,
      labelledBy: 'roles-heading',
      html:
        sectionHead({
          id: 'roles-heading',
          label: 'Who sees what',
          heading: esc(biz.rolesHeading),
          lede: esc(biz.rolesLede),
        }) +
        `<ul class="x-role-grid" data-stagger>${biz.roles
          .map(
            (r) => `<li class="x-role" data-reveal>
              <p class="x-role-name">${esc(r.role)}</p>
              <p class="x-role-q">${esc(r.question)}</p>
              <p class="x-role-focus">${esc(r.sees)}</p>
            </li>`
          )
          .join('')}</ul>`,
    })
  );

  /* ----------------------------------------------------------- alongside --- */
  parts.push(
    section({
      id: 'alongside',
      tone: 'alt',
      tall: true,
      labelledBy: 'alongside-heading',
      html: `
      <div class="x-split">
        <div class="x-split-a">
          <p class="label" data-reveal>Straight answers</p>
          <h2 id="alongside-heading" class="h-lg" data-reveal data-words>${esc(biz.alongside.heading)}</h2>
        </div>
        <div class="x-split-b">
          <div class="bz-two" data-reveal>
            <div><p class="label">Keep using</p><ul>${biz.alongside.keep.map((k) => `<li>${esc(k)}</li>`).join('')}</ul></div>
            <div><p class="label">Verity does not</p><ul>${biz.alongside.not.map((k) => `<li>${esc(k)}</li>`).join('')}</ul></div>
          </div>
          <p class="body-copy bz-mig" data-reveal>${esc(biz.alongside.migration)}</p>
          <ul class="x-src" data-reveal>
            ${['Excel', 'Google Sheets', 'Legacy ERP', 'CRM'].map((s) => `<li class="chip">${esc(s)}</li>`).join('')}
            <li class="chip chip--accent">One operating environment</li>
          </ul>
        </div>
      </div>`,
    })
  );

  /* ----------------------------------------------------------------- FAQ --- */
  parts.push(
    section({
      id: 'faq',
      tall: true,
      labelledBy: 'faq-heading',
      html:
        sectionHead({ id: 'faq-heading', label: 'Questions', heading: esc(biz.faqHeading) }) +
        `<div class="x-faq" data-stagger>${biz.faqs
          .map(
            ([q, a]) => `<details class="x-faq-item" data-reveal>
              <summary class="x-faq-q"><span>${esc(q)}</span></summary>
              <div class="x-faq-a"><p>${esc(a)}</p></div>
            </details>`
          )
          .join('')}</div>`,
    })
  );

  /* ------------------------------------------------------------- sources --- */
  const sources = new Map();
  for (const f of biz.facts) sources.set(f.source.url, f.source.name + (f.source.year ? `, ${f.source.year}` : ''));
  for (const r of biz.rules?.items || []) if (r.source) sources.set(r.source.url, r.source.name);
  for (const p of biz.pains) if (p.source) sources.set(p.source.url, p.source.name);
  parts.push(
    section({
      id: 'sources',
      tone: 'alt',
      labelledBy: 'sources-heading',
      html: `
      <p class="label" data-reveal>Where the figures come from</p>
      <h2 id="sources-heading" class="h-md x-rel-h" data-reveal>Sources</h2>
      <ol class="bz-sources" data-reveal>${[...sources]
        .map(([u, n]) => `<li><a href="${esc(u)}" target="_blank" rel="noopener nofollow">${esc(n)}</a></li>`)
        .join('')}</ol>
      <p class="caption bz-facts-note" data-reveal>Last checked ${esc(biz.checked)}. Published figures vary by region and method, so treat them as indicative, not as a promise of your results.</p>`,
    })
  );

  /* ------------------------------------------------------------- related --- */
  const related = biz.related.map((s) => BY_SLUG[s]).filter(Boolean);
  parts.push(
    section({
      id: 'related',
      labelledBy: 'related-heading',
      html: `
      <p class="label" data-reveal>Keep exploring</p>
      <h2 id="related-heading" class="h-md x-rel-h" data-reveal>Businesses that run on the same records</h2>
      <ul class="x-rel-grid" data-stagger>${related
        .map(
          (r) => `<li class="x-rel" data-reveal>
            <a href="/businesses/${r.slug}/">
              <span class="x-rel-name">${esc(r.name)}</span>
              <span class="x-rel-ind label">${esc(INDUSTRIES[r.industry].short)}</span>
            </a>
          </li>`
        )
        .join('')}</ul>
      <p class="x-rel-up" data-reveal>Part of <a href="/industries/${reg.industry}/">${esc(ind.name)}</a> · <a href="/explore/">All 123 business types</a></p>`,
    })
  );

  parts.push(cta({ heading: esc(biz.ctaHeading), lede: esc(biz.ctaLede), subject: biz.subject, secondary: reg.name }));

  return (
    head({
      title: biz.seo.title,
      description: biz.seo.description,
      canonical: url,
      jsonLd: [
        breadcrumbLd(trail),
        softwareLd({ name: `Verity for ${reg.name}`, description: biz.seo.description, url }),
        faqLd(biz.faqs),
      ],
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
