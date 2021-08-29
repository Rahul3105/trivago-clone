
import {
    REDIRECT_FAILURE,
    REDIRECT_SUCCESS,
    REDIRECT_PENDING,
} from './actionsTypes';

const init = {
    isLoading: false,
    isError: false,
    error: '',
    data: {}
};
export const Reducer = (state = init, { type, payload }) => {
   
    switch (type) {
        case REDIRECT_PENDING:
            return {
                ...state,
                isLoading: true,
            }
        case REDIRECT_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: payload
            }
        case REDIRECT_SUCCESS:
         
            return {
                ...state,
                isLoading: false,
                isError: false,
                error: '',
                data : payload
            }
        default:
            return state;
    }
};
