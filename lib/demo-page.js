/* The demo request page.

   Every "book a demo" on the site lands here. The form asks the five things
   that decide whether a demo is worth building (business, team size, what runs
   it today, the first problem, who decides) and hands them to WhatsApp as one
   message, so the first chat starts from the business instead of "hi, price?".
   Nothing is stored on this site: the static deployment has no backend, and the
   message only leaves the visitor's device when they press send in WhatsApp or
   their mail app. */

import { esc, head, nav, footer, tail, SITE, FREE_DEMO, emailHref } from './render.js';

const TEAM_SIZES = ['Just me', '2 to 10', '11 to 25', '26 to 50', '51 to 100', 'More than 100'];

const RUNS_ON = [
  'Paper registers',
  'Excel or Google Sheets',
  'WhatsApp groups',
  'Tally or another accounting tool',
  'An ERP or software we stopped using',
  'Other software',
];

const DECIDER = [
  'Yes, I decide',
  'I decide with someone else, and will bring them',
  'No, I am finding options for the owner',
];

const STEPS = [
  ['A 30-minute call', 'You walk us through how the work moves today: who does what, what gets written where, where it goes wrong.'],
  ['Your demo, within 7 days', 'Verity set up with your own items, stages, people and words, filled from the sample you send. You open it on your phone and click through it.'],
  ['You decide', 'If your team wants to use it, we agree the scope and the price, then our engineers make it production-ready and move your data in. If not, you owe nothing.'],
];

export function renderDemoPage() {
  const url = '/demo/';

  const sizes = TEAM_SIZES.map((s) => `<option>${esc(s)}</option>`).join('');
  const runs = RUNS_ON.map(
    (r) => `<label class="dm-check"><input type="checkbox" name="runs" value="${esc(r)}"><span>${esc(r)}</span></label>`
  ).join('');
  const decider = DECIDER.map(
    (l, i) =>
      `<label class="dm-check"><input type="radio" name="decider" value="${esc(l)}"${i === 0 ? ' required' : ''}><span>${esc(l)}</span></label>`
  ).join('');
  const steps = STEPS.map(
    ([t, d]) => `<li class="dm-step"><p class="dm-step-title">${esc(t)}</p><p class="dm-step-body">${esc(d)}</p></li>`
  ).join('');

  const body = `
<section class="section section--tall dm up-page-hero" id="top" aria-labelledby="hero-heading">
  <div class="up-aurora" aria-hidden="true"><i></i><i></i><i></i></div>
  <div class="up-hero-grid" aria-hidden="true"></div>
  <div class="shell dm-grid">
    <div class="dm-copy">
      <h1 id="hero-heading" class="h-lg dm-h1" data-reveal>See your own business running in Verity.</h1>
      <p class="lede dm-lede" data-reveal>${esc(FREE_DEMO)}</p>
      <p class="body dm-why" data-reveal>You do not change how you work to fit the software. Tell us how the work runs today and we set Verity up to run the same way, in your words.</p>
      <ol class="dm-steps" data-reveal>${steps}</ol>
    </div>

    <form class="dm-form" id="dm-form" novalidate>
      <p class="dm-form-title">Tell us about the business</p>

      <div class="dm-field">
        <label for="dm-name">Your name</label>
        <input id="dm-name" name="name" type="text" autocomplete="name" required>
      </div>
      <div class="dm-row">
        <div class="dm-field">
          <label for="dm-company">Business name</label>
          <input id="dm-company" name="company" type="text" autocomplete="organization">
        </div>
        <div class="dm-field">
          <label for="dm-city">City</label>
          <input id="dm-city" name="city" type="text" autocomplete="address-level2">
        </div>
      </div>
      <div class="dm-row">
        <div class="dm-field">
          <label for="dm-type">Type of business</label>
          <input id="dm-type" name="type" type="text" placeholder="For example: garment factory" required>
        </div>
        <div class="dm-field">
          <label for="dm-size">People in the team</label>
          <select id="dm-size" name="size" required><option value="">Choose</option>${sizes}</select>
        </div>
      </div>

      <fieldset class="dm-field">
        <legend>What runs the business today?</legend>
        <div class="dm-checks">${runs}</div>
      </fieldset>

      <div class="dm-field">
        <label for="dm-problem">The one problem you want solved first</label>
        <textarea id="dm-problem" name="problem" rows="4" required placeholder="For example: worker wages are worked out by hand from registers, and every month there are disputes."></textarea>
      </div>

      <fieldset class="dm-field">
        <legend>Do you decide on software for the business?</legend>
        <div class="dm-checks">${decider}</div>
      </fieldset>

      <p class="dm-error" id="dm-error" role="alert" hidden></p>

      <div class="dm-actions">
        <button type="submit" class="btn btn--primary" data-send="whatsapp">Send on WhatsApp</button>
        <button type="submit" class="btn btn--secondary" data-send="email">Send by email</button>
      </div>
      <p class="caption dm-note">Next, send one photo of a register, sheet or bill in the same chat. We build your demo from it. Nothing you type here is stored on this website.</p>
      <noscript><p class="caption dm-note">This form needs JavaScript. You can also message us on <a href="${SITE.whatsapp}">WhatsApp</a> or <a href="${emailHref('Verity demo')}">email us</a>.</p></noscript>
    </form>
  </div>
</section>

<script>
(function () {
  var form = document.getElementById('dm-form');
  var error = document.getElementById('dm-error');
  var type = document.getElementById('dm-type');
  var asked = new URLSearchParams(location.search).get('for');
  if (asked) type.value = asked.charAt(0).toUpperCase() + asked.slice(1);

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var invalid = form.querySelector(':invalid');
    if (invalid) {
      var set = invalid.closest('fieldset');
      var label = set ? set.querySelector('legend') : form.querySelector('label[for="' + invalid.id + '"]');
      error.textContent = 'Please fill in: ' + (label ? label.textContent : 'the highlighted field') + '.';
      error.hidden = false;
      form.classList.add('dm-tried');
      invalid.focus();
      return;
    }
    error.hidden = true;
    var d = new FormData(form);
    var v = function (k) { return (d.get(k) || '').toString().trim(); };
    var runs = d.getAll('runs');
    var lines = ['Hi Verity, I would like a free demo.', '', 'Name: ' + v('name')];
    if (v('company')) lines.push('Business: ' + v('company'));
    if (v('city')) lines.push('City: ' + v('city'));
    lines.push('Type of business: ' + v('type'), 'Team size: ' + v('size'));
    if (runs.length) lines.push('Runs on today: ' + runs.join(', '));
    lines.push('First problem to solve: ' + v('problem'), 'Decision: ' + v('decider'));
    var text = lines.join('\\n');
    var via = e.submitter && e.submitter.dataset.send === 'email' ? 'email' : 'whatsapp';
    if (window.va) window.va('event', { name: 'demo_request', data: { via: via, type: v('type') } });
    location.href = via === 'email'
      ? 'mailto:${SITE.email}?subject=' + encodeURIComponent('Free demo: ' + (v('company') || v('type'))) + '&body=' + encodeURIComponent(text)
      : '${SITE.whatsapp}?text=' + encodeURIComponent(text);
  });
})();
</script>`;

  return (
    head({
      title: 'Free demo on your own data | Verity',
      description:
        'Tell us how your business runs. Within 7 days we set up a working demo of Verity on your own data. You pay only if your team decides to use it.',
      canonical: url,
    }) +
    nav() +
    '\n<main id="main">' +
    body +
    '\n</main>' +
    footer() +
    tail()
  );
}
