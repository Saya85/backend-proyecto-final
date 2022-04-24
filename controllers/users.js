const User = require('../models').user;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Token = require('../models').Tokens;
//const authConfig = require('../config/auth');

const UserController = {}; //Create the object controller

//-------------------------------------------------------------------------------------

//REGISTER new user in database
//create user
UserController.register =  async (req, res, next) =>{  
    const {name, subname, email, password} = req.body;
    const usuario = await User.findOne({where:{email: email}});
    if(usuario) {
        res.status(400).json('El usuario ya existe');
    } else {
        const cryptPass = bcrypt.hashSync(password,8);
        const response = await User.create({name: name, subname: subname, email: email, password: cryptPass });
        const newUser = response.dataValues;
        res.status(201).json(newUser);
    }

    // // Asigna rol a usuario
    // user_role.create({
    //     user_id: res.user.id,
    //     role_id: 1
    // }).then().catch(err => {
    //     res.status(500).json(err);
    // });

};


UserController.update = async (req, res)=> {
    const {name, subname, email, password} = req.body;
    const data = {};
    if(name) {
        data.name = name;
    }
    if(subname) {
        data.subname = subname;
    }
    if(email) {
        data.email = email;
    }
    if(password) {
        data.password = bcrypt.hashSync(password,8);
    }
    // Crear un usuario
    User.update(data, {
        where:{id: req.user.id}
    }).then(user => {
        const tokenBorrado = Token.destroy({
            where: {
              token: req.token
            }
          });
          //TODO: Comprobar que funciona bien los tokens
         if(tokenBorrado === 1) {
            const token = jwt.sign({id: user.id, name: user.name, email: user.email}, process.env.JWT_SECRET)
            const response = Token.create({token: token, idUser: user.id, device: null});
            res.status(200).json(response.dataValues.token);
         }

        res.status(200).json({message: 'Usuario modificado correctamente'});
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
UserController.login = async(req, res, next)=>{
    try {
        const { email, password } = req.body
        const usuario = await User.findOne({where:{email: email}});
        if (usuario===null) { 
            return res.status(401).json({message: 'email incorrecto'});
        }
        const passwordMatch = bcrypt.compare(password, usuario.password);
        if (!passwordMatch) {
            return res.status(401).json({message: 'contraseña incorecta'});
        }
        const token = jwt.sign({id: usuario.id, name: usuario.name, email: usuario.email}, process.env.JWT_SECRET)
        const response = await Token.create({token: token, idUser: usuario.id, device: null});
        res.status(200).json({token: response.dataValues.token});
    } catch (error) {
        res.status(400).send(error);
    }
};
//logout

UserController.logout =   async (req, res, next) => { 
    try {
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

