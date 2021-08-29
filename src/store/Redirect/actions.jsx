import {
    REDIRECT_FAILURE,
    REDIRECT_PENDING,
    REDIRECT_SUCCESS,
} from './actionsTypes';

export const redirectFailure = (payload) => {
    return { type:REDIRECT_FAILURE, payload}
}
export const redirectSuccess = (payload) => {
    return { type:REDIRECT_SUCCESS, payload}
}
export const redirectPending = () => {
    return { type:REDIRECT_PENDING}
}


