const db = require('../db/db')
const assert = require('assert')
const Subcategory = require('../api/models/subcategory')
const Business = require('../api/models/business')
const subcategories = require('./subcategories.json')
const businesses = require('./businesses.json')

db.then(() => {
  // Subcategory.collection.insertMany(subcategories, function(err,r) {
  //   assert.equal(null, err);
  //   assert.equal(17, r.insertedCount);
  //   db.close();
  //   console.log(r.insertedCount + " collections added")
  // })
  Business.collection.insertMany(businesses, function(err, r) {
    assert.equal(null, err)
    assert.equal(141, r.insertedCount)
    db.close()
    console.log(r.insertedCount + ' collections added')
  })
})
