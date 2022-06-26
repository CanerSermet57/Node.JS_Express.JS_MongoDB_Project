const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const hostname = '127.0.0.1'
const port = 3000

app.use(express.static('public'))

app.engine('handlebars', exphbs.engine());
app.set('view engine','handlebars')

app.get('/', (req,res) => {
    res.render('Site/index')
})
app.get('/index', (req,res) => {
    res.render('Site/index')
})
app.get('/about', (req,res) => {
    res.render('Site/about')
})
app.get('/contact', (req,res) => {
    res.render('Site/contact')
})
app.get('/blog', (req,res) => {
    res.render('Site/blog')
})
app.get('/login', (req,res) => {
    res.render('Site/login')
})
app.get('/register', (req,res) => {
    res.render('Site/register')
})

app.listen(port,hostname,()=>{
    console.log(` Server Running, http://${hostname}:${port}/`)
})