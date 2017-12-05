const mongoose = require('mongoose')
const Subcategory = mongoose.model('Subcategory')
const Business = mongoose.model('Business')
const utils = require('../handlers/utils')

exports.findAll = function(req, res) {
  Subcategory.find(function(err, subcategory) {
    utils.show(res, err, subcategory)
  })
}

exports.business = function(req, res) {
  Business.find({ subcategory: req.params.subcategoryId }).exec(function(err, business) {
    utils.show(res, err, business)
  })
}
