const User = require("../models/user"); // importing model to access database

exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.findAll(); // fetching all data from table
        res.status(200).json({ message: 'Users fetched successfully', users: users }); // giving response to user
    } catch (error) {
        console.log(error);
    }
};

exports.createUser = async (req, res, next) => {
    const nameField = req.body.name; // fetching JSON body values with their keys
    const ageField = req.body.age;
    try {
        const user = await User.create({ // using create function of sequelize to insert data
            name: nameField, // mapping values to insert data
            age: ageField
        });
        res.status(201).json({ message: 'User created successfully', user: user }); 
    } catch (error) {
        console.log(error);
    }
};