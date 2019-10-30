import { get, cloneDeep, findIndex } from 'lodash'
import { getListPokedex } from '../service/pokedex';
import {
    LOADING,
    GET_DATA_DONE,
    GET_DATA_ERROR,
    UPDATE_DATA_DONE,
} from '../const/types'

export const getList = (params = {}) => {
    return dispatch => {
        dispatch({ type: LOADING });
        getListPokedex(params)
            .then(res => {
                dispatch({
                    type: GET_DATA_DONE,
                    data: res.data.cards,
                });
            })
            .catch(() => {
                dispatch({ type: GET_DATA_ERROR });
            });
    };
};

export const updateData = (newData = {}) => {
    return (dispatch, getState) => {
        dispatch({ type: LOADING });
        let listData = get(getState(), 'pokedex.data', []);
        listData = cloneDeep(listData)
        let index = findIndex(listData, { id: newData.id });
        listData.splice(index, 1, { ...newData });
        dispatch({
            type: UPDATE_DATA_DONE,
            data: listData,
        });
    }
};