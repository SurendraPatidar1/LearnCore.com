const express = require('express');
const getBook = require('../controller/bookController.js')

const router = express.Router();

router.get("/", getBook);

module.exports = router;