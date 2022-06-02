import { createStore , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {configureStore} from "@reduxjs/toolkit";
import {loadState, saveState} from "./localStorage";


let initialState = undefined;
console.log(loadState())
if (loadState() != undefined) {
  initialState = loadState().state
} else{
  initialState = {
    sidebarShow: true,
    IS_LOGGED_IN : false
  }
}




const reducer = (state = initialState, { type, ...rest }) => {
  console.log('reducer : ', type)
  switch (type) {
    case 'LOGGED_IN':
      console.log(type)
      state = { ...state,
        IS_LOGGED_IN : true }
      return state
    case 'LOGOUT':
      state = {
        ...state,
        IS_LOGGED_IN: false
      }
      return state
    default:
      return state
  }
}
// const rootReducer = (state = ini) =>{
//
// }
const store = configureStore({
  reducer: reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {  }
      }
    })
})

store.subscribe(() => {
  saveState({
    state: store.getState(),
  });
});


export default store
