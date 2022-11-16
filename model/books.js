const Sequelize = require('sequelize')
const {sequelize} = require('../database') 
    const books = sequelize.define("Books", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
      title: {
        type: Sequelize.STRING
      },
      author: {
        type: Sequelize.STRING
      }
    },{ 
      freezeTableName:true,
      timestamps:false
      }
    );
   
    module.exports= books