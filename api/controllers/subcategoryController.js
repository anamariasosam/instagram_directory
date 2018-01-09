const mongoose = require('mongoose')
const Subcategory = mongoose.model('Subcategory')
const Business = mongoose.model('Business')
const utils = require('../handlers/utils')

exports.findAll = function(req, res) {
  Subcategory.find(function(err, subcategory) {
    utils.show(res, err, subcategory)
  })
}

exports.findOne = function(req, res) {
  Subcategory.findOne({ slug: req.params.subcategorySlug }).exec(function(err, subcategory) {
    utils.show(res, err, subcategory)
  })
}

exports.business = function(req, res) {
  Business.find({ subcategory: req.params.subcategoryId })
    .sort({ name: 1 })
    .exec(function(err, business) {
      utils.show(res, err, business)
    })
}
