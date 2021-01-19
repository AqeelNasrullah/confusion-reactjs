import * as ActionTypes from './actionTypes';

export const Dishes = (state = {
    isLoading: true,
    isError: null,
    dishes: []
}, action) => {
    switch (action.type) {
        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMess: null, dishes: []};
        case ActionTypes.DISHES_ERROR:
            return {...state, isLoading: false, errMess: action.payload};
        case ActionTypes.DISHES_LOADED:
            return {...state, isLoading: false, errMess: null, dishes: action.payload};
        default:
            return state;
    }
};