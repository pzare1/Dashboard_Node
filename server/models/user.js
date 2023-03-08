import mongoose from "mongoose";
import validator from "validator";
import bcryptjs from 'bcryptjs';

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'please provide name'],
        minlength: 4,
        maxlength:30,
        trim:true
    },
    email:{
        type:String,
        required:true,
        validator:{
        validator:validator.isEmail,
        message:'please provide a valid email'
        },
        unique:true
    },
    password:{
        type:String,    
        required:[true,'please provide password'],
        minlength:6,
        select:false
    }
})

userSchema.pre('save', async function(){
    const salt = await bcryptjs.genSalt(10);
    this.password = await bcryptjs.hash(this.password,salt)
})

export default mongoose.model('User',userSchema);