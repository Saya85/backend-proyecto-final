const express = require('express');
const router = express.Router()
// Middlewares
const auth = require('../middlewares/auth');
//Importamos Routes definidas en views
//const capitulo = require('./comentarios');
//const series = require('./series');
const users = require('./users');

//Rutas
router.use('/user', users); //Login and register routes
//router.use('/series',auth, series); //add auth
//router.use('/capitulos',auth, capitulo);




module.exports = router;