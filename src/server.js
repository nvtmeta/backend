// import express from 'express';
// import path from 'path'
require('dotenv').config()
const configViewEngine = require('../src/config/viewEngine')
const express = require('express')
const webRouter = require('./routes/web')
const app = express()
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME


//config
configViewEngine(app)

//route
app.use('/', webRouter)


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})