const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('candy', {
  // define your model here!
  name:{
    type:Sequelize.STRING,
    notEmpty:true,
    notNull:true
  },
  description:{
    type:Sequelize.TEXT,
    notEmpty:true,
    notNull:true
  },
  quantity:{
    type:Sequelize.INTEGER,
    max:10
  },
  imageUrl:{
    type:Sequelize.TEXT,
    defaultValue:'www.google.com'
  }
});
