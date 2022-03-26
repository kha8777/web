$(document).ready(function() {
    $("#search-box").hover(function() {
        $("#search-box__input").css({"width": "320px", "padding": "0 12px"});
        $("#search-box__input").addClass('search-box__expanded');
    });
});

