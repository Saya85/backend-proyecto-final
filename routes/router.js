const express = require('express');
const router = express.Router()
// Middlewares
const auth = require('../middlewares/auth');
//Importamos Routes definidas en views
const capitulos = require('./capitulos');
const series = require('./series');
const users = require('./users');
const comentarios = require('./comentarios');



//Rutas
router.use('/user', users); //Login and register routes
router.use('/series', series); 
router.use('/capitulos', capitulos);
router.use('/comentario', comentarios);




module.exports = router;