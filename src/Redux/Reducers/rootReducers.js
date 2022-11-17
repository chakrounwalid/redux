import { ADD_TASK,DEL_TASK, DON_TASK, EDIT_TASK } from "../Constants/actions-types"
 
const initialState = []


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return [...state, action.payload];
        case DEL_TASK:
            return state.filter((elm) => elm.id !== action.payload)
        case DON_TASK:
            return state.map((elm) =>elm.id === action.payload ? { ...elm, etat: !elm.etat } : elm);
        case EDIT_TASK :
            return state.map((elm)=>elm.id ===action.payload.id ? {...elm,description:action.payload.description} :elm);
        default:
            return state
    }
}

export default rootReducer 