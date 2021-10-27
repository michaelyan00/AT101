$(document).read(function() {
    $("p").hover(changeParStyle);

    function changeParStyle() {
        $(this).toggleClass("clicked");
    }
});