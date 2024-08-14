const express = require('express');
const postDb = require('../controller/post');
 
const route = express.Router();

route.get('/getpost' , postDb.getpost);

route.post('/createpost', postDb.createPost);

module.exports = route ;