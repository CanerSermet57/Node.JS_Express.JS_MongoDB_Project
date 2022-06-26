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
app.get('/index.html', (req,res) => {
    res.render('Site/index')
})
app.get('/about.html', (req,res) => {
    res.render('Site/about')
})
app.get('/contact.html', (req,res) => {
    res.render('Site/contact')
})
app.get('/blog.html', (req,res) => {
    res.render('Site/blog')
})
app.get('/login.html', (req,res) => {
    res.render('Site/login')
})


/*
app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'Site/index.html'))
})
app.get('/index.html', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'Site/index.html'))
})
app.get('/blog.html', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'Site/blog.html'))
})
app.get('/about.html', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'Site/about.html'))
})
app.get('/contact.html', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'Site/contact.html'))
})
*/

app.listen(port,hostname,()=>{
    console.log(` Server Running, http://${hostname}:${port}/`)
})