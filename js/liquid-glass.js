/* Liquid Glass for the nav. Vanilla port of rdev/liquid-glass-react:
   a canvas-drawn displacement map feeds an SVG feDisplacementMap (one pass per
   colour channel for chromatic aberration), applied through backdrop-filter.
   Only Chromium renders url() backdrop-filters; everywhere else the CSS
   frosted-blur fallback stays and this script exits without touching the DOM. */
(function () {
  var nav = document.getElementById('nav');
  var bar = nav && nav.querySelector('.nav-inner');
  if (!bar) return;

  var brands = (navigator.userAgentData && navigator.userAgentData.brands) || [];
  var chromium = brands.some(function (b) { return /Chromium/.test(b.brand); });
  if (!chromium || matchMedia('(prefers-reduced-transparency: reduce)').matches) return;

  var NS = 'http://www.w3.org/2000/svg';
  var BEZEL = 22;      // px of edge that bends the backdrop
  var STRENGTH = 34;   // max displacement in px
  var ABERRATION = [1, 0.86, 0.72]; // R, G, B scale factors

  var svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('aria-hidden', 'true');
  svg.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden';
  svg.innerHTML =
    '<defs><filter id="lg-filter" filterUnits="userSpaceOnUse" x="0" y="0" width="1" height="1" color-interpolation-filters="sRGB">' +
    '<feImage id="lg-map" x="0" y="0" width="1" height="1" preserveAspectRatio="none" result="map"/>' +
    ['R', 'G', 'B'].map(function (c, i) {
      var m = ['1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0',
               '0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0',
               '0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0'][i];
      return '<feDisplacementMap in="SourceGraphic" in2="map" data-ch="' + i + '" xChannelSelector="R" yChannelSelector="G" result="d' + c + '"/>' +
             '<feColorMatrix in="d' + c + '" values="' + m + '" result="c' + c + '"/>';
    }).join('') +
    '<feBlend in="cR" in2="cG" mode="screen" result="rg"/><feBlend in="rg" in2="cB" mode="screen"/>' +
    '</filter></defs>';
  document.body.appendChild(svg);

  var filter = svg.querySelector('filter');
  var image = svg.querySelector('#lg-map');
  var disp = svg.querySelectorAll('feDisplacementMap');
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');

  /* Red = x shift, green = y shift, 128 = neutral. Displacement peaks at the
     outer edge and falls off with a convex curve, pushing pixels along the
     inward edge normal, which reads as a thick glass bezel. */
  function drawMap(w, h) {
    canvas.width = w; canvas.height = h;
    var img = ctx.createImageData(w, h), d = img.data;
    for (var y = 0; y < h; y++) {
      for (var x = 0; x < w; x++) {
        var dl = x, dr = w - 1 - x, dt = y, db = h - 1 - y;
        var dx = Math.min(dl, dr), dy = Math.min(dt, db);
        var nx = 0, ny = 0, edge = Math.min(dx, dy);
        if (dx < BEZEL) nx = dl < dr ? 1 : -1;
        if (dy < BEZEL) ny = dt < db ? 1 : -1;
        var t = edge < BEZEL ? 1 - edge / BEZEL : 0;
        var mag = Math.pow(t, 2.2);
        var i = (y * w + x) * 4;
        d[i]     = 128 + nx * mag * 127;
        d[i + 1] = 128 + ny * mag * 127;
        d[i + 2] = 128;
        d[i + 3] = 255;
      }
    }
    ctx.putImageData(img, 0, 0);
  }

  function build() {
    var w = Math.round(bar.offsetWidth), h = Math.round(bar.offsetHeight);
    if (!w || !h) return;
    drawMap(w, h);
    filter.setAttribute('width', w); filter.setAttribute('height', h);
    image.setAttribute('width', w); image.setAttribute('height', h);
    image.setAttribute('href', canvas.toDataURL());
    disp.forEach(function (el) { el.setAttribute('scale', STRENGTH * ABERRATION[el.dataset.ch]); });
    nav.classList.add('lg-refract');
  }

  var timer;
  new ResizeObserver(function () { clearTimeout(timer); timer = setTimeout(build, 120); }).observe(bar);
  build();

  /* Specular rim follows the pointer along the bar (rdev's mouse-tracked border). */
  var raf = 0, px = 0.5;
  addEventListener('pointermove', function (e) {
    px = e.clientX / innerWidth;
    if (!raf) raf = requestAnimationFrame(function () {
      raf = 0; bar.style.setProperty('--lg-x', (px * 100).toFixed(1) + '%');
    });
  }, { passive: true });
})();
