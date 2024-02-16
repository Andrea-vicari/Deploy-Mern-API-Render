const mongoose = require('mongoose')

const keySchema = new mongoose.Schema({
        user_id:{
        type: String,
        required: true
        },
        keyNumber:{
        type: Number,
        required: true
        },
        trackUrl:{
        type: String,
        required: true
        },
        user:{
        type: String,
        required: true
        },
        mp3Name:{
        type: String,
        required: true
        },
        bpm:{
        type: Number,
        required: true
        },
        genre:{
        type: String,
        required: true
        }

},{ timestamps:true })


module.exports = mongoose.model("KeyModel", keySchema);
