const express = require('express');
const router = express.Router()
// Middlewares
const auth = require('./middlewares/auth');
//Importamos Routes definidas en views
const capitulo = require('./');
const series = require('./');
const users = require('./');

//Rutas
router.use('/user', users); //Login and register routes
router.use('/series',auth, series); //add auth
router.use('/capitulos',auth, capitulo);




module.exports = router;