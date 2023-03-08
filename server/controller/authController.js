import User from '../models/user.js'

const register = async(req,res) => {
    try {
      const {name,email,password}= req.body
      const user = await User.create({name,email,password})
      res.status(201).json({user:{email:user.email,name:user.name,password:user.password}})

    } catch (error) {
       res.status(500).json({msg:'an error happening'}) 
    }
}
const login = async(req,res) => {
    res.send('login')
}

export {register,login}