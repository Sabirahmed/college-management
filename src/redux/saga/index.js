import {all} from 'redux-saga/effects';
import { collegeWatcherSaga } from './collegeSaga';
import {selectedCollegeWatcherSaga} from './selectedCollegeSaga';

export function* rootSaga() {

    yield all([
        collegeWatcherSaga(),
        selectedCollegeWatcherSaga()
    ])
}