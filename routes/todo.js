const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const addController = require('../controller/add');
const removeController = require('../controller/remove');
const editController = require('../controller/edit');

router.use(bodyParser.urlencoded({ extended: false }));  
router.post('/add', addController.add);
router.post('/remove', removeController.remove);
router.post('/edit', editController.edit);

module.exports = router;