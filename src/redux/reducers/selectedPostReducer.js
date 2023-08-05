import { SELECTED_POST } from "../actions/actionTypes";

let initialState = null;

const selectedPostReducer = (state = initialState, action) => {
    switch(action.type){
        case SELECTED_POST:
            return action.payload
        default:
            return state
    }
}

export default selectedPostReducer;