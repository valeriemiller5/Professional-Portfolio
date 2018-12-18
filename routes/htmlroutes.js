var db = require("../models");

module.exports = function(app) {
    app.post("/", function (req, res) {
        db.Message.create(req.body)
        .then(function(dbMessage) {
            res.json(dbMessage);
        })
        .catch(function(err) {
            return console.log(err);
        });
    });
} ;