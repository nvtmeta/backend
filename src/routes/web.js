const express = require('express')
const router = express.Router()


//declare route
router.get('/', (req, res) => {
    res.render('sample')
})

module.exports = router