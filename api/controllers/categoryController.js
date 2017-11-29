var mongoose = require("mongoose"),
  Category = mongoose.model("Category");

exports.findAll = function(req, res) {
  Category.find(function(err, category) {
    if (err) {
      res
        .status(500)
        .send({ message: "Some error occurred while retrieving category." });
    } else {
      res.send(category);
    }
  });
};

exports.findOne = function(req, res) {
  Category.findById(req.params.categoryId, function(err, data) {
    if (err) {
      res.status(500).send({
        message: "Could not retrieve note with id " + req.params.categoryId
      });
    } else {
      res.send(data);
    }
  });
};

exports.create = function(req, res) {
  var category = new Category(req.body);

  category.save(function(err, category) {
    if (err) res.send(err);
    res.json(category);
  });
};
