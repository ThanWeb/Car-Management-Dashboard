var express = require('express');
var router = express.Router();
const Validator = require('fastest-validator')
const v = new Validator
const {notes} = require("../models")

router.get("/", function(req, res, next) {
    res.send("Hello World");
});

router.get("/env", function(req, res, next) {
    res.send(process.env.APP_NAME);
});

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


module.exports = router;