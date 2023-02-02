const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const addController = require('../controller/add');

router.use(bodyParser.urlencoded({ extended: false }));  
router.post('/add', addController.add);

module.exports = router;