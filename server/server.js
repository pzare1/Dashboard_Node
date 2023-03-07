import express from 'express'
import dotenv from 'dotenv'
import connectDB  from './db/connect.js'
//dotenv
dotenv.config();
const app = express()
//get 
app.get('/',(req,res) => {
    res.send('this is working')
})
//port
const port = process.env.PORT || 5004

const start = async() =>{
    await connectDB(process.env.MONGO_URL)
    app.listen(port,() => {
        console.log(`running on ${port}`)
    })
}
start()

