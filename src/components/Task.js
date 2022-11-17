import { useDispatch } from 'react-redux'
import React from 'react'
import { delTask, doneTask } from '../Redux/Actions/actions'
import EditTask from './EditTask'




const Task = ({todos}) => {
    const dispatch=useDispatch()
    return (
        <div>
            {todos.map((todo) => <div id={todo.id} style={{display:'flex',justifyContent: 'space-around',padding:'10px'}}>
                <p><b>{todo.title}</b></p>
                <p>{todo.description}</p>
                <EditTask todo={todo}/>
                <button  onClick={()=>dispatch(doneTask(todo.id ))}>{todo.etat ?'done':'undone'}</button>
                <button onClick={() => dispatch(delTask(todo.id))}>remove</button>
            </div>)}
        </div>
    )
}

export default Task