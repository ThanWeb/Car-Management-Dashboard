const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000

// eslint-disable-next-line no-unused-vars
const { Product } = require('./models')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('index', {
        title: 'World'
    })
})

app.listen(PORT, () => {
    console.log(`App Running on localhost: ${PORT}`)
})
