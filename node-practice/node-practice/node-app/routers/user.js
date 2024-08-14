const express = require('express');

const router = express.Router(); // using Router function of express

const userControllers = require('../controllers/user'); // importing controller file

router.get('/get_users', userControllers.getUsers); // setting path and calling controller function

router.post('/create_user', userControllers.createUser); // setting 'post' for creation

module.exports = router;