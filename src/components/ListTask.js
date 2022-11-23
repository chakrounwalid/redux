import React, { useState } from 'react';
import AddTodo from './AddTask';
import Task from './Task';
import {useSelector} from 'react-redux'





const ListTask = () => {
    
    const [search,setSearch]=useState("ALL")
    const handleAll =()=> setSearch("ALL")
    const handleDone =()=> setSearch("DONE");
    const handleUndone =()=> setSearch("UNDONE");
    const todos = useSelector((state)=>state);
    return(
        <div>
            <AddTodo handleAll={handleAll} handleDone={handleDone} handleUndone={handleUndone}/>
            <Task todos={search === "ALL"? todos: search === "DONE" ? 
            todos.filter((e)=>e.etat):todos.filter((e)=>!e.etat) }/>
        </div>
    )
}
export default ListTask
