
import { FETCH_COLLEGE_DATA_FAILURE, FETCH_COLLEGE_DATA_SUCCESS, SET_LOADER } from '../../../redux/actions/actionTypes';
import { fetchCollegeData, fetchCollegeDataFailure, fetchCollegeDataSuccess, setLoader } from '../../../redux/actions/collegeAction';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('Given college list actions', ()=>{
    let mock;
    beforeEach(()=>{
        mock = new MockAdapter(axios);

    });

    describe('when it is success', ()=> {
        describe('when fetchCollegeData() is called ', ()=>{

       
        
            test('should get college list successfully', async()=>{
                const res = [{id:1, name:"abc", location:'delhi'}];
                mock.onGet('http://localhost:8080/colleges').reply(200, res);
                let actionfn = fetchCollegeData();
                let dispatch = jest.fn();
                await actionfn(dispatch)
    
                expect(dispatch).toHaveBeenCalled();
                expect(dispatch).toHaveBeenCalledTimes(3);
                expect(dispatch.mock.calls[0]).toEqual([setLoader(true)]);
                expect(dispatch.mock.calls[1]).toEqual([fetchCollegeDataSuccess(res)]);
                expect(dispatch.mock.calls[2]).toEqual([setLoader(false)]);
    
            })
    
        })
    })

    describe('when it is failure',()=>{
        describe('when fetchCollegeData() is called and got an error', ()=>{

            test('should return an error', async()=>{
                let error = new Error([{Error:'Network error'}]);
                console.log(error);
                mock.onGet('http://localhost:8080/colleges').networkError();
                let actionfn = fetchCollegeData();
                let dispatch = jest.fn();
                await actionfn(dispatch)
        
                expect(dispatch).toHaveBeenCalled();
                expect(dispatch).toHaveBeenCalledTimes(3);
                expect(dispatch.mock.calls[0]).toEqual([setLoader(true)]);
                expect(dispatch.mock.calls[1]).not.toEqual([fetchCollegeDataFailure(error.message)]);
                expect(dispatch.mock.calls[2]).toEqual([setLoader(false)]);
        
            })
        
        })

    })


    describe('When fetch college data success is called', ()=>{
        it('should return correct action array object', ()=>{
            const payload = [{id: 1, name: 'Acharya', area:'south delhi', location:'Delhi', img:'localhost', des:"testing"}];
            const result = fetchCollegeDataSuccess(payload);
            expect(result).toEqual({type:FETCH_COLLEGE_DATA_SUCCESS, payload})

        })
    })

    describe('when fetch college data failure is called', ()=>{
        test('should return correct action object', ()=>{
            const error = "No college Found";
            const result = fetchCollegeDataFailure(error)
            expect(result).toEqual({type:FETCH_COLLEGE_DATA_FAILURE, payload:error})
        })
    })

    describe('Get loading value when API is called', ()=>{
        test('should return correct action', ()=>{
            const isLoading = true;
            const result = setLoader(isLoading)
            expect(result).toEqual({type:SET_LOADER, isLoading})
        })
    })

})



