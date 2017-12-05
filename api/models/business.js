const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const BusinessSchema = new Schema({
  instagram: String,
  phone: String,
  image: String,
  subcategory: {
    type: ObjectId,
    ref: 'Subcategory',
    required: true,
  },
})

BusinessSchema.virtual('url').get(function() {
  return '/business/' + this._id
})

module.exports = mongoose.model('Business', BusinessSchema)
