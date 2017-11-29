const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const SubcategorySchema = new Schema({
  name: String,
  category: {
    type: ObjectId,
    ref: 'Category',
    required: true,
  },
})

SubcategorySchema.virtual('url').get(function() {
  return '/subcategory/' + this._id
})

module.exports = mongoose.model('Subcategory', SubcategorySchema)
