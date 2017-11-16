import * as types from '../actions/actionTypes';
import _ from "lodash";
const initState = {
  bucket: [],
  message: ''
}

const bucketReducer = (state = initState, action) => {
  switch(action.type){
        case types.CREATE_BUCKET:
          return{...state,
            bucket: state.bucket.concat(action.bucket.bucket)};
        case types.FETCH_BUCKETS_SUCCESS:
          return {...state,
            bucket : action.bucket
          } ;
        case types.DELETE_BUCKETS_SUCCESS:
        return {...state,
          message:action.bucket,
          bucket: state.bucket.filter(bucket => bucket.id !== action.id)
        };
        case types.EDIT_BUCKETS_SUCCESS:
        return{
          ...state,
           bucket:state.bucket.map(buck => action.id === buck.id? action.bucket.bucket:buck),
           message:action.bucket.message
        };
        console.log(action.id, "action id")
    default:
      return state
    }
}
export default bucketReducer;