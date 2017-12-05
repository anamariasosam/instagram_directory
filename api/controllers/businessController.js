const mongoose = require('mongoose')
const Business = mongoose.model('Business')
const utils = require('../handlers/utils')

exports.findAll = function(req, res) {
  Business.find(function(err, business) {
    utils.show(res, err, business)
  })
}

exports.findOne = function(req, res) {
  Business.findById(req.params.businessId)
    .populate('subcategory', 'name')
    .exec(function(err, business) {
      utils.show(res, err, business)
    })
}
