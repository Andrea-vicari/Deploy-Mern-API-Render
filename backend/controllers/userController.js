const Users = require('../models/UserModel');
const mongoose = require('mongoose');


// Login
const loginUser = async (req, res)=> {
    res.json({mssg: 'Login User'})
}

// Login
const signupUser = async (req, res)=> {
    res.json({mssg: 'Signup User'})
}

module.exports = {
    loginUser, signupUser
}