var  = require("../models/loads.js");

router.get("/", function(req, res) {
    cat.all(function(data) {
      var hbsObject = {
        cats: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });