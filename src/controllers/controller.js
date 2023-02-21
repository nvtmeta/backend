const connection = require('../config/database')

const getHomePage = (req, res) => {

    return res.render('home.ejs')

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

module.exports = { getHomePage, postCreateUser, getCreatePage }