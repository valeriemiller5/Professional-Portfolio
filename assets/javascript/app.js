$(document).ready(function () { 

    $("#bioPage").hide();
    $("#contactForm").hide();
    $(".projects-container").hide();

    $("#aboutMe").on("click", function(){
        $("#heading").hide();
        $("#contactForm").hide();
        $(".projects-container").hide();
        $("#bioPage").show();
    });

    $("#contactMe").on("click", function() {
        $("#heading").hide();
        $("#bioPage").hide();
        $(".projects-container").hide();
        $("#contactForm").show();
        document.body.style.backgroundImage = "url('../images/contact-background.jpg')";
    });

    $("#portfolio").on("click", function() {
        $("#heading").hide();
        $("#bioPage").hide();
        $("#contactForm").hide();
        $(".projects-container").show();
    })
})

