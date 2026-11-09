/* The team-only content kit for one business type: reel hooks, explainer
   concepts, timed scripts and the sales kit. It is a shareable URL for the
   Verity team and video makers, not for prospects, so it is noindex and kept
   out of the sitemap. Source data: biz.content and biz.sales (see
   docs/drafts/garment-manufacturers.md for the draft format). */

import { SITE, esc, head, nav, breadcrumb, footer, section, sectionHead } from './render.js';
import { BY_SLUG } from '../content/businesses/registry.js';

const copyBtn = (text, label = 'Copy') =>
  `<button type="button" class="kit-copy" data-copy="${esc(text)}" aria-label="${esc(label)}">${esc(label)}</button>`;

export function renderKitPage(biz) {
  const reg = BY_SLUG[biz.slug];
  const url = `/businesses/${biz.slug}/kit/`;
  const trail = [
    { name: 'Explore', href: '/explore/' },
    { name: reg.name, href: `/businesses/${biz.slug}/` },
    { name: 'Content kit', href: url },
  ];
  const c = biz.content;
  const s = biz.sales;
  const parts = [];

  parts.push(
    section({
      id: 'kit-top',
      tall: true,
      labelledBy: 'kit-heading',
      html: `
      <p class="label" data-reveal>Team only, not indexed</p>
      <h1 id="kit-heading" class="h-lg" data-reveal>${esc(reg.name)}: reels, explainers and sales kit</h1>
      <p class="lede x-lede" data-reveal>Everything here comes from the public page for ${esc(biz.plural)}. Hooks and scripts are drafts written in Hinglish, to be edited by the person who records them.</p>
      <p class="x-rel-up" data-reveal><a href="/businesses/${esc(biz.slug)}/">Open the public page</a></p>`,
    })
  );

  parts.push(
    section({
      id: 'hooks',
      tone: 'alt',
      labelledBy: 'hooks-heading',
      html:
        sectionHead({ id: 'hooks-heading', label: `${c.hooks.length} reel hooks`, heading: 'Opening lines', lede: 'One line each. Pick the one that matches the problem on screen.' }) +
        `<ul class="kit-list">${c.hooks
          .map((h) => `<li class="kit-row"><p class="kit-hook">${esc(h)}</p>${copyBtn(h)}</li>`)
          .join('')}</ul>`,
    })
  );

  parts.push(
    section({
      id: 'explainers',
      labelledBy: 'explainers-heading',
      html:
        sectionHead({ id: 'explainers-heading', label: `${c.explainers.length} explainer concepts`, heading: 'Explainer videos', lede: 'Each concept names the problem, the viewer, the first line, what the screen shows and where it ends.' }) +
        `<div class="kit-cards">${c.explainers
          .map(
            (e, i) => `<article class="kit-card">
          <p class="label">${String(i + 1).padStart(2, '0')} &middot; ${esc(e.for)}</p>
          <h3 class="h-sm">${esc(e.concept)}</h3>
          <dl class="kit-dl">
            <div><dt>Problem</dt><dd>${esc(e.pain)}</dd></div>
            <div><dt>Opening line</dt><dd>${esc(e.hook)}</dd></div>
            <div><dt>What the screen shows</dt><dd>${esc(e.show)}</dd></div>
            <div><dt>Visual direction</dt><dd>${esc(e.visual)}</dd></div>
            <div><dt>Outcome</dt><dd>${esc(e.outcome)}</dd></div>
            <div><dt>Call to action</dt><dd>${esc(e.cta)}</dd></div>
          </dl>
        </article>`
          )
          .join('')}</div>`,
    })
  );

  parts.push(
    section({
      id: 'scripts',
      tone: 'alt',
      tall: true,
      labelledBy: 'scripts-heading',
      html:
        sectionHead({ id: 'scripts-heading', label: `${c.scripts.length} timed scripts`, heading: 'Short-form scripts', lede: 'Timings are a guide for a cut of about a minute. Each runs in the same order: the problem, the free seven-day demo offer, the change, the owner view, no charge if it does not fit.' }) +
        `<div class="kit-cards">${c.scripts
          .map((sc, i) => {
            const full = sc.beats.map((b) => `[${b.at}] ${b.say}`).join('\n');
            return `<article class="kit-card">
          <div class="kit-card-top"><p class="label">Script ${i + 1}</p>${copyBtn(full, 'Copy script')}</div>
          <h3 class="h-sm">${esc(sc.title)}</h3>
          <ol class="kit-beats">${sc.beats.map((b) => `<li><span class="tnum">${esc(b.at)}</span><p>${esc(b.say)}</p></li>`).join('')}</ol>
        </article>`;
          })
          .join('')}</div>`,
    })
  );

  parts.push(
    section({
      id: 'sales',
      labelledBy: 'sales-heading',
      html:
        sectionHead({ id: 'sales-heading', label: 'Sales kit', heading: `Reaching and talking to ${esc(biz.plural)}`, lede: `Lead with: ${esc(s.leadWith)}` }) +
        `<div class="kit-cards">
        <article class="kit-card">
          <h3 class="h-sm">Who to reach</h3>
          <dl class="kit-dl">
            <div><dt>Titles to search</dt><dd>${s.titles.map(esc).join(' &middot; ')}</dd></div>
            <div><dt>Who decides</dt><dd>${esc(s.deciders)}</dd></div>
            <div><dt>Best business size</dt><dd>${esc(s.size)}</dd></div>
          </dl>
        </article>
        <article class="kit-card">
          <div class="kit-card-top"><h3 class="h-sm">First message</h3>${copyBtn(s.firstMessage)}</div>
          <p class="body-copy">${esc(s.firstMessage)}</p>
        </article>
        <article class="kit-card">
          <h3 class="h-sm">Discovery questions</h3>
          <ol class="kit-q">${s.discovery.map((q) => `<li>${esc(q)}</li>`).join('')}</ol>
        </article>
        <article class="kit-card">
          <h3 class="h-sm">Objections</h3>
          <dl class="kit-dl">${s.objections.map((o) => `<div><dt>${esc(o.o)}</dt><dd>${esc(o.a)}</dd></div>`).join('')}</dl>
        </article>
        <article class="kit-card">
          <h3 class="h-sm">Demo and proof</h3>
          <dl class="kit-dl">
            <div><dt>Demo to build</dt><dd>${esc(s.demo)}</dd></div>
            <div><dt>Proof of value</dt><dd>${esc(s.proof)}</dd></div>
          </dl>
        </article>
        <article class="kit-card">
          <div class="kit-card-top"><h3 class="h-sm">Follow-up message</h3>${copyBtn(s.followUp)}</div>
          <p class="body-copy">${esc(s.followUp)}</p>
        </article>
        </div>`,
    })
  );

  return (
    head({
      title: `${reg.name} content kit | Verity team`,
      description: `Team-only reel hooks, explainer concepts, scripts and sales kit for ${biz.plural}.`,
      canonical: url,
      noindex: true,
    }) +
    nav() +
    breadcrumb(trail) +
    '\n<main id="main">' +
    parts.join('\n') +
    '\n</main>' +
    footer() +
    `\n<script src="/js/kit.js?v=${SITE.assetVersion}"></script>` +
    `\n<script src="/js/motion.js?v=${SITE.assetVersion}"></script>\n<script src="/js/ui.js?v=${SITE.assetVersion}"></script>\n</body>\n</html>`
  );
}
