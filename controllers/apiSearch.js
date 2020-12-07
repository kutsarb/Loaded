var db = require("../models");


module.exports = function (app) {
  app.get("/api/search/loadNum/:loadNum", function (req, res) {

    db.Load.findAll({
      where: {
        loadNum: req.params.loadNum
      },
      include: [db.Driver]
    }).then(function (dbLoad) {
      res.json(dbLoad);
      console.log("finally")
    });
  });

  app.get("/api/search/broker/:broker", function (req, res) {

    db.Load.findAll({
      where: {
        broker: req.params.broker
      },
      include: [db.Driver]
    }).then(function (dbLoad) {
      res.json(dbLoad);
      console.log("finally")
    });
  });

}   
