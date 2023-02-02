const express = require('express');
const router = express.Router();
const verifyController = require('../controller/verification');

router.use('/verification',verifyController.verify);

module.exports = router;