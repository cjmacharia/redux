import * as types from '../actions/actionTypes';
const initState = {
  bucket: [],
  message: '',
  next_page:'',
  prev_page:''
}

const bucketReducer = (state = initState, action) => {
  console.log(state, 'kiumi')
  switch(action.type){
        case types.CREATE_BUCKET:
          return{...state,
            bucket: state.bucket.concat(action.bucket.bucket)};
        case types.FETCH_BUCKETS_SUCCESS:
          return {...state,
            message:[action.bucket],
            bucket : action.bucket.bucketlists,
            next_page: action.bucket.next_page,
            prev_page:action.bucket.prev_page
          } ;
        case types.DELETE_BUCKETS_SUCCESS:
        return {...state,
          message:[action.bucket],
          bucket: state.bucket.filter(bucket => bucket.id !== action.id),
          next_page: state.next_page,
          prev_page:state.prev_page
        };
        case types.EDIT_BUCKETS_SUCCESS:
        return{
          ...state,
           bucket:state.bucket.map(buck => action.id === buck.id? action.bucket.bucket:buck),
           message:[action.bucket],
           next_page: action.bucket.next_page,
           prev_page:action.bucket.prev_page
        };
    default:
      return state
    }
}
export default bucketReducer;