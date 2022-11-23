import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTask } from '../Redux/Actions/actions';
import './style.css'



const AddTodo = ({handleAll,handleDone,handleUndone}) => {
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
        <div className='add-task' style={{display:'flex',justifyContent:'flex-end'}}>
            <input style={{height:'48px',width:'150px',margin:'10px',border:'none',borderRadius:'10px'}} type='text' placeholder='enter task title'
            onChange={e => setTitle(e.target.value)}/>
            <input style={{height:'48px',width:'250px',margin:'10px',border:'none',borderRadius:'10px'}} type='text' placeholder='enter task description'
            onChange={e => setDescription(e.target.value)}/>
            <button className='but_add' onClick={handleSubmit}>Add task</button>
            <p className='select'>Select task :</p>
            <div style={{display:'flex',flexDirection:'column',marginTop:'5px'}}>
            <button className='button-29' onClick={handleAll}>All</button>
            <button className='button-29' onClick={handleDone}>Done</button>
            <button className='button-29' onClick={handleUndone}>Undone</button>
            </div>
        </div>
    ) 
}
export default AddTodo
