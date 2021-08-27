import {
    REQUEST_FAILURE,
    REQUEST_PENDING,
    REQUEST_SUCCESS,
    LOGOUT_USER
} from './actionTypes';
import axios from 'axios';
const requestFailure = (payload) => {
    return { type:REQUEST_FAILURE, payload}
}
const requestSuccess = (payload) => {
    return { type:REQUEST_SUCCESS, payload}
}
const requestPending = () => {
    return { type:REQUEST_PENDING}
}
export const loginUser = (payload) => (dispatch) => {
    dispatch(requestPending());
    if (payload.googleAuth) {
        dispatch(requestSuccess(payload));
    } else {
        axios.get(`http://localhost:3005/users?email=${payload.email}&password=${payload.password}`).then(({ data }) => {
            if (data.length > 0) {
                dispatch(requestSuccess(data[0]));
            } else {
                dispatch(requestFailure('User not  exist'));
            }
        }).catch(err => {
            dispatch(requestFailure(err.message));
        })
    }
}


export const logoutUser = () => {
    return { type: LOGOUT_USER }
}










