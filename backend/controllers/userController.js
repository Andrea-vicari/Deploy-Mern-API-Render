const Users = require('../models/UserModel');
const mongoose = require('mongoose');


//SignUp
const signupUser = async (req, res)=> {

    const {email, password } = req.body;

    try{
        const user = await Users.signup(email, password)
        res.status(200).json({email, user});
    }
    catch(error){
        res.status(400).json({error: error.message})
    }

}

// Login
const loginUser = async (req, res)=> {
    res.json({mssg: 'Login User'})
}







module.exports = {
    signupUser, loginUser
}