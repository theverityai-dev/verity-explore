/* The master business page. One template, no per-business layout code.

   Everything business-specific arrives as content from content/businesses/<slug>.js.
   Everything product-specific arrives from the capability registry. The template
   itself never contains a sentence about a business or a claim about Verity. */

import {
  SITE, esc, head, nav, footer, tail, section, sectionHead, panel, metricRow,
  attentionRows, cta, breadcrumb, breadcrumbLd, softwareLd, faqLd, demoHref,
} from './render.js';
import { CAPABILITIES } from '../content/capabilities.js';
import { INDUSTRIES } from '../content/industries.js';
import { BY_SLUG } from '../content/businesses/registry.js';

export function renderBusinessPage(biz) {
  const reg = BY_SLUG[biz.slug];
  const ind = INDUSTRIES[reg.industry];
  const url = `/businesses/${biz.slug}/`;
  const trail = [
    { name: 'Explore', href: '/' },
    { name: 'Industries', href: '/industries/' },
    { name: ind.name, href: `/industries/${reg.industry}/` },
    { name: reg.name, href: url },
  ];

  const parts = [];

  /* ------------------------------------------------------------- hero --- */
  parts.push(`
<section class="section section--tall x-hero" id="top" aria-labelledby="hero-heading">
  <div class="shell x-hero-grid">
    <div class="x-hero-copy">
      <p class="label" data-reveal>${esc(biz.hero.eyebrow)}</p>
      <h1 id="hero-heading" class="h-lg x-hero-h1" data-reveal data-words>${biz.hero.headline}</h1>
      <p class="lede x-hero-lede" data-reveal>${biz.hero.lede}</p>
      <div class="x-hero-cta" data-reveal>
        <a class="btn btn--primary" href="${demoHref(biz.subject)}">Talk about your operation</a>
        <a class="btn btn--secondary" href="#ecosystem">See what Verity manages</a>
      </div>
      <p class="caption x-hero-note" data-reveal>${esc(biz.hero.note)}</p>
    </div>
    <div class="x-hero-panel">
      ${panel({
        title: `Verity / ${biz.hero.panel.title}`,
        meta: biz.hero.panel.meta,
        live: true,
        high: true,
        body: `<div class="panel-body x-panel-body">
          ${metricRow(biz.hero.panel.metrics)}
          <p class="label x-rows-head">${esc(biz.hero.panel.rowsLabel)}</p>
          ${attentionRows(biz.hero.panel.rows)}
        </div>`,
      })}
      <p class="caption x-panel-note">${esc(biz.hero.panel.note)}</p>
    </div>
  </div>
</section>`);

  /* --------------------------------------------------------- overview --- */
  parts.push(
    section({
      id: 'context',
      tone: 'alt',
      tall: true,
      labelledBy: 'context-heading',
      html: `
      <div class="x-split">
        <div class="x-split-a">
          <p class="label" data-reveal>How the business runs</p>
          <h2 id="context-heading" class="h-lg" data-reveal data-words>${biz.overview.heading}</h2>
        </div>
        <div class="x-split-b">
          ${biz.overview.paragraphs.map((p) => `<p class="body-copy" data-reveal>${p}</p>`).join('')}
          <div class="x-terms" data-reveal data-stagger>
            <p class="label">What Verity calls these things</p>
            <ul class="x-term-list">${biz.terminology
              .map((t) => `<li><span class="x-term">${esc(t[0])}</span><span class="x-term-map">${esc(t[1])}</span></li>`)
              .join('')}</ul>
          </div>
        </div>
      </div>`,
    })
  );

  /* ------------------------------------------------------- challenges --- */
  parts.push(
    section({
      id: 'challenges',
      tall: true,
      labelledBy: 'challenges-heading',
      html:
        sectionHead({
          id: 'challenges-heading',
          label: 'What gets in the way',
          heading: biz.challengesHeading,
          lede: biz.challengesLede,
        }) +
        `<ul class="x-prob-grid" data-stagger>${biz.challenges
          .map(
            (c) => `<li class="x-prob" data-reveal>
              <p class="x-prob-title">${esc(c.problem)}</p>
              <p class="x-prob-body">${c.detail}</p>
              <p class="x-prob-fix"><span class="label">In Verity</span> ${c.outcome}</p>
            </li>`
          )
          .join('')}</ul>`,
    })
  );

  /* -------------------------------------------------- capability model --- */
  parts.push(
    section({
      id: 'ecosystem',
      tone: 'alt',
      tall: true,
      labelledBy: 'ecosystem-heading',
      html:
        sectionHead({
          id: 'ecosystem-heading',
          label: 'The complete system',
          heading: `Everything Verity manages for ${esc(biz.plural)}`,
          lede: biz.modulesLede,
        }) +
        `<div class="x-mod-grid" data-stagger>${biz.modules
          .map((m) => {
            const cap = CAPABILITIES[m.id];
            return `<article class="x-mod" data-reveal>
              <p class="label x-mod-kicker">${esc(cap.name)}</p>
              <h3 class="h-sm x-mod-title">${esc(m.title)}</h3>
              <p class="x-mod-body">${m.line}</p>
              <p class="x-mod-why"><span class="label">Why it matters here</span> ${m.why}</p>
              <p class="x-mod-eg"><span class="label">In practice</span> ${m.example}</p>
            </article>`;
          })
          .join('')}</div>`,
    })
  );

  /* ------------------------------------------------------- workflows --- */
  parts.push(
    section({
      id: 'workflows',
      tall: true,
      labelledBy: 'workflows-heading',
      html:
        sectionHead({
          id: 'workflows-heading',
          label: 'Work in motion',
          heading: biz.workflowsHeading,
          lede: biz.workflowsLede,
        }) +
        `<div class="x-flow-grid" data-stagger>${biz.workflows
          .map(
            (w) => `<article class="x-flow" data-reveal>
              <h3 class="h-sm x-flow-title">${esc(w.name)}</h3>
              <ol class="x-flow-steps">${w.steps
                .map(
                  (s, i) => `<li class="x-flow-step">
                    <span class="x-flow-num label tnum">${String(i + 1).padStart(2, '0')}</span>
                    <span class="x-flow-text">${esc(s)}</span>
                  </li>`
                )
                .join('')}</ol>
              <p class="x-flow-note">${w.note}</p>
            </article>`
          )
          .join('')}</div>`,
    })
  );

  /* -------------------------------------------------------------- AI --- */
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
          <h2 id="ai-heading" class="h-lg" data-reveal data-words>${biz.ai.heading}</h2>
          <p class="lede x-lede" data-reveal>${biz.ai.lede}</p>
          <ul class="x-ai-facts" data-reveal data-stagger>
            <li><span class="label">Grounded</span> Answers come from your own records and workflows, not from generic model knowledge.</li>
            <li><span class="label">Permission-aware</span> It only sees what the person asking is allowed to see.</li>
            <li><span class="label">Actionable</span> An answer can become a task, an assignment or a follow-up.</li>
            <li><span class="label">Traceable</span> Every action it takes stays part of the operational record.</li>
          </ul>
        </div>
        <div class="x-split-b">
          ${panel({
            title: 'Verity / Ask',
            meta: biz.ai.panelMeta,
            body: `<div class="panel-body">
              <ul class="x-ask" data-stagger>${biz.ai.questions
                .map((q) => `<li class="x-ask-q" data-reveal>${esc(q)}</li>`)
                .join('')}</ul>
            </div>`,
          })}
          <p class="caption x-panel-note">${esc(biz.ai.note)}</p>
        </div>
      </div>`,
    })
  );

  /* ------------------------------------------------------ automations --- */
  parts.push(
    section({
      id: 'automation',
      tall: true,
      labelledBy: 'automation-heading',
      html:
        sectionHead({
          id: 'automation-heading',
          label: 'Without chasing',
          heading: biz.automationHeading,
          lede: biz.automationLede,
        }) +
        `<div class="x-auto-grid" data-stagger>${biz.automations
          .map(
            (a) => `<article class="x-auto" data-reveal>
              <p class="label x-auto-kicker">When</p>
              <p class="x-auto-trigger">${esc(a.trigger)}</p>
              <ul class="x-auto-steps">${a.steps.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>
            </article>`
          )
          .join('')}</div>`,
    })
  );

  /* ----------------------------------------------------- intelligence --- */
  parts.push(
    section({
      id: 'intelligence',
      tone: 'alt',
      tall: true,
      labelledBy: 'intelligence-heading',
      html:
        sectionHead({
          id: 'intelligence-heading',
          label: 'What you can understand',
          heading: biz.intelligenceHeading,
          lede: biz.intelligenceLede,
        }) +
        `<div class="x-int-grid" data-stagger>${biz.intelligence
          .map(
            (g) => `<div class="x-int" data-reveal>
              <h3 class="h-sm x-int-title">${esc(g.area)}</h3>
              <ul class="x-int-list">${g.points.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
            </div>`
          )
          .join('')}</div>
        <p class="caption x-int-note" data-reveal>${esc(biz.intelligenceNote)}</p>`,
    })
  );

  /* ------------------------------------------------------------ roles --- */
  parts.push(
    section({
      id: 'roles',
      tall: true,
      labelledBy: 'roles-heading',
      html:
        sectionHead({
          id: 'roles-heading',
          label: 'One system, different ways of seeing it',
          heading: biz.rolesHeading,
          lede: biz.rolesLede,
        }) +
        `<ul class="x-role-grid" data-stagger>${biz.roles
          .map(
            (r) => `<li class="x-role" data-reveal>
              <p class="x-role-name">${esc(r.role)}</p>
              <p class="x-role-q">${esc(r.question)}</p>
              <p class="x-role-focus">${esc(r.focus)}</p>
            </li>`
          )
          .join('')}</ul>`,
    })
  );

  /* -------------------------------------------------------- use cases --- */
  parts.push(
    section({
      id: 'use-cases',
      tone: 'alt',
      labelledBy: 'use-cases-heading',
      html:
        sectionHead({
          id: 'use-cases-heading',
          label: 'Where it is used',
          heading: biz.useCasesHeading,
        }) +
        `<ul class="x-uc-grid" data-stagger>${biz.useCases
          .map(
            (u) => `<li class="x-uc" data-reveal>
              <h3 class="h-sm x-uc-title">${esc(u.name)}</h3>
              <p class="x-uc-body">${u.body}</p>
            </li>`
          )
          .join('')}</ul>`,
    })
  );

  /* -------------------------------------------------------- migration --- */
  parts.push(
    section({
      id: 'migration',
      labelledBy: 'migration-heading',
      html: `
      <div class="x-split">
        <div class="x-split-a">
          <p class="label" data-reveal>Getting there</p>
          <h2 id="migration-heading" class="h-lg" data-reveal data-words>Bring the business with you.</h2>
        </div>
        <div class="x-split-b">
          <p class="body-copy" data-reveal>${biz.migration}</p>
          <ul class="x-src" data-reveal data-stagger>
            ${['Excel', 'Google Sheets', 'Legacy ERP', 'CRM']
              .map((s) => `<li class="chip">${esc(s)}</li>`)
              .join('')}
            <li class="chip chip--accent">One operating environment</li>
          </ul>
          <p class="caption x-src-note" data-reveal>Implementation runs about four weeks: discovery and mapping, configuration, migration, then an ongoing operations partnership.</p>
        </div>
      </div>`,
    })
  );

  /* --------------------------------------------------------------- FAQ --- */
  parts.push(
    section({
      id: 'faq',
      tone: 'alt',
      tall: true,
      labelledBy: 'faq-heading',
      html:
        sectionHead({ id: 'faq-heading', label: 'Questions', heading: biz.faqHeading }) +
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

  /* ----------------------------------------------------------- related --- */
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
      <p class="x-rel-up" data-reveal>Part of <a href="/industries/${reg.industry}/">${esc(ind.name)}</a> · <a href="/">All 123 business types</a></p>`,
    })
  );

  parts.push(
    cta({
      heading: biz.ctaHeading,
      lede: biz.ctaLede,
      subject: biz.subject,
      secondary: reg.name,
    })
  );

  return (
    head({
      title: biz.seo.title,
      description: biz.seo.description,
      canonical: url,
      jsonLd: [
        breadcrumbLd(trail),
        softwareLd({
          name: `Verity for ${reg.name}`,
          description: biz.seo.description,
          url,
        }),
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
