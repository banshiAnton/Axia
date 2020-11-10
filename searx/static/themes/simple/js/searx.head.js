(function(w, d) {
    'use strict';

    // add data- properties
    var script = d.currentScript  || (function() {
        var scripts = d.getElementsByTagName('script');
        return scripts[scripts.length - 1];
    })();

    // try to detect touch screen
    w.searx = {
        touch: (("ontouchstart" in w) || w.DocumentTouch && document instanceof DocumentTouch) || false,
        method: script.getAttribute('data-method'),
        autocompleter: script.getAttribute('data-autocompleter') === 'true',
        search_on_category_select: script.getAttribute('data-search-on-category-select') === 'true',
        infinite_scroll: script.getAttribute('data-infinite-scroll') === 'true',
        static_path: script.getAttribute('data-static-path'),
        no_item_found: script.getAttribute('data-no-item-found')
    }

    // update the css
    d.getElementsByTagName("html")[0].className = (w.searx.touch)?"js touch":"js";
})(window, document);