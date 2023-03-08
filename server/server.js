import express from 'express'
import dotenv from 'dotenv'
import connectDB  from './db/connect.js'
import authRoute from './routes/authRoute.js'
//dotenv
dotenv.config();
const app = express()
//get 
app.get('/',(req,res) => {
    res.send('hey I am pouya')
})

app.use(express.json())

//port
const port = process.env.PORT || 5006

//routes
app.use('/api/v1/auth',authRoute)

const start = async() =>{
    await connectDB(process.env.MONGO_URL)
    app.listen(port,() => {
        console.log(`running on ${port}`)
    })
}
start()

