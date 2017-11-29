const express = require('express')
const business = require("../controllers/businessController")

const router = express.Router()

router.get("/business", business.findAll)
router.post("/business", business.create)

router.get("/business/:businessId", business.findOne)

module.exports = router
