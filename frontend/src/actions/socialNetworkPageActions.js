import axios from 'axios'
import {
    SOCIAL_NETWORK_PAGE_LIST_REQUEST,
    SOCIAL_NETWORK_PAGE_LIST_SUCCESS,
    SOCIAL_NETWORK_PAGE_LIST_FAIL,

} from '../constants/socialNetworkPageConstants'
const instance_backend = axios.create({ baseURL: process.env.REACT_APP_URL_BACKEND });


export const listSocialNetworkPages = (keyword = '') => async (dispatch) => {
    try {
        dispatch({ type: SOCIAL_NETWORK_PAGE_LIST_REQUEST })

        const { data } = await instance_backend.get(`/api/socialNetworkPages${keyword}`)

        dispatch({
            type: SOCIAL_NETWORK_PAGE_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: SOCIAL_NETWORK_PAGE_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
