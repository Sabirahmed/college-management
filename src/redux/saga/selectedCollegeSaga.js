import { FETCH_SELECTED_COLLEGE } from "../actions/actionTypes";
import {call, put, takeEvery} from 'redux-saga/effects';
import {getSelectedData} from '../../components/api/api';
import {fetchSelectedCollegeDataSuccess, fetchSelectedCollegeDataFailure, setLoader} from '../actions/selectedCollege';

export function* selectedCollegeWorkerSaga(action) {
    console.log("selected worker saga", action.selectedId)
    
   try {
        yield put(setLoader(true));
        let response = yield call(getSelectedData, 'colleges', action.selectedId)
        console.log(response.data);
        yield put(fetchSelectedCollegeDataSuccess(response.data));

    }catch(error) {
        yield put(fetchSelectedCollegeDataFailure(error.message));
    }finally{
        yield put(setLoader(false));
    }
}




export function* selectedCollegeWatcherSaga() {

    const action = yield takeEvery(FETCH_SELECTED_COLLEGE, selectedCollegeWorkerSaga)
    
}