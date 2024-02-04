import {
    SOCIAL_NETWORK_PAGE_LIST_REQUEST,
    SOCIAL_NETWORK_PAGE_LIST_SUCCESS,
    SOCIAL_NETWORK_PAGE_LIST_FAIL,

} from '../constants/socialNetworkPageConstants'


export const socialNetworkPageListReducer = (state = { social_network_pages: [] }, action) => {
    switch (action.type) {
        case SOCIAL_NETWORK_PAGE_LIST_REQUEST:
            return { loading: true, social_network_pages: [] }

        case SOCIAL_NETWORK_PAGE_LIST_SUCCESS:
            return {
                loading_sn: false,
                social_network_pages: action.payload.social_network_pages,
            }

        case SOCIAL_NETWORK_PAGE_LIST_FAIL:
            return { loading: false, error_sn: action.payload }

        default:
            return state
    }
}


