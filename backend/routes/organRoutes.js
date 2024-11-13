const express = require('express');
const router = express.Router();
const { addFood } = require('../controllers/organController');
const { getOrganStatus } = require('../controllers/healthStatus');
const { resetConsumedFoods } = require('../controllers/organController');
const { getSpecificOrganStatus } = require('../controllers/individualOrganStatusController');

// Controllers for 2D and 3D models (assuming you have separate controllers)
// const { get2DModel } = require('../controllers/bodyModelsController');
// const { get3DModel } = require('../controllers/bodyModelsController');

// Food and status routes
router.post('/add-food', addFood);
router.get('/organ-status', getOrganStatus);
router.get('/ind-organ-status/:organ', getSpecificOrganStatus);
router.post('/reset-consumed-foods', resetConsumedFoods);

// Routes for body models
// router.get('/body-model/2d', get2DModel); // Route for 2D model
// router.get('/body-model/3d', get3DModel); // Route for 3D model

module.exports = router;
