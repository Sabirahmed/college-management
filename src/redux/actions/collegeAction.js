import { FETCH_COLLEGE_DATA_FAILURE, FETCH_COLLEGE_DATA_SUCCESS, SET_LOADER} from './actionTypes';
import {getData} from '../../components/api/api';

export const fetchCollegeData = () => {
    
    return(
        async(dispatch)=> {
            try{
                dispatch(setLoader(true))
                let response = await getData('colleges');
                dispatch(fetchCollegeDataSuccess(response.data))

            }catch(error) {
                dispatch(fetchCollegeDataFailure(error.message))

            }finally{
                //console.log('Finally');
                dispatch(setLoader(false))
            }
        }
    )

}

export const fetchCollegeDataSuccess = (payload)=> {
    console.log("payload", payload)
    return {
        type:FETCH_COLLEGE_DATA_SUCCESS,
        payload

    }

}

export const fetchCollegeDataFailure = (payload)=> {
    return {
        type: FETCH_COLLEGE_DATA_FAILURE,
        payload
    }
}


export const setLoader = (isLoading)=> {
    return {
        type:SET_LOADER,
        isLoading
    }
}