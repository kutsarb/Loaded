var db = require("../models");

module.exports = function(app) {
 
  

  app.get("/api/driver", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Load.findAll({
      include: [db.Driver]
    }).then(function(dbDriver) {
      res.json(dbDriver);
    });
  });

  app.get("/api/authors/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Driver.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Load]
    }).then(function(dbDriver) {
      res.json(dbDriver);
    });
  });

  app.post("/api/driver", function(req, res) {
    db.Driver.create(req.body).then(function(dbDriver) {
      res.json(dbDriver);
    });
  });


};