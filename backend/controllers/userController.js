const Users = require('../models/UserModel');
const jwt = require("jsonwebtoken");


const createToken = (_id) =>{
   return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

//SignUp
const signupUser = async (req, res)=> {

    const {email, password } = req.body;

    try{
        const user = await Users.signup(email, password)

        // Token creation
        const token = createToken(user._id)

        res.status(200).json({email, token});
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