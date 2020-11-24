// var path = require("path");
// var express = require("express");

// var app = express();

var db = require("../models")

module.exports = function(app) {

    app.get("/", function(req, res) {
        db.Driver.findAll({})
        .then(function (results){
            hbsObject = {
                drivers: results
            }
        }).then(res.render("index"));
    });
};