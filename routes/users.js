var express = require('express');
var router = express.Router();

//Importo modelo de datos
const AuthController = require('../controllers/AuthController');

// End-points CRUD user

router.post('/signin', AuthController.signIn);
router.post('/signup', AuthController.signUp);
router.get('/logout', AuthController.logOut);
router.put('/update', AuthController.update);
router.delete('/delete', AuthController.delete);



module.exports = router;
