var express = require('express');
var router = express.Router();
const auth = require('../middlewares/auth');

//Importo modelo de datos
const UserController = require('../controllers/users');

// End-points CRUD user

router.post('/login', UserController.login);
router.post('/register', UserController.register);
router.get('/logout', auth, UserController.logout);
router.put('/update', auth, UserController.update);
router.delete('/delete', auth, UserController.delete);



module.exports = router;
