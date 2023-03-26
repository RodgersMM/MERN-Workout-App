
//Require mongoose
const mongoose = require('mongoose')

//Creating Schema Variable

const Schema = mongoose.Schema

//Creating Schema
const workoutSchema = new Schema({
    title : {
        type :  String,
        required : true,
    },
    reps: {
        type: Number,
        required : true,
    },
    load: {
        type: Number,
        required : true,
    }

},
{timestamps: true} //States when the object was created
)

//Create Model using Schema


module.exports = mongoose.model('workout', workoutSchema )
