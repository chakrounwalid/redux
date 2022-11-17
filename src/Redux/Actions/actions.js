
import { ADD_TASK, DEL_TASK, DON_TASK, EDIT_TASK } from "../Constants/actions-types"

export const addTask = newTask => {
    return {
        type: ADD_TASK,
        payload: newTask
    }
}
export const delTask = (payload) => {
    return {
        type: DEL_TASK,
        payload
    }
}
export const doneTask = (payload) =>{
    return {
        type: DON_TASK,
        payload
    }
}
export const editDesc = (payload) =>{
    return {
        type: EDIT_TASK,
        payload
    }
}