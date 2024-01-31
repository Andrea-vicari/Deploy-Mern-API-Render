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

        const figa = user._id

        res.status(200).json({email, token, figa});
    }
    catch(error){
        res.status(400).json({error: error.message})
    }

}

// Login
const loginUser = async (req, res)=> {

    const {email, password } = req.body;

    try{
        const user = await Users.login(email, password)

        // Token creation
        const token = createToken(user._id)
        const figa = user._id

        res.status(200).json({email, token, figa});
    }
    catch(error){
        res.status(400).json({error: error.message})
    }


}







module.exports = {
    signupUser, loginUser
}