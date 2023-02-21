const connection = require('../config/database')

const getHomePage = (req, res) => {

    return res.render('home.ejs')

}

const postCreateUser = (req, res) => {
    let { email, name, city } = req.body


    connection.query(
        `  INSERT INTO Users (email, name, city)
          VALUES (?, ?, ? )`,
        [name, email, city],
        function (err, results) {
            console.log(results);
        }
    );
    console.log(email, name, city)
    res.send('create new user')
}

// simple query

module.exports = { getHomePage, postCreateUser }