const express = require('express');
const sequelize = require('./database'); // importing database configurations
const userRouters = require('./routers/user'); // importing router

const app = express(); // creating express variable to create server

app.use(express.json()); // to use body and params for user input

app.use(userRouters); // using router

sequelize.sync().then(() => { // connecting database
    console.log('Database connected!');
    app.listen(5000); // running server on port number
}).then(() => {
    console.log('App Running');
}).catch((err) => {
    console.log(err);
});