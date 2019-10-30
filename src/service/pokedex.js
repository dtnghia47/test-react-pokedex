import axios from 'axios'

export const getListPokedex = (params = {}) => {
    return axios.get('http://localhost:3030/api/cards', {
        params: {
            ...params
        }
    })
}