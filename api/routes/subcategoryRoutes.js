const express = require('express')
const subcategory = require("../controllers/subcategoryController")

const router = express.Router()

router.get("/subcategories", subcategory.findAll)
router.post("/subcategories", subcategory.create)

module.exports = router
