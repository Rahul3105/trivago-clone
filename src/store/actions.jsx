import { GET_RECENTLY_DATA, GET_RECENTLY_REQUEST, GET_RECENTLY_FAILURE } from './actionTypes';
import axios from 'axios'

const getDataRequest = () => {
    return {
        type:GET_RECENTLY_REQUEST
    }
}
const getDataSuccess = (payload) => {
    return {
        type: GET_RECENTLY_DATA,
        payload:payload
    }
}
const getDataFailure = (err) => {
    return {
        type: GET_RECENTLY_FAILURE,
        payload:err
    }
}
export const getDetails = (dispatch) => {
    const requestAction = getDataRequest()
    dispatch(requestAction);
    axios.get("http://localhost:8000/recentlyVisited")
        .then((res) => {
            const successAction = getDataSuccess(res.data)
            dispatch(successAction)
        })
        .catch((err) => {
            const failureAction = getDataFailure()
            dispatch(failureAction)
    })
}