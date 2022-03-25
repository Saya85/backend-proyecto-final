const express = require('express');
const router = express.Router();

const series = require('../controllers/series');

// End-points CRUD serie

router.get('/', AuthController.seriesAll);
router.get('/:nombre', AuthController.serie);
router.get('/capitulo/:id', AuthController.capitulo);


module.exports = router;