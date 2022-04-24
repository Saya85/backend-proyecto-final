
const Comentario = require('../models').comentario;

const ComentariosControlers = {}; //Create the object controller


ComentariosControlers.comentarioAll = async (req, res, next)=>{
    const comentario = await Comentario.findAll();
    res.status(200).json(comentario);
};

//GET categories by Id from database
ComentariosControlers.comentarioUser = async (req, res) => {
   
    const comentarios = await Comentario.findAll({
        where:{idUser: req.user.id}
    });

      res.status(200).json(comentarios);
  };

//GET comentarios capitulo
 ComentariosControlers.comentarioCapitulo = async(req, res) => {
   try {
    const {capitulo} = req.body;
    const comentarios = await Comentario.findAll({
        where:{idCapitulo: capitulo}
    });

     return res.status(200).json(comentarios);
   } catch (error) {
      return res.status(500).json(error)
   }
  };
 
ComentariosControlers.crearComentario = (req, res) => {
        const {comentario, idCapitulo} = req.body;
        const response =  Comentario.create({comentario: comentario, idUser: req.user.id, idCapitulo: idCapitulo});
        const newComentario = response.dataValues;
        res.status(201).json(newComentario);
    
};

ComentariosControlers.borrarComentario = async (req, res, next)=>{
    const id = req.params.id;
    const comentarioUser = await Comentario.findOne({
        where:{id: id}
    });
    if (comentarioUser.idUser === req.user.id){
      const borrado = await Comentario.destroy({
         where:{
             id: id
         }
     });
      if (borrado === 1){
         res.status(200).json('borrado')
     }else {
        res.status(500).json('algo falló')
     }
    }else {
        res.status(401).json('no autorizado')
     }
     
 };
 


  module.exports = ComentariosControlers


