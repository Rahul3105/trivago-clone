import {
    REQUEST_FAILURE,
    REQUEST_PENDING,
    REQUEST_SUCCESS
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
    requestPending();
    axios.get(`http://localhost:3005/users?email=${payload.email}&password=${payload.password}`).then(({ data }) => {
        if (data.length > 0) {
            requestSuccess(data[0]);
        } else {
            requestFailure('User not  exist');
        }
    }).catch(err => {
        requestFailure(err.message);
    })
}


// export const logoutUser = () => {
//     return { type: LOGOUT_USER }
// }










