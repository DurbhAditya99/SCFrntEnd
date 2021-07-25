import * as ActionTypes from './ActionTypes';

export const ActivityReducer = (state = {
       activity: [],
        isLoading: false,
        err: null
    }, action) => {
        switch (action.type) {
            case ActionTypes.ADD_POST:
                return { ...state, isLoading: false, err: null, activity: action.payload };
            case ActionTypes.GET_POST:
                return { ...state, isLoading: false, err: null, activity: action.payload };
            case ActionTypes.SINGLE_POST:
                return { ...state, isLoading: false, err: null, activity: action.payload };
            case ActionTypes.UPDATE_POST:
                return { ...state, isLoading: false, err: null, activity: action.payload };
            case ActionTypes.UPDATE_POST_PIC:
                return { ...state, isLoading: false, err: null, activity: action.payload };
            case ActionTypes.POST_LOADING:
                return { ...state, isLoading: true, err: null, activity: [] };
            case ActionTypes.POST_FAILED:
                return { ...state, isLoading: false, err: action.payload, activity: [] };
            default:
                return state;
        }
    }

