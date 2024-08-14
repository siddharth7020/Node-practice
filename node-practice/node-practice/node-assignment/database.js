const Sequelize = require('sequelize');

const sequelize = new Sequelize('postdb', 'postgres', 'root', {
    dialect: 'postgres',
    host: 'localhost',
    define: {
        timestamps: true,
        freezeTableName: true
    }
});

module.exports = sequelize;