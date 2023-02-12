// import express from 'express';
// import path from 'path'
require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME

//config template engine

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

//config static files
app.use(express.static(path.join(__dirname, 'public')))
//declare route
app.get('/', (req, res) => {
    res.render('sample')
})
app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})