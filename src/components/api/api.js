import axios from 'axios';

const baseUrl = 'http://localhost:8080/';

export const getData = (url, options) => {
    return axios.get(`${baseUrl}${url}`, options={})
}

export const getSelectedData = (url, id) =>{
    //console.log("getting id here", id)
    return axios.get(`${baseUrl}${url}/${id}`)
}

export const postData = (url, postObj) => {
    return axios.postData(`${baseUrl}${url}`, postObj);

}

export const deleteData = (url, id) => {
    return axios.deleteData(`${baseUrl}${url}/${id}`)
}