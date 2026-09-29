/* Shared chrome and section primitives for every generated Explore page.

   Everything here emits the same class vocabulary as the hand-built landing
   page (.section, .panel, .label, .rows, .metric-row, .btn--primary) so a
   generated page and the landing page are made of one material. No new colour,
   no new radius, no second entrance motion. */

export const SITE = {
  origin: 'https://theverityai.xyz',
  productOrigin: 'https://theverityai.xyz',
  name: 'Verity',
  assetVersion: '78',
  email: 'theplotarmour@gmail.com',
  whatsapp: 'https://wa.me/918744069597',
};

export const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const v = (p) => `/${p}?v=${SITE.assetVersion}`;

const LOGO_SVG = `<svg width="16" height="20" viewBox="0 0 24 30" aria-hidden="true">
        <path d="M2.6 1.6h18.8a1.6 1.6 0 011.2 2.7L13.2 14a1.6 1.6 0 01-2.4 0L1.4 4.3A1.6 1.6 0 012.6 1.6z" fill="var(--accent)"/>
        <path d="M10.8 16a1.6 1.6 0 012.4 0l9.4 9.7a1.6 1.6 0 01-1.2 2.7H2.6a1.6 1.6 0 01-1.2-2.7z" fill="var(--accent)"/>
      </svg>`;

const FAVICON =
  "data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2032%2032%27%3E%3Crect%20width%3D%2732%27%20height%3D%2732%27%20rx%3D%277%27%20fill%3D%27%23F7F8FA%27%2F%3E%3Cg%20transform%3D%27translate%284%201%29%27%3E%3Cpath%20d%3D%27M2.6%201.6h18.8a1.6%201.6%200%20011.2%202.7L13.2%2014a1.6%201.6%200%2001-2.4%200L1.4%204.3A1.6%201.6%200%20012.6%201.6z%27%20fill%3D%27%230A84FF%27%2F%3E%3Cpath%20d%3D%27M10.8%2016a1.6%201.6%200%20012.4%200l9.4%209.7a1.6%201.6%200%2001-1.2%202.7H2.6a1.6%201.6%200%2001-1.2-2.7z%27%20fill%3D%27%230A84FF%27%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E";

export function demoHref(subject) {
  return `${SITE.whatsapp}?text=${encodeURIComponent(`Hi Verity, I run a ${subject}. I'd like to see how Verity would work for us.`)}`;
}

export function emailHref(subject) {
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}`;
}

/* ------------------------------------------------------------------ head --- */

export function head({ title, description, canonical, jsonLd = [], ogTitle, ogDescription }) {
  const abs = `${SITE.origin}${canonical}`;
  return `<!doctype html>
<html lang="en" data-theme="light">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light dark">
<meta name="theme-color" content="#f7f8fa" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#0f1115" media="(prefers-color-scheme: dark)">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${esc(abs)}">
<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Verity">
<meta property="og:url" content="${esc(abs)}">
<meta property="og:title" content="${esc(ogTitle || title)}">
<meta property="og:description" content="${esc(ogDescription || description)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(ogTitle || title)}">
<meta name="twitter:description" content="${esc(ogDescription || description)}">
<link rel="icon" type="image/svg+xml" href="${FAVICON}">
<script>
  try {
    if (localStorage.getItem('verity-theme') === 'dark')
      document.documentElement.setAttribute('data-theme', 'dark');
  } catch (e) {}
</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${v('css/base.css')}">
<link rel="stylesheet" href="${v('css/verity.css')}">
<link rel="stylesheet" href="${v('css/sections.css')}">
<link rel="stylesheet" href="${v('css/motion.css')}">
<link rel="stylesheet" href="${v('css/explore.css')}">
${jsonLd.map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('\n')}
</head>
<body>
<a href="#main" class="skip">Skip to content</a>`;
}

/* ------------------------------------------------------------------- nav --- */

export function nav() {
  return `
