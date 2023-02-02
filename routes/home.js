const express = require('express');                            // Fetching express modules
const router = express.Router();                        
const bodyParser = require('body-parser');      
const homeController = require('../controller/home');          // Fetching Controller Files
const applicationLoader = require('../controller/application')

router.use(bodyParser.urlencoded({ extended: false }));   
router.use('/user/', require('./user'));   
router.use('/todo/', require('./todo'));

router.get('/', homeController.home);                   // Redirecting request to controller
router.get('/application', applicationLoader.load);     // Redirecting request to controller

module.exports = router;                                //Exporting Router