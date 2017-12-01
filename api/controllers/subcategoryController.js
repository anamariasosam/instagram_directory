const mongoose = require('mongoose')
const Subcategory = mongoose.model('Subcategory')
const Category = mongoose.model('Category')

exports.findAll = function(req, res) {
  Subcategory.find()
    .populate('category')
    .then(subcategory => {
      res.send(subcategory)
    })
    .catch(err => {
      res.status(500).send({ message: err })
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
    if (err) res.send(err)
    res.json(subcategory)
  })
}
