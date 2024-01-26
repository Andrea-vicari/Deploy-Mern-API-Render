const Users = require('../models/UserModel');
const mongoose = require('mongoose');


//SignUp
const signupUser = async (req, res)=> {
    res.json({mssg: 'SignUp User'})
}

// Login
const loginUser = async (req, res)=> {
    res.json({mssg: 'Login User'})
}







module.exports = {
    signupUser, loginUser
}