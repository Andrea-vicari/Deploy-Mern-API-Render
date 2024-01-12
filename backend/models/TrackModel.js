const mongoose = require('mongoose')

const tracksSchema = new mongoose.Schema({

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
