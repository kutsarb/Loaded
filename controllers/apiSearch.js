var db = require("../models");


module.exports = function(app) {
    app.get("/api/search/:loadNum", function(req, res) {
        
        db.Load.findAll({
            where: {
              loadNum: req.params.loadNum
            },
            include: [db.Driver]
          }).then(function(dbLoad) {
            res.json(dbLoad);
            console.log("finally")
          });


});
}   
