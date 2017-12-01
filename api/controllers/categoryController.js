const mongoose = require('mongoose')
const Category = mongoose.model('Category')
const Subcategory = mongoose.model('Subcategory')

exports.findAll = function(req, res) {
  Category.find(function(err, category) {
    if (err) {
      res.status(500).send({ message: 'Some error occurred while retrieving category.' })
    } else {
      res.send(category)
    }
  })
}

exports.findOne = function(req, res) {
  Category.findById(req.params.categoryId, function(err, data) {
    if (err) {
      res.status(500).send({
        message: 'Could not retrieve note with id ' + req.params.categoryId,
      })
    } else {
      res.send(data)
    }
  })
}

exports.create = function(req, res) {
  const { name } = req.body
  const category = new Category({ name })

  category.save(function(err, category) {
    if (err) res.send(err)
    res.json(category)
  })
}

exports.subcategories = function(req, res) {
  Subcategory.find({ category: req.params.categoryId })
    .then(subcategory => {
      res.send(subcategory)
    })
    .catch(err => {
      res.status(500).send({ message: err })
    })
}
