const Users = require('../models/UserModel');
const mongoose = require('mongoose');

const { User, validate } = require("../models/UserModel");
const bcrypt = require("bcryptjs");

// Create a NEW user:
const createNewUser = async (req, res)=> {

    const {firstName, lastName, email, password} = req.body

    try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new User({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
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