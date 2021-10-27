$(document).ready(function() {
//    $("p").hover(changeParStyle); 
    var nounARRAY = ["Toilet", "Antarctica", "Mars"];
    var nounARRAY2 = ["flying", "scubadiving", "racing", "jousting"]

    $("button").click(function() {
        $(".noun").each(function() {
            var randomIndex = Math.floor(Math.random() * nounARRAY.length);
            $(this).text(nounARRAY[randomIndex]);
        });

    $("button").click(function() {
        $(".noun2").each(function() {
            var randomIndex = Math.floor(Math.random() * nounARRAY2.length);
            $(this).text(nounARRAY2[randomIndex]);
        });
    }); 
    });
});
    // function changeParStyle() {
    //     $("p").toggleClass("clicked");
    // }
