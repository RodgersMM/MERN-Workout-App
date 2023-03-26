const express = require('express')
const Workout = require('../models/workoutModel')
const {  createWorkout, 
         getWorkouts, 
         getWorkout,
         updateWorkout,
         deleteWorkout
      } = require('../controllers/workoutController')

//Require express Router
const router = express.Router()

//Get all workouts
router.get('/', getWorkouts)

//Get a single workout
router.get('/:id', getWorkout)

//Post a new workout using Asyn/Await and Try/Catch Method
router.post('/', createWorkout)

//Delete  a workout
router.delete('/:id', deleteWorkout)


//UPDATE a workout
router.patch('/:id', updateWorkout)


module.exports = router