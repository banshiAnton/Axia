const formSelector = '#search_form_result'
const inputSearchSelector = '#search_input'
$(document).ready(function() {
    if($(inputSearchSelector).length) {
        $('#categories label').click(function(e) {
            $('#categories input[type="checkbox"]').each(function(i, checkbox) {
                $(checkbox).prop('checked', false);
            });
            $(document.getElementById($(this).attr("for"))).prop('checked', true);
            if($(inputSearchSelector).val()) {
                if (getHttpRequest() == "GET") {
                    $(formSelector).attr('action', $(formSelector).serialize());
                }
                $(formSelector).submit();
            }
            return false;
        });
        $('#time-range').change(function(e) {
            if($(inputSearchSelector).val()) {
                if (getHttpRequest() == "GET") {
                    $(formSelector).attr('action', $(formSelector).serialize());
                }
                $(formSelector).submit();
            }
        });
        $('#language').change(function(e) {
            if($(inputSearchSelector).val()) {
                if (getHttpRequest() == "GET") {
                    $(formSelector).attr('action', $(formSelector).serialize());
                }
                $(formSelector).submit();
            }
        });
    }
});

function getHttpRequest() {
    httpRequest = "POST";
    urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('method')) {
        httpRequest = urlParams.get('method');
    }
    return httpRequest;
}
