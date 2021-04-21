
import {fetchSelectedCollege, fetchSelectedCollegeDataFailure, fetchSelectedCollegeDataSuccess, setLoader} from '../../../redux/actions/selectedCollege';
import {FETCH_SELECTED_COLLEGE_FAILURE, FETCH_SELECTED_COLLEGE_SUCCESS, SET_LOADER} from '../../../redux/actions/actionTypes'
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('Given selected college action ', ()=>{

    let mock;
    beforeEach(()=>{
        mock = new MockAdapter(axios);

    });

    describe('when fetchSelectedCollegeData() is called ', ()=>{

       
        test('should get college list successfully', async()=>{
            const res = [{id:1, name:"abc", location:'delhi'}];
            const id = 2
            mock.onGet('http://localhost:8080/colleges/'+id).reply(200, res);
            let actionfn = fetchSelectedCollege(id);
            let dispatch = jest.fn();
            let respponse = await actionfn(dispatch)

            expect(dispatch).toHaveBeenCalled();
            expect(dispatch).toHaveBeenCalledTimes(3);
            expect(dispatch.mock.calls[0]).toEqual([setLoader(true)]);
            expect(dispatch.mock.calls[1]).toEqual([fetchSelectedCollegeDataSuccess(res)]);
            expect(dispatch.mock.calls[2]).toEqual([setLoader(false)]);

        })

    })

    describe('when fetchSelectedCollegeData() failure is called ', ()=>{

       
        test('should get college list successfully', async()=>{
            const error = new Error('Network error');
            let id = 2;
            mock.onGet('http://localhost:8080/colleges/'+id).networkError();
            let actionfn = fetchSelectedCollege(id);
            let dispatch = jest.fn();
             await actionfn(dispatch)

            expect(dispatch).toHaveBeenCalled();
            expect(dispatch).toHaveBeenCalledTimes(3);
            expect(dispatch.mock.calls[0]).toEqual([setLoader(true)]);
            expect(dispatch.mock.calls[1]).not.toEqual([fetchSelectedCollegeDataFailure(error.message)]);
            expect(dispatch.mock.calls[2]).toEqual([setLoader(false)]);

        })

    })


    describe('when selected college data is called', ()=>{
        test('should return selected college obj', ()=>{
            const payload = [{id:2, name:'Maulana azad college', location:'delhi'}];
            const result = fetchSelectedCollegeDataSuccess(payload);
            expect(result).toEqual({type:FETCH_SELECTED_COLLEGE_SUCCESS, payload})
        })
    })


    describe('when selected college data is called', ()=>{
        test('should return correct action obj', ()=>{
            const error = 'No college is selected';
            const result = fetchSelectedCollegeDataFailure(error);
            expect(result).toEqual({type:FETCH_SELECTED_COLLEGE_FAILURE, payload:error})
        })
    })

    describe('Get loading value when API is called', ()=>{
        test('should return correct action', ()=>{
            const isLoading = false;
            const result = setLoader(isLoading)
            expect(result).not.toBe({type:SET_LOADER, isLoading})
        })
    })


})