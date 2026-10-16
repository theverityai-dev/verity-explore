/* Mock-UI playback.

   A [data-screen] panel plays once when it scrolls into view (motion.js adds
   .is-in). CSS handles the row and bar entrances; this adds the one thing CSS
   cannot: a tag that changes state part-way through, so a screen shows work
   being resolved instead of sitting still. Reduced motion shows the end state. */
(function () {
  var screens = document.querySelectorAll('[data-screen]');
  if (!screens.length) return;

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function flip(tagEl) {
    tagEl.textContent = tagEl.getAttribute('data-flip-text');
    tagEl.className = 'xs-tag xs-tag--' + tagEl.getAttribute('data-flip-tone');
    tagEl.removeAttribute('data-flip-text');
  }

  function play(panel) {
    var tags = panel.querySelectorAll('[data-flip-text]');
    Array.prototype.forEach.call(tags, function (t, i) {
      if (reduce) { flip(t); return; }
      window.setTimeout(function () { flip(t); }, 1600 + i * 650);
    });
  }

  if (reduce || !('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(screens, play);
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      play(e.target);
    });
  }, { threshold: 0.4 });
  Array.prototype.forEach.call(screens, function (s) { io.observe(s); });
})();
