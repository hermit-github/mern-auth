import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please provide a name'],
        maxlength:[40,'Name should atleast be 40 characters.'],
    },
    email:{
        type:String,
        required:[true,'Please provide an email'],
        validate:[validator.isEmail,'Please provide a valid email.'],
        unique:[true,'Account with this email id already exists.']
    },
    password:{
        type:String,
        required:[true,'Please provide a password'],
        minlength:[6,'Passwrod should atleast be 6 characters long.'],
        select:false
    },
},{timestamps:true});

const User = mongoose.model('User',userSchema);

export default User