const express = require('express');
const router = express.Router();
const { addFood } = require('../controllers/organController');
const { getOrganStatus} = require('../controllers/healthStatus');
const { resetConsumedFoods } = require('../controllers/organController');
const { getSpecificOrganStatus } = require('../controllers/individualOrganStatusController');

router.post('/add-food', addFood);


router.get('/organ-status', getOrganStatus);

router.get('/ind-organ-status/:organ', getSpecificOrganStatus);

router.post('/reset-consumed-foods', resetConsumedFoods);

module.exports = router;