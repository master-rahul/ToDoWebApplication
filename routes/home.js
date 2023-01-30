const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');   
const homeController = require('../controller/home');

router.get('/', homeController.home);
router.use(bodyParser.urlencoded({extended : false}));   
router.use('/user/', require('./user'));
 

module.exports = router;