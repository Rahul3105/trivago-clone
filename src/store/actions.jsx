import {
  GET_RECENTLY_DATA,
  GET_RECENTLY_REQUEST,
  GET_RECENTLY_FAILURE,
  HOTEL_REQUEST,
  HOTEL_SUCCESS,
  HOTEL_FAILURE,
  PRICE_FILTER
} from "./actionTypes";
import axios from "axios";
import { useSelector, shallowEqual } from "react-redux";


const getDataRequest = () => {
  return {
    type: GET_RECENTLY_REQUEST,
  };
};
const getDataSuccess = (payload) => {
  return {
    type: GET_RECENTLY_DATA,
    payload: payload,
  };
};
const getDataFailure = (err) => {
  return {
    type: GET_RECENTLY_FAILURE,
    payload: err,
  };
};
export const getDetails = (dispatch) => {
  const requestAction = getDataRequest();
  dispatch(requestAction);
  axios
    .get("/recentlyVisited")
    .then((res) => {
      const successAction = getDataSuccess(res.data);
      dispatch(successAction);
    })
    .catch((err) => {
      const failureAction = getDataFailure();
      dispatch(failureAction);
    });
};
export const getAllDetails = (dispatch) => {
  const requestAction = getDataRequest();
  dispatch(requestAction);
  axios
    .get("/recentlyViewed")
    .then((res) => {
      const successAction = getDataSuccess(res.data);
      dispatch(successAction);
    })
    .catch((err) => {
      const failureAction = getDataFailure();
      dispatch(failureAction);
    });
};

const hotelRequest = () => {
  return {
    type: HOTEL_REQUEST,
  };
};
const hotelSuccess = (payload, currPage, query) => {
  return {
    type: HOTEL_SUCCESS,
    payload: payload,
    currPage,
    query
  };
};
const hotelFailure = (err, currPage, query) => {
  return {
    type: HOTEL_FAILURE,
    payload: err,
    currPage,
    query
  };
};

export const getAllHotel = (query = null, currPage = 1) => dispatch => {
  const requestAction = hotelRequest();
  dispatch(requestAction);
  if (!query) {
    const failureAction = hotelFailure("no results");
    dispatch(failureAction);
  }
  return axios.get(`/MainData?q=${query}&_page=${currPage}`)
    .then((res) => {
      dispatch(hotelSuccess(res.data, currPage, query));
    })
    .catch((err) => {
      const failureAction = hotelFailure(err, currPage, query);
      dispatch(failureAction);
    });
};

export const priceFilter = (payload, query) => dispatch => {
  dispatch(hotelRequest());
  //  if (!query) {
  //   const failureAction = hotelFailure("no results");
  //   dispatch(failureAction);
  // }
  axios.get(`/MainData?q=${query}`).then((res) => {
    let { data } = res;
    let filtered = data.filter(item => item.deals[0] <= payload);
    dispatch(hotelSuccess(filtered, 1, query));
  }).catch(err => {
    dispatch(hotelFailure(err, 1, query));
  })
}