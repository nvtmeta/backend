const connection = require('../config/database')

const getAllUser = async () => {
    let [result, fields] = await connection.query(`SELECT * FROM Users`)
    return result

}

const PostNewUser = async (req, res) => {
    let { email, name, city } = req.body
    let [result, fields] = await connection.query(`  INSERT INTO Users (email, name, city)
    VALUES (?, ?, ? )`,
        [name, email, city],)

    return result
}

const getUserById = async (req) => {
    const userId = req.params.id
    let [results, fields] =
        await connection.query(`select * from Users where id = ?`, [userId])
    let user = results && results.length > 0 ? results[0] : ''
    return user
}

const postUpdateUser = async (req) => {
    const { email, name, city, id } = req.body
    let [results, fields] =
        await connection.query(`UPDATE Users
        SET email = ? , city= ?, name = ?
        WHERE id = ?`, [email, city, name, id])
}

module.exports = {
    getAllUser, PostNewUser, getUserById, postUpdateUser
}