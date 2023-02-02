const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');   
const homeController = require('../controller/home');
const applicationLoader = require('../controller/application')

router.use(bodyParser.urlencoded({ extended: false }));   
router.use('/user/', require('./user'));
router.use('/todo/', require('./todo'));

router.get('/', homeController.home);
router.get('/application', applicationLoader.load);

module.exports = router;