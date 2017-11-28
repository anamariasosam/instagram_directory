var mongoose = require("mongoose"),
  Subcategory = mongoose.model("Subcategory");

exports.list_all_subcategories = function(req, res) {
  Subcategory.find({}, function(err, subcategory) {
    if (err) res.send(err);
    res.json(subcategory);
  });
};

exports.create_a_subcategory = function(req, res) {
  var new_subcategory = new Subcategory(req.body);
  new_subcategory.save(function(err, subcategory) {
    if (err) res.send(err);
    res.json(subcategory);
  });
};
