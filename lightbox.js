/* Apps No Ads - the screenshot lightbox (Sudoku 2.0.0 pages, 2026-11-06).
   No library, nothing loaded from anywhere else. Any link with class "lb" that points at an image opens it in a
   <dialog>: Escape or the close button closes it, Left / Right (or the buttons) step through the images of the same
   gallery, and focus goes back to the picture that opened it. Without JavaScript the link simply opens the image. */
(function () {
  'use strict';
  if (typeof HTMLDialogElement === 'undefined') return; // very old browsers: the plain links still work

  var dlg = document.createElement('dialog');
  dlg.className = 'lightbox';
  dlg.setAttribute('aria-label', 'Screenshot');
  dlg.innerHTML =
    '<figure><img alt=""><figcaption></figcaption></figure>' +
    '<button type="button" class="lb-close" aria-label="Close">&times;</button>' +
    '<button type="button" class="lb-prev" aria-label="Previous picture">&#8249;</button>' +
    '<button type="button" class="lb-next" aria-label="Next picture">&#8250;</button>';
  document.body.appendChild(dlg);
  var img = dlg.querySelector('img');
  var cap = dlg.querySelector('figcaption');
  var group = [];
  var index = 0;
  var opener = null;

  function show(i) {
    index = (i + group.length) % group.length;
    var a = group[index];
    var thumb = a.querySelector('img');
    img.src = a.getAttribute('href');
    img.alt = thumb ? thumb.alt : '';
    cap.textContent = a.getAttribute('data-cap') || (thumb ? thumb.alt : '');
    var many = group.length > 1;
    dlg.querySelector('.lb-prev').hidden = !many;
    dlg.querySelector('.lb-next').hidden = !many;
  }

  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a.lb');
    if (!a || e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    var box = a.closest('[data-gallery]') || document.body;
    group = Array.prototype.slice.call(box.querySelectorAll('a.lb'));
    opener = a;
    show(group.indexOf(a));
    dlg.showModal();
    dlg.querySelector('.lb-close').focus();
  });

  dlg.querySelector('.lb-close').addEventListener('click', function () { dlg.close(); });
  dlg.querySelector('.lb-prev').addEventListener('click', function () { show(index - 1); });
  dlg.querySelector('.lb-next').addEventListener('click', function () { show(index + 1); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); }); // a tap outside the picture
  dlg.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') { show(index - 1); e.preventDefault(); }
    else if (e.key === 'ArrowRight') { show(index + 1); e.preventDefault(); }
  });
  dlg.addEventListener('close', function () {
    img.removeAttribute('src');
    if (opener) opener.focus();
  });
})();
