import * as ActionTypes from './ActionTypes';

export const GuestReducer = (state = {
    guests: [],
    isLoading: false,
     err: null
 }, action) => {
     switch (action.type) {
         case ActionTypes.GET_GUEST:
             return { ...state, isLoading: false, err: null, guests: action.payload };   
         default:
             return state;
     }
 }