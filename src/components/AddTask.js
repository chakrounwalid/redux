import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTask } from '../Redux/Actions/actions';



const AddTodo = ({handleSearch,search}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(
        addTask({
            id: Date.now(),
            title,
            description,
            etat :false
        }))
    }
    
    return (
        <div className='add-task' style={{display:'flex',justifyContent: 'space-around'}}>
            <input type='text' placeholder='enter task title'
            onChange={e => setTitle(e.target.value)}/>
            <input type='text' placeholder='enter task description'
            onChange={e => setDescription(e.target.value)}/>
            <button onClick={handleSubmit}>Add new task</button>
            <p><b>Select task:</b></p>
            <button onClick={handleSearch}>{search ? 'Done':'All'}</button>
    
        </div>
    )
}
export default AddTodo
