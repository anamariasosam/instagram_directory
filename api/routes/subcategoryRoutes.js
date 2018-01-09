const express = require('express')
const subcategory = require('../controllers/subcategoryController')

const router = express.Router()

router.get('/subcategories', subcategory.findAll)
router.get('/subcategories/:subcategoryId/businesses', subcategory.business)
router.get('/subcategories/:subcategorySlug', subcategory.findOne)

module.exports = router
