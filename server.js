// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

// Requiring our models for syncing
// var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
require("./controllers/htmlRoutes.js")(app);
require("./controllers/apiLoadRoutes.js")(app);
require("./controllers/apiLoadRoutes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
