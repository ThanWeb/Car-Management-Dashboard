var express = require('express');
var router = express.Router();
const Validator = require('fastest-validator')
const v = new Validator
const {notes} = require("../models");
const { HostNotFoundError } = require('sequelize');

// router.get("/", function(req, res, next) {
//     res.send("Hello World");
// });

// router.get("/env", function(req, res, next) {
//     res.send(process.env.APP_NAME);
// });

// POST
router.post("/", async (req, res, nexy) => {
    // validation
    const schema = {
        title: "string",
        description: "string|optional"
    }
    const validate = v.validate(req.body, schema)
    if(validate.length) {
        return res.status(400).json(validate)
    }
    // proses create
    const note = await notes.create(req.body)
    res.json({
        status: 200,
        message: 'Success create data',
        data: note
    })
})

// PUT
router.put("/:id", async (req, res, next) => {
    const id = req.params.id
    let note = await notes.findByPk(id)
    if(!note) {
        return res.status(404).json({status: 404, message: 'Data not found'})
    }
    // validation
    const schema = {
        title: "string|optional",
        description: "string|optional"
    }
    const validate = v.validate(req.body, schema)
    if(validate.length) {
        return res.status(400).json(validate)
    }
    // proses update
    note = await note.update(req.body)
    res.json({
        status: 200,
        message: 'Success update data',
        data: note
    })
});

module.exports = router;