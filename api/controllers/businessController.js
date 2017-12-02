const mongoose = require('mongoose')
const Business = mongoose.model('Business')
const Subcategory = mongoose.model('Subcategory')
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

exports.create = function(req, res) {
  const { name, instagram, subcategoryId } = req.body
  const subcategory = new Subcategory({ _id: subcategoryId })
  const business = new Business({
    name,
    instagram,
    subcategory,
  })

  business.save(function(err, business) {
    utils.show(res, err, business)
  })
}
