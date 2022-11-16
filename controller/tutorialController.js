const books = require("../model/books");
const { sequelize } = require("../database");
const Op = sequelize.Sequelize.Op;


const add =async (req, res) => {
    try {
      const resp = await books.bulkCreate(req.body);
      res.status(200).json({
        status: "success",
        response: resp,
        message: "sucessfull",
      });
    } catch (error) {
      console.log(error.message);
      res.status(400).json({
        status: "fail",
        response: null,
        message: error.message,
      });
    }
  };

  const getPagination = (req,res)=>{
    try {
    const{page,size} = req.body
    const limit = +size ;
    const offset = page* limit;
    const resp = {limit,offset}
    res.status(200).json({
        status: "success",
        response: resp,
        message: "sucessfull",
      });
} catch (error) {
    res.status(400).json({
        status: "fail",
        response: null,
        message: error.message,
      });
}
  };

  const findOne = async(req, res) => {
    try {
    const id = req.body.id;
    const data = await books.findByPk(id)
    res.send(data);
    } catch (error) {
        res.send(error.message)
    }
  };
  
  const findAll = async(req, res) => {
    try {
        const data = await books.findAll()
        res.send(data);
    } catch (error) {
        res.send(error.message)
    }
}

const findByTitle = async(req, res) => {
    try {
        const {title } = req.body;
        const data = await books.findAndCountAll({ 
            where:{
            title:{ [Op.like]: `%${title}%` }
        } })
        res.send(data);
    } catch (error) {
        res.send(error.message)
    }
}


  module.exports = {add, getPagination, findOne, findAll,findByTitle}