const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000

// eslint-disable-next-line no-unused-vars
const { Cars } = require('./models')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => {
    console.log(`\nApp Running on localhost:${PORT}`)
    console.log('Press Ctrl-C to terminate\n')
})

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/cars', async (req, res) => {
    const cars = await Cars.findAll()
    res.render('cars', {
        data: cars
    })
})
