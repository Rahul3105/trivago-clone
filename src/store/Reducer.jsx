import { fade } from '@material-ui/core';
import { GET_RECENTLY_DATA, GET_RECENTLY_FAILURE, GET_RECENTLY_REQUEST } from './actionTypes';
const initState = {
    data: [],
    isLoading: false,
    isError:false
}

export const RecentlyReducer = (state = initState, { type, payload }) => {
    switch (type) {
      case GET_RECENTLY_DATA: {
        return {
          ...state,
            data: payload,
          isLoading:false
        };
      }
      case GET_RECENTLY_REQUEST: {
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      }
      case GET_RECENTLY_FAILURE: {
        return {
          ...state,
            isLoading: false,
            isError: payload,

        };
      }
      default:
        return state;
    }
}