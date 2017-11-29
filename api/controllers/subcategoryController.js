var mongoose = require("mongoose"),
  Subcategory = mongoose.model("Subcategory");

exports.findAll = function(req, res) {
  Subcategory.find(function(err, subcategory) {
    if (err) {
      res
        .status(500)
        .send({ message: "Some error occurred while retrieving subcategory." });
    } else {
      res.send(subcategory);
    }
  });
};

exports.create = function(req, res) {
  var subcategory = new Subcategory(req.body);

  subcategory.save(function(err, subcategory) {
    if (err) res.send(err);
    res.json(subcategory);
  });
};
