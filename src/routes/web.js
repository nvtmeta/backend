const express = require('express')
const { getHomePage, postCreateUser, getCreatePage, putUpdateUser } = require('../controllers/controller')
const router = express.Router()


//declare route
router.get('/', getHomePage)

router.get('/createUser', getCreatePage)
// post create user
router.post('/create', postCreateUser)

// update user
router.get('/update/:id', putUpdateUser)

module.exports = router