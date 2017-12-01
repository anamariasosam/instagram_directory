const mongoose = require('mongoose')
const Business = mongoose.model('Business')
const Subcategory = mongoose.model('Subcategory')

exports.findAll = function(req, res) {
  Business.find(function(err, business) {
    if (err) {
      res.status(500).send({ message: 'Some error occurred while retrieving business.' })
    } else {
      res.send(business)
    }
  })
}

exports.findOne = function(req, res) {
  Business.findById(req.params.businessId)
    .populate('subcategory', 'name')
    .exec(function(err, business) {
      if (err) {
        res.status(500).send({
          message: 'Could not retrieve note with id ' + req.params.businessId,
        })
      } else {
        res.send(business)
      }
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
    if (err) res.send(err)
    res.json(business)
  })
}
