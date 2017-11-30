// later use this require('dotenv').config()
const mongoose = require('mongoose')
const keys = require("../config/keys")

mongoose.Promise = global.Promise

// this line allows const Category = mongoose.model('Category')
require("../api/models/category")

// this line allows const Subcategory = mongoose.model('Subcategory')
require("../api/models/subcategory")

// this line allows const Business = mongoose.model('Business')
require("../api/models/business")

const db = mongoose.connect(keys.mongoURI, {
  useMongoClient: true,
})

module.exports = db
