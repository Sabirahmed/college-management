import { FETCH_SELECTED_COLLEGE_SUCCESS, FETCH_SELECTED_COLLEGE_FAILURE, SET_LOADER } from "../actions/actionTypes"

const initialState = {
    selectedCollege: [],
    error: '',
    isLoading: false
}

export const selectedCollegeReducer = (state= initialState, action={}) => {

    console.log("selected college reducer", action)
    switch(action.type) {
        case FETCH_SELECTED_COLLEGE_SUCCESS:
            return {...state, selectedCollege:action.payload}
        case FETCH_SELECTED_COLLEGE_FAILURE:
            return {...state, error:action.payload}   
        case SET_LOADER:
            return {...state, isLoading:action.payload}     
        default:
            return state  
    }

}

export default selectedCollegeReducer;