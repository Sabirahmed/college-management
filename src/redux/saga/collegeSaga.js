
import {takeLatest, put, call} from 'redux-saga/effects';
import { getData } from '../../components/api/api';
import { FETCH_COLLEGE_DATA } from '../actions/actionTypes';
import { fetchCollegeDataFailure, fetchCollegeDataSuccess, setLoader } from '../actions/collegeAction';

// Worker Saga
export function* collegeWorkerSaga() {
    console.log('Worker saga')
    
    try {
        yield put(setLoader(true));
        let response = yield call(getData, 'colleges')
        console.log(response.data);
        yield put(fetchCollegeDataSuccess(response.data));

    }catch(error) {
        yield put(fetchCollegeDataFailure(error.message));
    }finally{
        yield put(setLoader(false));
        
    }
    
}

// Watcher Saga
export function* collegeWatcherSaga() {
    console.log('college watcher saga');
    yield takeLatest(FETCH_COLLEGE_DATA, collegeWorkerSaga)
}