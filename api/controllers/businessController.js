const mongoose = require('mongoose')
const Business = mongoose.model('Business')

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
  var business = new Business(req.body)

  business.save(function(err, business) {
    if (err) res.send(err)
    res.json(business)
  })
}
