import mongoose from 'mongoose'
import email from 'validator';

const {isEmail} =email;


const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {

        type: String,
        required: true,
        minlength: 5,
        unique: true,
        validate:[isEmail, 'please enter valid email']
    },
    phoneNumber: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 9
    }

})

const user = mongoose.model('user' , UserSchema)

export default user;
