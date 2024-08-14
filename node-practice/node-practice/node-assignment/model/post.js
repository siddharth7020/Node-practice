const sequelize = require('sequelize')
const database =  require('../database');

const Post = database.define ('postDetails' ,{
    id: {
        type:sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    title: {
        type:sequelize.STRING,
        allowNull:false
    },
    content: {
        type:sequelize.STRING,
        allowNull:true
    },
});

module.exports = Post ;