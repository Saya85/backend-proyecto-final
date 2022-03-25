var express = require('express');
var router = express.Router();

//Importo modelo de datos
const UserController = require('../controllers/users');

// End-points CRUD user

router.post('/signin', UserController.signIn);
router.post('/signup', UserController.signUp);
//router.get('/logout', UserController.logOut);
//router.put('/update', UserController.update);
//router.delete('/delete', UserController.delete);



module.exports = router;
