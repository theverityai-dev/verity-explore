/* Copy buttons on the team content kit pages. */
document.addEventListener('click', function (e) {
  var b = e.target.closest && e.target.closest('.kit-copy');
  if (!b) return;
  var text = b.getAttribute('data-copy') || '';
  var done = function () {
    var old = b.textContent;
    b.textContent = 'Copied';
    setTimeout(function () { b.textContent = old; }, 1400);
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done, function () {});
  } else {
    var t = document.createElement('textarea');
    t.value = text;
    document.body.appendChild(t);
    t.select();
    try { document.execCommand('copy'); done(); } catch (err) {}
    document.body.removeChild(t);
  }
});
