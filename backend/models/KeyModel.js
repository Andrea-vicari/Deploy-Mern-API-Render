const mongoose = require('mongoose')

const keySchema = new mongoose.Schema({
        user_id:{
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

},{ timestamps:true })


module.exports = mongoose.model("KeyModel", keySchema);
