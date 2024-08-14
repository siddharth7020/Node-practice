const express = require ('express');

const sequelize = require('./database');

const route = require('./route/post');

const app = express();

app.use(express.json())

app.use(route);

sequelize.sync().then(() => {
    console.log('is connected');
    app.listen(5000);
}).catch((err) =>{
    console.log(err);
    
}) 


console.log('running');
