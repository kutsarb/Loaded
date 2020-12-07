var db = require("../models");

module.exports = function(app) {
    app.get("/api/loads", function(req, res) {
      // Here we add an "include" property to our options in our findAll query
      // We set the value to an array of the models we want to include in a left outer join
      // In this case, just db.Post
      db.Load.findAll({
        include: [db.Driver]
      }).then(function(dbLoad) {
        res.json(dbLoad);
      });
    });
  
    app.get("/api/loads/:id", function(req, res) {
      // Here we add an "include" property to our options in our findOne query
      // We set the value to an array of the models we want to include in a left outer join
      // In this case, just db.Post
      db.Load.findAll({
        where: {
          id: req.params.id
        },
        include: [db.Driver]
      }).then(function(dbLoad) {
        res.json(dbLoad);
      });
    });
  
    app.post("/api/loads", function(req, res) {
      db.Load.create(req.body).then(function(dbLoad) {
        res.json(dbLoad);
      });
    });

    app.put("/api/loads", function(req, res) {
      db.Load.update(
        req.body,
        {
          where: {
            id: req.body.id
          }
        }).then(function(dbLoad) {
        res.json(dbLoad);
      });
    });
  
  
  };