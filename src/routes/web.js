const express = require('express')
const { getHomePage, postCreateUser, getCreatePage } = require('../controllers/controller')
const router = express.Router()


//declare route
router.get('/', getHomePage)

router.get('/createUser', getCreatePage)
// post cretae user
router.post('/create', postCreateUser)
module.exports = router