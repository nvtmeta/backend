const connection = require('../config/database')
const { getAllUser, PostNewUser, getUserById, postUpdateUser } = require('../services/CRUDService')
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
const getEditUser = async (req, res) => {
    let user = await getUserById(req)
    return res.render('update.ejs', { user })
}
const putUpdateUser = async (req, res) => {
    let results = await postUpdateUser(req)
    res.redirect('/')

}

module.exports = { getHomePage, postCreateUser, getCreatePage, getEditUser, putUpdateUser }