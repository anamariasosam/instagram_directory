const express = require('express')
const subcategory = require('../controllers/subcategoryController')

const router = express.Router()

router.get('/subcategories', subcategory.findAll)
router.post('/subcategories', subcategory.create)
router.get('/subcategories/:subcategoryId/businesses', subcategory.business)

module.exports = router
