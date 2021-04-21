import { FETCH_COLLEGE_DATA_FAILURE, FETCH_COLLEGE_DATA_SUCCESS, SET_LOADER,FETCH_SELECTED_COLLEGE_SUCCESS, FETCH_SELECTED_COLLEGE_FAILURE } from "../actions/actionTypes"

const initialState = {
    collegeList: [],
    selectedCollege: [],
    error: '',
    isLoading: false
}

export const collegeReducer = (state=initialState, action={})=> {
    //console.log('college reducer', action)
    switch(action.type) {
        case FETCH_COLLEGE_DATA_SUCCESS:
            return {...state, collegeList:action.payload}
        case FETCH_COLLEGE_DATA_FAILURE:
            return {...state, error:action.payload}   
        case SET_LOADER:
            return {...state, isLoading:action.payload}    
            
        case FETCH_SELECTED_COLLEGE_SUCCESS:
            return {...state, selectedCollege:action.payload}
        case FETCH_SELECTED_COLLEGE_FAILURE:
            return {...state, error:action.payload}   
        default:
            return state    
    }

}

export default collegeReducer;