import axios from 'axios'
import {  browserHistory} from 'react-router'
import * as types from './actionTypes';
export const userLoginSuccess = (user)=>{
    return{
        type: types.LOGIN_SUCCESS,
        user
    }
}
export function userLogin(user){
    return dispatch => {
        const request = axios({
            url:'http://localhost:5000/api/bucketlists/auth/login/',
            method:'POST',
            data:user,
        });

        return request.then(response =>{
                dispatch(userLoginSuccess(response.data))
                browserHistory.push('/bucket')

        }

        )


    }
}

