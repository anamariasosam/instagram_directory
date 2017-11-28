var mongoose = require("mongoose"),
  Category = mongoose.model("Category");

exports.list_all_categories = function(req, res) {
  Category.find({}, function(err, category) {
    if (err) res.send(err);
    res.json(category);
  });
};

exports.create_a_category = function(req, res) {
  var new_category = new Category(req.body);
  new_category.save(function(err, category) {
    if (err) res.send(err);
    res.json(category);
  });
};
