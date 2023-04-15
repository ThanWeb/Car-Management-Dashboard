/* eslint-disable no-undef */
const multer = require('multer')

const multerFiltering = (req, file, callback) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        callback(null, true)
    } else {
        console.log('Tipe file invalid')
    }
}

const upload = multer({
    fileFilter: multerFiltering
})

module.exports = upload
