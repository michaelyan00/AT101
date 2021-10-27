$(document).ready(function() {
//    $("p").hover(changeParStyle); 
    var nounARRAY = ["Toilet", "Antarctica", "Mars"];

    $("button").click(function() {
        $(".noun").each(function() {
            var randomIndex = Math.floor(Math.random() * nounARRAY.length);
            $(this).text(nounARRAY[randomIndex]);
        });
            
    });
});
    // function changeParStyle() {
    //     $("p").toggleClass("clicked");
    // }
