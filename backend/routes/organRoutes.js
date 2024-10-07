const express = require('express');
const router = express.Router();
const { addFood, getLiverStatus } = require('../controllers/organController');

router.post('/add-food', addFood);


router.get('/liver-status', getLiverStatus);

module.exports = router;