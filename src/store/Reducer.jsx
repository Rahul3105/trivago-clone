import {
  GET_RECENTLY_DATA,
  GET_RECENTLY_FAILURE,
  GET_RECENTLY_REQUEST,
  HOTEL_REQUEST,
  HOTEL_SUCCESS,
  HOTEL_FAILURE,
} from "./actionTypes";
const initState = {
  data: [],
  isLoading: false,
  isError: false,
  hotel: [],
  hotLoad: false,
  hotErr: false,
};

export const RecentlyReducer = (state = initState, { type, payload }) => {
  console.log("start")
  switch (type) {
    case GET_RECENTLY_DATA: {
      return {
        ...state,
        data: payload,
        isLoading: false,
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
    case HOTEL_REQUEST: {
      console.log("omkaohjio")
      return {
        ...state,
        hotLoad: true,
      };
    }
    case HOTEL_SUCCESS: {
      console.log("success")
      return {
        ...state,
        hotLoad: false,
        hotel: payload,
      };
    }
    case HOTEL_FAILURE: {
      console.log("Omkar")
      return {
        ...state,
        hotLoad: false,
        hotErr: true,
      };
    }
    default:
      return state;
  }
};
