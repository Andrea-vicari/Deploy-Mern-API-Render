const Users = require('../models/User');
const mongoose = require('mongoose');


// Get ALL users:
const viewAllUsers = async (req, res)=> {
    const allUser = await Users.find({}).sort({createdAt: -1});
    res.status(200).json(allUser)
}

// Get a single user
const getSingleUser = async (req, res)=> {

        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: "No Track found"})
        }

        const user = await Users.findById(id);

        if(!user){
          return res.status(400).json({error: "No Track found"})
        }
        res.status(200).json(user);
}

// Create a NEW user:
const createNewUser = async (req, res)=> {

    const {name, email, password} = req.body

    try{
        const user = await Users.create({name, email, password})
        res.status(200).json(user)
    }

    catch(error){
        res.status(400).json({error: error.message})
    }

}

// Delete a single user
const deleteUser = async (req, res)=> {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No Track found"})
    }

    const user = await Users.findOneAndDelete({_id: id})

    if(!user){
        return res.status(400).json({error: "No Track found"})
      }
      res.status(200).json(user);
}

// Update a single track
const updateUser = async (req, res)=> {

    const {name, email, password} = req.body

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No Track found gg"})
    }

    const user = await Users.findByIdAndUpdate({_id: id},{
        ...req.body
    })

    if(!user){
        return res.status(400).json({error: "No Track found y"})
    }
    res.status(200).json(user);

}


module.exports = {
    createNewUser, viewAllUsers, getSingleUser, deleteUser, updateUser
}