import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { UserReducer } from './users';
import { ActivityReducer } from './activity';

export const ConfigureStore = () => {
    const store = createStore(combineReducers({ users: UserReducer , activity: ActivityReducer }), 
    compose(applyMiddleware(thunk)));
    return store;
}