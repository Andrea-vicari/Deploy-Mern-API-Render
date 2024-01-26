const mongoose = require('mongoose')

const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({

        email:{
        type: String,
        required: true,
        unique:true
        }
        ,
        password:{
        type: String,
        required: true
        }

})

userSchema.statics.signup = async function(email, password){

        // Validations
        if(!email || !password){

        throw Error('Tutti i campi devono essere compilati')
        }
        if(!validator.isEmail(email)){
        throw Error('Email non valida')
        }
        if(!validator.isStrongPassword()){
        throw Error('Password non sicura')
        }

        const alreadyExists = await this.findOne({email})

        if(alreadyExists){

        throw Error('Email già registrata')

        }

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hash = await bcrypt.hash(password, salt);

        const user = await this.create({email, password:hash});

        return user

}


module.exports = mongoose.model("User", userSchema);