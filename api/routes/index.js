const express = require('express')

const categoryRoutes = require('./categoryRoutes')
const businessRoutes = require('./businessRoutes')
const subcategoryRoutes = require('./subcategoryRoutes')

const router = express.Router()

router.use('/api', categoryRoutes)
router.use('/api', subcategoryRoutes)
router.use('/api', businessRoutes)

module.exports = router
