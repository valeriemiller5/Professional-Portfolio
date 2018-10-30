$(document).ready(function () {
    // Hides each section when user opens main page
    $("#bioPage").hide();
    $("#contactInfo").hide();
    $(".projects-container").hide();

    // When the personalized logo is clicked the home page reloads (i.e. all sections are hidden)
    $(".menu-text").on("click", function() {
        window.location.reload();
    });

    // Shows Bio page on click, hides the other sections
    $("#aboutMe").on("click", function(){
        $("#heading").hide();
        $("#contactInfo").hide();
        $(".projects-container").hide();
        $("#bioPage").show();
    });

    // Shows Contact Form/Information on click, hides the other sections
    $("#contactMe").on("click", function() {
        $("#heading").hide();
        $("#bioPage").hide();
        $(".projects-container").hide();
        $("#contactInfo").show();
    });

    // Shows projects on click, hides the other sections
    $("#portfolio").on("click", function() {
        $("#heading").hide();
        $("#bioPage").hide();
        $("#contactInfo").hide();
        $(".projects-container").show();
    })

    // Firebase setup to store messages sent via the 'Contact Me' form
    var config = {
        apiKey: "AIzaSyBIOX3DPPRLci_6Hx28Vuzvytm67Nha3LQ",
        authDomain: "professional-portfolio-2864b.firebaseapp.com",
        databaseURL: "https://professional-portfolio-2864b.firebaseio.com",
        projectId: "professional-portfolio-2864b",
        storageBucket: "professional-portfolio-2864b.appspot.com",
        messagingSenderId: "385053311755"
      };
      firebase.initializeApp(config);

    var database = firebase.database();
    
    // When contact information is entered into the form, it is submitted to the Firebase database
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
        
        database.ref().push(newContact);

        database.ref().on("child_added", function(snapshot) {
            console.log(snapshot.val());
            console.log(snapshot.val().name);
            console.log(snapshot.val().email);
            console.log(snapshot.val().message);
          }, function(errorObject) {
            console.log("The read failed: " + errorObject.code);
          });
          
          // Resets the contact form to clear each field
          $("#contactInfo").trigger("reset");
      });
});