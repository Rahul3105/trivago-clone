
import {
    REQUEST_FAILURE,
    REQUEST_SUCCESS,
    REQUEST_PENDING,
    LOGOUT_USER
} from './actionTypes';

import {getLocalStorage ,setLocalStorage, removeLocalStorage} from '../../utils/LocalStorage'

const init = {
    isAuth: getLocalStorage('currLoggedIn') ? true : false,
    isLoading: false,
    isError: false,
    error: '',
    userInfo: getLocalStorage('currLoggedIn') || ''
};
export const Reducer = (state = init, { type, payload }) => {
   
    switch (type) {
        case REQUEST_PENDING:
            return {
                ...state,
                isLoading: true,
            }
        case REQUEST_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: payload
            }
        case REQUEST_SUCCESS:
            let userInfo = payload
            setLocalStorage('currLoggedIn',userInfo);
            return {
                ...state,
                isLoading: false,
                isError: false,
                error: '',
                isAuth: true,
            }
        case LOGOUT_USER:
        
            removeLocalStorage('currLoggedIn');
            return {
                ...state,
                isLoading: false,
                isError: false,
                error: '',
                isAuth: false,
            }

        default:
            return state;
    }
};
