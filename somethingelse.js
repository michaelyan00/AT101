$(document).ready(function() {
    $("p").click(changeParStyle); 

    function changeParStyle() {
        $("p").addClass("clicked");
    }
});