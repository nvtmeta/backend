// import express from 'express';
// import path from 'path'
const configViewEngine = require('../src/config/viewEngine')
const express = require('express')
const webRouter = require('./routes/web')
const app = express()
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME
const connection = require('./config/database')

//config req.body       //khai bao config req.body at first to avoid undefined
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//config
configViewEngine(app)

//route
app.use('/', webRouter)
app.use('/create', webRouter)
app.use('/createUser', webRouter)




app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})