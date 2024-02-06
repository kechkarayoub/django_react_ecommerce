import axios from 'axios'

const instance_backend = axios.create({ baseURL: process.env.REACT_APP_URL_BACKEND });



export const createNewsletter = (newsletter, callback) => async (dispatch, getState) => {
    try {

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await instance_backend.post(
            `/api/newsletters/create/`,
            newsletter,
            config
        )
        console.log(data);
        if(callback)callback();

    } catch (error) {
        console.log(error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message)
        if(callback)callback();
    }
}


