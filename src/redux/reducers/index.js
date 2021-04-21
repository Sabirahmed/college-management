import { combineReducers } from "redux";
import collegeReducer from "./collegeReducer";
import selectedCollegeReducer from "./selectedCollegeReducer";


const rootReducer = combineReducers({
    colleges:collegeReducer,
    selectedCollege: selectedCollegeReducer
});

export default rootReducer;