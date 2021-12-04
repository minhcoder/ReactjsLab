import {createStore,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Comments } from './comments';
import { Dishes } from './dishes';
import { Leaders } from './leaders';
import { Promotions } from './promotions';

export const ConfigureStore=()=>{
    const store=createStore(
        combineReducers({
            dishes:Dishes,
            leaders:Leaders,
            comments:Comments,
            promotions:Promotions,
        }),
    );
    return store;
}