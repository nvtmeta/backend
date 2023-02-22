const connection = require('../config/database')
const { getAllUser, PostNewUser, getUserById } = require('../services/CRUDService')
const getHomePage = async (req, res) => {
    let result = await getAllUser()
    return res.render('home.ejs', { listUsers: result })
}

const postCreateUser = async (req, res) => {
    let results = await PostNewUser(req)
    res.send('create new user success')
}


const getCreatePage = (req, res) => {
    return res.render('create.ejs')
}
const putUpdateUser = async (req, res) => {
    let user = await getUserById(req)
    return res.render('update.ejs', { user })
}

module.exports = { getHomePage, postCreateUser, getCreatePage, putUpdateUser }