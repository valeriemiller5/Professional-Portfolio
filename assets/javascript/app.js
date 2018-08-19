$(document).ready(function () {
    // Firebase Admin to store messages sent via the 'Contact Me' form
    var admin = require("firebase-admin");

    var serviceAccount = require("path/to/serviceAccountKey.json");
    
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://professional-portfolio-2864b.firebaseio.com"
    });

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

