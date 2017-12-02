const mongoose = require('mongoose')
const Category = mongoose.model('Category')
const Subcategory = mongoose.model('Subcategory')
const utils = require('../handlers/utils')

exports.findAll = function(req, res) {
  Category.find(function(err, category) {
    utils.show(res, err, category)
  })
}

exports.findOne = function(req, res) {
  Category.findById(req.params.categoryId, function(err, category) {
    utils.show(res, err, category)
  })
}

exports.create = function(req, res) {
  const { name } = req.body
  const category = new Category({ name })

  category.save(function(err, category) {
    utils.show(res, err, category)
  })
}

exports.subcategories = function(req, res) {
  Subcategory.find({ category: req.params.categoryId }).exec(function(err, category) {
    utils.show(res, err, category)
  })
}
