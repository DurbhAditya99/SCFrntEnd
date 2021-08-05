import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { UserReducer } from './users';
import { ActivityReducer } from './activity';
import { GuestReducer } from './guest';

export const ConfigureStore = () => {
    const store = createStore(combineReducers({ users: UserReducer , activity: ActivityReducer , guests:GuestReducer  }), 
    compose(applyMiddleware(thunk)));
    return store;
}