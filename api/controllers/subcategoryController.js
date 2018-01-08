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
  Subcategory.findOne({ slug: req.params.subcategorySlug }).exec(function(err, subcategory) {
    if (!subcategory) {
      res.status(500).send({ message: 'Some error occurred while retrieving data.' })
    } else {
      const id = subcategory._id
      Business.find({ subcategory: id })
        .sort({ name: 1 })
        .exec(function(err, business) {
          utils.show(res, err, business)
        })
    }
  })
}
