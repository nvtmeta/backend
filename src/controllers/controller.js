const connection = require('../config/database')
const { getAllUser } = require('../services/CRUDService')
const getHomePage = async (req, res) => {
    let result = await getAllUser()
    return res.render('home.ejs', { listUsers: result })
}

const postCreateUser = async (req, res) => {
    let { email, name, city } = req.body
    let [result, fields] = await connection.query(`  INSERT INTO Users (email, name, city)
    VALUES (?, ?, ? )`,
        [name, email, city],)
    res.send('create new user success')
}


const getCreatePage = (req, res) => {
    return res.render('create.ejs')
}
const putUpdateUser = (req, res) => {
    console.log(req.params)
    return res.render('update.ejs')
}

module.exports = { getHomePage, postCreateUser, getCreatePage, putUpdateUser }