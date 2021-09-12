const express = require('express');
const path = require('path');
const router = express.Router();

const aboutController = require('../controllers/aboutController.js')

router.get('/', aboutController.about);


module.exports = router;

