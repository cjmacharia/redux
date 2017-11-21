import * as types from '../actions/actionTypes';
const initialState = {
  item:[],
  message:""
}
const itemReducer = (state=initialState, action)=>{
  console.log(action.id , 'iuiu')
    switch(action.type){
    case types.CREATE_ITEM:
      return{
        ...state,
        item: state.item.concat(action.data.item)
      }
    case types.DELETE_ITEM_SUCCESS:
      return {
        ...state,
         item: state.item.filter(item => item.id !== action.id)
      }
    case types.EDIT_ITEM_SUCCESS:
      return {
        ...state,
        item: state.item.map(it=>it.id === action.id? action.data.item:it)
      }
      default:
      return state

    }
}
export default itemReducer