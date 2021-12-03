import {createStore} from 'redux';
import { Reducer,initialState } from './reduxer';

export const ConfigureStore=()=>{
    const store=createStore(
        Reducer,
        initialState,
    );
    return store;
}