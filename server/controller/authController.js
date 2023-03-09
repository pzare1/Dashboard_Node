import User from '../models/user.js'

const register = async(req,res) => {
    try {
      const {name,email,password}= req.body
      const user = await User.create({name,email,password})
      const token = user.createJWT()
      res.status(201).json({user:{email:user.email,name:user.name,password:user.password},token})

    } catch (error) {
       res.status(500).json({msg:'an error happening'}) 
    }
}
const login = async(req,res) => {
    const {email,password} = req.body;
    if(!email || !password){
        res.status(500).json({msg:"pleas provide all fields"})
    }
    const user = await User.findOne({email}).select('+password')
    if(!user) {
        res.status(500).json({msg:'this user is not here'})
    }
    const isCorrect = await user.comparePassword(password)
    if(!isCorrect){
        res.status(500).json({msg:'the password is not correct'})
    }
    const token = user.createJWT();
    user.password = undefined
    res.status(201).json({user,token})
}

export {register,login}