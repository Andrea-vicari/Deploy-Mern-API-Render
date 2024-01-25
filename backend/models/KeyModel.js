const mongoose = require('mongoose')

const keySchema = new mongoose.Schema({
        userId:{
        type: Number,
        required: true
        },
        keyNumber:{
        type: Number,
        required: true
        },
        trackUrl:{
        type: String,
        required: true
        }
        ,
        trackName:{
        type: String,
        required: true
        }


},{ timestamps:true })


module.exports = mongoose.model("KeyModel", keySchema);
