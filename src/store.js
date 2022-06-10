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
    IS_LOGGED_IN : false,
    IS_REVIEWING_CLAIM : false,
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
    case 'LOAD_BILLABLE_CLAIMS':
      state = {
        ...state,
        BILLABLE_CLAIMS : rest.billable_claims
      }
      return state
    case 'IS_REVIEWING_CLAIM':
      state = {
        ...state,
        IS_REVIEWING_CLAIM : true
      }
      return state
    case 'STOP_INDIVIDUAL_CLAIM_REVIEW':
      state = {
        ...state,
        IS_REVIEWING_CLAIM : false
      }
      return state

    case 'LOAD_INDIVIDUAL_CLAIM_DETAIL':
      state = {
        ...state,
        CHARGES : rest.charges,
        PATIENT : rest.patient,
        PHYSICIAN : rest.physician,
        HISTORY : rest.history
      }
      return state
    case 'ACTIVE_ACCORDION_CHANGE':
      state = {
        ...state,
        ACTIVE_ACCORDION_ITEM_NO : rest.active_accordion
      }
      return state
    case 'LOAD_RULE_BOXES':
      state = {
        ...state,
        RULE_BOXES : rest.rule_boxes
      }
      return state
    case 'LOAD_MY_COLLECTIONS':
      state = {
        ...state,
        MY_COLLECTIONS : rest.my_collections
      }
      return state
    case 'SHOW_COLLECTION_SUMMARY':
      state = {
        ...state,
        SHOW_COLLECTION_SUMMARY : rest.value
      }
      return state
    case 'SHOW_CLAIM_REVIEW':
      if (rest.value == true) {
        state = {
          ...state,
          SHOW_CLAIM_REVIEW : rest.value,
          BATCH_NUMBER : rest.batch_number
        }
      }else {
        state = {
          ...state,
          SHOW_CLAIM_REVIEW : rest.value,
          BATCH_NUMBER : undefined
        }
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
