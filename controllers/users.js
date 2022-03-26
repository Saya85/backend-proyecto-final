const User = require('../models').user;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//const authConfig = require('../config/auth');

const UserController = {}; //Create the object controller

//-------------------------------------------------------------------------------------

//REGISTER new user in database
//create user
UserController.signUp = (req, res)=> {

    // Encriptamos la contraseña
    let password = bcrypt.hashSync(req.body.password, Number.parseInt(process.env.AUTH_ROUNDS));

    // Crear un usuario
    User.create({
        name: req.body.name,
        subname: req.body.subname,
        email: req.body.email,
        password: password
    }).then(user => {

        // Creamos el token
        let token = jwt.sign({ user: user }, process.env.AUTH_SECRET, {
            expiresIn: process.env.AUTH_EXPIRES
        });

        res.json({
            user: user,
            token: token
        });

    }).catch(err => {
        res.status(500).json(err);
    });

    // // Asigna rol a usuario
    // user_role.create({
    //     user_id: res.user.id,
    //     role_id: 1
    // }).then().catch(err => {
    //     res.status(500).json(err);
    // });

};


UserController.update = (req, res)=> {

    // Encriptamos la contraseña
    let password = bcrypt.hashSync(req.body.password, Number.parseInt(process.env.AUTH_ROUNDS));

    // Crear un usuario
    User.create({
        name: req.body.name,
        subname: req.body.subname,
        email: req.body.email,
        password: password
    }).then(user => {

        // Creamos el token
        let token = jwt.sign({ user: user }, process.env.AUTH_SECRET, {
            expiresIn: process.env.AUTH_EXPIRES
        });

        res.json({
            user: user,
            token: token
        });

    }).catch(err => {
        res.status(500).json(err);
    });

    // // Asigna rol a usuario
    // user_role.create({
    //     user_id: res.user.id,
    //     role_id: 1
    // }).then().catch(err => {
    //     res.status(500).json(err);
    // });

};


//-------------------------------------------------------------------------------------
//Login user with database
//get user
UserController.signIn = (req, res) =>{
        let { email, password } = req.body;
        // Buscar usuario
        User.findOne({ where: { email: email }
        }).then(user => {
            if (!user) {
                res.status(404).json({ msg: "Usuario con este correo no encontrado" });
            } else {
                if (bcrypt.compareSync(password, user.password)) {
                    // Creamos el token
                    let token = jwt.sign({ user: user }, process.env.AUTH_SECRET, {
                        expiresIn: process.env.AUTH_EXPIRES
                    });

                    res.json({
                        user: user,
                        token: token
                    })
                } else {
                    // Unauthorized Access
                    res.status(401).json({ msg: "Contraseña incorrecta" })
                }
            }
        }).catch(err => {
            res.status(500).json(err);
        })
    };

//logout

UserController.logOut = async (req, res, next) => { 
    try {
        let token = req.headers.authorization.split(" ")[1];
      const tokenBorrado = await Token.destroy({
        where: {
          token: req.token
        }
      });
     if(tokenBorrado === 1) {
       res.status(200).json('deslogueado correctamente.')   
     }else {
         res.status(300).json('ya estabas deslogueado')
     }
    } catch (error) {
      res.status(400).send(error);
    }
};

//Delete

UserController.delete = async (req, res, next)=>{
    // const{uuidUser} =req.user.uuid;
    console.log(req)
     const borrado = await User.destroy({
         where:{
             id: req.user.id
         }
     });
     if (borrado === 1){
         res.status(200).json('usuario eliminado')
     }
 };
 



 //get users

 UserController.mostrarUsers = async (req, res, next)=>{
    const users = await User.findAll();
    res.status(200).json(users);
};

module.exports = UserController;

