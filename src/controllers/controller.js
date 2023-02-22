const connection = require('../config/database')
const { getAllUser } = require('../services/CRUDService')
const getHomePage = async (req, res) => {
    let result = await getAllUser()
    console.log(result)
    return res.render('home.ejs', { listUsers: result })
}

const postCreateUser = async (req, res) => {
    let { email, name, city } = req.body
    let [result, fields] = await connection.query(`  INSERT INTO Users (email, name, city)
    VALUES (?, ?, ? )`,
        [name, email, city],)
    console.log(result)
    res.send('create new user success')
}


const getCreatePage = (req, res) => {
    return res.render('create.ejs')
}
const putUpdateUser = (req, res) => {
    return res.render('update.ejs')
}

module.exports = { getHomePage, postCreateUser, getCreatePage, putUpdateUser }