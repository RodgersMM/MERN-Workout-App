const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

//Get all workouts
    const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: 1})
    res.status(200).json(workouts)
}

//Get single Workout
    const getWorkout = async(req,res) => {
    const { id } = req.params
     //Check if the id is valid mongoose ObjectId
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json(error)
    }

    const workout = await Workout.findById(id)
    // Error message if workout doesn't exist
    if(!workout){
        return res.status(404).json({error: 'No such workout'})
    }

    //Else means the workout exist so we output it
    res.status(200).json(workout)
}

//Create a new Workout
      const createWorkout = async(req, res) => {
      const {title, load, reps} = req.body

  //Add doc to db
    try{
    //Creating an object using the Workout schema and model
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout) //From Body Parser
    }catch (error){
        res.status(400).json({error: error.message})

    }
}

//DELETE workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params //Grab the id from body params
    //Check if Id is valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json(error)
    }
    const workout = await Workout.findOneAndDelete({_id: id})
    res.status(200).json(workout)
}
// Error message if workout doesn't exist
    if(!workout){return res.status(404).json({error: 'No such workout'})}
     

//UPDATE WORKOUT

    const updateWorkout = async (req,res) => {
    const { id } = req.params 
   //Check if Id is valid
     if(!mongoose.Types.ObjectId.isValid(id)){return res.status(400).json(error)}

    //Else if the workout exist update
    const workout = await Workout.findOneAndUpdate({_id: id}, 
            {...req.body} //spreads the properties in this new object
         )
  // Error message if workout doesn't exist
  if(!workout){
  return res.status(404).json({error: 'No such workout'})
}
   //If workout exists
   res.status(200).json(workout)
}


module.exports = {getWorkout, getWorkouts, createWorkout, deleteWorkout, updateWorkout }