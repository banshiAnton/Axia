$('#q').keypress(function (e) {
    if (e.which == 13) {
        $('form#search_form').submit();
    }
});

function Loading() {
    $('#main_results').html('<div class="loading-spinner"></div>');
}
var getIcon = function (a) {
    if (a == undefined) a = "";
    else a = a.replace(/[^a-zA-Z0-9 ]/g, '');

    if (a == 'files') return 'folder-open';
    if (a == 'images') return 'picture';
    if (a == 'it') return 'cloud';
    if (a == 'map') return 'map-marker';
    if (a == 'music') return 'music';
    if (a == 'news') return 'flash';
    if (a == 'science') return 'filter';
    if (a == 'social media') return 'user';
    if (a == 'videos') return 'facetime-video';
    return 'search';
}
function cngIcon(a) {
    Loading();
    var A = $('#btnSrc');
    A.removeClass();
    A.addClass("glyphicon");
    A.addClass('glyphicon-' + getIcon(a));
}

var A = $('#btnSrc2');
var B = A.data('cat');
var C = getIcon(B);
A.addClass("glyphicon");
A.addClass('glyphicon-' + C);


