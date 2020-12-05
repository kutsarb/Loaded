// var path = require("path");
// var express = require("express");

// var app = express();

var db = require("../models")

module.exports = function(app) {

    // app.get("/", function (req, res) {
    //     db.Load.findAll({})
    //         .then(function (results) {
    //             hbsObject = {
    //                 load: results
    //             }
    //             console.log(hbsObject)
    //         }).then(res.render("index"));
    // });

    
    // app.get("/", function (req, res) {
    //     db({ 
    //     }).then(function (data) {
    //             hbsObject = {
    //                 drivers: data
    //             };
    //             console.log(hbsObject);
    //         }).then(res.render("index", hbsObject));
        

    // });

    app.get("/", function (req, res) {
        db.Load.findAll({
            include: [{model:db.Driver}]
        }).then(function (data) {
                hbsObject = {
                    load: data
                };
                // console.log(hbsObject);
            }).then(res.render("index", hbsObject));
        

    });

    app.get("/api/search", function (req, res) {
    res.render("search");
    });

   

}