<header class="nav" id="nav">
  <div class="shell nav-inner">
    <a href="/explore/" class="nav-logo" aria-label="Verity Explore, home">
      ${LOGO_SVG}
      <span>verity</span>
    </a>
    <nav class="nav-links" aria-label="Primary">
      <a href="/industries/">Industries</a>
      <a href="${SITE.productOrigin}/#platform">Platform</a>
      <a href="${SITE.productOrigin}/#primitives">Modules</a>
      <a href="${SITE.productOrigin}/#intelligence">Verity AI</a>
    </nav>
    <div class="nav-actions">
      <button type="button" class="theme-toggle" id="theme-toggle" aria-label="Switch to dark theme">
        <svg class="theme-icon theme-icon--moon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><path d="M21 13a8.5 8.5 0 0 1-10-10 8.5 8.5 0 1 0 10 10Z"/></svg>
        <svg class="theme-icon theme-icon--sun" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.4v2.2M12 19.4v2.2M4.2 12H2M22 12h-2.2M6.3 6.3 4.8 4.8M19.2 19.2l-1.5-1.5M17.7 6.3l1.5-1.5M4.8 19.2l1.5-1.5"/></svg>
      </button>
      <a href="${emailHref('Verity enquiry')}" class="nav-signin">Email us</a>
      <a href="${demoHref('business')}" target="_blank" rel="noopener" class="btn btn--primary nav-cta">Book a demo</a>
      <label for="nav-toggle" class="nav-burger" aria-hidden="true">
        <svg width="16" height="12" viewBox="0 0 16 12" aria-hidden="true"><path d="M0 1.5h16M0 10.5h16" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>
      </label>
    </div>
  </div>

  <input type="checkbox" id="nav-toggle" class="nav-toggle-input">

  <div class="nav-sheet" id="mobile-nav">
    <a href="/industries/">Industries</a>
    <a href="${SITE.productOrigin}/#platform">Platform</a>
    <a href="${SITE.productOrigin}/#primitives">Modules</a>
    <a href="${SITE.productOrigin}/#intelligence">Verity AI</a>
    <div class="nav-sheet-cta">
      <a href="${demoHref('business')}" target="_blank" rel="noopener" class="btn btn--primary">Book a demo</a>
      <a href="${emailHref('Verity enquiry')}" class="btn btn--secondary">Email us</a>
    </div>
  </div>
</header>`;
}

/* ------------------------------------------------------------ breadcrumb --- */

export function breadcrumb(trail) {
  const items = trail
    .map((t, i) =>
      i === trail.length - 1
        ? `<li aria-current="page">${esc(t.name)}</li>`
        : `<li><a href="${esc(t.href)}">${esc(t.name)}</a></li>`
    )
    .join('<li class="xb-sep" aria-hidden="true">/</li>');
  return `
<nav class="xb" aria-label="Breadcrumb">
  <div class="shell"><ol class="xb-list">${items}</ol></div>
</nav>`;
}

export function breadcrumbLd(trail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: `${SITE.origin}${t.href}`,
    })),
  };
}

export function softwareLd({ name, description, url }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    url: `${SITE.origin}${url}`,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    publisher: {
      '@type': 'Organization',
      name: 'Verity',
      url: SITE.productOrigin,
    },
  };
}

export function faqLd(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(([q, a]) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

/* -------------------------------------------------------------- sections --- */

export function section({ id, tone = 'base', tall = false, labelledBy, html }) {
  const cls = ['section', tone === 'alt' ? 'section--alt' : '', tall ? 'section--tall' : '']
    .filter(Boolean)
    .join(' ');
  return `
<section class="${cls}" id="${id}"${labelledBy ? ` aria-labelledby="${labelledBy}"` : ''}>
  <div class="shell">${html}</div>
