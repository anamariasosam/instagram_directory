const db = require('../db/db')
const ObjectId = require('mongoose').Types.ObjectId
const assert = require('assert')

const Category = require('../api/models/category')
const Subcategory = require('../api/models/subcategory')
const Business = require('../api/models/business')

const subcategoriesData = require('./subcategories.json')
const businessesData = require('./businesses.json')

// Add the categoryId to all subcategories
function addCategoryId(subcategories) {
  return subcategories.map(async subcategory => {
    const { _id: id } = await Category.findOne({ name: 'Tiendas' })
    subcategory.category = id
    return subcategory
  })
}

// Add the subcategoryId to all businesses
function addsubcategoriesId(businesses) {
  return businesses.map(async business => {
    const { _id: id } = await Subcategory.findOne({ name: business.subcategory })
    business.subcategory = id
    return business
  })
}

db.then(async () => {
  await Subcategory.find().remove()
  const subcategories = await Promise.all(addCategoryId(subcategoriesData))
  await Subcategory.insertMany(subcategories)

  await Business.find().remove()
  const businesses = await Promise.all(addsubcategoriesId(businessesData))
  await Business.insertMany(businesses)

  process.exit(1)
})
