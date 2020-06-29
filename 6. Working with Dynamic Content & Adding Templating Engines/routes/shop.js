const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

router.get('/',(req, res, next) => {
    //console.log('In the another middleware');
    //res.send('<h1>Hello from Express!</h1>');
    res.sendFile(path.join(rootDir,"views","shop.html"));
});

module.exports = router;