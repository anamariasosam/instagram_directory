const db = require('../db/db')
const mongoose = require('mongoose')
const assert = require('assert')
const Subcategory = require('../api/models/subcategory')
const Business = require('../api/models/business')
const subcategoriesData = require('./subcategories.json')
const businessesData = require('./businesses.json')

// function createCollections(model, data, number) {
//   model.collection.insertMany(data, function(err,r) {
//     assert.equal(null, err);
//     assert.equal(number, r.insertedCount);
//     db.close();
//     console.log(r.insertedCount + " collections added")
//   })
// }

db.then(() => {
  // Subcategory.find().remove();
  // // Business.find().remove();
  // createCollections(Subcategory, subcategoriesData, 17)
  // // createCollections(Business, businessesData, 141)

  getSubcategoryId('Bebés & Niños', (err, id) => {
    console.log(id)
  })
})

function getSubcategoryId(name, callback) {
  Subcategory.findOne({ name }, '_id', (err, subcategory) => callback(null, subcategory._id))
}

// var id = new mongoose.Types.ObjectId(stringId);
