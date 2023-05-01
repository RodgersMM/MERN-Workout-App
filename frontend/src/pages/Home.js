import { useEffect, useState } from 'react'

//importing components
import WorkoutDetails from '../components/WorkoutDetails'

const Home = () => {
//Hooks defined at top of function
const [workouts, setWorkouts] = useState(null)

useEffect(() =>
 {
    //Create fetchWorkouts to store all workouts from backend
    const fetchWorktouts = async () =>
    {
        //Fetch data from Api and store it in response variable
     const response = await fetch ('/api/workouts')
        //http://localhost:4000 used in proxy in react package.json
        //Storing the response in json using json() method
     const json = await response.json()

          //Check if response is ok using ok 
     if(response.ok){setWorkouts(json)}
        //Updating setWorkouts  state to json if response is ok
        //Then we need to use UseState to store state
        //We therefore set setWorkouts to json response data
        
     }
     //Calling the fetchWorkouts function
     fetchWorktouts()
 }, [])


    return(
        <div className="home">
            <div className='workouts'>
                { workouts && workouts.map((workout) =>
                    (
                      // <p key = {workout._id}>{workout.title} </p>
                      <WorkoutDetails key={workouts._id} workout={workout} />
                     )
                    )
                }
            </div>
        </div>
    )

}

export default Home