</section>`;
}

export function sectionHead({ id, label, heading, lede, level = 'h2' }) {
  return `
  <div class="x-head" data-reveal>
    ${label ? `<p class="label">${esc(label)}</p>` : ''}
    <${level} id="${id}" class="h-lg">${heading}</${level}>
    ${lede ? `<p class="lede x-lede">${lede}</p>` : ''}
  </div>`;
}

export function panel({ title, meta, live = false, body, high = false }) {
  return `
  <div class="panel${high ? ' panel--high' : ''}" data-reveal>
    <div class="panel-head">
      <p class="label label--ink">${esc(title)}</p>
      ${meta ? `<p class="panel-meta">${esc(meta)}</p>` : ''}
      ${live ? '<span class="panel-live"><i></i><span class="label">Live</span></span>' : ''}
    </div>
    ${body}
  </div>`;
}

export function metricRow(metrics) {
  return `<div class="metric-row">${metrics
    .map(
      (m) => `<div class="metric">
        <p class="label">${esc(m.label)}</p>
        <p class="metric-value tnum">${esc(m.value)}</p>
        <div class="metric-note">${esc(m.note)}</div>
      </div>`
    )
    .join('')}</div>`;
}

export function attentionRows(rows) {
  return `<ul class="rows x-rows">${rows
    .map(
      (r) => `<li class="row">
        <span class="row-state${r.active ? ' is-active' : ''}" aria-hidden="true"></span>
        <span class="x-row-text">
          <span class="x-row-name">${esc(r.name)}</span>
          <span class="x-row-meta">${esc(r.meta)}</span>
        </span>
      </li>`
    )
    .join('')}</ul>`;
}

export function cta({ heading, lede, subject, secondary }) {
  return `
<section class="section section--cta" id="cta" aria-labelledby="cta-heading" style="padding-block:clamp(120px,18vw,220px)">
  <div class="shell cta-inner">
    <h2 id="cta-heading" class="display cta-heading" data-reveal>${heading}</h2>
    <p class="lede cta-deck" data-reveal>${lede}</p>
    <div class="cta-buttons" data-reveal>
      <a class="btn btn--primary" href="${demoHref(subject)}">Talk about your operation</a>
      <a class="btn btn--secondary" href="${emailHref(`Verity — ${secondary || subject}`)}">Email us</a>
    </div>
  </div>
</section>`;
}

/* ---------------------------------------------------------------- footer --- */

export function footer() {
  return `
<footer class="pf-foot">
  <div class="shell pf-foot-inner">
    <div class="pf-foot-brand">
      <a href="/" class="nav-logo pf-foot-logo-link" aria-label="Verity, home">
        ${LOGO_SVG}
        <span class="pf-foot-logo">verity</span>
      </a>
      <p class="caption pf-foot-line">Operate. Optimize. Outperform.</p>
    </div>
    <nav class="pf-foot-nav" aria-label="Footer">
      <div class="pf-foot-col">
        <p class="pf-foot-head label">Explore</p>
        <a href="/explore/">All industries</a>
        <a href="/industries/retail-commerce/">Retail &amp; Commerce</a>
        <a href="/industries/food-hospitality/">Food &amp; Hospitality</a>
        <a href="/industries/manufacturing-b2b/">Manufacturing &amp; B2B</a>
        <a href="/industries/professional-services/">Professional Services</a>
      </div>
      <div class="pf-foot-col">
        <p class="pf-foot-head label">Product</p>
        <a href="${SITE.productOrigin}/#platform">Platform</a>
        <a href="${SITE.productOrigin}/#primitives">Modules</a>
        <a href="${SITE.productOrigin}/#intelligence">Verity AI</a>
        <a href="${SITE.productOrigin}/#implementation">Implementation</a>
      </div>
      <div class="pf-foot-col">
        <p class="pf-foot-head label">Company</p>
        <a href="${emailHref('Verity enquiry')}">Contact</a>
        <a href="${demoHref('business')}">Book a demo</a>
      </div>
    </nav>
  </div>
  <div class="shell pf-foot-base">
    <p class="caption">© 2026 Verity · The business operating system</p>
  </div>
</footer>`;
}

export function tail() {
  return `
<script src="${v('js/motion.js')}"></script>
<script src="${v('js/ui.js')}"></script>
</body>
</html>`;
}
