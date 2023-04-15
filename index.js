const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000

const { Op } = require('sequelize')
const { Cars } = require('./models')

const imagekit = require('./lib/imagekit')
const upload = require('./middleware/uploader')

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
    let cars = []
    let queryFilter = ''

    if (req.query.filter) {
        queryFilter = req.query.filter[0].toUpperCase() + req.query.filter.slice(1)
        cars = await Cars.findAll({
            where: {
                size: {
                    [Op.substring]: queryFilter
                }
            },
            order: [
                ['model', 'ASC']
            ]
        })
    } else if (req.query.search) {
        cars = await Cars.findAll({
            where: {
                [Op.or]: [
                    { model: { [Op.iLike]: req.query.search } },
                    { type: { [Op.iLike]: req.query.search } }
                ]
            },
            order: [
                ['model', 'ASC']
            ]
        })
    } else {
        cars = await Cars.findAll({
            order: [
                ['model', 'ASC']
            ]
        })
    }
    res.render('cars', {
        data: cars,
        filter: queryFilter
    })
})

app.post('/cars', upload.single('image'), async (req, res) => {
    const { model, rentPerDay, type, size } = req.body
    const file = req.file

    const splitedFile = file.originalname.split('.')
    const ext = splitedFile[splitedFile.length - 1]
    const image = await imagekit.upload({
        file: file.buffer,
        fileName: `img-${Date.now()}.${ext}`
    })

    await Cars.create({
        model,
        rentPerDay,
        type,
        size,
        image: image.url
    })
    await res.redirect('/cars')
})

app.get('/cars/add', (req, res) => {
    res.render('cars/create')
})

app.get('/cars/edit/:id', async (req, res) => {
    const data = await Cars.findByPk(req.params.id)
    const carDetail = data.dataValues
    await res.render('cars/update', {
        carDetail,
        sizeOptions: ['small', 'medium', 'large']
    })
})

app.post('/edit/:id', upload.single('image'), async (req, res) => {
    const { model, rentPerDay, type, size } = req.body

    if (req.file) {
        const file = req.file
        const splitedFile = file.originalname.split('.')
        const ext = splitedFile[splitedFile.length - 1]
        const image = await imagekit.upload({
            file: file.buffer,
            fileName: `img-${Date.now()}.${ext}`
        })

        const id = (req.params.id)
        await Cars.update({
            model,
            rentPerDay,
            type,
            size,
            image: image.url
        }, {
            where: {
                id
            }
        })
    } else {
        const id = (req.params.id)
        await Cars.update({
            model,
            rentPerDay,
            type,
            size
        }, {
            where: {
                id
            }
        })
    }

    await res.redirect('/cars')
})

app.get('/delete/:id', (req, res) => {
    const id = req.params.id
    try {
        Cars.destroy({
            where: {
                id
            }
        })
    } catch (error) {
        console.log('error')
    } finally {
        res.redirect('/cars')
    }
})
