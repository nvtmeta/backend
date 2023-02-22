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



module.exports = {
    getAllUser, PostNewUser, getUserById
}