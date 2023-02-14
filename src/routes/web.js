const express = require('express')
const { getHomePage } = require('../controllers/controller')
const router = express.Router()


//declare route
router.get('/', getHomePage)

module.exports = router