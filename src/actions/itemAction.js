import * as types from './actionTypes';
import axios from 'axios';
import store from '../store/configureStore'
export const createItemSuccess = (data) => {
    return { type: types.CREATE_ITEM, data}
}
export const editItemSuccess = (data,id) => {
    return { type: types.EDIT_ITEM_SUCCESS , data, id}
}
export const fetchItemSuccess = () => {
    return { type: types.FETCH_ITEMS_SUCCESS }
}
export const deleteItemSuccess = ( data, id) =>{
    return { type: types.DELETE_ITEM_SUCCESS, data, id}

}

export const  createItem =(items, id)=>{
    return function(dispatch){
        console.log(items)
    return axios.post('http://localhost:5000/api/bucketlists/'+id.bucket_id+'/items/',
        items,
        {
        headers: {
            Authorization: 'Bearer ' + store.getState().loginReducer.token,
            content_type: 'application/json',
        }
    }).then(response =>{
        console.log(response)
        dispatch(createItemSuccess(response.data))
    })
}
}

export const deleteItem = (id, bucketId) =>{
return function(dispatch){
    return axios.delete('http://localhost:5000/api/bucketlists/'+bucketId.bucket_id+'/items/'+id,
    {
headers:{
    Authorization: 'Bearer ' + store.getState().loginReducer.token,
    content_type: 'application/json',
}
}).then(response =>{
    console.log(response)
    dispatch(deleteItemSuccess(response.data, id))
})
}
}
export const editItem = (bucketId, id, data) =>{
    console.log(id, "id" , data ,"data",bucketId)
    return function(dispatch){
        return axios.put('http://localhost:5000/api/bucketlists/'+bucketId.bucket_id+'/items/'+id,
        data,
        {
    headers:{
        Authorization: 'Bearer ' + store.getState().loginReducer.token,
        content_type: 'application/json',
    }
    }).then(response =>{
        console.log(response)
        dispatch(editItemSuccess(response.data, id))
    })
    }
    }