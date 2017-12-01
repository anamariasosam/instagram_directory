const express = require('express')
const category = require('../controllers/categoryController')

const router = express.Router()

router.get('/categories/:categoryId', category.findOne)
router.get('/categories/:categoryId/subcategories', category.subcategories)
router.get('/categories', category.findAll)
router.post('/categories', category.create)

module.exports = router
