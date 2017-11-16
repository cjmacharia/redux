import  axios  from 'axios';
import {  browserHistory} from 'react-router'
import * as types from './actionTypes';
const apiUrl = 'http://127.0.0.1:5000/api/bucketlists';
export const registerUser =(data)=>{
    return{ type:types.REGISTER_SUCCESS, data }
}
 export const signUp = (data) =>{
     return function(dispatch){
        return axios.post(apiUrl +'/auth/register/',
            data
         ).then(response =>{
             dispatch(registerUser(data))
             browserHistory.push('/login')
         }).catch(error =>{
            console.log(error)
             throw(error)
         })
     }
 }