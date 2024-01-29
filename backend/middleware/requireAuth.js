const jwt= require('jsonwebtoken')
const User = require('../models/UserModel')

const requireAuth = async (req, res, next) => {

    // Verify Autentication
   const { authorization } = req.headers
  // const  authorization  = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWI2MGRjZGI2ZWQyNmMzMGM0NzY5YWQiLCJpYXQiOjE3MDY1MTk3MzcsImV4cCI6MTcwNjc3ODkzN30.6AhMsVt0ubqjwlIhSgpuyy6FcW-GnOUs11eY6vhLHX0"

    console.log("======")
    console.log(authorization)

    if(!authorization){
        return res.status(401).json({error: 'Authorization token required'})
    }

    const token = authorization.split(' ')[1]

    try{
        const {_id } = jwt.verify(token, process.env.SECRET)

        req.user = await User.findOne({ _id }).select('_id')
        next()
    }
    catch(error){
        console.log(error)
        res.status(401).json({error: 'Request not authorized'})
    }

}

module.exports = requireAuth