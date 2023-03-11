import express from 'express'
import dotenv from 'dotenv'
import connectDB  from './db/connect.js'
import authRoute from './routes/authRoute.js'
import morgan from 'morgan'
//dotenv
dotenv.config();
const app = express()
//get 
app.get('/',(req,res) => {
    res.send('hey I am pouya')
})

app.use(express.json())

//port
const port = process.env.PORT || 5008
//routes
app.use('/api/v1/auth',authRoute)
//morgan
if(process.env.NODE_ENV !== 'production'){
    app.use(morgan('dev'))
}

const start = async() =>{
    await connectDB(process.env.MONGO_URL)
    app.listen(port,() => {
        console.log(`running on ${port}`)
    })
}
start()

