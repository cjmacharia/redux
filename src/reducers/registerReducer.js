import * as types from '../actions/actionTypes';

export default function registerReducer (state={}, action){
    switch(action.type){
        case types.REGISTER_SUCCESS:
          return [...state,Object.assign({}, action.data)];

        default:
          return state
}
}