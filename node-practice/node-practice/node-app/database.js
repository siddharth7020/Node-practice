const Sequelize = require('sequelize');

const sequelize = new Sequelize('usersdb', 'postgres', 'root', { // usersdb: database name, postgres: user name, root: password
    dialect: 'postgres', // database name
    host: 'localhost', // hosting database on server
    define: {
        timestamps: true, // createdAt, updatedAt
        freezeTableName: true // posts -> post, omitting extra 's'
    }
});

module.exports = sequelize; // exporting configuration file for furher use