const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth.js');
//Importo modelo de datos
const ComentariosControlers = require('../controllers/comentario');


router.get('/', ComentariosControlers.comentarioAll);
router.get('/user', auth, ComentariosControlers.comentarioUser);
//router.get('/capitulo', ComentariosControlers.comentarioCapitulo);
router.post('/crear', auth, ComentariosControlers.crearComentario);
router.delete('/borrar/:id', auth, ComentariosControlers.borrarComentario);


module.exports = router;