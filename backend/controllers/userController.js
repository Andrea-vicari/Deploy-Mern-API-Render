const Users = require('../models/UserModel');
const mongoose = require('mongoose');

const { User, validate } = require("../models/UserModel");
const bcrypt = require("bcryptjs");

// Create a NEW user:
const createNewUser = async (req, res)=> {

    const {firstName, lastName, email, password} = req.body

    try{
        const user = await Users.create({firstName, lastName, email, password})
        res.status(200).json(user)
    }

    catch(error){
        res.status(400).json({error: error.message})
    }

}


// Get ALL users:
const viewAllUsers = async (req, res)=> {
    const allUser = await Users.find({}).sort({createdAt: -1});
    res.status(200).json(allUser);
}




module.exports = {
    createNewUser, viewAllUsers
}