var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var logger = require("morgan");
var path = require("path");

var PORT = process.env.PORT || 8000;

var Message = require("./models/Message.js");

var app = express();

// Configure our app for morgan and body parsing with express.json and express.urlEncoded
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ***********MONGOOSE SETUP FOR HEROKU DEPLOYMENT***********
// mongoose.connect("mongodb://localhost/newsdatabase", { useNewUrlParser: true });
// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/messagedb";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});
// ******************************************************************

// Routes
app.post("/", function (req, res) {
  var message = new Message(req.body);

  Message.create(message)
  .then(function(dbMessage) {
    // return console.log(dbMessage);
    res.redirect("/index.html")
    res.end();
  })
  .catch(function(err) {
      return console.log(err);
  });
});

// Start the server
app.listen(PORT, function() {
  console.log("Server listening on port " + PORT + ".");
});
