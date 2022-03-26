const jwt = require('jsonwebtoken');

const User = require('../models').user; //incluyo user model

module.exports = (req, res, next) => {

    //console.log(req.headers);

    // Comprobar que existe el token
    if(!req.headers.authorization) {
        res.status(401).json({ msg: "Acceso no autorizado" });
    } else {

        // Comrpobar la validez de este token
        let token = req.headers.authorization.split(" ")[1];

        // Comprobar la validez de este token
        jwt.verify(token, process.env.AUTH_SECRET, (err, decoded) => {

            if(err) {
                res.status(500).json({ msg: "Ha ocurrido un problema al decodificar el token", err });
            } else {
                
                User.findByPk(decoded.user.id).then(user => {
                    //console.log(user.roles);
                    req.user = user;
                    next();
                });
            }

        })
    }

};