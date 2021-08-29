import {
  GET_RECENTLY_DATA,
  GET_RECENTLY_FAILURE,
  GET_RECENTLY_REQUEST,
  HOTEL_REQUEST,
  HOTEL_SUCCESS,
  HOTEL_FAILURE,
  PRICE_FILTER
} from "./actionTypes";
const initState = {
  data: [],
  isLoading: false,
  isError: false,
  hotel: [],
  hotLoad:false,
  hotErr: false,
  currPage: 1,
  currQuery: null
};

export const RecentlyReducer = (state = initState, { type, payload,currPage, query }) => {

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
      
      return {
        ...state,
        hotLoad: true,
      };
    }
    case HOTEL_SUCCESS: {
      
      return {
        ...state,
        hotLoad: false,
        hotel: payload,
        currPage: currPage,
        query: query

      };
    }
    case HOTEL_FAILURE: {    
      return {
        ...state,
        hotLoad: false,
        hotErr: true,
        currPage: currPage,
        query: query
      };
    }
    default:
      return state;
  }
};
