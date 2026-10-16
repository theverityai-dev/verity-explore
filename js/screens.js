/* Mock-UI playback and the pinned screen walkthrough.

   1. A [data-screen] panel plays once when it scrolls into view (motion.js adds
      .is-in). CSS handles the row and bar entrances; this adds the one thing CSS
      cannot: a tag that changes state part-way through, so a screen shows work
      being resolved instead of sitting still.
   2. On a wide, tall screen the "screens" section pins to the viewport and the
      scroll steps through the screens one at a time, replaying each as it
      arrives. It is built from the same markup as the plain stacked list, which
      stays as the fallback for phones, short windows, reduced motion and any
      page whose tallest screen would not fit. */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var panels = document.querySelectorAll('[data-screen]');

  /* ------------------------------------------------------------- flips --- */

  function flip(tag) {
    if (!tag.hasAttribute('data-orig-text')) {
      tag.setAttribute('data-orig-text', tag.textContent);
      tag.setAttribute('data-orig-class', tag.className);
      tag.setAttribute('data-orig-flip-text', tag.getAttribute('data-flip-text'));
      tag.setAttribute('data-orig-flip-tone', tag.getAttribute('data-flip-tone'));
    }
    tag.textContent = tag.getAttribute('data-flip-text');
    tag.className = 'xs-tag xs-tag--' + tag.getAttribute('data-flip-tone');
    tag.removeAttribute('data-flip-text');
  }

  function reset(panel) {
    (panel._timers || []).forEach(window.clearTimeout);
    panel._timers = [];
    Array.prototype.forEach.call(panel.querySelectorAll('[data-orig-text]'), function (t) {
      t.textContent = t.getAttribute('data-orig-text');
      t.className = t.getAttribute('data-orig-class');
      t.setAttribute('data-flip-text', t.getAttribute('data-orig-flip-text'));
      t.setAttribute('data-flip-tone', t.getAttribute('data-orig-flip-tone'));
    });
  }

  function play(panel) {
    var tags = panel.querySelectorAll('[data-flip-text]');
    panel._timers = panel._timers || [];
    Array.prototype.forEach.call(tags, function (t, i) {
      if (reduce) { flip(t); return; }
      panel._timers.push(window.setTimeout(function () { flip(t); }, 1600 + i * 650));
    });
  }

  function replay(article) {
    var p = article.querySelector('[data-screen]');
    if (!p) return;
    reset(p);
    p.classList.remove('is-in');
    void p.offsetWidth;
    p.classList.add('is-in');
    play(p);
  }

  if (panels.length) {
    if (reduce || !('IntersectionObserver' in window)) {
      Array.prototype.forEach.call(panels, play);
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          io.unobserve(e.target);
          play(e.target);
        });
      }, { threshold: 0.4 });
      Array.prototype.forEach.call(panels, function (s) { io.observe(s); });
    }
  }

  /* --------------------------------------------------------------- pin --- */

  var wrap = document.querySelector('[data-pin]');
  if (!wrap || reduce) return;

  var arts = Array.prototype.slice.call(wrap.querySelectorAll('.bz-screen'));
  if (arts.length < 2) return;

  var TOP = 84;
  var pin = null;
  var stage = null;
  var dots = [];
  var count = null;
  var step = 0;
  var active = -1;
  var ticking = false;

  function start() { return pin.getBoundingClientRect().top + window.pageYOffset - TOP; }

  function setActive(i) {
    if (i === active) return;
    active = i;
    arts.forEach(function (a, k) { a.classList.toggle('is-active', k === i); });
    dots.forEach(function (d, k) {
      d.classList.toggle('is-on', k === i);
      d.setAttribute('aria-current', k === i ? 'true' : 'false');
    });
    count.textContent = (i + 1) + ' / ' + arts.length;
    replay(arts[i]);
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      ticking = false;
      var y = window.pageYOffset - start();
      var i = Math.max(0, Math.min(arts.length - 1, Math.floor((y + step * 0.35) / step)));
      setActive(i);
    });
  }

  function goTo(i) {
    window.scrollTo({ top: start() + i * step + 4, behavior: 'smooth' });
  }

  function build() {
    if (innerWidth < 1000 || innerHeight < 640) return;
    var tallest = 0;
    arts.forEach(function (a) { tallest = Math.max(tallest, a.offsetHeight); });
    var avail = innerHeight - TOP - 20;
    if (tallest + 56 > avail) return;

    var stageH = Math.min(avail, Math.max(tallest + 56, 520));
    step = Math.round(innerHeight * 0.7);

    pin = document.createElement('div');
    pin.className = 'bz-pin';
    pin.style.height = (stageH + step * (arts.length - 1)) + 'px';
    stage = document.createElement('div');
    stage.className = 'bz-pin-stage';
    stage.style.setProperty('--stage-h', stageH + 'px');
    arts.forEach(function (a) { stage.appendChild(a); });

    var nav = document.createElement('div');
    nav.className = 'bz-pin-nav';
    count = document.createElement('span');
    count.className = 'bz-pin-count tnum';
    nav.appendChild(count);
    dots = arts.map(function (a, k) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'bz-pin-dot';
      b.setAttribute('aria-label', 'Screen ' + (k + 1) + ': ' + (a.querySelector('h3') || {}).textContent);
      b.innerHTML = '<i></i>';
      b.addEventListener('click', function () { goTo(k); });
      nav.appendChild(b);
      return b;
    });
    stage.appendChild(nav);
    pin.appendChild(stage);
    wrap.appendChild(pin);
    wrap.classList.add('is-pinned');
    active = -1;
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function teardown() {
    if (!pin) return;
    window.removeEventListener('scroll', onScroll);
    arts.forEach(function (a) { a.classList.remove('is-active'); wrap.appendChild(a); });
    wrap.removeChild(pin);
    wrap.classList.remove('is-pinned');
    pin = null;
    stage = null;
    dots = [];
  }

  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a[href^="#screen-"]') : null;
    if (!a || !pin) return;
    var id = a.getAttribute('href').slice(1);
    for (var i = 0; i < arts.length; i++) {
      if (arts[i].id === id) { e.preventDefault(); goTo(i); return; }
    }
  });

  var timer = null;
  window.addEventListener('resize', function () {
    window.clearTimeout(timer);
    timer = window.setTimeout(function () { teardown(); build(); }, 200);
  });

  build();
  if (pin && /^#screen-/.test(window.location.hash)) {
    var target = document.getElementById(window.location.hash.slice(1));
    var k = arts.indexOf(target);
    if (k > -1) window.setTimeout(function () { goTo(k); }, 60);
  }
})();
