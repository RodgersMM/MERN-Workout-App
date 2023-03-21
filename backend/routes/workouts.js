const express = require('express')

//Require express Router
const router = express.Router()

//Get all workouts
router.get('/', (req,res) =>{
    res.json({mssg: 'Get all workouts'})
})

//Get a single workout
router.get('/:id', (req,res) =>{
    res.json({mssg: 'GET single workouts'})
})

//Post a new workout
router.post('/', (req,res) =>{
    res.json({mssg: 'POST a new workout'})
})

//Delete  aw workout
router.delete('/:id', (req,res) =>{
    res.json({mssg: 'DELETE a workout'})
})

//UPDATE a workout
router.patch('/:id', (req,res) =>{
    res.json({mssg: 'UPDATE a workout'})
})

module.exports = router