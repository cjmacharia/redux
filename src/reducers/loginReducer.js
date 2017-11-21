import * as types from '../actions/actionTypes';

const initState = {
}

export const loginReducer = (state = initState, action)=>{
  switch (action.type){
    case types.LOGIN_SUCCESS:
      return {...state,
         token:action.user.access_token

  }
    default:
      return state
}
}
export default loginReducer