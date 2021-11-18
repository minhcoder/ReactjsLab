import {DISHES} from '../share/dishes';
import { COMMENTS } from '../share/comments';
import { LEADERS } from '../share/leaders';
import { PROMOTIONS } from '../share/promotions';

export const initialState={
    dishes: DISHES,
    comments: COMMENTS,
    leaders: LEADERS,
    promotions: PROMOTIONS,
};

export const Reducer=(state=initialState,action)=>{
    return state;
}