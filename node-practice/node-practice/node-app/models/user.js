const Sequelize = require('sequelize');
const sequelize = require('../database'); // using database configurations

const User = sequelize.define('user', { // defining model
    id: { // creating primary key
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: { // creating other fields
        type: Sequelize.STRING,
        allowNull: false
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
});

module.exports = User; // exporting model to use further