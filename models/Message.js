// require in mongoose Node package
const mongoose = require("mongoose");

// Create the schema for the MongoDB database
const Schema = mongoose.Schema;

// Create the schema model for the database
const MessageSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    message: {
        type: String,
        required: true
    } 
});

// creates a Comments model with Mongoose using the CommentSchema
const Message = mongoose.model("Message", MessageSchema);

// export the model
module.exports = Message;