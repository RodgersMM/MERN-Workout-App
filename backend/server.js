//Require express package
const express = require ('express')
//Require dotenv file
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require ('cors')


//Require Routes
const workoutRoutes = require('./routes/workouts.js')


//create express app
const app = express()

//Global Middleware

//respond to any request from any port request
app.use(cors({
    origin: '*'
  }));


app.use(express.json())

app.use((req, res, next)=> {
    console.log(req.path, req.method)
    //res.send(req.path,req.method)
    next()

})



//Routes
//Attaches all Routes to the App from Routes
app.use('/api/workouts', workoutRoutes)

//connecting mongodB
//Is synchronous thus returns a promise. A promise has .then() & .catch(err)
mongoose.connect(process.env.MONGO_URI )
    .then(()=>{
        //listen for requets
    app.listen(process.env.PORT,()=> {
    console.log('Connected to dB & Listening on Port', process.env.PORT)})
    })
    .catch((error)=>console.log(error))

