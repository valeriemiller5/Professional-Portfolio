$(document).ready(function () { 

    $("#bioPage").hide();
    $("#contactForm").hide();
    $(".projects-container").hide();

    $("#aboutMe").on("click", function(){
        $("#heading").hide();
        $("#contactForm").hide();
        $(".projects-container").hide();
        $("#bioPage").show();
        //$( ".hero-full-screen" ).fadeTo( "fast" , 0.5, function() {
        //    console.log("animation complete");
        //  });
    });

    $("#contactMe").on("click", function() {
        $("#heading").hide();
        $("#bioPage").hide();
        $(".projects-container").hide();
        $("#contactForm").show();
    });

    $("#portfolio").on("click", function() {
        $("#heading").hide();
        $("#bioPage").hide();
        $("#contactForm").hide();
        $(".projects-container").show();
    })
})

