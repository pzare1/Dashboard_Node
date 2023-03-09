import mongoose from "mongoose";
import validator from "validator";
import bcryptjs from 'bcryptjs';
import jwt from "jsonwebtoken";
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

userSchema.methods.createJWT = function() {
    return jwt.sign({userId:this._id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_LIFETIME})
}
userSchema.methods.comparePassword = async function(candidate) {
    const isMatch = await bcryptjs.compare(candidate,this.password)
    return isMatch
}

export default mongoose.model('User',userSchema);