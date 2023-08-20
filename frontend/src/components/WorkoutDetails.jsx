import { useWorkoutsContext } from "../Hooks/useWorkoutsContext"
import { useAuthContext } from "../Hooks/useAuthContext"

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'


const WorkoutDetails = ({ workout }) => {
    const { dispatch } = useWorkoutsContext()
    const { user } = useAuthContext()

    const handleClick = async () => {
        if (!user) {
            return
        }

        const response = await fetch('http://localhost:4000/api/workouts/' + workout._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({ type: 'DELETE_WORKOUT', payload: json })
        }
    }

    return (
        <div className="workout-details my-5" >
            <h4 className="font-bold my-1">{workout.title}</h4>
            <p className="font-semibold"> Load (kg): {workout.load}</p>
            <p className="font-semibold"> Number of reps: {workout.reps}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
            <span className="shadow-inner" onClick={handleClick}><img className="h-6 w-6" src="../../public/delete.png" alt="" /></span>
        </div>
    )
}

export default WorkoutDetails