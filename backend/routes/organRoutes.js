const express = require('express');
const router = express.Router();
const { addFood, getLiverStatus } = require('../controllers/organController');
const {  getOrganStatus} = require('../controllers/healthStatus');

router.post('/add-food', addFood);


router.get('/organ-status', getOrganStatus);

module.exports = router;