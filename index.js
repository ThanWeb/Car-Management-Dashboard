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
    const cars = await Cars.findAll({
        order: [
            ['model', 'ASC']
        ]
    })
    res.render('cars', {
        data: cars
    })
})

app.post('/cars', (req, res) => {
    const { model, rentPerDay, type, size } = req.body
    Cars.create({
        model,
        rentPerDay,
        type,
        size
    })
    res.redirect('/cars')
})

app.get('/cars/add', (req, res) => {
    res.render('cars/create')
})

app.get('/cars/edit/:id', async (req, res) => {
    const data = await Cars.findByPk(req.params.id)
    const carDetail = data.dataValues
    res.render('cars/update', {
        carDetail,
        sizeOptions: ['small', 'medium', 'large']
    })
})

app.post('/edit/:id', (req, res) => {
    const { model, rentPerDay, type, size } = req.body
    const id = (req.params.id)
    Cars.update({
        model,
        rentPerDay,
        type,
        size
    }, {
        where: {
            id
        }
    })
    res.redirect('/cars')
})
