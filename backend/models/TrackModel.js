const mongoose = require('mongoose')

const tracksSchema = new mongoose.Schema({
        keyNumber:{
        type: Number,
        required: false
        },
        trackName:{
        type: String,
        required: true
        },
        trackUrl:{
        type: String,
        required: true
        }


},{ timestamps:true })


module.exports = mongoose.model("TrackModel", tracksSchema);
