const express = require('express');
const { updateTrophy } = require('../controllers/trophiesController');
const router = express.Router();

router.post('/update-trophy', updateTrophy);

module.exports = router;
