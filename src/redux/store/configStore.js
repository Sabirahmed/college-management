import {applyMiddleware, createStore, compose} from 'redux';
import rootReducer from '../reducers/collegeReducer';
import createMiddlewareSaga from 'redux-saga';
import { rootSaga } from '../saga';


const sagaMiddleware = createMiddlewareSaga();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configStore = (initState) => {
    
    let store = createStore(rootReducer, initState, composeEnhancers(applyMiddleware(sagaMiddleware)));
    // sagaMiddleware.run(helloWorldSaga)
    // sagaMiddleware.run(greeting);
    //instead of running multiple saga, I'm going to create a root saga and run all saga in the root saga file
    sagaMiddleware.run(rootSaga);
    return store;
   
}

export default configStore;
