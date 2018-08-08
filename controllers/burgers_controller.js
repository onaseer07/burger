var express = require("express");

var router = express.Router();

// Import db functions
var burgers = require("../models/burger.js");

// Createing all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burgers.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  burgers.insertOne("burger_name",req.body.burger_name, function() {
    // reload the page to display the inserted burger
    res.redirect('/');
  });
});

router.put("/:id", function(req, res) {
  var idEqualTo = req.params.id;

  console.log("WHERE ID = ", idEqualTo);

  burgers.updateOne({devoured: req.body.devoured}, idEqualTo, function() {
    //reload the page to display the update
    res.redirect('/');
  });
});

// Export routes for server.js to use.
module.exports = router;
