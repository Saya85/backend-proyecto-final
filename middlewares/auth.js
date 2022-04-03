const jwt = require('jsonwebtoken');

const User = require('../models').user; //incluyo user model



const auth = async(req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const data = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findOne({
           where:{
              id: data.id
           }
        })
        if (user === undefined) {
            throw new Error()
      }
      req.user = user;
      req.token = token;
      next()
   } catch (error) {
      res.status(401).send({ error: 'Not authorized to access this resource' })
   }

}
module.exports = auth
