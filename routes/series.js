const express = require('express');
const router = express.Router();

const serieControllers = require('../controllers/series');

// End-points CRUD serie

router.get('/', serieControllers.seriesAll);
router.get('/:name', serieControllers.getByName);



module.exports = router;