import { useDispatch } from 'react-redux'
import React from 'react'
import { delTask, doneTask } from '../Redux/Actions/actions'
import EditTask from './EditTask'
import './style.css'
import { FiCheckCircle, FiCircle, FiXCircle,  } from "react-icons/fi";



const Task = ({todos}) => {
    const dispatch=useDispatch()
    return (
        <div className='list'>
            {todos.length == 0 ? <b>todo list is empty</b> : todos.map((todo) => <div id={todo.id} className='item' >
                <p style={{width:'150px'}}><b>{todo.title}</b></p>
                <p style={{width:'400px'}}>{todo.description}</p>
                <div style={{width:'200px',display:'flex',justifyContent:'space-around'}}>
                <EditTask todo={todo}/>
                {todo.etat ? <FiCheckCircle className='undo' onClick={()=>dispatch(doneTask(todo.id ))}/> :<FiCircle className='done' onClick={()=>dispatch(doneTask(todo.id ))}/> }
                <FiXCircle className='del' onClick={() => dispatch(delTask(todo.id))} />
                </div>
            </div>)}
        </div>
    )
}

export default Task