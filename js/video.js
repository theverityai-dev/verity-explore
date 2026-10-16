/* Verity film playback.

   Two behaviours, chosen by the shape of the film:

   - Landscape films are a full-screen scroll scene. The section pins to the
     viewport and scroll position sets the film's time, so the visitor plays it
     by scrolling, at their own pace. The film is silent (it has no voiceover),
     so nothing needs a sound control.
   - Portrait films sit beside their copy and play by themselves while visible,
     muted and looping. Where the film has a voiceover, a speaker button turns
     it on.

   Both get the same custom controls in place of the browser's. Without JS the
   native controls stay, so the film is still playable. On small screens and
   with reduced motion there is no scrub and no autoplay: the visitor presses
   play. */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var ICON = {
    play: '<svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M3.2 1.6v10.8a.7.7 0 0 0 1.05.6l8.5-5.4a.7.7 0 0 0 0-1.2L4.25 1a.7.7 0 0 0-1.05.6Z" fill="currentColor"/></svg>',
    pause: '<svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><rect x="2.6" y="1.6" width="3.2" height="10.8" rx="1" fill="currentColor"/><rect x="8.2" y="1.6" width="3.2" height="10.8" rx="1" fill="currentColor"/></svg>',
    sound: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2 6v4h2.6L8 12.8V3.2L4.6 6H2Z" fill="currentColor"/><path d="M10.4 5.4a3.8 3.8 0 0 1 0 5.2M12.2 3.6a6.3 6.3 0 0 1 0 8.8" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>',
    muted: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2 6v4h2.6L8 12.8V3.2L4.6 6H2Z" fill="currentColor"/><path d="m10.6 6 3.2 4m0-4-3.2 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>'
  };

  function mmss(s) {
    s = Math.max(0, Math.floor(s || 0));
    return Math.floor(s / 60) + ':' + ('0' + (s % 60)).slice(-2);
  }

  /* ----------------------------------------------------------- controls --- */

  function controls(fig, video, opts) {
    video.removeAttribute('controls');
    var ui = document.createElement('div');
    ui.className = 'bz-vp-ui';

    var play = document.createElement('button');
    play.type = 'button';
    play.className = 'bz-vp-btn';
    ui.appendChild(play);

    var track = document.createElement('div');
    track.className = 'bz-vp-track';
    track.tabIndex = 0;
    track.setAttribute('role', 'slider');
    track.setAttribute('aria-label', 'Film position');
    track.setAttribute('aria-valuemin', '0');
    track.setAttribute('aria-valuemax', '100');
    var fill = document.createElement('i');
    track.appendChild(fill);
    ui.appendChild(track);

    var time = document.createElement('span');
    time.className = 'bz-vp-time tnum';
    ui.appendChild(time);

    var mute = null;
    if (opts.audio) {
      mute = document.createElement('button');
      mute.type = 'button';
      mute.className = 'bz-vp-btn bz-vp-btn--mute';
      ui.appendChild(mute);
    }
    fig.appendChild(ui);

    function paint() {
      var d = video.duration || 0;
      var p = d ? video.currentTime / d : 0;
      fill.style.transform = 'scaleX(' + p + ')';
      track.setAttribute('aria-valuenow', String(Math.round(p * 100)));
      time.textContent = mmss(video.currentTime) + ' / ' + mmss(d);
    }
    function state() {
      var on = !video.paused && !video.ended;
      play.innerHTML = on ? ICON.pause : ICON.play;
      play.setAttribute('aria-label', on ? 'Pause film' : 'Play film');
      fig.classList.toggle('is-playing', on);
      if (mute) {
        mute.innerHTML = video.muted ? ICON.muted : ICON.sound;
        mute.setAttribute('aria-label', video.muted ? 'Turn voiceover on' : 'Turn voiceover off');
      }
    }

    play.addEventListener('click', function () {
      opts.userPaused = !video.paused;
      if (video.paused) video.play(); else video.pause();
    });
    if (mute) {
      mute.addEventListener('click', function () {
        video.muted = !video.muted;
        if (!video.muted && video.paused) { opts.userPaused = false; video.play(); }
        state();
      });
    }
    function seek(clientX) {
      var r = track.getBoundingClientRect();
      var p = Math.max(0, Math.min(1, (clientX - r.left) / r.width));
      if (video.duration) video.currentTime = p * video.duration;
    }
    track.addEventListener('pointerdown', function (e) {
      track.setPointerCapture(e.pointerId);
      seek(e.clientX);
      track.onpointermove = function (ev) { seek(ev.clientX); };
    });
    track.addEventListener('pointerup', function () { track.onpointermove = null; });
    track.addEventListener('keydown', function (e) {
      if (!video.duration) return;
      if (e.key === 'ArrowRight') video.currentTime = Math.min(video.duration, video.currentTime + 5);
      else if (e.key === 'ArrowLeft') video.currentTime = Math.max(0, video.currentTime - 5);
      else return;
      e.preventDefault();
    });

    video.addEventListener('play', state);
    video.addEventListener('pause', state);
    video.addEventListener('ended', state);
    video.addEventListener('volumechange', state);
    video.addEventListener('timeupdate', paint);
    video.addEventListener('loadedmetadata', paint);
    state();
    paint();
    return { paint: paint, ui: ui };
  }

  /* ------------------------------------------------- inline (autoplay) --- */

  function inline(fig, autoplay) {
    var video = fig.querySelector('video');
    if (!video) return;
    var opts = { audio: fig.hasAttribute('data-audio'), userPaused: false };
    video.muted = true;
    controls(fig, video, opts);
    if (!autoplay || reduce || !('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting && !opts.userPaused) {
          var p = video.play();
          if (p && p.catch) p.catch(function () {});
        } else if (!e.isIntersecting && !video.paused) {
          video.pause();
        }
      });
    }, { threshold: 0.5 });
    io.observe(fig);
  }

  /* ------------------------------------------------------------- scrub --- */

  function scrub(section) {
    var video = section.querySelector('video');
    var fig = section.querySelector('[data-vp]');
    var bar = section.querySelector('.bz-scrub-bar i');
    var track = section.querySelector('.bz-scrub-track');
    var on = false;
    var target = 0;
    var cur = 0;
    var running = false;
    var visible = false;

    function progress() {
      var r = track.getBoundingClientRect();
      var span = track.offsetHeight - window.innerHeight;
      return span > 0 ? Math.max(0, Math.min(1, -r.top / span)) : 0;
    }
    function frame() {
      running = false;
      if (!on || !video.duration) return;
      var p = progress();
      target = p * video.duration;
      cur += (target - cur) * 0.2;
      if (Math.abs(target - cur) < 0.012) cur = target;
      if (Math.abs(video.currentTime - cur) > 0.01) video.currentTime = cur;
      bar.style.transform = 'scaleX(' + p + ')';
      section.style.setProperty('--cap', String(Math.max(0, 1 - p / 0.1)));
      if (Math.abs(target - cur) > 0.012 && visible) tick();
    }
    function tick() {
      if (running) return;
      running = true;
      window.requestAnimationFrame(frame);
    }
    function enable() {
      if (on) return;
      on = true;
      section.classList.add('is-scrub');
      video.pause();
      video.removeAttribute('loop');
      cur = 0;
      tick();
    }
    function disable() {
      if (!on) return;
      on = false;
      section.classList.remove('is-scrub');
      section.style.removeProperty('--cap');
    }
    function layout() {
      if (!reduce && window.innerWidth >= 900 && window.innerHeight >= 560) enable();
      else disable();
    }

    video.muted = true;
    controls(fig, video, { audio: false, userPaused: false });
    layout();
    window.addEventListener('scroll', function () { if (on && visible) tick(); }, { passive: true });
    window.addEventListener('resize', layout);
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        visible = entries[0].isIntersecting;
        if (visible) tick();
      }, { rootMargin: '10% 0px' }).observe(track);
    } else {
      visible = true;
    }
    video.addEventListener('loadedmetadata', function () { if (on) tick(); });
  }

  Array.prototype.forEach.call(document.querySelectorAll('[data-scrub]'), scrub);
  Array.prototype.forEach.call(document.querySelectorAll('.bz-film--v [data-vp]'), function (f) { inline(f, true); });
})();
