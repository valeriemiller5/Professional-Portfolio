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

    // Firebase Admin to store messages sent via the 'Contact Me' form
    var config = {
        apiKey: "AIzaSyBIOX3DPPRLci_6Hx28Vuzvytm67Nha3LQ",
        authDomain: "professional-portfolio-2864b.firebaseapp.com",
        databaseURL: "https://professional-portfolio-2864b.firebaseio.com",
        projectId: "professional-portfolio-2864b",
        storageBucket: "professional-portfolio-2864b.appspot.com",
        messagingSenderId: "385053311755"
      };
      firebase.initializeApp(config);

    //var admin = require("firebase-admin");
    var database = firebase.database();
    //var serviceAccount = require("path/to/serviceAccountKey.json");
    
    //admin.initializeApp({
    //  credential: admin.credential.cert(serviceAccount),
    //  databaseURL: "https://professional-portfolio-2864b.firebaseio.com"
    //});
    
    $("#submit").on("click", function(event) {
        event.preventDefault();
        var name = $("#name").val().trim();
        var email = $("#email").val().trim();
        var message = $("#message").val().trim();
        var newContact = {
          name: name,
          email: email,
          message: message
        };
        
        database.ref().set(newContact);

        database.ref().on("value", function(snapshot) {
            console.log(snapshot.val());
            console.log(snapshot.val().name);
            console.log(snapshot.val().email);
            console.log(snapshot.val().message);
          }, function(errorObject) {
            console.log("The read failed: " + errorObject.code);
          });
      });
});