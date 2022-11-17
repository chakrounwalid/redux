import React, { useState } from 'react';
import AddTodo from './AddTask';
import Task from './Task';
import {useSelector} from 'react-redux'





const ListTask = () => {
    
    const [search,setSearch]=useState(false)
    const handleSearch =()=> setSearch(!search);
    const todos = useSelector((state)=>state);
    return(
        <div>
            <AddTodo handleSearch={handleSearch} search={search}/>
            <Task todos={search ? todos.filter((e)=>e.etat):todos }/>
        </div>
    )
}
export default ListTask
