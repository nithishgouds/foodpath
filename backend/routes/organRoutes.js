const express = require('express');
const router = express.Router();
const { addFood, getLiverStatus } = require('../controllers/organController');
const { getOrganStatus} = require('../controllers/healthStatus');
const { getSpecificOrganStatus } = require('../controllers/individualOrganStatusController');

router.post('/add-food', addFood);


router.get('/organ-status', getOrganStatus);

router.get('/organ-status/:organ', getSpecificOrganStatus);


module.exports = router;