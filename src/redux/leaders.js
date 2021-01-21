import * as ActionTypes from "./actionTypes";

export const Leaders = (state = {
    isLoading: true,
    isError: null,
    leaders: []
}, action) => {
    switch (action.type) {
        case ActionTypes.LEADERS_LOADING:
            return {...state, isLoading: true, errMsg: null, leaders: []};
        case ActionTypes.LEADERS_FAILED:
            return {...state, isLoading: false, errMsg: action.payload};
        case ActionTypes.LEADERS_LOADED:
            return {...state, isLoading: false, errMsg: null, leaders: action.payload};

        default:
            return state;
    }
}