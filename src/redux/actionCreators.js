import * as ActionTypes from './actionTypes';
import { DISHES } from "../shared/dishes";

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    setTimeout(dispatch(dishesLoaded(DISHES)), 2000);
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesError = (errMsg) => ({
    type: ActionTypes.DISHES_ERROR,
    payload: errMsg
});

export const dishesLoaded = (dishes) => ({
    type: ActionTypes.DISHES_LOADED,
    payload: dishes
})