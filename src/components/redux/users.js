import * as ActionTypes from './ActionTypes';

export const UserReducer = (state = {
    users: [],
    isLoading: false,
     err: null
 }, action) => {
     switch (action.type) {
         case ActionTypes.ADD_USER:
             return { ...state, isLoading: false, err: null, users: action.payload };
         case ActionTypes.GET_USER:
             return { ...state, isLoading: false, err: null, users: action.payload };   
         case ActionTypes.UPDATE_USER:
             return { ...state, isLoading: false, err: null, users: action.payload };
         default:
             return state;
     }
 }