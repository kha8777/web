$(document).ready(function() {
    $("#search-box").hover(function() {
        $("#search-box__input").css({"width": "320px", "padding": "0 12px"});
        $("#search-box__input").addClass('search-box__expanded');
    });
});

document.addEventListener('click', function(e) {
    var target = e.target;
    var input = document.getElementById('search-box__input');
    if (target.id != 'search-box__input') {
        input.style.width = '0';
        input.style.padding = '0';
    }
}, false);