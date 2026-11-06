/* Nav glass on scroll, theme toggle, and the site-wide reveal. */
(function () {
  var nav = document.getElementById('nav');
  if (nav) {
    var onScroll = function () { nav.classList.toggle('is-scrolled', window.scrollY > 24); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');
  var syncLabel = function () {
    if (!toggle) return;
    var dark = root.getAttribute('data-theme') === 'dark';
    toggle.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
  };
  syncLabel();
  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('verity-theme', next); } catch (e) {}
      syncLabel();
    });
  }

  /* Close the mobile sheet after navigating. */
  var sheet = document.getElementById('mobile-nav');
  var check = document.getElementById('nav-toggle');
  if (sheet && check) {
    sheet.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') check.checked = false;
    });
  }

  /* ------------------------------------------------- Schedule timeline progress --- */
  var progress = document.getElementById('shd-progress');
  var timeline = document.getElementById('shd-list');
  var section = document.getElementById('schedule');
  if (progress && timeline && section) {
    /* Compute progress relative to the section being scrolled through, not the
       whole document. The fill covers the track from the top of the section
       to the bottom of the timeline; we use the timeline's own height so the
       fill matches the actual rail. */
    var rafPending = false;
    var updateProgress = function () {
      var rect = section.getBoundingClientRect();
      var viewH = window.innerHeight || document.documentElement.clientHeight;
      var trackH = timeline.offsetHeight;
      /* Distance scrolled past the section's top, in px of the track. */
      var scrolled = viewH * 0.5 - rect.top;     /* trigger when section mid hits viewport mid */
      var total = trackH + viewH * 0.5;          /* span over which progress reaches 100% */
      var pct = trackH > 0 ? (scrolled / total) * 100 : 0;
      if (pct < 0) pct = 0;
      if (pct > 100) pct = 100;
      progress.style.setProperty('--pct-n', (pct / 100).toFixed(4));
    };
    var onScroll = function () {
      if (rafPending) return;
      rafPending = true;
      window.requestAnimationFrame(function () {
        rafPending = false;
        updateProgress();
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    /* Set the initial fill to the live item (3rd of 5 = 50%) before any scroll,
       so the bar is always visible on page load. */
    progress.style.setProperty('--pct-n', '0.5');
    updateProgress();
  }

  /* ------------------------------------------------- Locations city toggle --- */
  var locItems = document.querySelectorAll('.loc-item');
  var locCard = document.getElementById('loc-card');
  var locCity = document.querySelector('.loc-card-city');

  var LOCATIONS = [
    { city: 'Delhi',     ops: 42, sla: '98.7%', exceptions: 3 },
    { city: 'Noida',     ops: 18, sla: '99.1%', exceptions: 0 },
    { city: 'Gurgaon',   ops: 24, sla: '98.2%', exceptions: 1 },
    { city: 'Mumbai',    ops: 36, sla: '97.9%', exceptions: 2 },
    { city: 'Hyderabad', ops: 21, sla: '98.8%', exceptions: 0 },
    { city: 'Bengaluru', ops: 29, sla: '99.0%', exceptions: 1 },
  ];

  function activateCity(index) {
    locItems.forEach(function (item, i) {
      var active = i === index;
      item.classList.toggle('is-active', active);
      var btn = item.querySelector('.loc-btn');
      if (btn) btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    if (locCard && locCity) {
      var loc = LOCATIONS[index];
      locCity.textContent = loc.city;
      var rows = locCard.querySelectorAll('.loc-card-row dd');
      rows[0].textContent = loc.ops;
      rows[1].textContent = loc.sla;
      rows[2].textContent = loc.exceptions;
      rows[2].style.color = loc.exceptions > 0 ? 'var(--accent-text)' : '';
    }
  }

  locItems.forEach(function (item) {
    var btn = item.querySelector('.loc-btn');
    if (!btn) return;
    var idx = parseInt(item.getAttribute('data-city'), 10);
    btn.addEventListener('click', function () { activateCity(idx); });
  });

  /* Spotlight cards: a soft light follows the pointer (css/upgrade.css).
     One delegated listener, fine pointers only, off under reduced motion. */
  if (window.matchMedia('(pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.addEventListener('pointermove', function (e) {
      var card = e.target.closest && e.target.closest('.up-spot, .xp-card > a, .x-ind-card a, .x-rel a');
      if (!card) return;
      var r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top) + 'px');
    }, { passive: true });
  }

  /* Hero word rotor: cycles business types in place. The heading's accessible
     name stays "business" (aria-label) so screen readers hear one sentence. */
  var rotor = document.querySelector('[data-rotor]');
  if (rotor && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var words = rotor.getAttribute('data-rotor').split('|');
    var at = 0;
    setInterval(function () {
      if (document.hidden) return;
      var old = rotor.querySelector('.up-rotor-word:not(.is-out)');
      at = (at + 1) % words.length;
      var next = document.createElement('span');
      next.className = 'up-rotor-word is-in';
      next.setAttribute('aria-hidden', 'true');
      next.textContent = words[at] + '.';
      if (old) {
        old.classList.remove('is-in');
        old.classList.add('is-out');
        setTimeout(function () { old.remove(); }, 460);
      }
      rotor.insertBefore(next, rotor.firstChild);
    }, 2400);
  }

  var still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasIO = 'IntersectionObserver' in window;

  /* Bento miniatures animate only while on screen. */
  if (hasIO) {
    var liveIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { en.target.classList.toggle('is-live', en.isIntersecting); });
    }, { threshold: 0.35 });
    document.querySelectorAll('.up-bento-card').forEach(function (c) { liveIO.observe(c); });
  }

  /* Dashboard figures count up the first time they come into view, keeping
     their own prefix, suffix, decimals and Indian digit grouping. */
  var figures = document.querySelectorAll('#command .tnum, #workforce .wf-stat-num, #workforce .wf-bar-count, .bz-fact-v');
  if (figures.length && hasIO && !still) {
    var countIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        countIO.unobserve(en.target);
        var el = en.target, f = el._fig;
        var t0 = performance.now(), dur = 1400;
        var tick = function (now) {
          var k = Math.min(1, (now - t0) / dur);
          var e = 1 - Math.pow(1 - k, 4);
          el.textContent = k < 1 ? f.pre + f.fmt.format(f.num * e) + f.post : f.text;
          if (k < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.2 });
    figures.forEach(function (el) {
      var text = el.textContent.trim();
      /* Plain figures only: "318", "₹42 L", "86%". Times and durations
         ("09:28", "6m 12s") keep their text. */
      var m = /^(₹?\s?)(\d[\d,]*(?:\.\d+)?)(\s?(?:L|Cr|%|crore|lakh)?)$/.exec(text);
      if (!m) return;
      var num = parseFloat(m[2].replace(/,/g, ''));
      if (!num) return;
      var dec = (m[2].split('.')[1] || '').length;
      el._fig = { text: text, pre: m[1], num: num, post: m[3], fmt: new Intl.NumberFormat('en-IN', { minimumFractionDigits: dec, maximumFractionDigits: dec }) };
      el.textContent = m[1] + el._fig.fmt.format(0) + m[3];
      countIO.observe(el);
    });
  }

  /* Problem index on business pages: mark the problem being read. */
  var painLinks = document.querySelectorAll('.bz-pains-nav a');
  if (painLinks.length && hasIO) {
    var byId = {};
    painLinks.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
    var current = null;
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        if (current) current.classList.remove('is-current');
        current = byId[en.target.id];
        if (current) {
          current.classList.add('is-current');
          current.setAttribute('aria-current', 'true');
          var nav = current.closest('.bz-pains-nav');
          if (nav && nav.scrollHeight > nav.clientHeight) {
            var top = current.offsetTop - nav.clientHeight / 2;
            nav.scrollTo({ top: top, behavior: still ? 'auto' : 'smooth' });
          }
        }
        Object.keys(byId).forEach(function (k) { if (byId[k] !== current) byId[k].removeAttribute('aria-current'); });
      });
    }, { rootMargin: '-35% 0px -55% 0px' });
    document.querySelectorAll('.bz-pain[id]').forEach(function (p) { spy.observe(p); });
  }

  /* Phone dock: one tap to the demo form once the hero is passed. Not on the
     demo page itself, and out of the way near the closing call to action and
     the footer, where it would only repeat them. */
  if (!/^\/demo\//.test(location.pathname)) {
    var dock = document.createElement('div');
    dock.className = 'up-dock';
    dock.setAttribute('role', 'region');
    dock.setAttribute('aria-label', 'Free demo');
    dock.innerHTML = '<span><b>See your business in Verity</b><small>Free demo on your own data, in 7 days</small></span><a class="btn btn--primary" href="/demo/">Get free demo</a>';
    document.body.appendChild(dock);
    var ends = Array.prototype.slice.call(document.querySelectorAll('#cta, .pf-foot'));
    var nearEnd = false;
    var place = function () {
      dock.classList.toggle('is-shown', window.scrollY > window.innerHeight * 0.9 && !nearEnd);
    };
    if (hasIO && ends.length) {
      var endIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { en.target._in = en.isIntersecting; });
        nearEnd = ends.some(function (e) { return e._in; });
        place();
      });
      ends.forEach(function (e) { endIO.observe(e); });
    }
    window.addEventListener('scroll', place, { passive: true });
    place();
  }
})();
