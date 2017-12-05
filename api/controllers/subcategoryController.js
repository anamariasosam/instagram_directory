const mongoose = require('mongoose')
const Subcategory = mongoose.model('Subcategory')
const Category = mongoose.model('Category')
const Business = mongoose.model('Business')
const utils = require('../handlers/utils')

exports.findAll = function(req, res) {
  Subcategory.find().exec(function(err, subcategory) {
    utils.show(res, err, subcategory)
  })
}

exports.create = function(req, res) {
  const { name, categoryId } = req.body
  const category = new Category({ _id: categoryId })
  const subcategory = new Subcategory({
    name,
    category,
  })

  subcategory.save(function(err, subcategory) {
    utils.show(res, err, subcategory)
  })
}

exports.business = function(req, res) {
  console.log(req.params.subcategoryId)
  Business.find({ subcategory: req.params.subcategoryId }).exec(function(err, business) {
    utils.show(res, err, business)
  })
}
