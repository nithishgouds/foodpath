const express = require('express');
const router = express.Router();
const { addFood } = require('../controllers/organController');
const { getOrganStatus } = require('../controllers/healthStatus');
const { resetConsumedFoods } = require('../controllers/organController');
const { getSpecificOrganStatus } = require('../controllers/individualOrganStatusController');
const { validfood } = require('../controllers/organController');
const { validateOrganGuide } =require('../controllers/organController')



// Food and status routes
router.post('/add-food', addFood);
router.post('/validatefood', validfood);
router.get('/organ-status', getOrganStatus);
router.get('/ind-organ-status/:organ', getSpecificOrganStatus);
router.post('/reset-consumed-foods', resetConsumedFoods);
router.post('/organGuides',validateOrganGuide);

// Routes for body models
// router.get('/body-model/2d', get2DModel); // Route for 2D model
// router.get('/body-model/3d', get3DModel); // Route for 3D model

module.exports = router;
