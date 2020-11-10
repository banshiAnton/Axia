(function(w, d, searx) {
  'use strict';

  searx.ready(function() {
    searx.image_thumbnail_layout = new searx.ImageLayout('#urls', '#urls .result-images', 'img.image_thumbnail', 200);
    searx.image_thumbnail_layout.watch();

    searx.on('.btn-collapse', 'click', function(event) {
      var btnLabelCollapsed = this.getAttribute('data-btn-text-collapsed');
      var btnLabelNotCollapsed = this.getAttribute('data-btn-text-not-collapsed');
      var target = this.getAttribute('data-target');
      var targetElement = d.querySelector(target);
      var html = this.innerHTML;
      if (this.classList.contains('collapsed')) {
        html = html.replace(btnLabelCollapsed, btnLabelNotCollapsed);
      } else {
        html = html.replace(btnLabelNotCollapsed, btnLabelCollapsed);
      }
      this.innerHTML = html;
      this.classList.toggle('collapsed');
      targetElement.classList.toggle('invisible');
    });

    searx.on('.media-loader', 'click', function(event) {
      var target = this.getAttribute('data-target');
      var iframe_load = d.querySelector(target + ' > iframe');
      var srctest = iframe_load.getAttribute('src');
      if (srctest === null || srctest === undefined || srctest === false) {
        iframe_load.setAttribute('src', iframe_load.getAttribute('data-src'));
      }
    });

    w.addEventListener('scroll', function() {
      var e = d.getElementById('backToTop'),
      scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (e !== null) {
        if (scrollTop >= 200) {
          e.style.opacity = 1;
        } else {
          e.style.opacity = 0;
        }
      }
    });

  });

})(window, document, window.searx);
