const express = require('express');
const router = express.Router();

const capituloControllers = require('../controllers/capitulo');

// End-points CRUD capitulo

router.get('/', capituloControllers.capituloAll);
router.get('/:id', capituloControllers.getBySerieId);
router.get('/canon/:id', capituloControllers.getByCanon);



module.exports = router;