import * as types from './actionTypes';
import axios from 'axios';
import store from '../store/configureStore'
const apiUrl = 'http://localhost:5000/api/bucketlists ';
export const createBucketSuccess = (bucket) => {
    return { type: types.CREATE_BUCKET, bucket }
}
export const editBucketSuccess = (bucket, id) => {
    return { type: types.EDIT_BUCKETS_SUCCESS, bucket, id }
}
export const fetchBucketsSuccess = (bucket) => {
    return { type: types.FETCH_BUCKETS_SUCCESS, bucket }
}
export const deleteBucketSuccess = (bucket, id) =>{
    return { type: types.DELETE_BUCKETS_SUCCESS , bucket, id}

}
export const createBuckets = (bucket) => {
    return function (dispatch) {
        return axios.post(apiUrl,
            bucket,
            {
            headers: {
                Authorization: 'Bearer ' + store.getState().loginReducer.token,
                content_type: 'application/json',
            }
        }
        )
        .then(response => {
             dispatch(createBucketSuccess(response.data))
        })
        .catch(error => {
         })
    }
}
export const loadBuckets = () => {
    return function (dispatch) {
        return axios.get(apiUrl, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + store.getState().loginReducer.token,
                content_type: 'application/json',
            }
        }).then(response => {
            console.log(response.data)
            dispatch(fetchBucketsSuccess(response.data))
        })
            .catch(error => {
            })
    }
}

export const deleteBucket = (id) => {
    return function (dispatch){
        return axios.delete('http://localhost:5000/api/bucketlists/'+id,
        {
        headers:{
            Authorization: 'Bearer ' + store.getState().loginReducer.token,
            content_type: 'application/json',
        }
        }).then(response =>{
            console.log(response)
            dispatch(deleteBucketSuccess(response.data, id))
        }).catch(error =>{
            console.log(error)
        })
    }
}
export const editBucket = (id, payload ) => {
    return function (dispatch){
        return axios.put('http://localhost:5000/api/bucketlists/'+id,
        payload,
        {
        method:'PUT',
        headers:{
            Authorization: 'Bearer ' + store.getState().loginReducer.token,
            content_type: 'application/json',
        }
        }).then(response =>{
            dispatch(editBucketSuccess(response.data, id))
        }).catch(error =>{
            console.log(error)
        })
    }
}