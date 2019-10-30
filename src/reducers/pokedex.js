import {
    LOADING,
    GET_DATA_DONE,
    GET_DATA_ERROR,
    UPDATE_DATA_DONE,
} from '../const/types'

export const initialState = {
    loading: false,
    data: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true,
            }
        case GET_DATA_DONE:
            return {
                ...state,
                loading: false,
                data: action.data,
            };
        case GET_DATA_ERROR:
            return {
                ...state,
                loading: false,
            }
        case UPDATE_DATA_DONE:
            return {
                ...state,
                loading: false,
                data: action.data,
            };
        default:
            return state;
    }
};