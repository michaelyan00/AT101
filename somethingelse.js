$(document).ready(function() {
//    $("p").hover(changeParStyle); 
    var nounARRAY = ["Toilet", "Antarctic", "Mars"];
    var AccARRAY2 = ["flying", "scubadiving", "racing", "jousting"]
    var nounARRAY3 = ["Galactic Federation", "Sewage Containment Company"]
    var nounARRAY4 = ["yelled", "hissed", "squealed"]
    var nounARRAY5 = ["unresolved"]
    var nounARRAY6 = [" underwater"]

    $("button").click(function() {
        $(".noun").each(function() {
            var randomIndex = Math.floor(Math.random() * nounARRAY.length);
            $(this).text(nounARRAY[randomIndex]);
        });
    });

    $("button").click(function() {
        $(".noun2").each(function() {
            var randomIndex = Math.floor(Math.random() * AccARRAY2.length);
            $(this).text(AccARRAY2[randomIndex]);
        });
    }); 
    
    $("button").click(function() {
        $(".noun3").each(function() {
            var randomIndex = Math.floor(Math.random() * nounARRAY3.length);
            $(this).text(nounARRAY3[randomIndex]);
        });
    }); 

    $("button").click(function() {
        $(".noun4").each(function() {
            var randomIndex = Math.floor(Math.random() * nounARRAY4.length);
            $(this).text(nounARRAY4[randomIndex]);
        });
    }); 
    
    $("button").click(function() {
        $(".noun5").each(function() {
            var randomIndex = Math.floor(Math.random() * nounARRAY5.length);
            $(this).text(nounARRAY5[randomIndex]);
        });
    }); 
    $("button").click(function() {
        $(".noun6").each(function() {
            var randomIndex = Math.floor(Math.random() * nounARRAY6.length);
            $(this).text(nounARRAY6[randomIndex]);
        });
    }); 

});
    // function changeParStyle() {
    //     $("p").toggleClass("clicked");
    // }
