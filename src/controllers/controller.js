const connection = require('../config/database')

const getHomePage = (req, res) => {

    connection.query(
        'SELECT * FROM Users',
        function (err, results, fields) {
            console.log(results); // results contains rows returned by server
            res.send(JSON.stringify(results))
        }
    );
}

// simple query

module.exports = { getHomePage }