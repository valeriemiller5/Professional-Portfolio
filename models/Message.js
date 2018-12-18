// require in mongoose Node package
var mongoose = require("mongoose");

// Create the schema for the MongoDB database
var Schema = mongoose.Schema;

// Create the schema model for the database
var MessageSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    } 
});

// creates a Comments model with Mongoose using the CommentSchema
var Message = mongoose.model("Message", MessageSchema);

// export the model
module.exports = Message;