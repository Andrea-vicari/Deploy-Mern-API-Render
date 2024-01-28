const mongoose = require('mongoose')

const bcrypt = require('bcryptjs')

const validator = require('validator')

const userSchema = new mongoose.Schema({

        email:{
        type: String,
        required: true,
        unique:true
        },
        password:{
        type: String,
        required: true
        }

})

// Static SIGNUP method
userSchema.statics.signup = async function(email, password){

        // Validations
        if(!email || !password){

        throw Error('Tutti i campi devono essere compilati')
        }
        if(!validator.isEmail(email)){
        throw Error('Email non valida')
        }
        if(!validator.isStrongPassword(password)){
        throw Error('Password non sicura!')
        }

        const alreadyExists = await this.findOne({email})

        if(alreadyExists){

        throw Error('Email già registrata')

        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const user = await this.create({email, password:hash});

        return user

}

// Static LOGIN method
userSchema.statics.login = async function(email, password){

          // Validations
          if(!email || !password){
                throw Error('Tutti i campi devono essere compilati')
         }

        const user = await this.findOne({email})

        if(!user){
        throw Error('Email non corretta')
        }

        const match = await bcrypt.compare(password, user.password)

        if(!match){
        throw Error('Password non corretta')
        }

        return user
}

module.exports = mongoose.model("User", userSchema);