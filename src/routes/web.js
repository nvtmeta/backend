const express = require('express')
const { getHomePage, postCreateUser } = require('../controllers/controller')
const router = express.Router()


//declare route
router.get('/', getHomePage)


// post cretae user
router.post('/create', postCreateUser)
module.exports = router