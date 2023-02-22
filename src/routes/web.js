const express = require('express')
const { getHomePage, postCreateUser, getCreatePage, getEditUser, putUpdateUser } = require('../controllers/controller')
const router = express.Router()


//declare route
router.get('/', getHomePage)

router.get('/createUser', getCreatePage)
// post create user
router.post('/createDone', postCreateUser)

// get edit user
router.get('/edit/:id', getEditUser)

// put update user
router.post('/update', putUpdateUser)

module.exports = router