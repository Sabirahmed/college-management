import { FETCH_SELECTED_COLLEGE_SUCCESS, FETCH_SELECTED_COLLEGE_FAILURE, SET_LOADER} from './actionTypes';
import {getSelectedData} from '../../components/api/api';

export const fetchSelectedCollege = (id) => {
    return(
        async(dispatch)=> {
            try{
                dispatch(setLoader(true))
                let response = await getSelectedData('colleges', id);
                dispatch(fetchSelectedCollegeDataSuccess(response.data))

            }catch(error) {
                dispatch(fetchSelectedCollegeDataFailure(error.message))

            }finally{
                console.log('Finally');
                dispatch(setLoader(false))
            }
        }
    )

}

export const fetchSelectedCollegeDataSuccess = (payload)=> {
    //console.log("payload", payload)
    return {
        type:FETCH_SELECTED_COLLEGE_SUCCESS,
        payload

    }

}

export const fetchSelectedCollegeDataFailure = (payload)=> {
    return {
        type: FETCH_SELECTED_COLLEGE_FAILURE,
        payload
    }
}


export const setLoader = (isLoading)=> {
    return {
        type:SET_LOADER,
        isLoading
    }
}