const Serie = require('../models').serie;
const Op = require('../models').Sequelize.Op;
const serieControllers = {}; //Create the object controller


// todas las series

serieControllers.seriesAll = async (req, res, next)=>{
    const serie = await Serie.findAll();
    res.status(200).json(serie);
};

//GET categories by Id from database
serieControllers.getByName = async (req, res) => {
    const name = req.params.name;
  
    const series = await Serie.findAll({
        where:{
            name: {
                [Op.like]: '%' + name + '%'
            }
        }
    });

    res.status(200).json(series);

  };

  module.exports = serieControllers
