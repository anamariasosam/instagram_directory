const mongoose = require('mongoose')
const Subcategory = mongoose.model('Subcategory')
const Category = mongoose.model('Category')
const utils = require('../handlers/utils')

exports.findAll = function(req, res) {
  Subcategory.find()
    .populate('category')
    .exec(function(err, subcategory) {
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
