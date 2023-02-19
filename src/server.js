// import express from 'express';
// import path from 'path'
require('dotenv').config()
const configViewEngine = require('../src/config/viewEngine')
const express = require('express')
const webRouter = require('./routes/web')
const app = express()
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME
const mysql = require('mysql2');



//config
configViewEngine(app)

//route
app.use('/', webRouter)


//test connection
// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307, //default 3306
    user: 'root',
    password: '123456',
    database: 'hoidanit'
});

// simple query
connection.query(
    'SELECT * FROM Users',
    function (err, results, fields) {
        console.log(results); // results contains rows returned by server
    }
);
app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})