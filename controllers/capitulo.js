const Capitulo = require('../models').capitulo;
const Op = require('../models').Sequelize.Op; //Import all ORM sequelize functions 
const capituloControllers = {}; //Create the object controller


// todas las series

capituloControllers.capituloAll = async (req, res, next)=>{
    const capitulo = await Capitulo.findAll();
    res.status(200).json(capitulo);
};

//GET categories by Id from database
capituloControllers.getBySerieId = async (req, res) => {
    const id = req.params.id;

    const capitulos = await Capitulo.findAll({
        where:{idSerie: id}
    });

    res.status(200).json(capitulos);
  };

  //GET categories by Id from database
capituloControllers.getByCanon = async (req, res) => {
    const id = req.params.id;
  
    const capitulos = await Capitulo.findAll({
        where: {
            [Op.and]: [
                { idSerie: id, },
                { canon: 1 }
            ]
        }
    });

    res.status(200).json(capitulos);
  };

  module.exports = capituloControllers